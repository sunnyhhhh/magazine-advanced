// pages/mark/mark.js
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
    this.getMyLike();
  },

  onPullDownRefresh() {
    this.getMyLike()
  },

  onShow: function(){
    this.getMyLike();
    console.log('show')
    // console.log(this.data.likeList)
  },

  getMyLike: function(){
    const likeList = wx.getStorageSync('like') || [];

    this.setData({
      likeList
    });
  },

  onGetUserInfo: function(e){
    console.log(e)
    const userInfo = e.detail.userInfo;
    if(userInfo){
      this.setData({
        userInfo,
        authorized: true
      });

      this.getMyLike();
    }
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
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})