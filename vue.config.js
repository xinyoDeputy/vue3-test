module.exports = {
    chainWebpack: (config) => {
    config.module
        .rule('eslint')
        .exclude
        .add(/sites/)
        .end()
    },
}