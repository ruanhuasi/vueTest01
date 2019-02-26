var express = require('express')
var goods = require('../models/goods')

// 1.创建一个路由容器
var goodsRouter = express.Router()


// 2.把路由都挂载到 router 路由容器中
//商品列表
goodsRouter.get('/api/getgoods', function(req, res ,next) {
    goods.getgoods(parseInt(req.query.pageindex),function(err,goods) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = goods
		return res.send(result)
	})
})

//商品详情
goodsRouter.get('/api/goods/getinfo/:id', function(req, res ,next) {
    goods.getinfo(parseInt(req.params.id),function(err,goods) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = goods
		return res.send(result)
	})
})

goodsRouter.get('/api/goods/getshopcarlist/:ids', function(req, res ,next) {
    goods.getshopcarlistinfo(req.params.ids,function(err,shopcarlist) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = shopcarlist
		return res.send(result)
	})
})



// 3.把 router 导出
module.exports = goodsRouter

