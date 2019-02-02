// components/articleList/cmp.js

import {IndexModal} from "../../models/index.js";
import {SearchModal} from "../../models/search.js";

const indexModal = new IndexModal();
const searchModal = new SearchModal();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // articleList: Array

    articleList:{
      type: Array,
      value: [],
      observer(){

      }
    },

    more:{
      type: String,
      value: '',
      observer: 'loadMore'
    },

    magazineId: {
      type: Number,
      value: 0,
      observer: 'hasMoreData'
    },
   
    word: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false,
    type: ''
  },

  attached(){
    const curPages = getCurrentPages();
    const index = curPages.length - 1;
    let type = '';

    if( curPages[index].route == 'pages/search/search' ){
      type = 'search';
    }else{
      type = 'index';
    }

    this.setData({
      type
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore(newVal){

      // console.log(this._isLock(), this.data.noMoreData)

      if(this._isLock() || this.data.noMoreData){
        return;
      }

      this._loadLock();
      
      this.getMoreData();
    },

    _isLock(){
      return this.data.loading;
    },

    _loadLock(){
      this.setData({
        loading: true
      });
    },

    _loadUnLock(){
      this.setData({
        loading: false
      });
    },

    _getMoreList(list){
      let articles = this.data.articleList;
      articles = articles.concat(list);
      if(articles.length === this.data.articleList.length){
        this.setData({
          noMoreData: true
        });
        return;
      }
        this.setData({
          articleList: articles
        });
    },

    hasMoreData(){
      this.setData({
        noMoreData: false
      });
    },

    // getMoreData(){
    //   const magazineId = this.data.magazineId;
    //   const start = this.data.articleList.length;
      

    //   indexModal.getArticleList(magazineId, start).then(res => {
    //     this._getMoreList(res.data.data);
    //     this._loadUnLock();
    //   })
    // },

    getMoreData(){
      const start = this.data.articleList.length;
      let getMore = null;

      if(this.data.type === 'search'){
        const word = this.data.word;
        getMore = searchModal.getSearchArticleList(word, start);
      }else{
        const magazineId = this.data.magazineId;
        getMore = indexModal.getArticleList(magazineId, start);
      }

      getMore.then(res => {
        this._getMoreList(res.data.data);
        this._loadUnLock();
      })
    }
  }
})
