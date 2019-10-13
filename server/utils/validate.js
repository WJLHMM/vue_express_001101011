const Schema = require('validate')


const userLoginPost = new Schema({
    username: {
      type: String,
      required: true,
      length: { min: 6, max: 12 },
      match: /^[a-zA-Z]{1}[a-zA-Z0-9_-]/,
      message: {
        type: '用户名必须是字符串',
        required: '必须要有用户名.',
        length:'用户名长度必须6到12',
        match:'用户名仅能包括数组，字母_-!#@，并且第一个字符必须是字母'
      }
    },
    password: {
        type: String,
        required: true,
        length: { min: 6, max: 12 },
        match:/^[a-zA-Z0-9_!#@]/,
        message: {
          type: '密码必须是字符串',
          required: '必须要有密码.',
          length:'密码长度必须6到12',
          match:'密码仅能包括数组，字母_-!#@'
        }
      }
})


module.exports = {
    userLoginPost
}