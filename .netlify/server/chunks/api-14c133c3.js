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
  a: () => post,
  d: () => del,
  g: () => get,
  p: () => put
});
module.exports = __toCommonJS(stdin_exports);
const base = "https://conduit.productionready.io/api";
async function send({ method, path, data, token }) {
  const opts = { method, headers: {} };
  if (data) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(data);
  }
  if (token) {
    opts.headers["Authorization"] = `Token ${token}`;
  }
  return fetch(`${base}/${path}`, opts).then((r) => r.text()).then((json) => {
    try {
      return JSON.parse(json);
    } catch (err) {
      return json;
    }
  });
}
function get(path, token) {
  return send({ method: "GET", path, token });
}
function del(path, token) {
  return send({ method: "DELETE", path, token });
}
function post(path, data, token) {
  return send({ method: "POST", path, data, token });
}
function put(path, data, token) {
  return send({ method: "PUT", path, data, token });
}
