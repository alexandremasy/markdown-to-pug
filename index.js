var md = `**This is bold text**

__This is bold text__`;

md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(0, ret);

module.exports = md2pug;
