const redis = require('redis')

const { REDIS_CONF } = require('../../config/db.js')
const { loggerWin } = require('../../utils/expressWinston.js')


client = redis.createClient(
    `${REDIS_CONF.port}`,
    `${REDIS_CONF.host}`
    // {auth_pass: 'password'}
    //{connect_timeout:1}
);

// client.info((err,response)=>{
//     if(err) {
//     	 loggerWin.error(`${err}`)
//     }
//     loggerWin.info (`redis connect ${REDIS_CONF.port},${REDIS_CONF.host}`)
//     // console.log(``);
// });
client.on("connect",(err,response)=>{
    if(err) {
         loggerWin.error(`${err}`)
    }
    loggerWin.info (`redis connect ${REDIS_CONF.port},${REDIS_CONF.host}`)
   
})

client.on("error", (err)=> {
    loggerWin.error(`${err}`)
    // console.log("Error " + err);
});
