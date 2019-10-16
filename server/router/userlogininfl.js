const express = require('express');
const router = express.Router();
const redis = require('redis')

//引入添加数据方法
const { UserlogininFind } = require('../db/mongodb/userlogininflSchema.js')
const { RedisGetdata } = require('../db/redis/redisoperation.js')
const { genPassword } = require('../utils/crypto.js')
const { userLoginPost } = require('../utils/validate.js')
const { loggerWin } = require('../utils/expressWinston.js')

/* GET login page. */
router.post('/api/userlogininfl', (req, res, next)=> {
    
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
  
    UserlogininFind().then( async (data)=> {
        if(data.length!=0) {
            let m = data.some(item => 
               item.username===keyObj.username&&item.password===keyObj.password
            )
            if(m) {
                client.set("username",username, redis.print)
                req.session.name = await RedisGetdata('username') 
                console.log('userlongininf',req.session.name)
                // client.get('username',(err,res)=> {
                //     if(err) {
                //         loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
                //     }
                //     req.session.username=res
                //     // console.log('userlogininfl-seesion.username',req.session.username)
                // })
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
