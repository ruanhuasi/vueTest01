<template>
    <div class="cmt-container">
            <h3>发表评论</h3>
            <hr>
            <textarea placeholder="请输入要评论的内容（限120字）" maxlength="120"></textarea>

            <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

            <!-- <div class="cmt-list">
                <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
                    <div class="cmt-title">
                        第{{ i+1 }}楼&nbsp;&nbsp;用户:{{ item.user_name }}&nbsp;&nbsp;发表时间:{{ item.add_time | dateFormat }}
                    </div>
                    <div class="cmt-body">
                        {{ item.content === 'undefiend'?'此用户很懒，什么都没有留下':item.content }}
                    </div>
                </div>
            </div> -->
            
            <div class="cmt-list">
                <div class="cmt-item">
                    <div class="cmt-title">
                        第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:12:12
                    </div>
                    <div class="cmt-body">
                        锄禾日当午
                    </div>
                </div>
            </div>
            
            <div class="cmt-list">
                <div class="cmt-item">
                    <div class="cmt-title">
                        第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-12-12 12:12:12
                    </div>
                    <div class="cmt-body">
                        锄禾日当午
                    </div>
                </div>
            </div>

            <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default{
    data(){
        return {
            pageIndex:1, // 默认展示第一页数据
            comments:[], // 评论列表
            msg:''
        }
    },
    created(){
        this.getComments()
    },
    methods:{
        // 获取评论列表
        getComments(){
            this.$http.get(''+this.id+'?pageindex='+this.pageIndex).then(result =>{
                if(result.body.status === 0){
                    // this.comments = result.body.message
                    // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据拼接上新数据
                    this.comments = this.comments.concat(result.body.message)
                }else{
                    Toast('加载评论失败！')
                }
            })
        },
        // 加载更多
        getMore(){
            this.pageIndex++
            this.getComments()
        },
        // 发表评论
        postComment(){
            // 校验是否为空
            if(this.msg.trim().length === 0){
                return Toast('评论内容不能为空！')
            }
             
            // 参数1： 请求的URL地址
            // 参数2： 提交给服务器的数据对象 { content: this.msg }
            // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true } ，全局配置后可以省略
            this.$http.post(''+this.id,{
                content:this.msg.trim()
            })
            .then(function(result){
                if(result.body.status === 0){
                    // 1.拼接处一个评论对象
                    var cmt = { 
                        user_name:'匿名用户',
                        add_time:Date.now(),
                        content:this.msg.trim() 
                        }
                        this.comments.unshift(cmt)
                        this.msg=''
                }else{
                    Toast('提交失败！')
                }
            })
        }
    },
    props:["id"]
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin:10px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                text-indent: 1em;
                line-height: 30px;
                background-color: #ccc;
            }
        }
        .cmt-body{
            line-height: 35px;
            text-indent: 2em;
        }
    }
}
</style>
