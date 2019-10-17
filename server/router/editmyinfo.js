const express = require('express');
const router = express.Router();

const  { RedisGetdata } = require('../db/redis/redisoperation.js')
const  { UserinfoFind, UserinfoUpdate } = require('../db/mongodb/userinfoSchema.js')
const { loggerWin } = require('../utils/expressWinston.js')

router.post('/api/editmyinfo', async (req, res, next)=> {
    let { username,nickname } = req.body 

    req.session.username = await RedisGetdata('username')
    // console.log('bbb',req.session.username)
    
    if(username = req.session.username) {
        UserinfoFind({"username":username})
        .then(data=> {
            let currentdata = { "nickname":data[0].nickname }
            let updateddata = {"nickname":nickname}
            
            UserinfoUpdate(currentdata,updateddata).then(docs=> {
                if(docs.ok==1) {
                    res.json({'statuscode':1,'msg':'您的昵称已经修改成功'})
                }else{

                    res.json({'statuscode':0,'msg':'您的昵称不符合规则'})
                }
                
            }).catch(err=>{
               loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
               res.json(err)
            });
           
        })
        .catch(err=>{
            loggerWin.error(`${err} -- ${req.method} -- ${req.url} -- ${req.headers['user-agent']}`)
            res.json(err)});

    }else{
        res.json({'statuscode':0,'msg':'请您重新登录修改昵称'})
    }
 })
module.exports = router
