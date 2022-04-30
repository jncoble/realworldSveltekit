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
  L: () => ListErrors
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("./index-c63d4b3a.js");
const ListErrors = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let { errors } = $$props;
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  return `${errors ? `<ul class="${"error-messages"}">${(0, import_index_c63d4b3a.f)(Object.keys(errors), (key) => {
    return `<li>${(0, import_index_c63d4b3a.e)(key)} ${(0, import_index_c63d4b3a.e)(errors[key])}</li>`;
  })}</ul>` : ``}`;
});
