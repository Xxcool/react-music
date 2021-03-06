import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { getVideoTag, getVideoTagData } from "../../api/index";
import { connect } from "react-redux";
import ScrollTag from "../../component/content/ScrollTag";
import Loading from "../../component/content/Loading";
import sessionStorage from "../../utils/sessionStorage";
import LazyLoading from "../../component/common/LazyLoading";
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
const { setSessionStorage, getSessionStorage } = sessionStorage;

class Video extends Component {
  state = {
    tag: [], // 视频类型列表
    videoList: [], // 视频列表数据
  };
  // 获取视频数据
  UNSAFE_componentWillMount() {
    this.getData();
  }
  async getData() {
    // 初始获取视频类型数据和第一个视频数据
    const result = await getVideoTag();
    this.setState(
      {
        tag: result.data.data,
      },
      () => {
        this.getVideoTag(
          (getSessionStorage("video_tag") || {}).id || this.state.tag[0].id
        );
      }
    );
  }
  // 获取视频标签下的视频数据
  async getVideoTag(id) {
    const { loginStatus } = this.props;
    if(!Object.keys(loginStatus).length) {
      return Toast.info('请先登录');
    }
    const result = await getVideoTagData(id);
    if(result.data.code === 200) {
      this.setState({
        videoList: result.data.datas,
      });
    }

  }
  // 点击tag标签
  handleChangeTag = (item) => {
    setSessionStorage("video_tag", item);
    this.getVideoTag(item.id);
  };
  render() {
    const { tag, videoList } = this.state;
    
    if (tag.length) {
      return (
        <>
          <div className={"video"}>
            <ScrollTag
              tagList={tag}
              handleChangeTag={this.handleChangeTag}
              tagIndex={(getSessionStorage("video_tag") || {}).index}
            />
            <section>
              {videoList.map((item, index) => (
                <NavLink to={"/videoDetails/" + item.data.vid} key={index}>
                  <LazyLoading src={item.data.coverUrl} />
                  <div className="info">
                    <h4>{item.data.title}</h4>
                    <LazyLoading
                      src={item.data.creator && item.data.creator.avatarUrl}
                    />
                  </div>
                  <section className="bar">
                    <div className="left">
                      <LazyLoading
                        src={item.data.creator && item.data.creator.avatarUrl}
                      />
                      <p>{item.data.creator && item.data.creator.nickname}</p>
                    </div>
                    <div className="icon">
                      <p>
                        <i className={"iconfont icon-ziyuan1"}></i>
                        <span>{item.data.praisedCount}</span>
                      </p>
                      <p>
                        <i className={"iconfont icon-pinglun"}></i>
                        <span>{item.data.commentCount}</span>
                      </p>
                      <p>
                        <i className={"iconfont icon-ziyuan"}></i>
                      </p>
                    </div>
                  </section>
                </NavLink>
              ))}
            </section>
          </div>
        </>
      );
    } else {
      return <Loading />;
    }
  }
}

export default connect((state) => ({
  loginStatus: state.loginStatus,
}))(Video);
