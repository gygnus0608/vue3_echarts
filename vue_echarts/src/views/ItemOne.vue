<template>
  <div>
    <h2>图表1</h2>
    <div class="chart" id="oneChart">
      图表的容器
    </div>
  </div>
</template>

<script>
import {inject,onMounted,reactive} from 'vue'
export default {
  setup(){
    let $echarts = inject('echarts')//对应App.vue中provide的名字
    let $http = inject('axios')//对应App.vue中provide的名字

    let data=reactive({})
    let xdata=reactive([])
    let ydata=reactive([])
    async function getState(){
      // 获取后台数据
      data = await $http({url:'/one/data'})
      // console.log(oneData.data.chartData.chartData);
    }
    function setData(){
      xdata = data.data.chartData.chartData.map(v=>v.title)
      ydata = data.data.chartData.chartData.map(v=>v.num)
      // console.log(xdata);
      // console.log(ydata);
    }

    onMounted(()=>{
      // 图标初始化
      let myChart = $echarts.init(document.getElementById('oneChart'))
      // getState()成功获取后台数据之后，才能执行setData
      getState().then(()=>{
        setData()
        // 创建echarts框架
        myChart.setOption({
          grid:{
            top:"3%",
            left:"1%",
            right:"6%",
            bottom:"3%",
            containLabel:true
          },
          // 柱状图的x轴
          xAxis:{
            type:'value',
            axisLine:{
              lineStyle:{
                color:"#fff"
              }
            }
          },
          // 柱状图的y轴
          yAxis:{
            type:'category',
            data:xdata,
            axisLine:{
              lineStyle:{
                color:"#fff"
              }
            }
          },
          series:[
            {
              data:ydata,
              type:'bar',
              itemStyle: {
                normal: {
                  barBorderRadius:[0,20,20,0],
                  color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#005eaa",
                    },
                    {
                      offset: 0.5,
                      color: "#339ca8",
                    },
                    {
                      offset: 1,
                      color: "#cda819",
                    },
                  ]),
                },
              },
            }
          ]
        })
      })
    })
    return{getState,data,xdata,ydata,setData}
  }
}
</script>

<style scoped>
h2{
    height: 0.6rem;
    color: #fff;
    line-height: 0.6rem;
    font-size:0.25rem;
    text-align: center;
}
.chart{
  height: 4.5rem
}
  
</style>