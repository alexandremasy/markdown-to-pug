var assert = require('assert');
const md2pug = new (require('../../lib/markdown-to-pug'))();

describe('Inline', function()
{
  it('Bold', function()
  {
    let src = '**This is bold text**';
    let result = 'p\n\tstrong\n\t\tThis is bold text';

    assert.equal(md2pug.render(src), result);
  });

  it('Italic', function()
  {
    let src = '*This is italic text*';
    let result = 'p\n\tem\n\t\tThis is italic text';

    assert.equal(md2pug.render(src), result);
  });
});
