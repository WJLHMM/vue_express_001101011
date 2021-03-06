/*本段为客户端添加 searchBycatagrorty数据到数据库的模型方法接口*/

const mongoose = require('mongoose')

const CatalogyListSchema = {
    "level": {
        type:Number,
        trim: true,
        require:true,
        default:1
    },
    "name":{
        type:String,
        default:''
    },
    "cid":{ 
        type:String,
        default:''
    },
    "commonUsed":{ 
        type:mongoose.Schema.Types.Mixed
    },
    "ptag":{ 
        type:String
    } 
}

const CatalogyListModel = mongoose.model('catalogyList',new mongoose.Schema(CatalogyListSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}},{ collection:"catalogyList"}))


const CatalogyListAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const CatalogyListModelInstance = new CatalogyListModel(dataObj)
        CatalogyListModelInstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const CatalogyListAddMany = (dataArray=[])=> {
    return new Promise((resolve,reject)=> {
        CatalogyListModel.insertMany(dataArray,(err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const CatalogyListFind = (keyObj={}) => {
    return new Promise((resolve, reject) => {
        CatalogyListModel.find(keyObj,(err,doc)=> {
            if(err) return reject(err)
            resolve(doc)
        })
    });
}

const CatalogyListaggfind = (keyObj={"cid":'WQR2006'}) => {
    return new Promise((resolve,reject)=> {
        CatalogyListModel.aggregate([
        {
            $match: keyObj
        },
        {
            $lookup: {
                from: 'productcatas',
                localField: "cid",
                foreignField: "cid",
                as: `${keyObj.cid}`
            }
        }
        ],  (err, docs) =>{
            if (err) reject(err)
            resolve(JSON.parse(JSON.stringify(docs)))
        })
    })

}
const ProductCataSchema = {
    "level": {
        type:Number,
        trim: true,
        require:true,
        default:1
    },
    "productname":{
        type:String,
        default:''
    },
    "0cid":{ 
        type:String,
        require:true,
    },
    "imgurl":{ 
        type:String,
        default:''
    } 
}

const ProductCataModel = mongoose.model('ProductCata',new mongoose.Schema(ProductCataSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))

const ProductCataAddMany = (dataArray=[])=> {
    return new Promise((resolve,reject)=> {
        ProductCataModel.insertMany(dataArray,(err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const ProductCataFind = (keyObj={}) => {
    return new Promise((resolve, reject) => {
        ProductCataModel.find(keyObj,(err,doc)=> {
            if(err) return reject(err)
            resolve(doc)
        })
    });
}



module.exports = {
   CatalogyListModel,
   CatalogyListAdd,
   CatalogyListAddMany,
   CatalogyListFind,
   CatalogyListaggfind,
   ProductCataAddMany,
   ProductCataModel,
   ProductCataFind
}
