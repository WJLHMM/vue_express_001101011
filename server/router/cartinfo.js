/* GET cartlist page. */
const express = require('express');
const router = express.Router();


const  { RedisGetdata } = require('../db/redis/redisoperation.js')
const {  
    CartListFind,
} = require('../db/mongodb/cartlistSchema.js')

const { loggerWin } = require('../utils/expressWinston.js')

router.post('/api/cartinfo',async (req, res, next)=> {
    loggerWin.info(`${req.method}--${req.url}--${req.headers['user-agent']}`)
 
    console.log('req',req.body)
    console.log('session',req.session.username)
    if(req.body.username==req.session.username) {
        let Resdata = await  CartListFind({"username":req.session.username}).catch(err=> {
            loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
            return res.json(`${err.starck}`)
        })
        if(Resdata.length==0) {
            res.send({'statuscode':10,'msg':'您的购物车空空的，请先去添加产品'})
            return
        }
       res.send(Resdata)
    }else{
        res.send({'statuscode':0,'msg':'您已经很久没有登录了，请重新登录进入购物车'})
    }
  
})

module.exports = router;
