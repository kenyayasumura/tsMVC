const path = require('path');

module.exports = {
    /*
      モード値を production に設定すると最適化された状態で、
      development に設定するとソースマップ有効でJSファイルが出力される
      "production" | "development" | "none"
    */
    mode: 'development',
    entry: './app/index.ts',

    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },

    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [
            '.ts',
            '.js'
        ]
    }
};
