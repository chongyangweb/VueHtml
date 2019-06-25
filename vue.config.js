// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
	// plugins: [
	//     new BundleAnalyzerPlugin()
	// ],
    configureWebpack: {//这里是添加的部分
      externals:{
      	'vue': 'Vue',
    	'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
      }
    },
}
