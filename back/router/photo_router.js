var express = require('express')
var Photo = require('../models/photo')


// 1.创建一个路由容器
var photoRouter = express.Router()

// 2.把路由都挂载到 router 路由容器中
// router.get('/', function(req, res) {
//     fs.readFile(path.join(__dirname, './db/imgcategory.json'), 'utf8', function( err, data ) {
//         if ( err ) {
//             return res.send( err.message )
//         }
//         res.send( JSON.stringify(JSON.parse( data ).imgcategorys) )
//     } )
// })

// 轮播图
photoRouter.get('/api/getlunbo', function(req, res ,next) {
    Photo.getlunbo(function(err,lunbotus) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = lunbotus
		return res.send(result)
	})
})

// 商品轮播图
photoRouter.get('/api/getgoodslunbo/:imgid', function(req, res ,next) {
    Photo.getgoodslunbo(parseInt(req.params.imgid),function(err,lunbotus) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = lunbotus
		return res.send(result)
	})
})

//图片分类数据
photoRouter.get('/api/getimgcategory', function(req, res ,next) {
    Photo.getimgcategory(function(err,imgcategorys) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = imgcategorys
		return res.send(result)
	})
})
// :cateid
photoRouter.get('/api/getimages/:cateid', function(req, res ,next) {
    Photo.getimages(parseInt(req.params.cateid),function(err,images) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = images
        return res.send(result)

	})
})

// 获取图片详情
photoRouter.get('/api/getimageInfo/:imgid', function(req, res ,next) {
    Photo.getimageInfo(parseInt(req.params.imgid),function(err,imginfo) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = imginfo
        return res.send(result)

	})
})

// :图片详情缩略图
photoRouter.get('/api/getthumimages/:imgid', function(req, res ,next) {
    Photo.getthumimages(parseInt(req.params.imgid),function(err,images) {
		if(err){
			return next(err)
        }
        var result = {
            "status": 0
        }
        
        result.message = images
        return res.send(result)

	})
})


// 3.把 photoRouter 导出
module.exports = photoRouter