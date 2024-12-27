
const dirinfo = require('./dirinfo');

let version = dirinfo.myversion
console.log(version);

let dirs = dirinfo.lsElems('./data');
console.log(dirs);