const _ = require("lodash"); 

exports.handler = function() {
    const array = [1,2,3];
    console.log(_.map(array, item => item + 1));
}

