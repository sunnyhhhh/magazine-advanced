// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    magazineNavArr:['青芒','兴趣','物质','世界','新事','灵魂'],
    activeIndex: 0,
    scrollViewIndex: 'magazine0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onNavTap(e){
      const lastIndex = this.data.activeIndex;
      const curIndex = e.currentTarget.dataset.index;
      this.setData({
        activeIndex: curIndex,
        scrollViewIndex: `magazine${curIndex === 0 ? 0 : curIndex - 1}`
      });

      if(lastIndex === curIndex){
        return;
      }

      // 触发自定义事件
      this.triggerEvent("nav", {magazineIndex: curIndex});
    }
  }
})
