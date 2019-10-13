/*本段为客户端添加数据到数据库的接口*/

const mongoose = require('mongoose')

const IndswpierSchema = {
    "title": {
        type:String,
        trim: true,
        require:true,
        unique:true,
    },
    "cid":{
        type:String,
        set() { 
            return 'jd' + this.title + Math.ceil(Math.random()*1000)
        }
    },
    "avaterurl":{ 
        type:String,
        default:''
    }
}

// 注意如果要使用schema中的某个key的set设置，必须要给该key传值进来，即使为空，如果要使用default，务必不要传值，即使是空
// 在客户端传值的时候 set中this.title的输入要在cid之前，否则也会undefined
// 输入数据尽量保持同Schema顺序一致
const IndswpierModel = mongoose.model('indswpier',new mongoose.Schema(IndswpierSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))


const IndswpierAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const UserinfoModelInstance = new IndswpierModel(dataObj)
        UserinfoModelInstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}


const IndbrandshowSchema = {
    "company": {
        type:String,
        trim: true,
        require:true,
        unique:true,
    },
    "cid":{
        type:String,
        set() { 
            return 'jd' + this.company + Math.ceil(Math.random()*1000)
        }
    },
    // db.getCollection('indbrandshows').update({},{$rename:{"avaterurl":"imgUrl"}},false,true)  将avaterurl 改为imgUrl
    "imgUrl":{ 
        type:String,
        default:''
    },
     "imgUrl2":{ 
        type:String,
        default:''
    }, 
    "imgUrl3":{ 
        type:String,
        default:''
    }, 
    "imgUrl4":{ 
        type:String,
        default:''
    }
}

//注意如果要使用schema中的某个key的set设置，必须要给该key传值进来，即使为空，如果要使用default，务必不要传值，即使是空
//在客户端传值的时候 set中this.title的输入要在cid之前，否则也会undefined
//输入数据尽量保持同Schema顺序一致
const IndbrandshowModel = mongoose.model('indbrandshow',new mongoose.Schema(IndbrandshowSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))


const IndbrandshowAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const IndbrandshowModelInstance = new IndbrandshowModel(dataObj)
        IndbrandshowModelInstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}


const BoxlistSchema = {
    "title": {
        type:String,
        trim: true,
        require:true,
        unique:true,
    },
    "cid":{
        type:String,
        set() { 
            return 'jd' + this.title + Math.ceil(Math.random()*1000)
        }
    },
    "imgUrl":{ 
        type:String,
        default:''
    }
}

//注意如果要使用schema中的某个key的set设置，必须要给该key传值进来，即使为空，如果要使用default，务必不要传值，即使是空
//在客户端传值的时候 set中this.title的输入要在cid之前，否则也会undefined
//输入数据尽量保持同Schema顺序一致
const BoxlistModel = mongoose.model('boxlist',new mongoose.Schema(BoxlistSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))


const BoxlistAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const BoxlistModelInstance = new BoxlistModel(dataObj)
        BoxlistModelInstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const IndscrollnewstextSchema = {
    "company": {
        type:String,
        trim: true,
        require:true,
        unique:true,
    },
    "cid":{
        type:String,
        set() { 
            return 'jd' + this.company + Math.ceil(Math.random()*1000)
        }
    },
    "text1":{ 
        type:String,
        default:''
    },
     "text2":{ 
        type:String,
        default:''
    }
}

const IndscrollnewstextModel = mongoose.model('indscrollnewstext',new mongoose.Schema(IndscrollnewstextSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))


const IndscrollnewstextAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const IndscrollnewstextModelInstance = new IndscrollnewstextModel(dataObj)
        IndscrollnewstextModelInstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const SksectionSchema = {
    "productname": {
        type:String,
        trim: true,
        require:true,
        unique:true,
    },
    "cid":{
        type:String,
        set() { 
            return 'jd' + this.company + Math.ceil(Math.random()*1000)
        }
    },
    "cprice":{ 
        type:Number,
        default:''
    },
     "oprice":{ 
        type:Number,
        default:''
    },
    "imgUrl":{ 
        type:String,
        default:''
    }
}

const SksectionModel = mongoose.model('sksection',new mongoose.Schema(SksectionSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))


const SksectionAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const SksectionModelInstance = new SksectionModel(dataObj)
        SksectionModelInstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}



const NewyearprolistSchema = {
    "productname": {
        type:String,
        trim: true,
        require:true,
        unique:true,
    },
    "cid":{
        type:String,
        set() { 
            return 'jd' + this.productname + Math.ceil(Math.random()*1000)
        }
    },
    "protast":{ 
        type:String,
        default:''
    },
    "imgUrl":{ 
        type:String,
        default:''
    }
}

const NewyearprolistModel = mongoose.model('newyearprolist',new mongoose.Schema(NewyearprolistSchema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))


const NewyearprolistAdd = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const NewyearprolistModelInstance = new NewyearprolistModel(dataObj)
        NewyearprolistModelInstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}

const Newyearprolist2Schema = {
    "productname": {
        type:String,
        trim: true,
        require:true,
        unique:true,
    },
    "cid":{
        type:String,
        set() { 
            return 'jd' + this.productname + Math.ceil(Math.random()*1000)
        }
    },
    "protast":{ 
        type:String,
        default:''
    },
    "imgUrl":{ 
        type:String,
        default:''
    },
    "imgUrlbg":{ 
        type:String,
        default:''
    }
}

const Newyearprolist2Model = mongoose.model('newyearprolist2',new mongoose.Schema(Newyearprolist2Schema,{timestamps:{createdAt: 'created',updatedAt: 'updated'}}))


const Newyearprolist2Add = (dataObj={})=> {
    return new Promise((resolve,reject)=> {
        const Newyearprolist2ModelInstance = new Newyearprolist2Model(dataObj)
        Newyearprolist2ModelInstance.save((err,docs)=> {
            if(err) reject (err)
            resolve(docs)
        })
    })
}
module.exports = {
    IndswpierAdd,
    IndbrandshowAdd,
    BoxlistAdd,
    IndscrollnewstextAdd,
    SksectionAdd,
    NewyearprolistAdd,
    Newyearprolist2Add
}
