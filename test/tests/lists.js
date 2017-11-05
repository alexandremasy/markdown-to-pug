var assert = require('assert');

describe('Lists', function()
{
  const md2pug = new (require('../../lib/markdown-to-pug'))();

  it('Ordered', function()
  {
    let src = '- item 1\n- item 2\n- item 3';
    let result = 'ul\n\tli\n\t\tp\n\t\t\titem 1\n\tli\n\t\tp\n\t\t\titem 2\n\tli\n\t\tp\n\t\t\titem 3';

    assert.equal(md2pug.render(src), result);
  });

  it('Unordered', function()
  {
    let src = '1. item 1\n2. item 2\n3. item 3';
    let result = 'ol\n\tli\n\t\tp\n\t\t\titem 1\n\tli\n\t\tp\n\t\t\titem 2\n\tli\n\t\tp\n\t\t\titem 3';

    assert.equal(md2pug.render(src), result);
  });
});
