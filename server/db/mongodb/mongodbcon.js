const mongoose = require('mongoose')

const { MONGODB_CONF } = require('../../config/db.js')

//连接mongodb数据库vueExpress001
const mongooseUrl = `mongodb://${MONGODB_CONF.host}:${MONGODB_CONF.port}/${MONGODB_CONF.database}`

const con = (mongooseUrl) => {
    mongoose.connect(mongooseUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('connected',()=> {
        console.log('mongo connect success')
    })
    
    //连接如果有错误，报错
    mongoose.connection.on('error', () => {
        console.log('MoogoDB connect fail')
    });
      //连接如果断开，及时报错
    mongoose.connection.on('disconnected', () => {
        console.log('MoogoDB connect disconnected')
    });    
}

con(mongooseUrl)