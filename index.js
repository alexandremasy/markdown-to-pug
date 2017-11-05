var md = 'Inline `coding`';

md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(1, ret);

module.exports = md2pug;
