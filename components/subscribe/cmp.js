// components/subscribe/cmp.js

import {
  SubscribeModal
} from "../../models/subscribe.js";

const subscribeModal = new SubscribeModal();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    class: 'common',
    myTagList: []
  },

  attached() {
    this.judgeTag();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      const mark = {
        tag: this.data.tag,
        tagId: this.data.tagId
      }

      if (this.data.class == 'common') {
        const myTagList = this.getMyTagList();
        myTagList.push(mark);
        subscribeModal.setMyTagList(myTagList);
      } else {
        this.removeMyTagList(mark);
      }

      this.toggleClass();
      this.triggerEvent('tap')
    },

    getMyTagList() {
      const myTagList = subscribeModal.getMyTagList();

      this.setData({
        myTagList
      });

      return myTagList;
    },

    removeMyTagList(mark) {
      subscribeModal.removeMyTag(mark.tagId);
      const myTagList = subscribeModal.getMyTagList();
      this.setData({
        myTagList
      })
    },

    toggleClass() {
      let classType = '';

      if (this.data.class == 'common') {
        classType = 'subscribe';
      } else {
        classType = 'common';
      }

      this.setData({
        class: classType
      })
    },

    judgeTag() {
      const myTagList = this.getMyTagList();

      myTagList.forEach(item => {
        if (item.tagId === this.properties.tagId) {
          this.setData({
            class: 'subscibe'
          })
        }
      })
    }
  }
})