import { reactive,ref } from "vue";

// 1
export const echarsOptions1 = ref({
  angleAxis: {
      show: false,
      max: 100 * 360 / 180, //-45度到225度，二者偏移值是270度除360度
      type: 'value',
      startAngle: 180, //极坐标初始角度
      splitLine: {
          show: false
      }
  },
  barMaxWidth: 14, //圆环宽度
  radiusAxis: {
      show: false,
      type: 'category',
  },
  //圆环位置和大小
  polar: {
      center: ['50%', '100%'],
      radius: '180'
  },
  series: [{
      type: 'bar',
      data: [{ //上层圆环，显示数据
          value: 75,
          itemStyle: {
              color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1, //从左到右 0-1
                  y2: 0,
                  colorStops: [{
                      offset: 0,
                      color: 'rgba(255, 255, 255, 0.2)'
                  }, {
                      offset: 1,
                      color: '#69FBAA'
                  }],
              },
          },
      }],
      barGap: '-100%', //柱间距离,上下两层圆环重合
      coordinateSystem: 'polar', 
      roundCap: true, //顶端圆角从 v4.5.0 开始支持
      z: 2 //圆环层级，同zindex
  },
  { //下层圆环，显示最大值
      type: 'bar',
      data: [{
          value: 100,
          itemStyle: {
              color: 'RGBA(72, 96, 124, 0.3)'
          }
      }],
      barGap: '-100%',
      coordinateSystem: 'polar',
      roundCap: true,
      z: 1
  },
  //仪表盘
  {
      name: 'AQI',
      type: 'gauge',
      axisLine: {
          show: false,
      },
      splitLine: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          show: false
      },
      splitLabel: {
          show: false
      },
      pointer: {
          show: false
      },
      title: {
          offsetCenter: [0,20],
          color: '#69FBAA',
          fontSize: 36,
          fontWeight: 400,
          rich: {
              a: {
                  fontWeight: 'normal',
                  fontSize: 16,
                  color: '#FFF',
                  padding: [0, 0, 10, 40]
              }
          }
      },
      detail: {
          formatter: function (e) {
              return '%';
          },
          color: '#69FBAA',
          fontSize: 20,
          offsetCenter: [40, 30],
      },
      data: [{
          value: 75,
          name: 75
      }]
  }
  ]
});

export const echarsOptions2 = ref({
  angleAxis: {
      show: false,
      max: 100 * 360 / 180, //-45度到225度，二者偏移值是270度除360度
      type: 'value',
      startAngle: 180, //极坐标初始角度
      splitLine: {
          show: false
      }
  },
  barMaxWidth: 14, //圆环宽度
  radiusAxis: {
      show: false,
      type: 'category',
  },
  //圆环位置和大小
  polar: {
      center: ['50%', '100%'],
      radius: '180'
  },
  series: [{
      type: 'bar',
      data: [{ //上层圆环，显示数据
          value: 75,
          itemStyle: {
              color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1, //从左到右 0-1
                  y2: 0,
                  colorStops: [{
                      offset: 0,
                      color: 'rgba(255, 255, 255, 0.2)'
                  }, {
                      offset: 1,
                      color: '#2EA9FF'
                  }],
              },
          },
      }],
      barGap: '-100%', //柱间距离,上下两层圆环重合
      coordinateSystem: 'polar', 
      roundCap: true, //顶端圆角从 v4.5.0 开始支持
      z: 2 //圆环层级，同zindex
  },
  { //下层圆环，显示最大值
      type: 'bar',
      data: [{
          value: 100,
          itemStyle: {
              color: 'RGBA(72, 96, 124, 0.3)'
          }
      }],
      barGap: '-100%',
      coordinateSystem: 'polar',
      roundCap: true,
      z: 1
  },
  //仪表盘
  {
      name: 'AQI',
      type: 'gauge',
      axisLine: {
          show: false,
      },
      splitLine: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          show: false
      },
      splitLabel: {
          show: false
      },
      pointer: {
          show: false
      },
      title: {
          offsetCenter: [0,20],
          color: '#69FBAA',
          fontSize: 36,
          fontWeight: 400,
          rich: {
              a: {
                  fontWeight: 'normal',
                  fontSize: 16,
                  color: '#FFF',
                  padding: [0, 0, 10, 40]
              }
          }
      },
      detail: {
          formatter: function (e) {
              return '%';
          },
          color: '#69FBAA',
          fontSize: 20,
          offsetCenter: [40, 30],
      },
      data: [{
          value: 75,
          name: 75
      }]
  }
  ]
});


export const echarsOptions3 = ref({
  angleAxis: {
      show: false,
      max: 100 * 360 / 180, //-45度到225度，二者偏移值是270度除360度
      type: 'value',
      startAngle: 180, //极坐标初始角度
      splitLine: {
          show: false
      }
  },
  barMaxWidth: 14, //圆环宽度
  radiusAxis: {
      show: false,
      type: 'category',
  },
  //圆环位置和大小
  polar: {
      center: ['50%', '100%'],
      radius: '180'
  },
  series: [{
      type: 'bar',
      data: [{ //上层圆环，显示数据
          value: 75,
          itemStyle: {
              color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1, //从左到右 0-1
                  y2: 0,
                  colorStops: [{
                      offset: 0,
                      color: 'rgba(255, 255, 255, 0.2)'
                  }, {
                      offset: 1,
                      color: '#FF8B7F'
                  }],
              },
          },
      }],
      barGap: '-100%', //柱间距离,上下两层圆环重合
      coordinateSystem: 'polar', 
      roundCap: true, //顶端圆角从 v4.5.0 开始支持
      z: 2 //圆环层级，同zindex
  },
  { //下层圆环，显示最大值
      type: 'bar',
      data: [{
          value: 100,
          itemStyle: {
              color: 'RGBA(72, 96, 124, 0.3)'
          }
      }],
      barGap: '-100%',
      coordinateSystem: 'polar',
      roundCap: true,
      z: 1
  },
  //仪表盘
  {
      name: 'AQI',
      type: 'gauge',
      axisLine: {
          show: false,
      },
      splitLine: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          show: false
      },
      splitLabel: {
          show: false
      },
      pointer: {
          show: false
      },
      title: {
          offsetCenter: [0,20],
          color: '#69FBAA',
          fontSize: 36,
          fontWeight: 400,
          rich: {
              a: {
                  fontWeight: 'normal',
                  fontSize: 16,
                  color: '#FFF',
                  padding: [0, 0, 10, 40]
              }
          }
      },
      detail: {
          formatter: function (e) {
              return '%';
          },
          color: '#69FBAA',
          fontSize: 20,
          offsetCenter: [40, 30],
      },
      data: [{
          value: 75,
          name: 75
      }]
  }
  ]
});

export const echarsOptions4 = ref({
  angleAxis: {
      show: false,
      max: 100 * 360 / 180, //-45度到225度，二者偏移值是270度除360度
      type: 'value',
      startAngle: 180, //极坐标初始角度
      splitLine: {
          show: false
      }
  },
  barMaxWidth: 14, //圆环宽度
  radiusAxis: {
      show: false,
      type: 'category',
  },
  //圆环位置和大小
  polar: {
      center: ['50%', '100%'],
      radius: '180'
  },
  series: [{
      type: 'bar',
      data: [{ //上层圆环，显示数据
          value: 75,
          itemStyle: {
              color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1, //从左到右 0-1
                  y2: 0,
                  colorStops: [{
                      offset: 0,
                      color: 'rgba(255, 255, 255, 0.2)'
                  }, {
                      offset: 1,
                      color: '#FFBF5B'
                  }],
              },
          },
      }],
      barGap: '-100%', //柱间距离,上下两层圆环重合
      coordinateSystem: 'polar', 
      roundCap: true, //顶端圆角从 v4.5.0 开始支持
      z: 2 //圆环层级，同zindex
  },
  { //下层圆环，显示最大值
      type: 'bar',
      data: [{
          value: 100,
          itemStyle: {
              color: 'RGBA(72, 96, 124, 0.3)'
          }
      }],
      barGap: '-100%',
      coordinateSystem: 'polar',
      roundCap: true,
      z: 1
  },
  //仪表盘
  {
      name: 'AQI',
      type: 'gauge',
      axisLine: {
          show: false,
      },
      splitLine: {
          show: false
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          show: false
      },
      splitLabel: {
          show: false
      },
      pointer: {
          show: false
      },
      title: {
          offsetCenter: [0,20],
          color: '#69FBAA',
          fontSize: 36,
          fontWeight: 400,
          rich: {
              a: {
                  fontWeight: 'normal',
                  fontSize: 16,
                  color: '#FFF',
                  padding: [0, 0, 10, 40]
              }
          }
      },
      detail: {
          formatter: function (e) {
              return '%';
          },
          color: '#69FBAA',
          fontSize: 20,
          offsetCenter: [40, 30],
      },
      data: [{
          value: 75,
          name: 75
      }]
  }
  ]
});