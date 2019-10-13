
const expressWinston = require('express-winston')
const winston = require('winston')
const { createLogger, format, transports } = require('winston')
let { combine, timestamp, label, printf } = format
const path = require('path')
const moment = require('moment')
const winstonDailyRotateFile = require('winston-daily-rotate-file')

//express-winston
const epressWinstonLogger = expressWinston.logger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
})

const expressWinstonErrorLogger = expressWinston.errorLogger({
    transports: [
      new winston.transports.Console()
    ],
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    )
})

//winston
let customLevels = {
  colors: {
      debug: 'blue',
      info: 'green',
      warn: 'yellow',
      error: 'red'
  }
};
const datashow = moment().format('YYYYMMDD')
const myFormat = printf(({ level, message, label}) => {
  return `${level}:${moment().format('YYYY-MM-DD HH:mm:ss') }[${label}]  ${message}`;
});
const loggerWin = winston.createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    // format.colorize(),  打印台同文件写入中颜色 无法同时实现
    format.errors({ stack: true }),
    myFormat
  ),
  defaultMeta: { service: 'express001' },
  // transports: [
  //   //
  //   // - Write to all logs with level `info` and below to `combined.log` 
  //   // - Write all logs error (and below) to `error.log`.
  //   //
  //   new winston.transports.File({ 
  //     filename: path.join(process.cwd(),'logs', 'errorWin.log'),
  //     level: 'error' ,
  //     colorize: true,
  //     format: combine(
  //       myFormat
  //     )
  //   }),
  //   new winston.transports.File({ 
  //     filename: path.join(process.cwd(),'logs','combinedWin.log'),
  //     level: 'info' ,
  //     colorize: true,
  //     format: combine(
  //       myFormat
  //     )
  //   })
  // ]
})

loggerWin.configure({
  transports: [
    new winstonDailyRotateFile({ 
      filename: path.join(process.cwd(),'logs', 'errorWin-%DATE%.log'),
      datePattern: 'YYYYMMDD',
      level: 'error' ,
      colorize: false,
      format: combine(
        myFormat
      )
    }),
    new winstonDailyRotateFile({ 
      filename: path.join(process.cwd(),'logs','combinedWin-%DATE%.log'),
      // filename: path.join(process.cwd(),'logs',`combinedWin${datashow}.log`),
      datePattern: 'YYYYMMDD',
      level: 'info' ,
      colorize: false,
      format: combine(
        myFormat
      )
    })
  ]
})
if (process.env.NODE_ENV !== 'production') {
  loggerWin.add(new winston.transports.Console({
    // format: winston.format.simple(),
    json:false,
    prettyPrint:true,
    colorize:true,
    level:'info',
    format: combine(
      myFormat,
      winston.format.simple(),
      format.colorize()
    )
  }));
}

winston.addColors(customLevels.colors);

module.exports = {
    epressWinstonLogger,
    expressWinstonErrorLogger,
    loggerWin
}