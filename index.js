var md = `Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code`;

var md = `Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit. Donec ut varius dui, ut placerat nisi. Aenean condimentum lorem massa, non molestie est porta cursus. Curabitur et mi vel turpis tincidunt tempor nec eu diam. Suspendisse egestas finibus augue et aliquet. Donec eget scelerisque tortor. Proin id mi varius, lacinia felis ac, porta mauris. Etiam sed nulla eget lectus ullamcorper eleifend. Curabitur ac iaculis augue, vitae facilisis urna. Aenean mollis consequat leo, in egestas ipsum dignissim at. Etiam ac magna et nulla posuere bibendum quis quis massa. Maecenas lacus magna, tempor at urna ac, finibus placerat nisi.`;

md2pug = new (require('./lib/markdown-to-pug'))();
let ret = md2pug.render(md);
console.log(ret);

module.exports = md2pug;
