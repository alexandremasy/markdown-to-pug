var assert = require('assert');

describe('Blockquotes', function()
{
  it('Simple', function()
  {
    //   > Blockquotes can also be nested...
    assert.equal(-1, [1,2,3].indexOf(4));
  });

  it('NestedCompact', function()
  {
    // >> ...by using additional greater-than signs right next to each other...
    assert.equal(-1, [1,2,3].indexOf(4));
  });

  it('NestedSpaced', function()
  {
    // > > > ...or with spaces between arrows.
    assert.equal(-1, [1,2,3].indexOf(4));
  });
});
