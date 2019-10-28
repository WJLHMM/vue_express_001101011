/* GET cartlist page. */
const express = require('express');
const router = express.Router();


const  { RedisGetdata,RedisGetKeys } = require('../db/redis/redisoperation.js')
const {  
    CartListAdd,
    CartListFind,
    CartListRemove,
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
    }else if(req.body.source==="selectallitem"){//全选checkbox 操作数据表 

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
    }else if (req.body.source==="selectitem"){//单选checkbox  操作数据表
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
       
    }else if(req.body.source==="getnumber"){
        let { proname,number } = req.body
        CartListFind({"username":username,"proname":proname})
        .then(data => {
            let olddata = {"number":data[0].number,"username":username,"proname":proname}
            let newdata = {"number":parseInt(number),"username":username,"proname":proname}
            CartListUpdateOne(olddata,newdata)
            .then(data=> {
                res.send({'statuscode':1,'msg':`${proname}数量修改为${number}件`})
                return
            })
            .catch(err=> {
                loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
                res.send({'statuscode':0,'msg':`${proname}数量不能改为${number}件`})
                return
            })
        })
        .catch(err=> {
                loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
                res.send({'statuscode':0,'msg':`没有查询到该产品`})
                return
        })
    }else if(req.body.source==="deletecartitem"){
        let { proname } = req.body
        let KeyObj = { proname,username}
        // console.log(KeyObj)
        CartListRemove(KeyObj)
        .then(data=> {
            return res.send({'statuscode':1,'msg':`您已经成功将${proname}从购物车中删除`})
        })
        .catch(err=> {
            loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
            return res.send({'statuscode':0,'msg':`${err.stack}`})
        })
    }


    loggerWin.info(`${req.method}--${req.url}--${req.headers['user-agent']}`)
})

module.exports = router;
