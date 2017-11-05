var assert = require('assert');

describe('Blockquotes', function()
{
  const md2pug = new (require('../../lib/markdown-to-pug'))();

  it('Simple', function()
  {
    let src = '> one level';
    let result = 'blockquote\n\tp\n\t\tone level';

    assert.equal(md2pug.render(src), result);
  });

  it('NestedCompact', function()
  {
    let src = '>> two level';
    let result = 'blockquote\n\tblockquote\n\t\tp\n\t\t\ttwo level';

    assert.equal(md2pug.render(src), result);
  });

  it('NestedSpaced', function()
  {
    let src = '> > > spaced';
    let result = 'blockquote\n\tblockquote\n\t\tblockquote\n\t\t\tp\n\t\t\t\tspaced';

    assert.equal(md2pug.render(src), result);
  });
});
