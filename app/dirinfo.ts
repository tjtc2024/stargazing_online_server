
const fs = require('fs');
const path = require('path');

exports.myversion = "0.1.0";

exports.lsAllFiles = (dir:string) => fs.readdirSync(dir);
exports.lsFilesWithExt = (dir:string, ext:string) => fs.readdirSync(dir).filter((f:string) => path.extname(f) == ext);
exports.lsFilesExt = (dir:string) => fs.readdirSync(dir).map((f:string) => path.extname(f));

exports.lsElems = (dir:string) => fs.readdirSync(dir).filter((elm:string) => elm.endsWith('.elm'));

