<template>
  <div>
    <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
      <div class="mui-scroll">
        <a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">{{ item.title }}</a>
        <a class="mui-control-item mui-active" href="#item1mobile">推荐</a>
        <a class="mui-control-item" href="#item2mobile">热点</a>
        <a class="mui-control-item" href="#item3mobile">北京</a>
        <a class="mui-control-item" href="#item4mobile">社会</a>
        <a class="mui-control-item" href="#item5mobile">娱乐</a>
        <a class="mui-control-item" href="#item6mobile">科技</a>
      </div>

      <ul class="photo-list">
        <li v-for="item in list" :key="item.id">
          <img v-lazy="item.img_url">
          <div class="info">
            <div class="info-title">{{ item.title }}</div>
            <div class="info-body">{{ item.zhaiyao }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 1. 导入 mui 的 js 文件
import mui from "../../lib/mui/js/mui.min.js";

import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      cates: [], // 所有分类的列表数组
      list:[] // 图片列表的数组
    };
  },
  mounted() {
    // 当组件中的 DOM 结构被渲染好并放到页面中后，会执行这个 钩子函数
    // 如果要操作元素了，最好在 mounted 里面，因为这个时候的 DOM 元素是最新的

    // 2. 初始化滑动控件（初始化控件的时机很重要）
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getAllCategory()
    this.getPhotoListByCateId(0)
  },
  methods: {
    // 获取所有图片的分类
    getAllCategory() {
      this.$http.get("").then(result => {
        if (result.body.status === 0) {
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        } else {
          Toast('图片分类加载失败')
        }
      });
    },
    getPhotoListByCateId(cateId){
      // 根据分类Id，获取图片列表
      this.$http.get(''+cateId).then(result =>{
        if(result.body.status === 0){
            this.list = result.body.message
        }else{
          Toast('图片列表加载失败')
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}


.photo-list{
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li{
    text-align: center;
    background-color: #ccc;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img{
      width: 100%;
      vertical-align: middle
    }
      img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
      }

      .info{
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.4);
        max-height: 84px;
        .info-title{
          font-size: 14px;
        }
        .info-body{
          font-size: 13px;
        }
      }
  }
}
</style>

