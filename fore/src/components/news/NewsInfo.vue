<template>
 
     <div class="newsinfo-container">
        <h1 class="title">{{ newsinfo.title }}</h1>
        <p class="subtitle">
            <span>发表时间：{{ newsinfo.add_time }}</span>
            <span>点击：{{ newsinfo.click }}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsinfo.content"></div>

        <comment-box :id="this.id"></comment-box>
    </div>

</template>

<script>
import {Toast} from 'mint-ui'
import Comment from '../subcomponents/comment.vue'

export default{
    data(){
        return {
            id:this.$route.params.id,
            newsinfo:{}
        }
    },
    created(){
        this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status === 0){
                    this.newsinfo = result.body.message[0]
                }else{
                    Toast('获取新闻失败！')
                }
            })
        }
    },
    components:{ // 注册子组件
        'comment-box' : Comment
    }
}
</script>

<style lang="scss">
// img 宽度不生效时，去掉scoped，因为其他样式包裹在 .newsinfo-container里，所以不怕造成全局污染
.newsinfo-container{
    padding:0 5px;
    .title{
        font-size: 16px;
        text-align: center;
        margin:15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>

