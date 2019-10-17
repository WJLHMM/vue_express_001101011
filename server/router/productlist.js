/* GET Productlist page. */
const express = require('express');
const router = express.Router();
const { loggerWin } = require('../utils/expressWinston.js')

 const  { 
    
       ProductsListFind,
       ProductsListaggfind

    } = require('../db/mongodb/productlistSchema.js')


router.post('/api/productlist', async (req, res, next)=> {

  let { cid } = req.body
  let m = await ProductsListFind(req.body).catch(err=> {
        loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
      })

  let resData = {
        "success":true,
        "data":{
          
        }
  }
  //注意对象 键值是变量的时候的写法
  resData.data[cid] = [...m]

  res.send(resData)
})

module.exports = router;
