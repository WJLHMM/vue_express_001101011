/*本段为客户端添加 productist  数据到数据库的模型方法接口*/

const mongoose = require('mongoose')

const CartListSchema = {
    "level": {
        type:Number,
        trim: true,
        require:true,
        default:0
    },
    "username":{
        type:String,
        trim: true,
        require:true,
        unique:true,
    },
    "proname": {
        type:String,
        default:''
    }
}



const CartListModel = mongoose.model('carlist',new mongoose.Schema(ProductsListSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))

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
        ProductsListModel.aggregate([
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

module.exports = {
    CartListAdd,
    CartListFind,
    CartListaggfind

}
