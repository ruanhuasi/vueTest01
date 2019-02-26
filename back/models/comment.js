var fs = require( 'fs' )
var path = require('path')

var dbPath = './../db/comment.json'
// 获取评论列表
exports.getcomments = function( id,pageindex,callback ) {
    fs.readFile( path.join(__dirname,dbPath), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }

        var comments = JSON.parse( data ).comments
        var ret = []
		comments.forEach(element => {
			if(element.id === id){
                ret.push(element)
            }
        })

        var result = []
        var num = (pageindex-1)*5
     

            if(pageindex === 1){
                if(ret.length>5){
                    for(var i=0;i<5;i++){
                        result.push(ret[i])
                    }
                    return callback( null, result )
                }else{
                    return callback( null, ret )
                }
            }else{
                if(ret.length>num){
                    if(ret.length-num>5){
                        for(var i=num;i<num+5;i++){
                            result.push(ret[i])
                        }
                    }else{
                        for(var i=num;i<ret.length;i++){
                            result.push(ret[i])
                        }
                    }

                    return callback( null, result )
                }else{
                    return callback( null, result )
                }
            }

    } )
}

// 提交评论
exports.postcomment = function( id,comment,callback ) {
    fs.readFile( path.join(__dirname,'./../db/comment.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }
        
        var comments = JSON.parse( data ).comments
        var cmt = {
            "id":id,
            "user_name":"匿名用户",
            "add_time":new Date().toLocaleString(),
            "content":comment.content
        }

        comments.unshift(cmt)
        
        //把对象数组转换为字符串
        var fileData = JSON.stringify( {
            comments: comments
        })
        //console.log(fileData);
        fs.writeFile( path.join(__dirname,'./../db/comment.json'), fileData, function( err, data ) {
            if ( err ) {
                console.log(err);
                return callback( err )
            }
            callback( null )
        } )
    } )
}


