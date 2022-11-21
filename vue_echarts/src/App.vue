<template>
  <router-view/>
</template>
<script>
import {provide} from 'vue'
import * as echarts from 'echarts'
import axios from "axios"

// 设置基准路径
axios.defaults.baseURL="http://localhost:8888"
export default {
  setup(){
    // provide("名字随便起"，传输的内容)
    provide("echarts",echarts)
    provide("axios",axios)
  }
}
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-image: url('~@/assets/bg.jpg') ;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
</style>
