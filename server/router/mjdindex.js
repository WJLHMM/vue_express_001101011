/* GET Home page data. */
const express = require('express');
const  router = express.Router();


const { loggerWin } = require('../utils/expressWinston.js')
const  { 
    IndswpierFind,
    IndbrandshowFind,
    BoxlistAdd,
    BoxlistFind,
    IndscrollnewstextAdd,
    IndscrollnewstextFind,
    SksectionAdd,
    SksectionFind,
    NewyearprolistAdd,
    NewyearprolistFind,
    Newyearprolist2Add,
    Newyearprolist2Find,
} = require('../db/mongodb/homePageDataSchema.js')



router.get('/api/mjdindex',async ( req, res, next )=> {
	
	loggerWin.info (`${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
    loggerWin.error(`userlogininfl 错误主页 ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)

    let ResData = {
		"success":true,
		"data":{
			"indswpier": [
			],
			"indbrandshow": [
			],	
			
			"boxlist": [
			],
			"indscrollnewstext": [
			],
			"sksection": [
			],
			
			"newyearprolist": [
			],
			"newyearprolist2": [
			]
	
		}
	}

    let indswpierdata = await IndswpierFind()
    ResData.data.indswpier = [ ...indswpierdata ]

    let indbrandshowdat = await IndbrandshowFind()
    ResData.data.indbrandshow = [ ...indbrandshowdat ]

    let boxlistdata = await BoxlistFind() 
	ResData.data.boxlist = [ ...boxlistdata ]

    let indscrollnewstextdata = await IndscrollnewstextFind()
	ResData.data.indscrollnewstext = [ ...indscrollnewstextdata ]

    let sksectiondata = await SksectionFind()  
	ResData.data.sksection = [ ...sksectiondata ]

    let newyearprolistdata = await NewyearprolistFind()
	ResData.data.newyearprolist = [ ...newyearprolistdata ]

    let newyearprolist2data = await Newyearprolist2Find()
	ResData.data.newyearprolist2 = [ ...newyearprolist2data ]

	res.json(ResData)
})



module.exports = router;
