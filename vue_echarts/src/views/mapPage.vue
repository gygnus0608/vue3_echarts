<template>
  <div class="map" id="map"></div>
</template>

<script>
import axios from 'axios'
import {inject, onMounted, reactive} from 'vue'
export default {
    setup(){
        // 使用echart
        let $echarts = inject('echarts')
        // 获取后台数据
        let mapData = reactive({})
        async function getState(){
            mapData = await axios.get("/china/data")
        }
        onMounted(()=>{
            getState().then(()=>{
                // console.log(mapData);
                $echarts.registerMap("world",mapData.data.chinaData)
                // 初始化echart
                let myChart = $echarts.init(document.getElementById('map'))
                myChart.setOption({
                    geo:{
                        map:"world",
                        itemStyle: {
                        areaColor: "#0099ff",
                        borderColor: "#00ffff",
                        shadowColor: "rgba(230,130,70,0.5)",
                        shadowBlur: 30,
                        // 其他部分淡出
                        // emphasis: {
                        //     focus: "self",
                        // }, 
                        },
                    },
                    //   散点图数据
                    tooltip:{
                        trigger:"item"
                    },
                    title:{
                        text:"城市销量",
                        left:"45%",
                        textStyle:{
                            color:"#fff",
                            fontSize:20,
                            textShadowBlur:10,
                            textShadowColor:"#33ffff"
                        }
                    },
                    // 左下角的视觉映射选择器
                    visualMap:{
                        type:"continuous",//连续类型
                        min:100,
                        max:5000,
                        calculable:true,//滑动效果
                        inRange:{//设置不同颜色
                            color:["#50a3ba","#eac736","#d94e5d"],
                        },
                        textStyle:{//文本颜色
                            color:"#fff"
                        }
                        
                    },
                    series: [
                        {
                        type: "scatter",
                        itemStyle: {
                            color: "red",
                        },
                        coordinateSystem:"geo",
                        data: [
                            { name: "北京", value: [116.46, 39.92, 4367] },
                            { name: "上海", value: [121.48, 31.22, 8675] },
                            { name: "深圳", value: [114.07, 22.62, 2461] },
                            { name: "广州", value: [113.23, 23.16, 187] },
                            { name: "西安", value: [108.45, 34, 3421] },
                        ],
                        },
                    ],
                })
            })
        })
        return{
            getState,mapData
        }
    }
}
</script>

<style scoped>
.map{
    height: 100%;;
    width: 100%;
}
</style>