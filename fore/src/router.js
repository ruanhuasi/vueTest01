// 抽离 router

// 1. 导入 vue-router 包
import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewList from './components/news/NewList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/phonto/PhotoList.vue'
import PhotoInfo from './components/phonto/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'


// 创建路由对象
var router = new VueRouter({
    routes : [ // 配置路由规则
        { path:'/',redirect:'/home' },
        { path:'/home' , component: HomeContainer },
        { path:'/member' , component: MemberContainer },
        { path:'/shopcar' , component: ShopcarContainer },
        { path:'/search' , component: SearchContainer },
        { path:'/home/newList' , component: NewList },
        { path:'/home/newsInfo/:id' , component: NewsInfo },// 这里的 :id 代表参数
        { path:'/home/photoList' , component:  PhotoList},
        { path:'/home/photoinfo/:id' , component:  PhotoInfo},
        { path:'/home/goodsList' , component:  GoodsList},
        { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
        { path: '/home/goodsdesc/:id', component:GoodsDesc, name: 'goodsdesc'  },
        { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

export default router