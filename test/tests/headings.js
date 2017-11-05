var assert = require('assert');

describe('Headings', function()
{
  const md2pug = new (require('../../lib/markdown-to-pug'))();

  let hs = [
    {'name': 'h1', 'md': "# h1 heading", 'pug':"h1\n\th1 heading"},
    {'name': 'h2', 'md': "## h2 heading", 'pug':"h2\n\th2 heading"},
    {'name': 'h3', 'md': "### h3 heading", 'pug':"h3\n\th3 heading"},
    {'name': 'h4', 'md': "#### h4 heading", 'pug':"h4\n\th4 heading"},
    {'name': 'h5', 'md': "##### h5 heading", 'pug':"h5\n\th5 heading"},
    {'name': 'h6', 'md': "###### h6 heading", 'pug':"h6\n\th6 heading"}
  ];

  hs.forEach(function(h)
  {
    it(h.name, function()
    {
      let src = h.md;
      let result = h.pug;

      assert.equal(md2pug.render(src), result);
    });
  });
});
