const fs = require('fs');
const version = require('./package.json').version;

fs.writeFile("./dist/data-collection.js", version, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 