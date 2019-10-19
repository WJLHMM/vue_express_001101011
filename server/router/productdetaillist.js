/* GET Productlistdetail page. */
const express = require('express');
const router = express.Router();
const { loggerWin } = require('../utils/expressWinston.js')

 const  { 
   ProductsListFind,
   ProductsListaggfind
} = require('../db/mongodb/productlistSchema.js')

router.post('/api/productdetaillist',async (req, res, next)=> {
    console.log(req.body)
    let { proname } = req.body
    let data = await ProductsListaggfind({"proname":proname}).catch(err=> {
        loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
    })
    
   let ResData = {
        "success":true,
        "data":[]
   }
   console.log(data)
   ResData.data = [...data]

   res.send(ResData)

});

module.exports = router;
