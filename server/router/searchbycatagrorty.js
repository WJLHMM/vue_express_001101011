/* GET Commoditynav page. */
const express = require('express');
const router = express.Router();

const { 
  CatalogyListFind,
  CatalogyListModel,
  CatalogyListaggfind,
  ProductCataFind,
  ProductCataModel
} = require('../db/mongodb/searchbyCatagrortySchema.js')

const { loggerWin } = require('../utils/expressWinston.js')

let ResData = {
  "success":true,
  "data":{
    "catalogyList": [
    ]
  }
}

router.post('/api/searchbycatagrorty', async (req, res, next)=> {
   // console.log(req.body)

   let { paramsid, cid} = req.body

  loggerWin.info (`${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)

  let  CatalogyListdata = await CatalogyListFind().catch(err=> {
        loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
      })


  // console.log(ResData.data.catalogyList)
  // let  ProductCatadata = await CatalogyListFind()

  let cidDat = await CatalogyListaggfind({cid}).catch(err=> {
        loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
      })
  
  let index = CatalogyListdata.findIndex((item)=> {
      return item.cid === cidDat[0].cid;
  });
  
  CatalogyListdata.splice(index,1,cidDat[0])
  ResData.data.catalogyList = [...CatalogyListdata]
  

  res.send(ResData)
})



module.exports = router;
