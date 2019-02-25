var fs = require( 'fs' )
var path = require('path')

//var dbPath = '../db/imgcategory.json'

// 获取轮播图
exports.getlunbo = function( callback ) {
    fs.readFile( path.join(__dirname,'./../db/lunbotu.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }
        callback( null, JSON.parse( data ).lunbotus )
    } )
}
/*
	获取图片分类数据
	callback 中的参数
		第一个参数是 err
			成功是 null
			错误是 错误对象
		第二个参数是 结果
			成功是 数组
			错误是 undefined
	return []
*/
exports.getimgcategory = function( callback ) {
    fs.readFile( path.join(__dirname,'./../db/imgcategory.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }
        callback( null, JSON.parse( data ).imgcategorys )
    } )
}

// 获取分类图片列表
exports.getimages = function( id, callback ) {
    fs.readFile( path.join(__dirname,'./../db/images.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }
		id = parseInt( id )
		var images = JSON.parse( data ).images
		if(id === 0){
			images.forEach(element => {
				element.img_url = "http://127.0.0.1:8000/"+element.img_url
			
		});
			return callback( null, images )
		}
		var ret = []
		images.forEach(element => {
				if(element.cateid===id){
					element.img_url = "http://127.0.0.1:8000/"+element.img_url
					ret.push(element)
				}
			
		});

        callback( null, ret )

    } )
}

// 获取图片详情
exports.getimageInfo = function( id, callback ) {
    fs.readFile( path.join(__dirname,'./../db/imagesinfo.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }
		id = parseInt( id )
		var imginfo = JSON.parse( data ).imginfo
		imginfo.forEach(element => {
			if(id === element.id){
				var ret = []
				ret.push(element)
				return callback( null, ret )
			}
		
		})

    } )
}

// 获取图片详情缩略图
exports.getthumimages = function( id, callback ) {
    fs.readFile( path.join(__dirname,'./../db/thumimages.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }
		id = parseInt( id )
		var thumimages = JSON.parse( data ).thumimages
		thumimages.forEach(element => {
			element.src = "http://127.0.0.1:8000/"+element.src
			element.msrc = "http://127.0.0.1:8000/"+element.msrc
		})
		callback( null, thumimages )
		// var ret = []
		// thumimages.forEach(element => {
		// 		if(element.id===id){
		// 			element.src = "http://127.0.0.1:8000/"+element.src
		// 			ret.push(element)
		// 		}
		// })

        // callback( null, ret )

    } )
}