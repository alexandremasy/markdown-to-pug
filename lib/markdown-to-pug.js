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
          case 'inline':
            ret += this.indent(e.content, e.level);
            break;
          default:
            // console.log('undefined type', e.type);
            break;
        }
      })
      // console.log(data);
      // console.log(ret);

      return ret.trim();
    }

    indent(src, level)
    {
      let rep = '\n' + ('\t'.repeat(level));
      // console.log(level, src, rep);
      // return src.replace('/\r?\n|\r/gm', rep);
      return rep + src;
    }

    newline(src)
    {
      return (src.length > 0 ? '\n\t' + src : '');
    }

    blockquote(src)
    {
      return 'blockquote' + this.newline(src) + src;
    }

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
