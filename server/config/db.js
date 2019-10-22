const mongoose = require('mongoose')
const env = process.env.NODE_ENV //环境参数

//配置
let MONGODB_CONF
let REDIS_CONF

// if(env==='dev') {
    //mongodb
    MONGODB_CONF = {
        host:'localhost',
        // user:'wanglewis',
        // password:'mARMAR12!',
        port:'27017',
        database:'vueExpress001',//database的名称
    }
    //REDIS
    REDIS_CONF = {
        host:'127.0.0.1',
        port:6379,
        ttl: 60 * 60* 24
    }
// }

// if(env==='production') {
//     MONGODB_CONF = {
//         host:'localhost',
//         // user:'wanglewis',
//         // password:'mARMAR12!',
//         port:'27017',
//         database:'vueExpress001',//database的名称
//     }

//     //REDIS
//     REDIS_CONF = {
//         host:'127.0.0.1',
//         port:6379
//     }
// }


module.exports = {
    MONGODB_CONF,
    REDIS_CONF
}
