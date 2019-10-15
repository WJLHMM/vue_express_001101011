const mongoose = require('mongoose')

const { MONGODB_CONF } = require('../../config/db.js')
const { loggerWin } = require('../../utils/expressWinston.js')
//连接mongodb数据库vueExpress001
const mongooseUrl = `mongodb://${MONGODB_CONF.host}:${MONGODB_CONF.port}/${MONGODB_CONF.database}`

const con = (mongooseUrl) => {
    mongoose.connect(mongooseUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('connected',()=> {
        loggerWin.info (`mongo connect success ${MONGODB_CONF.port},${MONGODB_CONF.host}`)
        // console.log(')
    })
    
    //连接如果有错误，报错
    mongoose.connection.on('error', (err) => {
        // console.log('MoogoDB connect fail')
        loggerWin.error(`${err}`)
    });
      //连接如果断开，及时报错
    mongoose.connection.on('disconnected', () => {
        loggerWin.error(`MoogoDB connect disconnected`)
        // console.log('')
    });    
}

con(mongooseUrl)