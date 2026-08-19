import {
  c,
  l
} from "./chunk-YSUJLKAC.js";
import {
  e
} from "./chunk-KZ32EUOB.js";
import {
  H,
  P
} from "./chunk-5ZNTDABU.js";
import {
  __async
} from "./chunk-WDMUDEB6.js";

// node_modules/@ionic/core/components/p-R8zmRi4c.js
var n = () => {
  const n2 = window;
  n2.addEventListener("statusTap", (() => {
    H((() => {
      const o = document.elementFromPoint(n2.innerWidth / 2, n2.innerHeight / 2);
      if (!o) return;
      const m = l(o);
      m && new Promise(((o2) => e(m, o2))).then((() => {
        P((() => __async(null, null, function* () {
          m.style.setProperty("--overflow", "hidden"), yield c(m, 300), m.style.removeProperty("--overflow");
        })));
      }));
    }));
  }));
};
export {
  n as startStatusTap
};
//# sourceMappingURL=p-R8zmRi4c-WU56GUAC.js.map
