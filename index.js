// var md = `<!-- extends /layout/base -->\n<!-- block abc -->\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n# Test Heading 1\n\nTestP\n<!-- block def -->\n\t![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n<!-- block foo -->\n# Test Heading 2\nTestP2\n<!-- include foo.pug -->\nTestP3\n\n\tTest Code`;

// md2pug = new (require('./lib/markdown-to-pug'))();
// let ret = md2pug.render(md);
// console.log(md);
// console.log();
// console.log(ret);

module.exports = require('./lib/markdown-to-pug');
