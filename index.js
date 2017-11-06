var md = `\`\`\`
Sample text here...
\`\`\``;


md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(0, md);
console.log(1, ret);

module.exports = md2pug;
