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

const  { RedisGetdata } = require('../db/redis/redisoperation.js')

router.get('/api/mjdindex',async ( req, res, next )=> {

    req.session.username = await RedisGetdata('username')
	console.log(req.session.username)
	loggerWin.info (`${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
  
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

    let indswpierdata = await IndswpierFind().catch(err=> {
    	loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
    })
    ResData.data.indswpier = [ ...indswpierdata ]

    let indbrandshowdat = await IndbrandshowFind().catch(err=> {
    	loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
    })
    ResData.data.indbrandshow = [ ...indbrandshowdat ]

    let boxlistdata = await BoxlistFind() 
	ResData.data.boxlist = [ ...boxlistdata ]

    let indscrollnewstextdata = await IndscrollnewstextFind().catch(err=> {
    	loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
    })
	ResData.data.indscrollnewstext = [ ...indscrollnewstextdata ]

    let sksectiondata = await SksectionFind().catch(err=> {
    	loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
    })  
	ResData.data.sksection = [ ...sksectiondata ]

    let newyearprolistdata = await NewyearprolistFind().catch(err=> {
    	loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
    })
	ResData.data.newyearprolist = [ ...newyearprolistdata ]

    let newyearprolist2data = await Newyearprolist2Find().catch(err=> {
    	loggerWin.error(`${err}--${req.method}--${req.url}--${req.headers['user-agent']}`)
    })
	ResData.data.newyearprolist2 = [ ...newyearprolist2data ]

	res.json(ResData)
})



module.exports = router;
