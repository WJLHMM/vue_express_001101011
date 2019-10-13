var express = require('express');
var router = express.Router();


/* GET home page. */


router.get('/api/sellerlist', (req, res, next)=> {

  // await next()
  //res.render('index', { title: 'Express' });
  
   res.json({
    "success":true,
    "data":[
    
      {
        "level":0,
        "id":0,
        "proname":"Apple iPhone XR",
        "proseller":"Apple产品京东自营旗舰店%",
        "fanamount":"13172893",
        "productamount":"791",
        "shopLogourl":"https://img13.360buyimg.com/zx/jfs/t14572/59/2202344014/21812/f677149/5a9cc0eaNd99ac51b.jpg!q70.dpg"
        
      },
      {
        "level":0,
        "id":1,
        "proname":"Apple iPhone X",
        "proseller":"Apple产品京东自营旗舰店%",
        "fanamount":"13172893",
        "productamount":"791",
        "shopLogourl":"https://img13.360buyimg.com/zx/jfs/t14572/59/2202344014/21812/f677149/5a9cc0eaNd99ac51b.jpg!q70.dpg"
        
      },
      {
        "level":0,
        "id":2,
        "proname":"Apple iPhone 8 Plus",
        "fanamount":"13172893",
        "productamount":"791",
        "proseller":"Apple产品京东自营旗舰店%",
        "shopLogourl":"https://img13.360buyimg.com/zx/jfs/t14572/59/2202344014/21812/f677149/5a9cc0eaNd99ac51b.jpg!q70.dpg"
        
  
      },
      {
        "level":0,
        "id":3,
        "proname":"Apple iPhone Xs Max",
        "proseller":"Apple产品京东自营旗舰店%",
        "fanamount":"13172893",
        "productamount":"791",
        "shopLogourl":"https://img13.360buyimg.com/zx/jfs/t14572/59/2202344014/21812/f677149/5a9cc0eaNd99ac51b.jpg!q70.dpg"
      },
      {
        "level":0,
        "id":4,
        "proname":"Apple iPhone XS",
        "proseller":"Apple产品京东自营旗舰店",
        "fanamount":"13172893",
        "productamount":"791",
        "shopLogourl":"https://img13.360buyimg.com/zx/jfs/t14572/59/2202344014/21812/f677149/5a9cc0eaNd99ac51b.jpg!q70.dpg"
        
      },
      {
        "level":0,
        "id":5,
        "proname":"华为 HUAWEI Mate 20",
        "proseller":"华为京东自营官方旗舰店",
        "fanamount":"89797987",
        "productamount":"164",
        "shopLogourl":"https://img12.360buyimg.com/cms/jfs/t21946/36/177650036/4805/401d0ec0/5b00f32cNe24f6c24.jpg!q70.dpg"
        
      },
      {
        "level":0,
        "id":6,
        "proname":"华为 HUAWEI Mate 20 Pro",
        "proseller":"华为京东自营官方旗舰店",
        "fanamount":"89797987",
        "productamount":"164",
        "shopLogourl":"https://img12.360buyimg.com/cms/jfs/t21946/36/177650036/4805/401d0ec0/5b00f32cNe24f6c24.jpg!q70.dpg"
      },
      {
        "level":0,
        "id":7,
        "proname":"华为 HUAWEI 畅享9 Plus",
        "proseller":"华为京东自营官方旗舰店",
        "fanamount":"89797987",
        "productamount":"164",
        "shopLogourl":"https://img12.360buyimg.com/cms/jfs/t21946/36/177650036/4805/401d0ec0/5b00f32cNe24f6c24.jpg!q70.dpg"
        
      },
      {
        "level":0,
        "id":8,
        "proname":"华为 HUAWEI P20",
        "proseller":"华为京东自营官方旗舰店",
        "fanamount":"89797987",
        "productamount":"164",
        "shopLogourl":"https://img12.360buyimg.com/cms/jfs/t21946/36/177650036/4805/401d0ec0/5b00f32cNe24f6c24.jpg!q70.dpg"
      },
      {
        "level":0,
        "id":9,
        "proname":"华为新品 HUAWEI nova 4",
        "proseller":"华为京东自营官方旗舰店",
        "fanamount":"89797987",
        "productamount":"164",
        "shopLogourl":"https://img12.360buyimg.com/cms/jfs/t21946/36/177650036/4805/401d0ec0/5b00f32cNe24f6c24.jpg!q70.dpg"
      },
      {
        "level":0,
        "id":10,
        "proname":"漫步者（EDIFIER）W200BT经典版",
        "proseller":"BOSE京东自营旗舰店",
        "fanamount":"89987",
        "productamount":"28",
        "shopLogourl":"https://img12.360buyimg.com/jshopm/jfs/t18514/291/1502843953/4777/60ce3fd5/5acc7eb3Nd7e61e85.jpg!q70.dpg"
      },
      {
        "level":0,
        "id":11,
        "proname":"Bose QuietControl 30",
        "proseller":"漫步者京东自营旗舰店",
        "fanamount":"885757",
        "productamount":"567",
        "shopLogourl":"https://img12.360buyimg.com/cms/jfs/t23254/339/1088150080/11727/15e7998c/5b500128Nbcb06292.jpg!q70.dpg"
      },
      {
        "level":0,
        "id":12,
        "proname":"Apple  AirPods 蓝牙无线耳机",
        "proseller":"Apple产品京东自营旗舰店",
        "fanamount":"13172893",
        "productamount":"791",
        "shopLogourl":"https://img13.360buyimg.com/zx/jfs/t14572/59/2202344014/21812/f677149/5a9cc0eaNd99ac51b.jpg!q70.dpg%"
      },
      {
        "level":0,
        "id":13,
        "proname":"三星（SAMSUNG）Gear IconX 2018升级款",
        "proseller":"三星影音京东自营旗舰店",
        "fanamount":"132893",
        "productamount":"1",
        "shopLogourl":"https://img30.360buyimg.com/popshop/jfs/t6148/145/93595068/5773/730bd20/59392653Nbb0017fa.jpg!q70.dpg"
      },
      {
        "level":0,
        "id":14,
        "proname":"索尼（SONY）WI-1000X",
        "proseller":"SONY京东自营官方旗舰店",
        "fanamount":"12893",
        "productamount":"19",
        "shopLogourl":"https://img30.360buyimg.com/popshop/jfs/t2116/181/1790946300/4424/8c363364/5670f8d0Na9e00a8a.jpg!q70.dpg"
      }
    ]
  })
});

module.exports = router;
