const redis = require('redis')

const { REDIS_CONF } = require('../../config/db.js')

client = redis.createClient(
    `${REDIS_CONF.port}`,
    `${REDIS_CONF.host}`
    // {auth_pass: 'password'}
    //{connect_timeout:1}
);

client.info((err,response)=>{
    if(err) throw err
    console.log(`redis connect ${REDIS_CONF.port},${REDIS_CONF.host}`);
});

client.on("error", (err)=> {
    console.log("Error " + err);
});
