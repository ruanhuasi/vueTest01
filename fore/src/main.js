// 入口文件
import Vue from 'vue'

// 1.1 导入路由
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入时间格式化插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){ //这里的pattern是ES6中给的默认值，在没有传入该值时就会使用这个默认值
    // 手写格式化
    // var dateTime = new Date(dataStr)
    // var years = dateTime.getFullYear()
    // var month = dateTime.getMonth()+1
    // month = month<10?"0"+month:month
    // var date = dateTime.getDate()
    // date = date<10?"0"+date:date

    // var hours = dateTime.getHours()
    // var min = dateTime.getMinutes()
    // var ss = dateTime.getSeconds()
    // dataStr=`${years}-${month}-${date} ${hours}:${min}:${ss}`

    moment(dataStr).format(pattern)
})

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://127.0.0.1:8000'
// 全局设置 post 时候表单数据格式组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件   
// import { Header, Swipe, SwipeItem,Button,Lazyload } from 'mint-ui'
// Vue.use(Lazyload)
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// 由于 mint-ui 懒加载图标的bug ，不能使用按需导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
import './css/vue-preview.scss' //vue-preview 的缩略图样式需要在这里配置全局的

// 1.3 导入自己的 router.js 模块
import router from './router.js'

// 导入 App 根组件
import app from './App.vue'



var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router // 1.4 挂在路由对象到 VM 实例上
})