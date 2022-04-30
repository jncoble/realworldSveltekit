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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_api_14c133c3 = require("../../chunks/api-14c133c3.js");
var import_constants_2f482215 = require("../../chunks/constants-2f482215.js");
async function get({ url: { searchParams }, locals }) {
  const tab = searchParams.get("tab") || "all";
  const tag = searchParams.get("tag");
  const page = +searchParams.get("page") || 1;
  const endpoint = tab === "feed" ? "articles/feed" : "articles";
  const q = new URLSearchParams();
  q.set("limit", import_constants_2f482215.p);
  q.set("offset", (page - 1) * import_constants_2f482215.p);
  if (tag) {
    q.set("tag", tag);
  }
  const { articles, articlesCount } = await (0, import_api_14c133c3.g)(`${endpoint}?${q}`, locals.user && locals.user.token);
  return {
    body: {
      articles,
      pages: Math.ceil(articlesCount / import_constants_2f482215.p)
    }
  };
}
