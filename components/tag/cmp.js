// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: String,
    typeId: Number,
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTagTap(){
      var typeId = this.properties.typeId;
      wx.navigateTo({
        url: `/pages/type/type?typeId=${typeId}`,
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
    _showError(){
      wx.showToast({
        title:"测试版本，无法跳转",
        icon:"none",
        duration:1000,
        mask:true
      });
    }
  }
})
