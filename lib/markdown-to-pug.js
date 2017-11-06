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
      const defaults = {
        newline: '\n',
        space: '\t',

        linkify: true,
        typographer: true,
        langPrefix: 'language-'
      }
      this.options = Object.assign(defaults, options);
    }

    /**
     *  Render the markdown to pugjs
     *
     *  @param {String} src
     *  @return {String}
     **/
    render(src)
    {
      const md = require('markdown-it')({
        html:         true,                     // Enable HTML tags in source
        xhtmlOut:     false,                    // Use '/' to close single tags (<br />).
                                                // This is only for full CommonMark compatibility.
        breaks:       false,                    // Convert '\n' in paragraphs into <br>
        langPrefix:   this.options.langPrefix,  // CSS language prefix for fenced blocks. Can be
                                                // useful for external highlighters.
        linkify:      this.options.linkify,     // Autoconvert URL-like text to links

        // Enable some language-neutral replacement + quotes beautification
        typographer:  this.options.typographer,

        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: '“”‘’',
      });

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
          case 'table_open':
          case 'thead_open':
          case 'tr_open':
          case 'th_open':
          case 'tbody_open':
          case 'td_open':
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
                  case 'link_open':
                    ret += this.indent(this.tag(c.tag, c.content, c.attrs), e.level);
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
          case 'heading_close':
          case 'th_close':
          case 'tr_close':
          case 'thead_close':
          case 'td_close':
          case 'tbody_close':
          case 'table_close':
          case 'blockquote_close':
          case 'list_item_close':
          case 'ordered_list_close':
          case 'bullet_list_close':
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
      let start = this.options.newline + (this.options.space.repeat(level));
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
      let attributes = (attrs != null && attrs != undefined) && '(' + attrs.map(e => e[0]+'="'+e[1]+'"') + ')' || '';
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
        info = '.' + this.options.langPrefix + info.trim();
      }


      return `pre.hljs${info}${this.options.newline}${this.options.space}` + this.tag(tag, src, attrs);
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
