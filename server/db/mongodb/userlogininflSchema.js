const mongoose = require('mongoose')

const UserlogininflSchemaObj = {
    username:{type:String,require:true},
    password:{type:String,require:true}
}


const UserlogininModel = mongoose.model('userlogininfls',new mongoose.Schema(UserlogininflSchemaObj))

const UserlogininFind = (keyObj={}) => {
    return new Promise((resolve,reject)=> {
        UserlogininModel.find(keyObj,(err,doc)=> {
            if(err) return reject(err)
            resolve(doc)
        })
    })
}

const RegisterAdd = (dataObj={})=> {
    const RegisterModelInstance = new UserlogininModel(dataObj)
    RegisterModelInstance.save()

}

module.exports = {
    UserlogininModel,
    UserlogininFind,
    RegisterAdd
}
