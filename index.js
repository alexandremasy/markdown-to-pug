 var md = `<!-- extends /layout/base -->\n<!-- block abc -->\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n<!-- block def -->\n\t![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")\n\t<!-- include footer -->`;

 md2pug = new (require('./lib/markdown-to-pug'))();
 let ret = md2pug.render(md);
 console.log(md);
 console.log();
 console.log(ret);

module.exports = require('./lib/markdown-to-pug');
