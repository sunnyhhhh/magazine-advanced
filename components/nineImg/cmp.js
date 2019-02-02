// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr:[
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429051&di=cf115de3101a091fdc65d8bf382a9e60&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1712%2F164-1G204145321.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429051&di=a03af32de5526a5d1ede0c4483c66dec&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201701%2F23%2Fcbf3ce5314f244113bd011f1a6d40bbd.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429051&di=3e483ce228e3661bff47984133986b1d&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc2cec3fdfc03924545a9e0a68194a4c27d1e257e.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429050&di=493982a3cdb2634cd7b901f58e64cd63&imgtype=0&src=http%3A%2F%2Fimg3.3lian.com%2F2013%2Fc2%2F8%2Fd%2F67.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429050&di=13027b98ae9460f553dc4e104895bb6e&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1806%2F189-1P615135G8-50.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429050&di=cbcb986ae61d168bf91d09d9052e0e10&imgtype=0&src=http%3A%2F%2Fdesk.fd.zol-img.com.cn%2Fg5%2FM00%2F08%2F0B%2FChMkJ1bZOjeIWDN7AAcpPdqpHPEAAMhnAD5K0sABylV578.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429049&di=7972e21982dffca06c59fbf3524a4160&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-11-01%2F59f93d59c67b1.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429049&di=89084e34fa8964ed990936b2ed60021c&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1806%2F189-1P614115022.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429048&di=26cfb35c4b65392370a1fe299b5efa5d&imgtype=0&src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg2%2FM00%2F0E%2F0B%2FCg-4WlVSudWIY2WEAB9qamUOZJoAADekgKfjTkAH2qC196.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429051&di=cf115de3101a091fdc65d8bf382a9e60&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1712%2F164-1G204145321.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429051&di=a03af32de5526a5d1ede0c4483c66dec&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201701%2F23%2Fcbf3ce5314f244113bd011f1a6d40bbd.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429051&di=3e483ce228e3661bff47984133986b1d&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F-Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fc2cec3fdfc03924545a9e0a68194a4c27d1e257e.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429050&di=493982a3cdb2634cd7b901f58e64cd63&imgtype=0&src=http%3A%2F%2Fimg3.3lian.com%2F2013%2Fc2%2F8%2Fd%2F67.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429050&di=13027b98ae9460f553dc4e104895bb6e&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1806%2F189-1P615135G8-50.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429050&di=cbcb986ae61d168bf91d09d9052e0e10&imgtype=0&src=http%3A%2F%2Fdesk.fd.zol-img.com.cn%2Fg5%2FM00%2F08%2F0B%2FChMkJ1bZOjeIWDN7AAcpPdqpHPEAAMhnAD5K0sABylV578.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429049&di=7972e21982dffca06c59fbf3524a4160&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2017-11-01%2F59f93d59c67b1.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429049&di=89084e34fa8964ed990936b2ed60021c&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1806%2F189-1P614115022.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548866429048&di=26cfb35c4b65392370a1fe299b5efa5d&imgtype=0&src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg2%2FM00%2F0E%2F0B%2FCg-4WlVSudWIY2WEAB9qamUOZJoAADekgKfjTkAH2qC196.jpg'
  ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){
      const index = e.currentTarget.dataset.index;
      const array = this.data.imgArr;
      wx.previewImage({
        // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
        urls: array,
        current: array[index],
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
    }
  }
})
