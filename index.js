var md = `\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\``;


md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(ret);

module.exports = md2pug;
