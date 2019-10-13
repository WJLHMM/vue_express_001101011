const mongoose = require('mongoose')


//创建collection模型 ,注意相同的collectionmodel 只需要定义一次，否则在使用过程中会出现报错
//相同的model需要一个全局变量，以免报错Cannot overwrite `` model once compiled.
let collectionModel = null

/*
   查询获取数据
    @param collecionName  数据库表单名称
    @param SchemaObj      Schema模型格式
    @param keyObj         查询关键字，json格式，默认无

*/


const  colFind = (collectionName,SchemaObj={},keyObj={}) => {
    /*
        创建collection模型 ,注意相同的collectionmodel 只需要定义一次，否则在使用过程中会出现报错
        Cannot overwrite `` model once compiled.
    */
    if(!collectionModel) {
        collectionModel = mongoose.model(collectionName,new mongoose.Schema(SchemaObj))
    }
    /*使用promise返回查询结果*/
    return new Promise((resolve,reject)=> {
        collectionModel.find(keyObj,(err,doc)=> {
            if(err) return reject(err)
            resolve(doc)
        })
    })
   
}


/*
    添加数据
    @param collecionName  数据库表单名称
    @param SchemaObj      Schema模型格式
    @param dataObj        需要保存的数据json格式

*/
const  colAdd = (collectionName,SchemaObj,dataObj) => {
     /*
        创建collection模型 ,注意相同的collectionmodel 只需要定义一次，否则在使用过程中会出现报错
        Cannot overwrite `` model once compiled.
    */
    if(!collectionModel) {
        collectionModel = mongoose.model(collectionName,new mongoose.Schema(SchemaObj))
    }
    
    /*添加数据*/
    const collectionInstance = new collectionModel(dataObj)
    collectionInstance.save()
}



module.exports = {
    colFind,
    colAdd

}