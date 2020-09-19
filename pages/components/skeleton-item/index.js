// pages/components/skeleton-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showDuration: {
      type: Number,
      value: 3000
    },

    menuList: {
      type: Array,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    menuInfo: {
        name: '美食',
        icon: '../../assets/image/icon-moments.png'
    },

    showSkeleton: true,  //是否显示骨架屏
  },

  attached() {
    // 隐藏骨架屏
    setTimeout(() => {
      this.setData({
        showDuration: false
      })
    }, this.properties.showDuration)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
