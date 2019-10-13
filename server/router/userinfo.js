var express = require('express');
var router = express.Router();

const  { 
    UserinfoFind,
    UserinfoAdd
} = require('../db/mongodb/userinfoSchema.js')

const  { 
    IndswpierAdd,
    IndbrandshowAdd,
    BoxlistAdd,
    IndscrollnewstextAdd,
    SksectionAdd,
    NewyearprolistAdd,
    Newyearprolist2Add
} = require('../db/mongodb/indswpierSchema.js')

router.post('/api/userinfo',async (req, res, next)=> {
    console.log('/api/userinfo',req.body)
    let { username } = req.body.username
    UserinfoAdd(req.body).then(data=>{
        res.json({'statuscode':1,'msg':'您已经成功添加' + data.username+'用户的信息'})
    }).catch(err=> {
       res.json(err.stack)
    })

})


router.post('/api/indswpier',async (req, res, next)=> {
    console.log('/api/indswpier',req.body)
    // let { username } = req.body.username
    IndswpierAdd(req.body).then(data=>{
        res.json({'statuscode':1,'msg':'您已经成功添加' + data.title+'的信息'})
    }).catch(err=> {
       res.json(err.stack)
    })

})

router.post('/api/indbrandshow',async (req, res, next)=> {
    console.log('/api/indbrandshow',req.body)
    // let { username } = req.body.username
    IndbrandshowAdd(req.body).then(data=>{
        res.json({'statuscode':1,'msg':'您已经成功添加' + data.company+'的信息'})
    }).catch(err=> {
       res.json(err.stack)
    })

})

router.post('/api/boxlist',async (req, res, next)=> {
    console.log('/api/indbrandshow',req.body)
    // let { username } = req.body.username
    BoxlistAdd(req.body).then(data=>{
        res.json({'statuscode':1,'msg':'您已经成功添加' + data.title+'的信息'})
    }).catch(err=> {
    	console.log(err.stack)
       res.json(err.stack)
    })

})

router.post('/api/indscrollnewstext',async (req, res, next)=> {
    console.log('/api/indscrollnewstext',req.body)
    IndscrollnewstextAdd(req.body).then(data=>{
        res.json({'statuscode':1,'msg':'您已经成功添加' + data.company +'的信息'})
    }).catch(err=> {
    	console.log(err.stack)
       res.json(err.stack)
    })

})

router.post('/api/sksection',async (req, res, next)=> {
    console.log('/api/sksection',req.body)
    SksectionAdd(req.body).then(data=>{
        res.json({'statuscode':1,'msg':'您已经成功添加' + data.productname +'的信息'})
    }).catch(err=> {
    	console.log(err.stack)
       res.json(err.stack)
    })

})

router.post('/api/newyearprolist',async (req, res, next)=> {
    console.log('/api/newyearprolist',req.body)
    NewyearprolistAdd(req.body).then(data=>{
        res.json({'statuscode':1,'msg':'您已经成功添加' + data.productname +'的信息'})
    }).catch(err=> {
    	console.log(err.stack)
       res.json(err.stack)
    })

})

router.post('/api/newyearprolist2',async (req, res, next)=> {
    console.log('/api/newyearprolist2',req.body)
    Newyearprolist2Add(req.body).then(data=>{
        res.json({'statuscode':1,'msg':'您已经成功添加' + data.productname +'的信息'})
    }).catch(err=> {
    	console.log(err.stack)
       res.json(err.stack)
    })

})


module.exports = router
