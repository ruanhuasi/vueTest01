<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ photoinfo.add_time }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>
        <hr>

        <!-- 图片内容区域 -->
            <!-- 缩略图区域 -->
            <div class="thumbs">
            <!-- <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src"> -->
            <vue-preview :slides="list" @close="handleClose"></vue-preview>
            </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- 放置一个现成的评论子组件 -->
        <cmt-box :id="this.id"></cmt-box>

    </div>
</template>

<script>
import {Toast} from 'mint-ui'

import comment from '../subcomponent/comment.vue'
export default{
    data(){
        return {
            id:this.$route.params.id,
            photoinfo:{}, //图片详情
            list:[] //缩略图的数组
        }
    },
    created(){
        this.getPhotoInfo()
        this.getThumbs()
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result =>{
                if(result.body.status===0){
                    this.photoinfo = result.body.message[0]
                }else{
                    Toast(result.body.message)
                }
            })
        },
      getThumbs() {
      // 获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          result.body.message.forEach(item => {
            item.w = 600;
            item.h = 400;
          });
          // 把完整的数据保存到 list 中
          this.list = result.body.message;
        }
      });
    },
      handleClose () {
        console.log('close event')
      }
    },
    components:{ // 注册评论子组件
        'cmt-box':comment
    }
}
</script>

<style lang="scss" scoped>
.photoinfo-container{
    padding:3px;
    h3{
        color: #26A2ff;
        font-size: 15px;
        text-align: center;
        margin:15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 13px;
    }
    .thumbs{
        img{
        margin: 10px;
        box-shadow: 0 0 8px #999;
        }

        }
}
</style>

