var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _error,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("../../chunks/index-c63d4b3a.js");
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-8lferx,p.svelte-8lferx{margin:0 auto}h1.svelte-8lferx{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8lferx{margin:1em auto}@media(min-width: 480px){h1.svelte-8lferx{font-size:4em}}",
  map: null
};
function load({ error, status }) {
  return { props: { error, status } };
}
const _error = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let { error, status } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_c63d4b3a.e)(status)}</title>`, ""}`, ""}

<div class="${"col-md-9"}"><h1 class="${"svelte-8lferx"}">${(0, import_index_c63d4b3a.e)(status)}</h1>

	<p class="${"svelte-8lferx"}">${(0, import_index_c63d4b3a.e)(error.message)}</p>

	${``}
</div>`;
});
