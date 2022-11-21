<template>
  <div>
    <header>
      <h1>项目报表</h1>
    </header>
    <section class="container">
      <!-- 设置左中右容器 -->
      <section class="itemLeft">
        <ItemPage>
          <ItemOne></ItemOne>
        </ItemPage>
        <ItemPage>
          <ItemTwo></ItemTwo>
        </ItemPage>
      </section>
      <section class="itemCenter">
        <MapPage/>
      </section>
      <section class="itemRight">
        <ItemPage>
          <ItemThree></ItemThree>
        </ItemPage>
        <ItemPage>
          <ItemFour></ItemFour>
        </ItemPage>
      </section>
    </section>

  </div>
</template>

<script>
import ItemPage from "@/views/ItemPage"
import ItemOne from "@/views/ItemOne.vue"
import ItemTwo from "@/views/ItemTwo.vue"
import ItemThree from "@/views/ItemThree.vue"
import ItemFour from "@/views/ItemFour.vue"
import MapPage from "@/views/mapPage.vue"

import {inject} from 'vue'
export default {
  components:{
    ItemPage,
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    MapPage
  },
  setup(){
    let $echarts = inject('echarts')//引用echarts
    console.log($echarts);
    let $http = inject('axios')//引用axios
    console.log($http);
  }
}
</script>

<style lang='less'>
header{
  height: 1rem;
  width: 100%;
  background-color: rgba(0,0,255,.2);
  // 标题文字样式
  h1{
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}
// 大容器的样式
.container {
  // 最大最小的宽度
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  // 用flex布局切割左中右容器
  display: flex;
  // 设置左右在页面的份数
  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;
    height: 10.5rpx;
    border: 1px solid blue;
    padding:  0.125rem;
    margin: .25rem;
  }
}
</style>