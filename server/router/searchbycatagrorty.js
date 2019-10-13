var express = require('express');
var router = express.Router();


/* GET news page. */
router.get('/api/searchbycatagrorty', (req, res, next)=> {

   res.json(
    {
      "success":true,
      "data":{
        "catalogyList": [
          { 
            "level": 0, 
            "name": "热门推荐", 
            "cid": "WQR2006",
            "commonUsed": "undefined", 
            "ptag": "137886.1.10",
            "WQR2006":[
              {
                "level":1,
                "id":0,
                "productname":"苹果",
                "imgurl":"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png"
              },{
                "level":1,
                "id":1,
                "productname":"耳机",
                "imgurl":"https://img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png"
              },{
                "level":1,
                "id":2,
                "productname":"华为",
                "imgurl":"https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png"
              },{
                "level":1,
                "id":3,
                "productname":"电饭煲",
                "imgurl":"https://img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png"
              },{
                "level":1,
                "id":4,
                "productname":"电磁炉",
                "imgurl":"https://img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png"
              },{
                "level":1,
                "id":5,
                "productname":"路由器",
                "imgurl":"https://img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png"
              },{
                "level":1,
                "id":6,
                "productname":"避孕套",
                "imgurl":"https://img30.360buyimg.com/focus/s140x140_jfs/t1/18974/35/9836/31220/5c82223eE5dcc61b8/4e93c1fbb777bfca.png"
              },{
                "level":1,
                "id":7,
                "productname":"口红",
                "imgurl":"https://img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png"
              },{
                "level":1,
                "id":8,
                "productname":"吹风机",
                "imgurl":"https://img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png"
              },{
                "level":1,
                "id":9,
                "productname":"三只松鼠",
                "imgurl":"https://img11.360buyimg.com/focus/s140x140_jfs/t1/30718/32/2643/9923/5c6d03ecEabd2d664/aaee556800519e1f.png"
              },{
                "level":1,
                "id":10,
                "productname":"洗衣液",
                "imgurl":"https://img13.360buyimg.com/focus/s140x140_jfs/t1/23312/39/9884/7280/5c822292E65f3929b/78ba741d321954b0.png"
              },{
                "level":1,
                "id":11,
                "productname":"保温杯",
                "imgurl":"https://img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png"
              },{
                "level":1,
                "id":12,
                "productname":"微波炉",
                "imgurl":"https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png"
              },{
                "level":1,
                "id":13,
                "productname":"洗发水",
                "imgurl":"https://img13.360buyimg.com/focus/s140x140_jfs/t1/25168/27/9848/15397/5c822507E35d2ad16/384983a98758f8f8.png"
              },{
                "level":1,
                "id":14,
                "productname":"卫生巾",
                "imgurl":"https://img20.360buyimg.com/focus/s140x140_jfs/t1/19562/14/9878/32183/5c8225f6E7c332db7/c886e52dc05b9ae4.png"
              }
            ]
          },
          {	
            "level": 0, 
            "name": "手机数码", 
            "cid": "WQ1980", 
            "commonUsed": true, 
            "ptag": "137886.1.2500",
            "WQ1980":[
              {
                "level":1,
                "id":0,
                "productname":"小米",
                "imgurl":"https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png"
              },{
                "level":1,
                "id":1,
                "productname":"华为",
                "imgurl":"https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg"
              },{
                "level":1,
                "id":2,
                "productname":"荣耀",
                "imgurl":"https://img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg"
              },{
                "level":1,
                "id":3,
                "productname":"iPhone",
                "imgurl":"https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg"
              },{
                "level":1,
                "id":4,
                "productname":"VIVO",
                "imgurl":"https://img11.360buyimg.com/focus/s140x140_jfs/t11014/359/2341377211/2777/1755c29c/5a169244Nff0179e0.png"
              },{
                "level":1,
                "id":5,
                "productname":"OPPO",
                "imgurl":"https://img13.360buyimg.com/focus/s140x140_jfs/t13036/273/932026474/2570/a3517c7d/5a169254N4bbbd9fb.png"
              },{
                "level":1,
                "id":6,
                "productname":"魅族",
                "imgurl":"https://img20.360buyimg.com/focus/s140x140_jfs/t12820/326/909017718/7138/68cde747/5a169243N40eca33c.jpg"
              },{
                "level":1,
                "id":7,
                "productname":"三星",
                "imgurl":"https://img13.360buyimg.com/focus/s140x140_jfs/t11509/131/2348573811/3425/4f20fe6/5a16925aN8a6dfd03.png"
              },{
                "level":1,
                "id":8,
                "productname":"一加",
                "imgurl":"https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg"
              },{
                "level":1,
                "id":9,
                "productname":"360手机",
                "imgurl":"https://img20.360buyimg.com/focus/s140x140_jfs/t13096/309/908035611/5138/5558f001/5a16924fNeac7677e.jpg"
              },{
                "level":1,
                "id":10,
                "productname":"锤子手机",
                "imgurl":"https://img20.360buyimg.com/focus/s140x140_jfs/t19387/332/664528115/8176/5eabe8cb/5a9fa5e0N6754e52a.jpg"
              },{
                "level":1,
                "id":11,
                "productname":"努比亚",
                "imgurl":"https://img12.360buyimg.com/focus/s140x140_jfs/t15085/289/2395028996/2546/1e7e1f7b/5a9fa5e7Nc5cc0f6b.jpg"
              }
            ]
          },
          {
            "level": 0, 
            "name": "家用电器", 
            "cid": "WQ1982", 
            "commonUsed": true, 
            "ptag": "137886.1.2900",
            "WQ1982":[]
          },
          {
            "level": 0,
            "name": "电脑办公",
            "cid": "WQ1981",
            "commonUsed": true,
            "ptag": "137886.1.2700",
              "WQ1981":[{
              "level":1,
              "id":0,
              "productname":"苹果",
              "imgurl":"https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png"
            }]},
          {"level": 0, "name": "计生情趣", "cid": "WQ1988", "commonUsed": true, "ptag": "137886.1.4100","WQ1988":[]},
          {"level": 0, "name": "美妆护肤", "cid": "WQ2044", "commonUsed": "undefined", "ptag": "137886.1.8000","WQ2044":[]},
          {"level": 0, "name": "个护清洁", "cid": "WQ2046", "commonUsed": "undefined", "ptag": "137886.1.9000","WQ2046":[]},
          {"level": 0, "name": "汽车生活", "cid": "WQ1990", "commonUsed": true, "ptag": "137886.1.4500","WQ1990":[]},
          {"level": 0, "name": "京东超市", "cid": "WQ1968", "commonUsed": true, "ptag": "137886.1.100","WQ1968":[]},
          {"level": 0, "name": "男装", "cid": "WQ1972", "commonUsed": true, "ptag": "137886.1.900","WQ1972":[]},
          {"level": 0, "name": "男鞋", "cid": "WQ1974", "commonUsed": true, "ptag": "137886.1.1300","WQ1974":[]},
          {"level": 0, "name": "女装", "cid": "WQ1973", "commonUsed": true, "ptag": "137886.1.1100","WQ1973":[]},
          {"level": 0, "name": "女鞋", "cid": "WQ1975", "commonUsed": "undefined", "ptag": "137886.1.1500","WQ1975":[]},
          {"level": 0, "name": "母婴童装", "cid": "WQ1985", "commonUsed": true, "ptag": "137886.1.3500","WQ1985":[]},
          {"level": 0, "name": "图书音像", "cid": "WQ1996", "commonUsed": "undefined", "ptag": "137886.1.5700","WQ1996":[]},
          {"level": 0, "name": "运动户外", "cid": "WQ1989", "commonUsed": "undefined", "ptag": "137886.1.4300","WQ1989":[]},
          {"level": 0, "name": "内衣配饰", "cid": "WQ1976", "commonUsed": true, "ptag": "137886.1.1700","WQ1976":[]},
          {"level": 0, "name": "食品生鲜", "cid": "WQ1983", "commonUsed": "undefined", "ptag": "137886.1.3100","WQ1983":[]},
          {"level": 0, "name": "酒水饮料", "cid": "WQ1984", "commonUsed": "undefined", "ptag": "137886.1.3300","WQ1984":[]},
          {"level": 0, "name": "家具家装", "cid": "WQ1992", "commonUsed": "undefined", "ptag": "137886.1.4900","WQ1992":[]},
          {"level": 0, "name": "家居厨具", "cid": "WQ1991", "commonUsed": "undefined", "ptag": "137886.1.4700","WQ1991":[]},
          {"level": 0, "name": "箱包手袋", "cid": "WQ1977", "commonUsed": "undefined", "ptag": "137886.1.1900","WQ1977":[]},
          {"level": 0, "name": "钟表珠宝", "cid": "WQ1979", "commonUsed": "undefined", "ptag": "137886.1.2300","WQ1979":[]},
          {"level": 0, "name": "玩具乐器", "cid": "WQ1986", "commonUsed": "undefined", "ptag": "137886.1.3700","WQ1986":[]},
          {"level": 0, "name": "医药保健", "cid": "WQ1987", "commonUsed": "undefined", "ptag": "137886.1.3900","WQ1987":[]},
          {"level": 0, "name": "宠物生活", "cid": "WQ1994", "commonUsed": "undefined", "ptag": "137886.1.5300","WQ1994":[]},
          {"level": 0, "name": "礼品鲜花", "cid": "WQ1993", "commonUsed": "undefined", "ptag": "137886.1.5100","WQ1993":[]},
          {"level": 0, "name": "农资绿植", "cid": "WQ1998", "commonUsed": "undefined", "ptag": "137886.1.7200","WQ1998":[]},
          {"level": 0, "name": "生活旅行", "cid": "WQ1995", "commonUsed": "undefined", "ptag": "137886.1.5500","WQ1995":[]},
          {"level": 0, "name": "奢侈品", "cid": "WQ1970", "commonUsed": "undefined", "ptag": "137886.1.500","WQ1970":[]},
          {"level": 0, "name": "海囤全球", "cid": "WQ1971", "commonUsed": "undefined", "ptag": "137886.1.700","WQ1971":[]},
          {"level": 0, "name": "艺术邮币", "cid": "WQ1997", "commonUsed": "undefined", "ptag": "137886.1.6600","WQ1997":[]},
          {"level": 0, "name": "二手商品", "cid": "WQ2002", "commonUsed": "undefined", "ptag": "137886.1.6800","WQ2002":[]},
          {"level": 0, "name": "特产馆", "cid": "WQ1999", "commonUsed": "undefined", "ptag": "137886.1.7300","WQ1999":[]},
          {"level": 0, "name": "京东金融", "cid": "WQ2000", "commonUsed": "undefined", "ptag": "137886.1.7500","WQ2000":[]},
          {"level": 0, "name": "国际名牌", "cid": "WQ1969", "commonUsed": "undefined", "ptag": "137886.1.300","WQ1969":[]},
          {"level": 0, "name": "拍卖", "cid": "WQ2001", "commonUsed": "undefined", "ptag": "137886.1.6700","WQ2001":[]},
          {"level": 0, "name": "房产", "cid": "WQ2008", "commonUsed": "undefined", "ptag": "137886.1.7000","WQ2008":[]},
          {"level": 0, "name": "工业品", "cid": "WQ2102", "commonUsed": "undefined", "ptag": "137886.1.7500","WQ2102":[]}
    
        ]
      }
    })
})



module.exports = router;
