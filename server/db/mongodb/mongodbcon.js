const mongoose = require('mongoose')

const { MONGODB_CONF } = require('../../config/db.js')
const { loggerWin } = require('../../utils/expressWinston.js')
//连接mongodb数据库vueExpress001
const mongooseUrl = `mongodb://${MONGODB_CONF.host}:${MONGODB_CONF.port}/${MONGODB_CONF.database}`
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const con = (mongooseUrl) => {
    // mongoose.connect(mongooseUrl,{useNewUrlParser:true, useUnifiedTopology:true})
    mongoose.connect(mongooseUrl)
    mongoose.connection.on('connected',()=> {
        loggerWin.info (`mongodb connect success ${MONGODB_CONF.port},${MONGODB_CONF.host}`)
    })
    
    //连接如果有错误，报错
    mongoose.connection.on('error', (err) => {
        loggerWin.error(`${err}`)
    });
      //连接如果断开，及时报错
    mongoose.connection.on('disconnected', () => {
        loggerWin.error(`MoogoDB connect disconnected`)
    });    
}

con(mongooseUrl)