const path=require('path')

module.exports= (env) => {
    const isProduction = env === 'production'
    // console.log(env)
    return {
        entry:'./src/app.js',
        output:{
            path:path.join(__dirname,'public'),
            filename:'bundle.js'
        },
        module:{
            rules:[{
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_modules/
            },{
                test:/\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                  ]
                }]
        },
        // to set the source map file, so we can see original source code in chrome dev tools
        //this is from webpack.js.org ...> dev tools
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map' ,
        devServer:{
            contentBase:path.join(__dirname,'public'),
            historyApiFallback:true// to handle the routing to client side
        }
        
    }
}