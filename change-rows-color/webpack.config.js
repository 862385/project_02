// 导入node.js中专门操作路径的模块
const path = require('path')


// 1.导入html-webpack-plugin 这个插件，得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 2.new 构造函数 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 指定要复制那个页面
    template: './src/index.html',
    // 指定复制出来的文件名和存放路径
    filename: './index.html'
})


// 使用Node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    // 代表webpack运动的模式，可选值有两个development和production
    mode:'development',
    // entry:'指定要处理那个文件'  entry节点指定打包的入口
    entry:path.join(__dirname, './src/index1.js'),
    // 指定生成的文件存放在哪里
    output: {
        // 存放到目录
        path: path.join(__dirname,'dist'),
        // 生成的文件名
        filename: 'bundle.js'
    },
    // 插件的数组 将来webpack在运行时，会加载并调用这些插件
    plugins: [htmlPlugin],
    devServer: {
        // 首次打包成功后，自动打开浏览器
        open:true,
        // 在http协议中，如果端口号是80 则可以被省略
        port: 80,
        // 指定运行的主机地址
        host: '127.0.0.1'
    },
    module: {
        rules: [
            //定义了不同模块对应的loader
            //定义了不同模块对应的loader
            {test: /\.css$/, use:['style-loader', 'css-loader']},
            //处理.less文件的loader
            {test: /\.less$/,use:['style-loader','css-loader','less-loader']},
            //处理图片文件的loader
            // 如果需要调用的loader只有一个，则只传递一个字符串也行，如果有多个loader则必须指定数组
            {test: /\.jpg|png|gif$/,use: 'url-loader?limit=22229' },
            // 使用babel-loader处理高级js语法
            //在配置babel-loader的时候，程序员只需要把自己的代码进行转换即可；一定要排除node_modules目录中的js文件
            // 因为第三方包中的js兼容性，不需要程序员关心
            {test: /\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    },
    resolve: {
        alias: {
          // 告诉 webpack，程序员写的代码中，@ 符号表示 src 这一层目录
          '@': path.join(__dirname, './src/')
        }
      } 
}

// 结论：开发的时候一定要用development 因为开发追求的是速度 而不是体积
// 上线的时候要用production因为上线追求的是体枳
