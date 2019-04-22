const path = require('path');
module.exports = {
    productionSourceMap: false, // 배포용 빌드시 소스맵 생성 여부
    filenameHashing: false, // output hash 여부
    chainWebpack: config => { config.resolve.alias.set('@', path.resolve(__dirname, 'src')); }, // 작업시 기본 루트 설정
    devServer: {
        proxy: {
            "/api": {
                target: "http://m.lotte.com",
                changeOriin: true,
                pathRewrite: {
                    "^/api": ""
                }
            },
        }
    },

}