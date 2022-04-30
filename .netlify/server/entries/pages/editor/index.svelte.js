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
  default: () => Editor_1,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("../../../chunks/index-c63d4b3a.js");
var import_Editor_b0c65f45 = require("../../../chunks/_Editor-b0c65f45.js");
var import_ListErrors_34e905ca = require("../../../chunks/ListErrors-34e905ca.js");
function load({ session }) {
  if (!session.user) {
    return { status: 302, redirect: `/login` };
  }
  return {};
}
const Editor_1 = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let article = {
    title: "",
    description: "",
    body: "",
    tagList: []
  };
  return `${(0, import_index_c63d4b3a.v)(import_Editor_b0c65f45.E, "Editor").$$render($$result, { article }, {}, {})}`;
});
