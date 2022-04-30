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
  default: () => U5Bslugu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("../../../chunks/index-c63d4b3a.js");
var import_api_14c133c3 = require("../../../chunks/api-14c133c3.js");
var import_Editor_b0c65f45 = require("../../../chunks/_Editor-b0c65f45.js");
var import_ListErrors_34e905ca = require("../../../chunks/ListErrors-34e905ca.js");
async function load({ params, session }) {
  if (!session.user) {
    return { redirect: `/login`, status: 302 };
  }
  const { slug } = params;
  const { article } = await (0, import_api_14c133c3.g)(`articles/${slug}`, null);
  return { props: { article, slug } };
}
const U5Bslugu5D = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let { slug } = $$props;
  let { article } = $$props;
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  return `${(0, import_index_c63d4b3a.v)(import_Editor_b0c65f45.E, "Editor").$$render($$result, { article, slug }, {}, {})}`;
});
