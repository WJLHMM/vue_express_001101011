/*本段为客户端添加 productdetaillist companylist 数据到数据库的模型方法接口*/

const mongoose = require('mongoose')

const SellerinfoSchema = {
    "level": {
        type:Number,
        trim: true,
        require:true,
        default:1
    },
    "proseller": {
        type:String,
        require:true,
        maxlength:30,
        minlength:1        
    },
    "fanamount": {
        type:Number,
        default:0
    },
    "productamount":{
        type:Number,
        default:0
    },
   "shopLogourl": {
        type:String,
        default:''  
    }
   
}

const SellerinfoModel = mongoose.model('sellerinfolist',new mongoose.Schema(SellerinfoSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))



const SellerinfoListAddMany = (dataArray=[])=> {
    return new Promise((resolve,reject)=> {
        SellerinfoModel.insertMany(dataArray,(err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const  SellerinfoListFind = (keyObj={}) => {
    return new Promise((resolve, reject) => {
         SellerinfoListModel.find(keyObj,(err,doc)=> {
            if(err) return reject(err)
            resolve(doc)
        })
    });
}

const  SellerinfoListaggfind = (keyObj={}) => {
    return new Promise((resolve,reject)=> {
         SellerinfoListModel.aggregate([
        {
            $match: keyObj
        },
        ],  (err, docs) =>{
            if (err) reject(err)
            resolve(JSON.parse(JSON.stringify(docs)))
        })
    })

}

const AppraiseinfoSchema = {
    "level": {
        type:Number,
        trim: true,
        require:true,
        default:1
    },
    "nickname": {
        type:String,
        require:true,
        maxlength:30,
        minlength:1        
    }, 
    "proname": {
        type:String,
        require:true,
        maxlength:30,
        minlength:1        
    },
    "commentstars": {
        type:Number,
        default:0
    },
    "commendate":{
        type: Date,
    },
   "commentcontent": {
        type:String,
        maxlength:500
    },
    "imageUrl1": {
        type:String,
        default:''  
    },
    "imageUrl2": {
        type:String,
        default:''  
    },
    "imageUrl3": {
        type:String,
        default:''  
    },
    "imageUrl4": {
        type:String,
        default:''  
    }
   
}

const AppraiseinfoModel = mongoose.model('appraiseinfo',new mongoose.Schema(AppraiseinfoSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))



const AppraiseinfoAddMany = (dataArray=[])=> {
    return new Promise((resolve,reject)=> {
        AppraiseinfoModel.insertMany(dataArray,(err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const  AppraiseinfoFind = (keyObj={}) => {
    return new Promise((resolve, reject) => {
         AppraiseinfoModel.find(keyObj,(err,doc)=> {
            if(err) return reject(err)
            resolve(doc)
        })
    });
}

const  Appraiseinfoaggfind = (keyObj={}) => {
    return new Promise((resolve,reject)=> {
         AppraiseinfoModel.aggregate([
        {
            $match: keyObj
        },
        ],  (err, docs) =>{
            if (err) reject(err)
            resolve(JSON.parse(JSON.stringify(docs)))
        })
    })

}
module.exports = {

    SellerinfoListAddMany,
    SellerinfoListFind,
    SellerinfoListaggfind,
    AppraiseinfoAddMany,
    AppraiseinfoFind,
    Appraiseinfoaggfind

}
