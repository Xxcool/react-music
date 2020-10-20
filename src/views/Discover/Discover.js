import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  getBanner,
  getRecommendSong,
  getSong,
  getSongRUrl,
  NewMusicData,
} from "../../api/index";
import {
  getMenusData,
  getPlayerList,
  getIsPlay,
  getPlayerIndex,
} from "../../store/action";
import SlideShow from "../../component/content/SlideShow";
import RemoSongItem from "../../component/content/RemoSongItem";
import SlideShowLarge from "../../component/content/SlideShowLarge";
import BoutiqueSong from "../../component/content/BoutiqueSong";
import Prompt from "../../component/content/Prompt";
import Loading from "../../component/content/Loading";
import LazyLoading from "../../component/common/LazyLoading";
import localStorage from "../../utils/localStorage";
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
const { setLocalStorage, getLocalStorage } = localStorage;
class Discover extends Component {
  state = {
    banner: [], // 轮播图数据
    recommend: [], // 推荐歌单数据
    song: [], // 歌单数据
    newMusic: [], // 歌单详情列表数据
  };
  option = [
    // 菜单选项
    { icon: "iconfont icon-rili", title: "每日推荐", path: null },
    { icon: "iconfont icon-gedan", title: "歌单", path: "/songsheet" },
    { icon: "iconfont icon-paihangbang", title: "排行榜", path: "/rank" },
    { icon: "iconfont icon-diantai", title: "电台", path: "/dj" },
  ];
  // 同步进行请求数据
  UNSAFE_componentWillMount() {
    this.getData();
    // 同步方法进行渲染菜单选项的解构
    this.optionDOM = (
      <ul className="discover_option">
        {this.option.map((item) => {
          return item.path ? (
            <li key={item.title}>
              <NavLink to={item.path}>
                <div className="icon">
                  <i className={item.icon}></i>
                </div>
                <span>{item.title}</span>
              </NavLink>
            </li>
          ) : (
            <li key={item.title}>
              <div onClick={this.handleRecommend}>
                <div className="icon">
                  <i className={item.icon}></i>
                </div>
                <span>{item.title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  // 请求数据的方法
  async getData() {
    // 轮播图数据
    const resultBanner = await getBanner(1); // 1代表请求轮播图的MV资源类型 1-->MV
    const banner = resultBanner.data.banners.map((item) => ({
      image: item.pic,
    })); // 处理轮播图的数据
    // 推荐歌单的数据
    const resultRecommend = await getRecommendSong(8);
    const recommend = resultRecommend.data.result.map((item) => ({
      id: item.id,
      name: item.name,
      picUrl: item.picUrl,
      playCount: item.playCount,
    }));
    // 歌单数据
    const resultSong = await getSong("华语", "hot", 39);
    const song = resultSong.data.playlists.map((item) => ({
      id: item.id,
      name: item.name,
      picUrl: item.coverImgUrl,
      playCount: item.playCount,
    }));
    this.setState({
      banner,
      recommend,
      song,
    });

    // 获取最新音乐
    const result = await NewMusicData();
    this.setState({
      newMusic: result.data.result,
    });
  }
  // 点击跳转到推荐音乐页面 需要提前登录
  handleRecommend = async () => {
    const { loginStatus } = this.props;
    if (!Object.keys(loginStatus).length) {
      // this.promptRef.handlePromptToggle();
      return Toast.info('请先登录');
    } else {
      this.props.history.push("/recommend?id=daily");
    }
  };

  // 点击最新音乐
  handleClick = async (item, index) => {
    // 获取歌曲的url路径
    const resutlSongUrl = await getSongRUrl(item.id);
    // 歌曲播放需要的数据
    const option = {
      name: item.name,
      id: item.id,
      picUrl: item.picUrl,
      ar: item.song.artists,
      al: item,
      url: resutlSongUrl.data.data[0].url,
    };
    console.log(item);
    // 整合歌单列表的数据 并且向全局状态发送值
    const playerList = this.state.newMusic.map((item) => ({
      name: item.name,
      id: item.id,
      picUrl: item.picUrl,
      ar: item.song.artists,
      al: item,
    }));
    const init = getLocalStorage("hot_history") || [];
    if (init.indexOf(item.name) === -1) {
      init.push(item.name);
      setLocalStorage("hot_history", init);
    }
    // 进行本地存储
    setLocalStorage("player", option);
    setLocalStorage("playerList", playerList);
    setLocalStorage("playerIndex", index);
    // 发送歌曲的数据
    this.props.getMenusData(option);
    this.props.getPlayerList(playerList);
    this.props.getPlayerIndex(index);
    this.props.getIsPlay(true); // 播放
    this.props.history.push("/player"); // 跳转
  };
  render() {
    const { banner, recommend, song, newMusic } = this.state;
    console.log(newMusic);
    // debugger
    if (banner.length) {
      return (
        <Fragment>
          <div className="discover recommend">
            <SlideShow
              banner={banner}
              customPaging={() => <span></span>}
              className={"home_slide"}
              handleShowBanner={() => {
                // 点击显示大图轮播图
                this.largeSlide.handleShowBanner(); // 通过ref标记节点的方式调用子级组件的方法
              }}
            />
            {this.optionDOM}
            <section className="discover_song">
              <header className="discover_song_head">
                <h3>发现好歌单</h3>
                {/* <p>查看更多</p> */}
              </header>
              <BoutiqueSong recommend={recommend} />
            </section>
            <section className="discover_song_new recommend_list">
              <header className="discover_song_head">
                <h3>最新音乐</h3>
              </header>
              <ul>
                {newMusic.map((item, index) => (
                  <li key={index} onClick={() => this.handleClick(item, index)}>
                    <div className="song_des">
                      <LazyLoading src={item.picUrl} />
                      <div className="song_des_info">
                        <p className="title">{item.name}</p>
                        <p>
                          {item.song.artists[0].name} - {item.song.album.name}
                        </p>
                      </div>
                    </div>
                    <div className="song_mv">
                      <i className="iconfont icon-tuya-"></i>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <section className="discover_song discover_song_every">
              <header className="discover_song_head">
                <h3>晚霞灿烂 音乐惬意</h3>
              </header>
              <section className="song_every_list">
                {song.map((item, index) => (
                  <NavLink
                    to={`/recommend?id=${item.id}&name=${item.name}`}
                    key={index}
                  >
                    <RemoSongItem item={item} color={"#000"} />
                  </NavLink>
                ))}
              </section>
            </section>
          </div>
          <SlideShowLarge ref={(largeSlide) => (this.largeSlide = largeSlide)}>
            <SlideShow
              banner={banner}
              className="slider_show_slide"
              customPaging={(index) => {
                return (
                  <div>
                    {index + 1}/{banner.length}
                  </div>
                );
              }}
            />
          </SlideShowLarge>
          <Prompt
            msg={"请您登陆"}
            ref={(promptRef) => (this.promptRef = promptRef)}
          />
        </Fragment>
      );
    } else {
      return <Loading />;
    }
  }
}

export default connect((state) => ({
  loginStatus: state.loginStatus,
  getMenusData,
  getPlayerList,
  getIsPlay,
  getPlayerIndex,
}))(Discover);
