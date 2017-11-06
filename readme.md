[![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg)](https://circleci.com/gh/alexandremasy/markdown-to-pug)

# Markdown To PugJS
> Convert your Markdown to PugJS

---

## Why?

Sometimes you like the simplicity of markdown to just express whatever you want to say, but want to keep control on how it will look like. This is what it is about, get control over the output while adding simple ways to take advantage of the PugJS functionalities like mixins and layout.



## Install

**NodeJS**

```shell
npm --save install markdown-to-pug
```

or

```shell
yarn add markdown-to-pug
```



**Dependencies**

- [Markdown-It](https://github.com/markdown-it/markdown-it)




## API

#### constructor(options)

**Parameters**

| Property | Type   | Description                 |
| -------- | ------ | --------------------------- |
| options  | Object | An object with the options. |



**Options**

| Option        | Description                              |
| ------------- | ---------------------------------------- |
| `newline`     | Newline definition. Default value: `\n`  |
| `space`       | Space definition. Default value: `\t`    |
| `linkify`     | Allow the use of Linkify by MarkdownIt. Default value: `true` |
| `typographer` | Allow the use of Typographer by MarkdownIt. Default value: `true` |
| `langPrefix`  | Prefix to use to generate class on code block. Default value: `language-` |



### .render(src)

**Parameters**

| Property | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| src      | String | The Markdown you like to convert |



**Return**

| Type   | Description      |
| ------ | ---------------- |
| String | The PugJS String |



## Example

```js
var md2pug = new (require('markdown-to-pug'))();

var md = `![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")`;
var pug = md2pug.render(md);
```



