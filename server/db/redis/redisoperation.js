const redis = require('redis')


let RedisGetdata =(key) => {
    return new Promise((resolve,reject)=> {
        client.get(key,(err,res)=> {
            if(err) {
            	reject(err)
            	return 
            } 
            if(res==null) {
            	resolve(res)
            	return
            }

            //考虑到redisset键值 必须为字符串，所以对于对象之类传值，必须先要JSON.stringify,
            //所以取值的时候先要JSON.parse，try之后如何不是Json类型，以catch的形式将非对象数据resolve
            try {
            	resolve(JSON.parse(res))

            }catch(ex) {
            	resolve(res)
            }
        })
    })
}

module.exports = {
    RedisGetdata,
    // RedisGetHashdata
}