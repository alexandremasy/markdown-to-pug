'use strict'

function pugjsMixin (state)
{
  var tokens = state.tokens;
  var m;

  tokens.forEach(function (token, i)
  {
    // "<!-- +something() -->"
    // ...sequence of [heading_open, inline, heading_close, html_block]
    if (token.type === 'html_block')
    {
      m = token.content.match(/^<!-- ?(.*) ?-->\n?$/)
      if (!m) return

      token.type = 'pugjs-mixin';
      token.content = m[1];
    }
  });
}

module.exports = function attributes (md)
{
  md.core.ruler.push('pugjs.mixins', pugjsMixin)
}
