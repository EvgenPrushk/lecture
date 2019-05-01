const path = require('path');

modele.export = {
    entry: path.join(__dirname, 'app.js'),
    output: {
        filename: './app.bundle.js'
    },
    module: {
       rules: [
           {text: /\.txt$/, loader: 'text-loader' },
           {text: /\.txt$/, loader: 'text-loader' }
       ] 
    }

};