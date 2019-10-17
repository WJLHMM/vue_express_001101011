/*本段为客户端添加 productist  数据到数据库的模型方法接口*/

const mongoose = require('mongoose')

const ProductsListSchema = {
    "level": {
        type:Number,
        trim: true,
        require:true,
        default:2
    },
    "cid":{
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

const ProductsListModel = mongoose.model('productlistdbadd',new mongoose.Schema(ProductsListSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))


const ProductsListAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const ProductsListModelinstance = new ProductsListModel(dataObj)
        ProductsListModelinstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const ProductsListAddMany = (dataArray=[])=> {
    return new Promise((resolve,reject)=> {
        ProductsListModel.insertMany(dataArray,(err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const ProductsListFind = (keyObj={}) => {
    return new Promise((resolve, reject) => {
        ProductsListModel.find(keyObj,(err,doc)=> {
            if(err) return reject(err)
            resolve(doc)
        })
    });
}

const ProductsListaggfind = (keyObj={}) => {
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
   ProductsListAdd,
   ProductsListAddMany,
   ProductsListFind,
   ProductsListaggfind
}
