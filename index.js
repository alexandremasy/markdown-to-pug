var md = `![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")`;

md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(1, md);
console.log(2, ret);

module.exports = md2pug;
