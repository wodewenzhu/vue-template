
module.exports = {
    productionSourceMap: true,
    devServer: {
        port: 8090,
        open: true
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.vue$/,
    //             loader: 'vue-loader'
    //         }
    //     ]
    // },
    
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        "rootValue":32,   //结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
                        "propList":["*"]
                    })
                    
                ]
            }
        }
    },
}