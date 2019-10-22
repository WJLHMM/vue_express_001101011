const express = require('express')
// const util    = require('util')
const bodyParser = require('body-parser')
// const logger = require('morgan')
// const winston = require('winston')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const RedisStore = require('connect-redis')(session);

//连接mongodb数据库
require('./db/mongodb/mongodbcon.js')
//连接redis数据库
require('./db/redis/rediscon.js')

global.client = client
// const { loggerWin } = require('./utils/expressWinston.js')

const indexRouter = require('./router/index.js')
const userlogininflRouter = require('./router/userlogininfl.js')
const loginoutRouter = require('./router/loginout.js')
const searchbycatagrortyRouter = require('./router/searchbycatagrorty.js')
const mjdindexRouter = require('./router/mjdindex.js')
const cartinfoRouter = require('./router/cartinfo.js')
const cartinfodbaddRouter = require('./router/cartinfodbadd.js')
const userinfoRouter = require('./router/userinfo.js')
const editmyinfoRouter = require('./router/editmyinfo.js')
const myinfoRouter = require('./router/myinfo.js')
const productdetaillistRouter = require('./router/productdetaillist.js')
const sellerlistRouter = require('./router/sellerlist.js')
const appraiseinfoRouter = require('./router/appraiseinfo.js')
const productlistRouter = require('./router/productlist.js')
const registerRouter = require('./router/register.js')


const app = express()

app.set('view engine','ejs')
//app.set('view engine','jade')
//app.set('views', path.join(__dirname, 'views'));

app.use(express.static('static'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser(''))

app.use(session({
    secret:'vueExpress001',// 用来对session id相关的cookie进行签名
    saveUninitialized:true,// 是否自动保存未初始化的会话，建议trues
    resave:true,// 是否每次都重新保存会话，建议false
    cookie:{
        // httpOnly: false,//浏览器不允许脚本操作 document.cookie 去更改 cookie。设置为true可以避免被 xss 攻击拿到 cookie
        maxAge:60*1000*60*24*30,
    },
    store: new RedisStore({client})
}));


app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3100');
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With');
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Access-Control-Allow-Credentials", true); 
    next()
})

app.use('/',indexRouter)
app.use('/',userlogininflRouter)
app.use('/',loginoutRouter)
app.use('/',searchbycatagrortyRouter)
app.use('/',mjdindexRouter)
app.use('/',cartinfoRouter)
app.use('/',cartinfodbaddRouter)
app.use('/',userinfoRouter)
app.use('/',myinfoRouter)
app.use('/',editmyinfoRouter)
app.use('/',productdetaillistRouter)
app.use('/',productlistRouter)
app.use('/',sellerlistRouter)
app.use('/',appraiseinfoRouter)
app.use('/',registerRouter)

app.listen(6300,'127.0.0.1',()=> {
	console.log('server start on http://localhost:6300')
})




