var md = `# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading`;

md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(ret);

module.exports = md2pug;
