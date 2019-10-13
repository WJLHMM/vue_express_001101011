const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

//引入添加数据方法
//考虑到 regist与userlogininfl使用的Schema为同一个，所以两种数据模型并为一个
const { UserlogininFind:RegisterFind, RegisterAdd} = require('../db/mongodb/userlogininflSchema.js')
const { genPassword } = require('../utils/crypto.js')
const { userLoginPost:registerPost } = require('../utils/validate.js')

/* GET register page. */
router.post('/api/register', (req, res, next)=> {
  console.log(req.body)
 
  const  username = req.body.username
  let  password = req.body.password

  //进行输入的username pasword校验是否符合注册规则
  let dataObj = { username,password }

  const errors = registerPost.validate(dataObj)
  // console.log(errors)
  // if (errors)  throw errors
  if(errors.length!= 0) {
    // return  result = console.log(`{${errors[0].path}:${errors[0].message}}`)
     result =`${errors[0].path}:${errors[0].message}`
     result =`${errors[0].message}`
     return res.send({"statuscode":0,"msg":result})
  }

  // check datebase,用户名是否被注册
  keyObj = {'username':username}

  RegisterFind(keyObj).then(data=> {
     console.log(data)
     if(data.length!=0) {
       //注意then后面是异步操作，所以如果如果不重名以后的保存，需要放在else里面操作
       return res.send({'statuscode':0,'msg':"您所注册的用户名已经被注册"})
     }else {
      //将最终符合要求的数据存入数据库
      password = genPassword(password)
      dataObj = { username,password }

      RegisterAdd(dataObj)
    
      res.send({'statuscode':1,'msg':'您已经注册成功'})

     }
  })

});

module.exports = router;
