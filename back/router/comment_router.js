var express = require('express')
var Comment = require('../models/comment')

// 1.创建一个路由容器
var commentRouter = express.Router()


// 2.把路由都挂载到 router 路由容器中
//评论列表
commentRouter.get('/api/getcomments/:artid', function(req, res ,next) {
    Comment.getcomments(parseInt(req.params.artid),parseInt(req.query.pageindex),function(err,news) {
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

// 提交评论
commentRouter.post('/api/postcomment/:artid', function(req, res ,next) {
    Comment.postcomment(parseInt(req.params.artid),req.body,function(err) {
		if(err){
            return next(err)
            //console.log(err);
        }
        var result = {
            "status": 0
        }
        
        result.message = "提交评论成功！"
        return res.send(result)

	})
})


// 3.把 router 导出
module.exports = commentRouter