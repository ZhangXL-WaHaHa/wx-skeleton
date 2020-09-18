// pages/components/miniprogram-skeleton/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgcolor: {
      type: String,
      value: '#FFF'
    },
    selector: {
      type: String,
      value: 'skeleton'
    },
    loading: {
      type: String,
      value: 'spin'
    },
    unit: {
      type: String,
      value: 'px'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loadingAni: ['spin', 'chiaroscuro'],
    systemInfo: {},
    // skeletonRectLists: [], //矩形
    // skeletonCircleLists: [], //圆形
    // skeletonFrameLists: [], //矩形框
    // skeletonLightColorRectLists: [], //浅颜色矩形框
    allSkeletonLists: [], //所有的骨架屏节点
  },

  attached: function attached() {
    //默认的首屏宽高，防止内容闪现
    var systemInfo = wx.getSystemInfoSync();
    this.setData({
      systemInfo: {
        width: systemInfo.windowWidth,
        height: systemInfo.windowHeight
      },
      loading: this.data.loadingAni.includes(this.data.loading) ? this.data.loading : 'spin'
    });
  },
  ready: async function ready() {
    var that = this;
    //绘制背景
    wx.createSelectorQuery().selectAll('.' + this.data.selector).boundingClientRect().exec(function (res) {
      that.setData({
        'systemInfo.height': res[0][0].height + res[0][0].top
      });
    });

    // //绘制矩形
    // await this.rectHandle();

    // //绘制圆形
    // // 目前项目里面没有使用到圆形，减少消耗
    // // await this.radiusHandle();

    // // 绘制线条边框
    // await this.frameHandle()

    // // 绘制浅颜色矩形框
    // await this.loghtColorRectHandle()

    // // 获取完所有的节点之后，一起渲染界面，解决不同节点的过渡动画不一致
    // console.log('执行赋值')
    // this.setData({
    // 	skeletonRectLists: this.data.skeletonRectLists,
    // 	skeletonFrameLists: this.data.skeletonFrameLists,
    // 	skeletonLightColorRectLists: this.data.skeletonLightColorRectLists
    // }, () => {
    // 	// 最后的数据渲染完毕，回调事件
    // 	this.triggerEvent("finishSkeleton")
    // })

    // 获取所有节点，格式化之后渲染
    this.allNodeHandle()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取所有的节点数据
    allNodeHandle: function allNodeHandle() {
      var that = this;
      wx.createSelectorQuery().selectAll('.' + this.data.selector + ' >>> .' + this.data.selector + '-node').boundingClientRect().exec(function (res) {
        console.log('输出节点数据', res)
        that.setData({
          allSkeletonLists: res[0]
        }, () => {
          that.triggerEvent("finishSkeleton")
        })
        // that.data.skeletonFrameLists = res[0]
        // resolve()
      });
    }
  }
})