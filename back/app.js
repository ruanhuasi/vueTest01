var express = require('express')
var path = require('path')
var photoRouter = require('./router/photo_router')
var newsRouter = require('./router/news_router')
var commentRouter = require('./router/comment_router')
var goodsRouter = require('./router/goods_router')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()

// 配置解析表单 POST 请求体插件（注意：一定要在挂载路由之前）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// 开放静态资源
//app.use(express.static(path.join(__dirname, './db_img/')))
app.use(express.static('./db_img/'))
//app.use(express.static('./db/'))

app.use(cors()) // 解决跨域

//解决跨域
// app.all('*',function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     if (req.method == 'OPTIONS') {
//       res.send(200);
//     }
//     else {
//       next();
//     }
//   });

//把路由挂载到 app 中
app.use(photoRouter)
app.use(newsRouter)
app.use(commentRouter)
app.use(goodsRouter)

// 配置一个处理 404 的中间件
// 当前面所有的中间件没有能匹配的，就会在这里处理
// app.use(function(req,res){
// 	res.render('404.html')
// })

// 配置一个全局错误处理中间件
// 路由中的 next(err) 会寻找后面4个参数的中间件
app.use(function(err,req,res,next){
	res.status(500).json({
		status: 500,
		message: err.message
	})
})

app.listen(8000, function() {
    console.log('running...')
})