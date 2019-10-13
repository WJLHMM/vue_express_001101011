const express = require('express');
const router = express.Router();

//引入添加数据方法
const { UserlogininfFind } = require('../db/userlogininflSchema.js')
const { genPassword } = require('../utils/crypto.js')
const { userLoginPost } = require('../utils/validate.js')
const { loggerWin } = require('../utils/expressWinston.js')

/* GET login page. */
router.post('/userlogincheck', (req, res, next)=> {
    
    let reuslt
    const  username = req.body.username
    let  password = req.body.password
    
    let dataObj = { username,password }
    const errors = userLoginPost.validate(dataObj)

    if(errors.length!= 0) {
        //如果有多个错误，即便data数组长度大于1，从0 开始取信息，逐一报错，一个一个修改
        result =`${errors[0].message}`
        loggerWin.error(`${result} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
        return res.send({"statuscode":0,"msg":result})
    }


    password = genPassword(password)
    let keyObj = { username,password }
  
    UserlogininfFind().then(data=> {
        if(data.length!=0) {
            let m = data.some(item => 
               item.username===keyObj.username&&item.password===keyObj.password
            )
            if(m) {
               
                req.session.username = username
                loggerWin.info(`${req.session.username}登录成功 -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
                return res.send({'statuscode':1,'msg':"登录成功"})
            }else {
                loggerWin.error(`您的账号或者密码不正确 -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
                res.send({'statuscode':0,'msg':'您的账号或者密码不正确'})
            }
        }else {
            loggerWin.error(`您的账号或者密码不存在 -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
            res.send({'statuscode':0,'msg':'您的账号或者密码不存在'})
        }
    })
})

module.exports = router;
