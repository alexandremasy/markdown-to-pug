var blockquotes1 = '> one line';
var blockquotes2 = '>> ...by using additional greater-than signs right next to each other...';
var blockquotes3 = '> > > ...or with spaces between arrows.';

md2pug = new (require('./lib/markdown-to-pug'))();
// console.log(md2pug.render(blockquotes1));

module.exports = md2pug;
