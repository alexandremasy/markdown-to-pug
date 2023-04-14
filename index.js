 var md = `<!-- extends /layout/base -->\n<!-- block abc -->\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n# Test Heading 1\n\nTestP\n<!-- block def -->\n\t![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n<!-- block foo -->\n<!-- include foo.pug -->`;

 md2pug = new (require('./lib/markdown-to-pug'))();
 let ret = md2pug.render(md);
 console.log(md);
 console.log();
 console.log(ret);

module.exports = require('./lib/markdown-to-pug');
