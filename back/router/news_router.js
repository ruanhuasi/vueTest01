var express = require('express')
var News = require('../models/news')

// 1.创建一个路由容器
var newsRouter = express.Router()


// 2.把路由都挂载到 router 路由容器中
//新闻列表
newsRouter.get('/api/getnewslist', function(req, res ,next) {
    News.getnewslist(function(err,news) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = news
		return res.send(result)
	})
})

//新闻详情
newsRouter.get('/api/getnew/:newid', function(req, res ,next) {
    News.getnew(parseInt(req.params.newid),function(err,news) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = news
		return res.send(result)
	})
})



// 3.把 router 导出
module.exports = newsRouter