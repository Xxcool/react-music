import request from  './request'

// 获取轮播图数据的接口请求函数
export const getBanner = (type = 1) => request(`/banner?type=${type}`)
// 获取推荐歌单数据的接口请求函数
export const getRecommendSong = (limit = 8) => request(`/personalized?limit=${limit}`)

// 获取用户每日推荐歌曲数据的接口请求函数
export const getUserRecommend = () => request('/recommend/songs')

// 获取歌单数据的接口请求函数
export const getSong = (cat = '华语', order = 'hot', limit = 39) => request(`/top/playlist/highquality?cat=${cat}&limit=${limit}&order=${order}`)
// 获取歌单详情数据的接口请求函数
export const getSongDetails = id => request(`/playlist/detail?id=${id}`)
// 获取热门歌单分类数据的接口请求函数
export const getSongHot = () => request('/playlist/hot')
// 获取歌单(网友精选碟)的接口请求函数
export const getSongHandpick = (limit = 39, cat = '华语', order = 'hot') => request(`/top/playlist?limit=${limit}&cat=${cat}&order=${order}`)

// 获取官方榜歌单数据的接口请求函数
export const getRankSong = () => request('/toplist/detail')
// 获取电台轮播图数据的接口请求函数
export const getDjBanner = () => request('/dj/banner')
// 获取电台推荐歌单数据的接口请求函数
export const getDjRecommend = () => request('/dj/category/recommend')
// 获取电台节目榜列表数据的接口请求函数
export const getDjProgram = (limit = 30) => request(`/dj/program/toplist/hours?limit=${limit}`)


// 获取搜索最火热歌曲数据接口请求函数
export const getSearchHot = () => request(`/search/hot/detail`)
// 获取建议搜索数据接口请求函数
export const getSearchSuggest = (keywords,type='mobile') => request(`/search/suggest?type=${type}&keywords=${keywords}`)
// 获取建议搜索详情列表数据的接口请求函数
export const getSearchDetailList = (keywords, limit = 15) => request(`/search?keywords=${keywords}&limit=${limit}`)

// 请求登陆用户的接口请求函数
export const getLogin = (phone, password) => request(`/login/cellphone?phone=${phone}&password=${password}`)
// 获取用户歌单的接口请求函数
export const getUserSong = id => request(`/user/playlist?uid=${id}`)
// 获取用户登陆的状态接口请求函数
export const getLoginStatus = () => request('/login/status')
// 获取用户关注列表数据的接口请求函数
export const getUserFollows = id => request(`/user/follows?uid=${id}`)
// 退出用户的接口请求函数
export const getUserOut = () => request('/logout')

// 获取视频标签类型的接口请求函数
export const getVideoTag = () => request('/video/group/list')
// 获取视频分类的视频数据接口请求函数
export const getVideoTagData = id => request(`/video/group?id=${id}`)
// 获取视频播放路径数据的接口请求函数
export const geiVideoSrc = id => request(`/video/url?id=${id}`)
// 获取视频详情数据的接口请求函数
export const getVideoDetails = id => request(`/video/detail?id=${id}`)
// 获取视频评论数据的接口请求函数
export const getVideoCommon = id => request(`/comment/video?id=${id}`)

// 获取当前播放的歌曲是是否可以播放
export const getIsMenusPlay = id => request(`/check/music?id=${id}`)
// 获取播放音乐的URL路径
export const getSongRUrl = id => request(`/song/url?id=${id}`)
// 获取播放音乐歌词的接口请求函数
export const getSongLyric = id => request(`/lyric?id=${id}`)

// 最新音乐数据
export const NewMusicData = () => request('/personalized/newsong')
