// pages/markPage/markPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    authorized: false,
    likeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userAuthorized();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  onPullDownRefresh() {
    this.getMyLike()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getMyLike();
    console.log('show')
  },

 

  userAuthorized: function(){
    wx.getSetting({
      success: res => {
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success: res => {
              // success
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              });

              this.getMyLike();
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e){
    const userInfo = e.detail.userInfo;
    if(userInfo){
      this.setData({
        userInfo,
        authorized: true
      });

      this.getMyLike();
    }
  },

  getMyLike: function(){
    const likeList = wx.getStorageSync('like') || [];

    this.setData({
      likeList
    });
  },


})