const path = require('path');
let moduleRule = {
    rules: [
        {
            test: '/\.tsx?$/',
            use: 'ts-loader',
            exclude: '/node_modules/'
        }
    ]
};
let resolveRule = {
    extensions: [ '.tsx', '.ts', '.js' ]
};
module.exports = [{
    entry: './src/main.ts',
    module: moduleRule,
    resolve: resolveRule,
    output: {
        filename: 'index.umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'tsUtil',
        libraryTarget: 'umd'
    }
}, {
    entry: './src/main.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'tsUtil',
        libraryTarget: 'window'
    },
    resolve: resolveRule,
    module: moduleRule
}, {
    entry: './src/main.ts',
    output: {
        filename: 'index.amd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'tsUtil',
        libraryTarget: 'amd'
    },
    resolve: resolveRule,
    module: moduleRule
}, {
    entry: './src/main.ts',
    output: {
        filename: 'index.common.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'tsUtil',
        libraryTarget: 'commonjs'
    },
    resolve: resolveRule,
    module: moduleRule
}
]