const path = require('path')

module.exports = {
  mode: 'development',  //开发模式
  // mode: 'production',  //生产模式

  //入口
  entry: './src/main.js',

  //出口
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'zyh_utils.js',
    // filename: 'zyh_utils.min.js',
    library: 'aUtils',  //向外暴露的对象的名称
    libraryTarget: 'umd',  //打包生成库可以通过esm / commenjs / requirejs 的语法引入
  }
}