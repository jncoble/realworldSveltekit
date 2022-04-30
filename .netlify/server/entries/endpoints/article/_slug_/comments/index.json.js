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
  get: () => get,
  post: () => post
});
module.exports = __toCommonJS(stdin_exports);
var import_api_14c133c3 = require("../../../../../chunks/api-14c133c3.js");
async function get({ params, locals }) {
  const { slug } = params;
  const { comments } = await (0, import_api_14c133c3.g)(`articles/${slug}/comments`, locals.user && locals.user.token);
  return {
    body: comments
  };
}
async function post({ params, request, locals }) {
  if (!locals.user) {
    return { status: 401 };
  }
  const { slug } = params;
  const form = await request.formData();
  const body = form.get("comment");
  const { comment } = await (0, import_api_14c133c3.a)(`articles/${slug}/comments`, { comment: { body } }, locals.user.token);
  if (request.headers.get("accept") === "application/json") {
    return {
      status: 201,
      body: comment
    };
  }
  console.log(`redirecting to /article/${slug}`);
  return {
    status: 303,
    headers: {
      location: `/article/${slug}`
    }
  };
}
