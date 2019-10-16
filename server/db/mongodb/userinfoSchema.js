/*本段为客户端添加 用户 信息 数据到数据库的模型 方法 接口*/

const mongoose = require('mongoose')

const UserinfoSchema = {
    "username": {
        // type:Schema.Types.ObjectId,
        type:String,
        trim: true,
        require:true,
        unique:true,
    },
    "cid":{
        type:String,
        set() { 
            return 'jd' + this.username + Math.ceil(Math.random()*1000)
        }
        // default: 'jd' + this.username + Math.ceil(Math.random()*1000)
    },
    "nickname":{ 
        type:String,
        maxlength:20,
        minlength:1,
        default:'我是时尚人'
    },
    "grade":{
        type:String,
        default:"铁牌"
    },
    "creditpoint":{
        type:Number,
        default:0
    },
    "jdmoneypoint":{ 
        type:Number,
        default:0
    },
    "avaterurl":{ 
        type:String,
        default:''
    }
}

//注意如果要使用schema中的某个key的set设置，必须要给该key传值进来，即使为空，如果要使用default，务必不要传值，即使是空
const UserinfoModel = mongoose.model('userinfos',new mongoose.Schema(UserinfoSchema,{timestamps: {createdAt: true,updatedAt: true}}))

const UserinfoFind = (keyObj={}) => {
    return new Promise((resolve,reject)=> {
        UserinfoModel.find(keyObj,(err,doc)=> {
            if(err) return reject(err)
            resolve(doc)
        })
    })
}

const UserinfoAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const UserinfoModelInstance = new UserinfoModel(dataObj)
        UserinfoModelInstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const UserinfoUpdate = (currentdata,updateddata)=> {
    return new Promise((resolve,reject)=> {
        UserinfoModel.updateOne(currentdata, updateddata,{ runValidators: true }, (err, docs)=>{
            if (err) reject(err)
            resolve(docs) 
        })
    })
}
module.exports = {
    UserinfoFind,
    UserinfoAdd,
    UserinfoUpdate

}
