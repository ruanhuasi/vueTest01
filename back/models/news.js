var fs = require( 'fs' )
var path = require('path')


// 获取新闻列表
exports.getnewslist = function( callback ) {
    fs.readFile( path.join(__dirname,'./../db/news.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }

		var news = JSON.parse( data ).news
		news.forEach(element => {
			element.img_url = "http://127.0.0.1:8000/"+element.img_url
		})
		callback( null, news )

    } )
}

// 获取新闻详情
exports.getnew = function( id, callback ) {
    fs.readFile( path.join(__dirname,'./../db/newsinfo.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }
        id = parseInt( id )
		var newsinfo = JSON.parse( data ).newsinfo
		newsinfo.forEach(element => {
            if(id === element.id){
                var ret = []
				ret.push(element)
                return callback( null, ret )
            }
			
		})
		

    } )
}