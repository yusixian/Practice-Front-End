# 安装
```
npm i -D webpack webpack-cli
```
# 编辑配置文件
webpack.config.js
```js
module.exports = {
    entry: 'main.js',   // 定义当前项目的入口文件
    output: {   // 定义当前项目的输出文件
        filename: "[name].js",
        path: path.join(__dirname, "./dist"),
    },
    module: {
        rules: [{
            test: /\.less$/i,
            use: ['style-loader', 'css-loader', 'less-loader']
        }]
    }
}
```
# 编译
```js
npx webpack
```