const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry:path.join(__dirname,'./src/main.js'),//文件入口，要使用webpack 打包哪个文件
	output: {
		path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
		filename:'bundle.js'//这是指定 输出文件的名称
	},
	plugins:[//配置插件的节点
		// new webpack.HotModuleReplacementPlugin(),  //new 一个hot模块的实例对象这样hot配置就好了这种不推荐
		new htmlWebpackPlugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'//指定内存中生成页面的名称可以自己取名
		}),//创建一个 在内存中生成HTML的插件
		//配置mui js插件
		new webpack.ProvidePlugin({
			// 将mui引用变为全局变量，可以在该插件中配置
       		mui: "mui",
        	"window.mui": "mui"
	    }),
	    // new webpack.DefinePlugin({
	    //    // 'process.env': require('../config/dev.env')
	    //    'process.env': NODE_ENV: isDev ? '"development"' : '"production"'
	    // }),

	],
	module:{
		rules:[
			{ test: /\.css$/,use:['style-loader', 'css-loader']},//配置处理.css文件的第三方loader规则
			{ test: /\.less$/,use:['style-loader', 'css-loader','less-loader']},//配置处理.less文件的第三方loader规则
			{ test: /\.scss$/,use:['style-loader', 'css-loader','sass-loader']},//配置处理.scss文件的第三方loader规则
			{ test: /\.jpg|png|gif|bmp|jpeg$/,use:'url-loader'},
			{ test: /\.ttf|eot|svg|woff|woff2$/,use:'url-loader'},//这里是处理文字文件，同上面同一个处理loader但是不要放在一起
			{ test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置Babel处理es6，es7高级语法转化为es5语法
			{ test:/\.vue$/,use:'vue-loader'}//处理vue格式文件
		]
	},
	resolve: {
		alias:{//修改vue的导入方式，使用没有阉割版的VUE文件,import时直接引入vue即可
			'vue$':'vue/dist/vue.js',
			//注意，不知何故mui.js有bug，故使用mui.min.js
			'mui': path.resolve(__dirname, './src/lib/mui-master/dist/js/mui.min.js')
		}
	}
}

