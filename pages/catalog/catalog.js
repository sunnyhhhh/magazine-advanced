// pages/catalog/catalog.js

import {tagInfoList} from "../../utils/tagList.js";
import {SubscribeModal} from "../../models/subscribe.js";

const subscribeModal = new SubscribeModal();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tagInfoList: tagInfoList,
    myTagList: [],
    searchWord: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const searchWord = options.searchWord;
    // console.log(searchWord)
    // this.setData({
    //   searchWord
    // })
    this.getData()
  },

  getData(){
    const myTagList = subscribeModal.getMyTagList();
    this.setData({
      myTagList
    })
  },

  onSubscribeTap(){
    this.getData();
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
    // console.log('catalog show')
    this.setData({
      searchWord: ''
    })
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

  },

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