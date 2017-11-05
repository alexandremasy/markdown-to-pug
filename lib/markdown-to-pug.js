/**
 *  Markdown To PugJS
 *
 *  @author Alexandre Masy <hello@alexandremasy.com>
 **/
;(function()
{
  class MarkdownToPug
  {
    /**
     *  @param {Object} options
     **/
    constructor(options)
    {
      this.options = options;
    }

    /**
     *  Render the markdown to pugjs
     *
     *  @param {String} src
     *  @return {String}
     **/
    render(src)
    {
      const md = require('markdown-it')();

      let data = md.parse(src);
      let ret = '';

      data.forEach((e) => {
        switch (e.type)
        {
          case 'blockquote_open':
            ret += this.indent(this.blockquote(e.content), e.level);
            break;
          case 'paragraph_open':
            ret += this.indent(this.paragraph(e.content), e.level);
            break;
          case 'heading_open':
            ret += this.indent(this.heading(e.content, e.tag), e.level);
            break;
          case 'hr':
            ret += this.indent(this.hr(), e.level);
            break;

          case 'inline':
            ret += this.indent(e.content, e.level);
            break;

          default:
            console.log('undefined type', e.type);
            break;
        }
      })
      console.log(data);
      // console.log(ret);

      return ret.trim();
    }

    /**
     *  Properly indent the src
     *
     *  @param {String} src
     *  @param {int} level
     *  @return {String}
     **/
    indent(src, level)
    {
      let rep = '\n' + ('\t'.repeat(level));
      // console.log(level, src, rep);
      return rep + src;
    }

    /**
     *  Generate a newline for the content if needed
     *
     *  @param {String} src
     *  @return {String}
     **/
    newline(src)
    {
      return (src.length > 0 ? '\n\t' + src : '');
    }

    /**
     *  Generate the pug for blockquote
     *
     *  @param {String} src
     *  @return {String}
     **/
    blockquote(src)
    {
      return 'blockquote' + this.newline(src) + src;
    }

    /**
     *  Generate the pug for headings
     *
     *  @param {String} src
     *  @param {String} tag
     *  @return {String}
     **/
    heading(src, tag)
    {
      return tag + this.newline(src) + src;
    }

    /**
     *  Generate the pug for horizontal rules
     *
     *  @return {String}
     **/
    hr()
    {
      return 'hr';
    }

    /**
     *  Generate the pug for paragraphs
     *
     *  @param {String} src
     *  @return {String}
     **/
    paragraph(src)
    {
      return 'p' + this.newline(src) + src;
    }

  }


  if (typeof module !== 'undefined' && typeof exports === 'object')
  {
    module.exports = MarkdownToPug;
  }
  else if (typeof define === 'function' && define.amd)
  {
    define(function() { return MarkdownToPug; });
  }
  else
  {
    this.MarkdownToPug = MarkdownToPug;
  }
}).call(function()
{
  return this || (typeof window !== 'undefined' ? window : global);
}());
