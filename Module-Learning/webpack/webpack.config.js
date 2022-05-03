var webpack = require("webpack");
const path=require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

//这个配置文件，其实就是一个JS文件，通过Node中的模块操作，向外暴露了一个配置对象
module.exports={
	//在配置文件中需要手动指定入口和出口
	// mode:'development',//设置mode
	mode: 'production',
	entry:path.join(__dirname,'./src/index.js'),//入口，表示要使用webpack打包哪个文件
	output:{
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
		// ,publicPath: '/dist/'
	},
	module:{
	  rules:[
		{//babel
		  test:/\.js?$/,
		  use:[{
			  loader: 'babel-loader',
			  options: {
				  presets: [
					  [
						  '@babel/preset-env'
					  ]
				  ]
			  }
		  }]
		},
		{
		  test:/\.css$/,	// 过滤条件，满足这个条件的采取处理
		  // css-loader只负责将css文件进行加载
		  // style-loader负责将样式添加到DOM中，要放在css-loader的前面
		  // webpack在使用多个loader时，是按照从右向左（或者说从下到上）的顺序使用
		  use:['style-loader','css-loader']
		},
		{
		  test: /\.less$/,
		  use: [{
			loader: "style-loader" // creates style nodes from JS strings
		  }, {
			loader: "css-loader" // translates CSS into CommonJS
		  }, {
			loader: "less-loader" // compiles Less to CSS
		  }]
		}
		// ,
		// {
		// 	test: /\.(png|jpg|gif|svg)$/,
		// 	loader: 'file-loader',
		// 	options: {
		// 		name: 'images/[name].[ext]'
		// 	}
		// },
		// {
		//   test: /\.(png|jpg|gif)$/,
		//   use: [
		// 	{
		// 	  loader: 'url-loader',
		// 	  options: {
		// 		limit: 8192,//对图片的大小做限制，8kb
		// 		name: 'images/[name].[ext]',
		// 	  }
		// 	}
		//   ]
		// }
		// ,
		// { 
		// 	test: /\.html$/,
		// 	use: [
		// 		'html-withimg-loader',
		// 		// ！！！！！注意：webpack5需要用html-withimg-loader打包才能显示
		// 		// 'html-loader',
		// 	],
		// 	// loader: 'html-loader',
		// }
	  ]
	}
}
