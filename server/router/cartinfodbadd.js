/* GET cartlist page. */
const express = require('express');
const router = express.Router();


const  { RedisGetdata,RedisGetKeys } = require('../db/redis/redisoperation.js')
const {  
    CartListAdd,
    CartListFind,
    CartListUpdateMany,
    CartListUpdateOne
} = require('../db/mongodb/cartlistSchema.js')

 const  { 
   ProductsListFind,
   ProductsListaggfind
} = require('../db/mongodb/productlistSchema.js')

const { loggerWin } = require('../utils/expressWinston.js')

router.post('/api/cartinfodbadd',async (req, res, next)=> {

    let username = req.session.username

    if(!req.body.source){//这里是operationbar 添加商品到购物车的操作
        let frontdata = JSON.parse(JSON.stringify(req.body))
        let Objkey =  Object.assign(frontdata,{"username":username})

        // console.log(Objkey)
        let checkdata = await CartListFind(Objkey).catch(err=> {
            loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
         })

        if(checkdata.length!=0) {
            res.send({'statuscode':0,'msg':'您产品已经在购物车中了，请添加别的产品'})
            return
        }else {

            let m = await ProductsListFind(req.body).catch(err=> {
                loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)

            })
            console.log('m',m)

            let dataObj = {}
            dataObj.username = username

            let { proname,cartimgurl1,goodsinfo,
                productbreif,price,proseller,proselectiontext,payinfo,currency,sevice,promotionpackagecontent } = m[0]
            
            Object.assign(dataObj,{ proname,cartimgurl1,goodsinfo,
                productbreif,price,proseller,proselectiontext,payinfo,currency,sevice,promotionpackagecontent })
            // console.log(dataObj)
            CartListAdd(dataObj)
            .then(data=> {
                return res.send({'statuscode':1,'msg':'您已经成功将产品添加到购物车中'})
            })
            .catch(err=> {
                loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
                return res.send({'statuscode':0,'msg':`${err.stack}`})
            })
                
        }
    }else if(req.body.source==="selectallitem"){

        let picked
        //注意boolean类型的值 前后端传值得到的是string类型，所以先要将传过来的值‘true’变为true，‘false’变为false
        if(req.body.picked =='true') {
            picked = true
        }else if (req.body.picked =='false') {
            picked = false
        }

        // console.log('picked',picked)
        let olddata = {"picked":!picked,"username":username}
        let newdata = {"picked":picked,"username":username}
        // console.log('olddata',olddata)
        // console.log('newdata',newdata)
        CartListUpdateMany(olddata,newdata)
            .then(data=> {
                if(picked){
                    res.send({'statuscode':1,'msg':'商品全部选中'})
                    return
                }
                res.send({'statuscode':1,'msg':'商品全部取消'})
            })
            .catch(err=> {
                loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
                res.send({'statuscode':0,'msg':'数据修改失败'})
            })
    }else if (req.body.source==="selectitem"){
        let picked
        let { proname } = req.body
        //注意boolean类型的值 前后端传值得到的是string类型，所以先要将传过来的值‘true’变为true，‘false’变为false
        if(req.body.isPicked =='true') {
            picked = true
        }else if (req.body.isPicked =='false') {
            picked = false
        }

        // console.log('picked',picked)

        let olddata = {"picked":!picked,"username":username,"proname":proname}
        let newdata = {"picked":picked,"username":username,"proname":proname}

        // console.log('olddata',olddata)
        // console.log('newdata',newdata)
        CartListUpdateMany(olddata,newdata)
            .then(data=> {
                if(picked){
                   res.send({'statuscode':1,'msg':`${proname}已被选中`}) 
                   return 

                }
                res.send({'statuscode':1,'msg':`${proname}已被取消`})
            })
            .catch(err=> {
                loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
                res.send({'statuscode':0,'msg':`${proname}选择失败`})
            })
       
    }


    loggerWin.info(`${req.method}--${req.url}--${req.headers['user-agent']}`)
})

module.exports = router;
