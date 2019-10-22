/*所有 数据输入数据库 后台接口*/

const express = require('express');
const router = express.Router();

const { loggerWin } = require('../utils/expressWinston.js')

{

    const  { 
        UserinfoFind,
        UserinfoAdd
    } = require('../db/mongodb/userinfoSchema.js')

    router.post('/api/userinfo',async (req, res, next)=> {
        let { username } = req.body.username
        UserinfoAdd(req.body).then(data=>{
            res.json({'statuscode':1,'msg':'您已经成功添加' + data.username+'用户的信息'})
        }).catch(err=> {
           loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
           res.json(err.stack)
        })

    })
}

{
    const  { 
    IndswpierAdd,
    IndbrandshowAdd,
    BoxlistAdd,
    IndscrollnewstextAdd,
    SksectionAdd,
    NewyearprolistAdd,
    Newyearprolist2Add
    } = require('../db/mongodb/homePageDataSchema.js')

    router.post('/api/indswpier',async (req, res, next)=> {
        IndswpierAdd(req.body).then(data=>{
            res.json({'statuscode':1,'msg':'您已经成功添加' + data.title+'的信息'})
        }).catch(err=> {
           loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
           res.json(err.stack)
        })

    })

    router.post('/api/indbrandshow',async (req, res, next)=> {
        IndbrandshowAdd(req.body).then(data=>{
            res.json({'statuscode':1,'msg':'您已经成功添加' + data.company+'的信息'})
        }).catch(err=> {
           loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
           res.json(err.stack)
        })

    })

    router.post('/api/boxlist',async (req, res, next)=> {
        BoxlistAdd(req.body).then(data=>{
            res.json({'statuscode':1,'msg':'您已经成功添加' + data.title+'的信息'})
        }).catch(err=> {
           loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
           res.json(err.stack)
        })

    })

    router.post('/api/indscrollnewstext',async (req, res, next)=> {
        IndscrollnewstextAdd(req.body).then(data=>{
            res.json({'statuscode':1,'msg':'您已经成功添加' + data.company +'的信息'})
        }).catch(err=> {
           loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
           res.json(err.stack)
        })

    })

    router.post('/api/sksection',async (req, res, next)=> {
        SksectionAdd(req.body).then(data=>{
            res.json({'statuscode':1,'msg':'您已经成功添加' + data.productname +'的信息'})
        }).catch(err=> {
           loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
           res.json(err.stack)
        })

    })

    router.post('/api/newyearprolist',async (req, res, next)=> {
        NewyearprolistAdd(req.body).then(data=>{
            res.json({'statuscode':1,'msg':'您已经成功添加' + data.productname +'的信息'})
        }).catch(err=> {
           loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
           res.json(err.stack)
        })

    })

    router.post('/api/newyearprolist2',async (req, res, next)=> {
        Newyearprolist2Add(req.body).then(data=>{
            res.json({'statuscode':1,'msg':'您已经成功添加' + data.productname +'的信息'})
        }).catch(err=> {
           loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
           res.json(err.stack)
        })

    })
}

{
    const { 
        CatalogyListAddMany,
        ProductCataAddMany
    } = require('../db/mongodb/searchbyCatagrortySchema.js')

    router.post('/api/catalistdataadd',async (req, res, next)=> {
        CatalogyListAddMany(req.body).catch(err=> {
            loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
            res.send(`${err.stack}`)
        })
        
        res.send({'statuscode':1,'msg':'您已经成功添加信息'})

    })

    router.post('/api/productcata',async (req, res, next)=> {
        console.log(req.body)
        ProductCataAddMany(req.body).catch(err=> {
            loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
            res.send(`${err.stack}`)
        })
        
        res.send({'statuscode':1,'msg':'您已经成功添加信息'})

    })
}

{
    const  { 
       ProductsListAdd,
       ProductsListAddMany,
       ProductsListFind,
       ProductsListaggfind,
       ProductsListUpdate
    } = require('../db/mongodb/productlistSchema.js')

    router.post('/api/productlistdbadd',async (req, res, next)=> {
        req.body.forEach(item=>{
            console.log(item.proname)
            console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++')
            ProductsListFind({"proname":item.proname}).then(data => {
                // console.log(data[0].cartimgurl1)
                // let newproselectiontext = {"proselectiontext":item.proselectiontext}
                // let oldproselectiontext = {"proselectiontext":data[0].proselectiontext}
                let newproselectiontext = {"cartimgurl1":item.imgUrl}
                let oldproselectiontext = {"cartimgurl1":data[0].cartimgurl1} 
                // let newproselectiontext = {"sevice":item.sevice}
                // let oldproselectiontext = {"sevice":data[0].sevice}
                // let newproselectiontext = {"promotionpackagecontent":item.promotionpackagecontent}
                // let oldproselectiontext = {"promotionpackagecontent":data[0].promotionpackagecontent}
                // let newproselectiontext = {"currency":item.currency}
                // let oldproselectiontext = {"currency":data[0].currency}
                // let newproselectiontext = {"selltype":item.selltype}
                // let oldproselectiontext = {"selltype":data[0].selltype}
                // let newproselectiontext = {"payinfo":item.payinfo}
                // let oldproselectiontext = {"payinfo":data[0].payinfo}
                console.log('o',oldproselectiontext,'n',newproselectiontext)
                ProductsListUpdate(oldproselectiontext,newproselectiontext)



            })


        })
        // ProductsListAddMany(req.body).catch(err=> {
        //     loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
        //     res.send(`${err.stack}`)
        // })
        
        res.send({'statuscode':1,'msg':'您已经成功添加信息'})
    })


}


{

    const { 
       
        SellerinfoListAddMany,
        SellerinfoListFind,
        SellerinfoListaggfind,
        AppraiseinfoAddMany,
        AppraiseinfoFind,
        Appraiseinfoaggfind
    } = require('../db/mongodb/productdetaillistSchema.js')

   

    router.post('/api/sellerlistadd',async (req, res, next)=> {
        SellerinfoListAddMany(req.body).catch(err=> {
            loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
            res.send(`${err.stack}`)
        })
        
        res.send({'statuscode':1,'msg':'您已经成功添加信息'})
    })  

    router.post('/api/appraiseinfoadd',async (req, res, next)=> {
        console.log(req.body)
        AppraiseinfoAddMany(req.body).catch(err=> {
            loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
            res.send(`${err.stack}`)
        })
        
        res.send({'statuscode':1,'msg':'您已经成功添加信息'})
    })
}

module.exports = router
