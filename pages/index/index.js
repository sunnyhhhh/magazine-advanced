// pages/index.js

// import {Request} from "../../utils/request.js";
import {IndexModal} from "../../models/index.js";
import {random} from "../../utils/randomStr.js";

const indexModal = new IndexModal();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],
    markList: [],
    recommend: {},
    isLoading: true,

    magazineId: 0,

    getMore: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    // wx.showLoading();
  },

  onReachBottom: function(){
    this.setData({
      getMore: random(20)
    });
  },

  getData(){
    const magazineId = this.data.magazineId;

    const getArticleList = indexModal.getArticleList(magazineId);
    const getMarkList = indexModal.getMarkList(magazineId);
    const getRecommendInfo = indexModal.getRecommendInfo(magazineId);

    Promise.all([getArticleList, getMarkList, getRecommendInfo]).then(res => {
      // console.log(res[1].data.data)
      this.setData({
        articleList: res[0].data.data,
        markList: res[1].data.data,
        recommend: res[2].data.data,
        isLoading: false
      });
      // console.log(this.data.markList)
      // wx.hideLoading();
    })
  },

  onCatalogTap: function(){
    wx.switchTab({
      url: '/pages/catalog/catalog',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  onNav: function(e){
    const magazineId = e.detail.magazineIndex;
    // console.log(magazineId);
    this.setMagazineId(magazineId);
    this.scrollPageToTop();
    this.resetData();
    this.getData();
  },

  setMagazineId(magazineId) {
    this.setData({
      magazineId
    })
  },

  scrollPageToTop(){
    wx.pageScrollTo({
      scrollTop:0,
      duration:300
    })
  },

  resetData(){
    this.setData({
      articleList: [],
      markList: [],
      recommend: {}
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
  onShow: function () {

  },

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
  onPullDownRefresh: function () {
    console.log("refresh");
    setTimeout(function(){
      wx.stopPullDownRefresh();
      console.log('refresh over');
    },1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  // onReachBottom: function () {
  //   console.log('pull down over');
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})