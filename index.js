var md = `## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`;


md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(md);
console.log(ret);

module.exports = md2pug;
