var md = `
- item 1
- item 2
- item 3

1. item 1
2. item 2
3. item 3`;

md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(ret);

module.exports = md2pug;
