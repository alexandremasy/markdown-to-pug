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
        // console.log('----');
        // console.log(e);

        switch (e.type)
        {
          case 'blockquote_open':
          case 'paragraph_open':
          case 'heading_open':
          case 'bullet_list_open':
          case 'ordered_list_open':
          case 'list_item_open':
          case 'hr':
            ret += this.indent(this.tag(e.tag, e.content, e.attrs), e.level);
            break;

          case 'inline':
            if (e.children)
            {
              // console.log('children: ');
              // console.log(e.children);
              e.children.forEach((c) => {
                switch (c.type)
                {
                  case 'text':
                  default:
                    if (c.content.length > 0)
                      ret += ' ' + c.content;
                    break;

                  case 'strong_open':
                  case 'em_open':
                  case 's_open':
                  case 'code_inline':
                    ret += this.indent(this.tag(c.tag, c.content, e.attrs), e.level);
                    break;
                }
              })
            }
            else
            {
              ret += this.indent(e.content, e.level);
            }
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

    /**
     *  Properly indent the src
     *
     *  @param {String} src
     *  @param {int} level
     *  @return {String}
     **/
    indent(src, level)
    {
      // @TODO: Reset the newline for all the text values


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
      return src.length > 0 ? ' ' + src : '';
    }

    /**
     *  Generate the pug version of a tag
     *
     *  @param {String} tag
     *  @param {String} src
     *  @param {Array.Array<String.2>} attrs
     **/
    tag(tag, src, attrs)
    {
      let attributes = (attrs != null && attrs != undefined) && "(" + attrs.map(e => e[0]+"="+e[1]) + ")" || '';
      return tag + attributes + this.newline(src);
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
