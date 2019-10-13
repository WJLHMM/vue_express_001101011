var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res, next)=> {

  // await next()
  //res.render('index', { title: 'Express' });
  res.render('index/index')
   //res.send("这里是首页")
});

module.exports = router;
