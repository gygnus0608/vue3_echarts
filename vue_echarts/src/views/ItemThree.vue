<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="threeChart"></div>
  </div>
</template>

<script>
import {inject,onMounted,reactive} from 'vue'
export default {
  setup() {
    let $echarts = inject('echarts')
    let $http = inject('axios')
    let data = reactive({})
    async function getState(){
      //要记得用data接收
      data = await $http({url:'/three/data'})
    }
    onMounted(() => {
      getState().then(()=>{
        // console.log(data);//获取数据
        // 引入echarts
      let myChart = $echarts.init(document.getElementById('threeChart'))
      myChart.setOption({
          // 底部标签
          legend:{
            top:"bottom"
          },
          // 鼠标移入饼中有提示框
          tooltip:{
            show:true,
          },
          series:[
            {
              type:'pie',
              data:data.data.chartThree.chartData,
              radius:[10,100],//[内直径,外直径]
              center:["50%","45%"],
              roseType:'area',
              // 设置圆角
              itemStyle:{
                borderRadius:10
              }
            }
          ]
        })
      })
      
    })
    return{
      data,getState
    }
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
  height: 243px;
}
</style>