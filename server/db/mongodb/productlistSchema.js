/*本段为客户端添加 productist productdetaillist companylist 数据到数据库的模型方法接口*/

const mongoose = require('mongoose')

const AppleProductsListSchema = {
    "level": {
        type:Number,
        trim: true,
        require:true,
        default:2
    },
    "2cid":{
        type:String,
        default:' '
    },
    "proname": {
        type:String,
        default:''
    },
    "productbreif":{
        type:String,
        default:''
    },
    "memory_size1": {
        type:String,
        default:'8G'
    },
    "memory_size2":{
        type:String,
        default:'2G'
    },
    "price": {
        type:Number,
        default:0
    },
    "appraisevolume":{
        type:Number,
        default:0
    },  
    "neutralappraisevolume":{
        type:Number,
        default:0
    }, 
    "badappraisevolume":{
        type:Number,
        default:0
    },
    "goodappraiseratio": {
        type:Number,
        default:0
    },
    "proseller":{
        type:String,
        default:''
    },
    "redemption": {
        type:String,
        default:''
    },
    "fullreplacement":{
        type:String,
        default:''
    },
    "promotionpackagecontent": {
        type:String,
        default:''
    },
    "goodsinfo":{
        type:String,
        default:''
    },
    "goodsservice": {
        type:String,
        default:''
    },
    "address": {
        type:String,
        default:''
    },
    "weight":{
        type:String,
        default:'-1kg'
    },
    "address": {
        type:String,
        default:''
    },    
    "possiblegift": {
        type:String,
        default:''
    },    
    "isselfselling": {
        type:String,
        default:'是'
    },    
    "easebuy": {
        type:String,
        default:''
    },    
    "imgurl": {
        type:String,
        default:''
    },
    "viewimgurl": {
        type:String,
        default:''
    }
   
}

const AppleProductsListModel = mongoose.model('productlistdbadd',new mongoose.Schema(AppleProductsListSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))


const AppleProductsListAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const AppleProductsListModelinstance = new AppleProductsListModel(dataObj)
        AppleProductsListModelinstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const AppleProductsListAddMany = (dataArray=[])=> {
    return new Promise((resolve,reject)=> {
        AppleProductsListModel.insertMany(dataArray,(err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const AppleProductsListFind = (keyObj={}) => {
    return new Promise((resolve, reject) => {
        AppleProductsListModel.find(keyObj,(err,doc)=> {
            if(err) return reject(err)
            resolve(doc)
        })
    });
}

const AppleProductsListaggfind = (keyObj={}) => {
    return new Promise((resolve,reject)=> {
        AppleProductsListModel.aggregate([
        {
            $match: keyObj
        },
        {
            $lookup: {
                from: 'productcatas',
                localField: "cid",
                foreignField: "0cid",
                as: `${keyObj.cid}`
            }
        }
        ],  (err, docs) =>{
            if (err) reject(err)
            resolve(JSON.parse(JSON.stringify(docs)))
        })
    })

}


module.exports = {
   AppleProductsListAdd,
   AppleProductsListAddMany,
   AppleProductsListFind,
   AppleProductsListaggfind
}
