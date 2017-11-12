var md = `<!-- +hello('arg1', 2, {'item': 'value'}) -->\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")`;

md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(md);
console.log();
console.log(ret);

module.exports = md2pug;
