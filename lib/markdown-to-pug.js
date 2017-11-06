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
          case 'code_block':
          case 'fence':
            ret += this.indent(this.code(e.tag, e.content, e.attrs, e.info), e.level);
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
                    if (c.content.length > 0)
                    {
                      ret += ' ' + c.content;
                    }
                    break;

                  case 'strong_open':
                  case 'em_open':
                  case 's_open':
                  case 'code_inline':
                    ret += this.indent(this.tag(c.tag, c.content, e.attrs), e.level);
                    break;

                  default:
                    break;
                }
              })
            }
            else
            {
              ret += this.indent(e.content, e.level);
            }
            break;

          case 'paragraph_close':
            break;

          default:
            console.log('undefined type: ', e.type, `| Tag: ${e.tag}`);
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
      let start = '\n' + ('\t'.repeat(level));
      let content = src.replace(/\n/gm, start);
      return start + content;
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

    code(tag, src, attrs, info)
    {
      if (src.indexOf('\n')!=-1)
      {
        src = this.indent(src, 2);
      }

      if (info)
      {
        info = 'language-' + info.trim();
      }


      return `pre.hljs.${info}\n\t` + this.tag(tag, src, attrs);
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
