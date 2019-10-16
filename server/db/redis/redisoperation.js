const redis = require('redis')


let RedisGetdata =(key) => {
    return new Promise((resolve,reject)=> {
        client.get(key,(err,res)=> {
            if(err) reject(err)
            resolve(res)
        })
    })
}



module.exports = {
    RedisGetdata
}