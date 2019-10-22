/* GET cartlist page. */
var express = require('express');
var router = express.Router();


const  { RedisGetdata,RedisGetKeys } = require('../db/redis/redisoperation.js')
const {  
    CartListAdd,
    CartListFind
} = require('../db/mongodb/cartlistSchema.js')

 const  { 
   ProductsListFind,
   ProductsListaggfind
} = require('../db/mongodb/productlistSchema.js')

const { loggerWin } = require('../utils/expressWinston.js')

router.post('/api/cartinfodbadd',async (req, res, next)=> {

    let frontdata = JSON.parse(JSON.stringify(req.body))
    let username = req.session.username
    let Objkey =  Object.assign(frontdata,{"username":username})

    console.log(Objkey)
    let checkdata = await CartListFind(Objkey).catch(err=> {
        loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
     })

    if(checkdata.length!=0) {
        res.send({'statuscode':0,'msg':'您产品已经添加到购物车中'})
        return
    }else {

        let m = await ProductsListFind(req.body).catch(err=> {
            loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
        })
        // console.log('m',m)

        let dataObj = {}
        dataObj.username = username

        let { proname,cartimgurl1,goodsinfo,productbreif,price,proseller } = m[0]
        
        Object.assign(dataObj,{ proname,cartimgurl1,goodsinfo,productbreif,price,proseller })
        console.log(dataObj)
        CartListAdd(dataObj)
            // .then(data=> {
            //   res.send({'statuscode':1,'msg':'您已经成功将将产品添加到购物车中'})
            // })
            .catch(err=> {
            loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
        })
    }

    
    // let m = await RedisGetKeys()
    // console.log('m',m)
    // m.forEach(async (item) => {
    //     let n = await RedisGetdata(item)
    //     console.log('n',n)

    // })
    // // let m = await RedisGetdata('sess:*')
    // // let n = await RedisGetdata('sess:dCY8zTjFbCZG2jwfgy9Xu7BkEhvSuIM1')
 
    loggerWin.info(`${req.method}--${req.url}--${req.headers['user-agent']}`)

   res.json(
     "OK"
   )
})

module.exports = router;
