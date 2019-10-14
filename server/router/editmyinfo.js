const express = require('express');
const router = express.Router();

let RedisGetdata =() => {
    return new Promise((resolve,reject)=> {
        client.get('username',(err,res)=> {
            if(err) reject(err)
            resolve(res)
        })
    })
}
const  { UserinfoFind, UserinfoUpdate } = require('../db/mongodb/userinfoSchema.js')

router.post('/api/editmyinfo', async (req, res, next)=> {
    let { username,nickname } = req.body 

    // client.get("username",(err,res)=> {
    //     if (err) throw err
    //     req.session.username = res
    //     next()
    // })
    req.session.username = await RedisGetdata()
    // console.log('editminfo-seesion.username',req.session.username)
    // console.log('editminfo-username',username) 

    if(username = req.session.username) {
        UserinfoFind({"username":username})
        .then(data=> {
            let currentdata = { "nickname":data[0].nickname }
            let updateddata = {"nickname":nickname}
            // console.log(currentdata,updateddata)
            // res.json(currentdata,updateddata)
            UserinfoUpdate(currentdata,updateddata).then(docs=> {
                if(docs.ok==1) {
                    res.json({'statuscode':1,'msg':'您的昵称已经修改成功'})
                }else{
                    res.json({'statuscode':0,'msg':'您的昵称不符合规则'})
                }
                
            })
           
        })
        .catch(err=>res.json(err));

        // res.json()
    }else{
        res.json({'statuscode':0,'msg':'请您重新登录修改昵称'})
    }
 })
module.exports = router
