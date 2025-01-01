import * as luaparse from 'luaparse';
import luamin from 'luamin';

// Attach `luamin` and `luaparse` to the `window` object
window.luamin = {
  parse: luaparse.parse,
  minify: luamin.minify,
};
