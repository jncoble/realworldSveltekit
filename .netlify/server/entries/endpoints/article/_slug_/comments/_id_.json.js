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
  del: () => del
});
module.exports = __toCommonJS(stdin_exports);
var import_api_14c133c3 = require("../../../../../chunks/api-14c133c3.js");
async function del({ params, locals }) {
  if (!locals.user) {
    return { status: 401 };
  }
  const { slug, id } = params;
  const { status, error } = await (0, import_api_14c133c3.d)(`articles/${slug}/comments/${id}`, locals.user.token);
  if (error) {
    return { status, body: { error } };
  }
}
