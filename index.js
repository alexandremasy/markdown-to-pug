var md = `[link text](http://google.com)`;

md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(1, md);
console.log(2, ret);

module.exports = md2pug;
