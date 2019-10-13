const fs = require('fs')
const path = require('path')
const FileSteamRotator = require('file-stream-rotator')

//保证logs文件夹的存在
const logs = path.join(process.cwd(),'logs')
fs.existsSync(logs) || fs.mkdirSync(logs)

//写日志 log是需要写入的内容  writeSteam是哪一种需要的日子 包括 access  error 等
function writeLog(writeStream,log) {
    writeStream.write(log + '\n')
}

//生成write Stream
function createWriteStream(fileName) {
    //路径拼接，从该文件到达logs文件夹
    const fullFileName = path.join(logs,fileName)
    const writeStream = fs.createWriteStream(fullFileName,{flag:'a'})

    return writeStream
}

const accessLogStream = FileSteamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: path.join(logs, 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: false
})

const errorLogStream = FileSteamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: path.join(logs, 'error-%DATE%.log'),
    frequency: 'daily',
    verbose: false
})

const accessWriteStream = createWriteStream('access.log')
const errorWriteStream = createWriteStream('error.log')
const eventWriteStream = createWriteStream('event.log')

//写访问日志
function access(log) {
    // if(env === 'production'){
        writeLog(accessWriteStream,log)
    // }
}
//写错误日志
function error(log) {
    // if(env === 'production'){
        writeLog(errorWriteStream,log)
    // }
}
//写事件日志
function event(log) {
    // if(env === 'production'){
        writeLog(eventWriteStream,log)
    // }
}

// function readSyn() {
//     process.stderr.pause();
//     var response = fs.readSync(process.stderr.fd, 1000, 0, "utf8");
//     process.stderr.resume();
//     return response[0].trim();
// }

module.exports={
    accessWriteStream,
    accessLogStream,
    errorWriteStream,
    eventWriteStream,
    errorLogStream
    // readSyn
}