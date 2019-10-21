/* GET loginout page. */
const express = require('express');
const router = express.Router();

const { loggerWin } = require('../utils/expressWinston.js')

router.post('/api/loginout', (req, res, next)=> {
    let m = req.session.username
    req.session.destroy(err=> {
        if(err) {
            loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
            res.send({'statuscode':0,'msg':'您没有退出登录'})
            return
        }
    })
    loggerWin.info(`${m}已经成功退出登录 -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
    res.send({'statuscode':1,'msg':'您已经成功退出登录'})

})

module.exports = router;
