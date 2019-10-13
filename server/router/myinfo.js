var express = require('express');
var router = express.Router();

const  { UserinfoFind } = require('../db/mongodb/userinfoSchema.js')

router.get('/api/myinfo', (req, res, next)=> {

    UserinfoFind()
        .then(data=> {
            // console.log('data',data)
            res.json(data)
        })
        .catch(err=>res.json(err));
})


module.exports = router
