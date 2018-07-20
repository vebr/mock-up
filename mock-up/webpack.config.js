const path = require("path");

// Saya tau ini jauh dari sempurna tapi ini hanya untuk demo.
module.exports = {

    entry: path.resolve(__dirname + '/src/js/index.js'),
    mode: "production",
    output: {

        path: path.resolve(__dirname),
        filename: "bundle.js"
    }
};