var fs = require( 'fs' )
var path = require('path')


// 获取商品列表
exports.getgoods = function( pageindex,callback ) {
    fs.readFile( path.join(__dirname,'./../db/goods.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }

        var ret = JSON.parse( data ).goods

        var result = []
        var num = (pageindex-1)*10
     
            if(pageindex === 1){
                if(ret.length>10){
                    for(var i=0;i<10;i++){
                        result.push(ret[i])
                    }
                    return callback( null, result )
                }else{
                    return callback( null, ret )
                }
            }else{
                if(ret.length>num){
                    if(ret.length-num>10){
                        for(var i=num;i<num+10;i++){
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

exports.getinfo = function( id,callback ) {
    fs.readFile( path.join(__dirname,'./../db/goodsinfo.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }

        var goodsinfo = JSON.parse( data ).goodsinfo
        goodsinfo.forEach(element => {
            if(id === element.id){
                var ret = []
				ret.push(element)
                return callback( null, ret )
            }
			
		})

    } )

}



exports.getshopcarlistinfo = function( ids,callback ) {
    fs.readFile( path.join(__dirname,'./../db/shopcarlist.json'), 'utf8', function( err, data ) {
        if ( err ) {
            return callback( err )
        }
        var shopcarlist = JSON.parse( data ).shopcarlist

            var idArr = ids.split(',')
            var ret = []
            shopcarlist.forEach(element => {
                for(var i=0;i<idArr.length;i++){
                    if(element.id == idArr[i]){
                        ret.push(element)
                        break
                    }
                }
            })
            //console.log(ret.length);
            return callback( null, ret )
        
        // if(ids.indexOf(',')>=0){
        //     var idArr = ids.split(',')
        //     var ret = []
        //     shopcarlist.forEach(element => {
        //         for(var i=0;i<idArr.length;i++){
        //             if(element.id == idArr[i]){
        //                 ret.push(element)
        //                 break
        //             }
        //         }
        //     })
        //     console.log(ret.length);
        //     return callback( null, ret )
        // }else{
        //     shopcarlist.forEach(element => {
        //         if(element.id == ids){
        //             return callback( null, element )
        //         }
        //     })
        // }
    

    } )
}