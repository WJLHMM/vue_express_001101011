/*本段为客户端添加 productist  数据到数据库的模型方法接口*/

const mongoose = require('mongoose')

const CartListSchema = {
    "level": {
        type:Number,
        trim: true,
        require:true,
        default:1
    },
    "username":{
        type:String,
        trim: true,
        require:true
    },
    "proname": {
        type:String,
        default:''
    },
    "productbreif":{
        type:String,
        default:''
    },
    "cartimgurl1": {
        type:String,
        default:''
    },
    "goodsinfo":{
        type:String,
        default:''
    },
    "price": {
        type:Number,
        default:0
    },
    "number": {
        type:Number,
        require:true,
        default:1,
        max:10,
        min:1
    },
    "proseller":{
        type:String,
        default:''
    },
    "selltype": {
        type:String,
        default:'self'
    },
    "sevice": {
        type:String,
        default:''
    },
    "promotionpackagecontent": {
        type:String,
        default:''
    },
    "payinfo":{
        type:String,
        default:''
    },
    "currency":{
        type:String,
        default:'￥'
    },
    "proselectiontext":{
        type:String,
        default:''
    }, 
    "picked":{
        type:Boolean,
        default:true
    },
}



const CartListModel = mongoose.model('carlist',new mongoose.Schema(CartListSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))

const CartListAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const CartListModelinstance = new CartListModel(dataObj)
        CartListModelinstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}


const CartListFind = (keyObj={}) => {
    return new Promise((resolve, reject) => {
        CartListModel.find(keyObj,(err,doc)=> {
            if(err) return reject(err)
            resolve(doc)
        })
    });
}

const CartListaggfind = (keyObj={}) => {
    return new Promise((resolve,reject)=> {
        CartListModel.aggregate([
            {
                $match: keyObj
            },
            {
                $lookup: {
                    from: 'sellerinfolists',
                    localField: "proseller",
                    foreignField: "proseller",
                    as: 'sellerinfo'
                }
            },
            {
                $lookup: {
                    from: 'appraiseinfos',
                    localField: "proname",
                    foreignField: "proname",
                    as: 'appraiseinfo'
                }
            },
        ],  (err, docs) =>{
            if (err) reject(err)
            resolve(JSON.parse(JSON.stringify(docs)))
        })
    })

}

const CartListUpdateMany = (currentdata,updateddata)=> {
    return new Promise((resolve,reject)=> {
        CartListModel.updateMany(currentdata, updateddata,{ runValidators: true }, (err, docs)=>{
            if (err) reject(err)
            resolve(docs) 
        })
    })
}

const CartListUpdateOne = (currentdata,updateddata)=> {
    return new Promise((resolve,reject)=> {
        CartListModel.updateOne(currentdata, updateddata,{ runValidators: true }, (err, docs)=>{
            if (err) reject(err)
            resolve(docs) 
        })
    })
}
module.exports = {
    CartListAdd,
    CartListFind,
    CartListaggfind,
    CartListUpdateMany,
    CartListUpdateOne
}
