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
  default: () => Register,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("../../../chunks/index-c63d4b3a.js");
var import_stores_cb76d12e = require("../../../chunks/stores-cb76d12e.js");
var import_ListErrors_34e905ca = require("../../../chunks/ListErrors-34e905ca.js");
async function load({ session: session2 }) {
  if (session2.user) {
    return { redirect: "/", status: 302 };
  }
  return {};
}
const Register = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.s, (value) => value);
  let username = "";
  let email = "";
  let password = "";
  let errors = null;
  $$unsubscribe_session();
  return `${$$result.head += `${$$result.title = `<title>Sign up \u2022 Conduit</title>`, ""}`, ""}

<div class="${"auth-page"}"><div class="${"container page"}"><div class="${"row"}"><div class="${"col-md-6 offset-md-3 col-xs-12"}"><h1 class="${"text-xs-center"}">Sign up</h1>
				<p class="${"text-xs-center"}"><a href="${"/login"}">Have an account?</a></p>

				${(0, import_index_c63d4b3a.v)(import_ListErrors_34e905ca.L, "ListErrors").$$render($$result, { errors }, {}, {})}

				<form><fieldset class="${"form-group"}"><input class="${"form-control form-control-lg"}" type="${"text"}" required placeholder="${"Your Name"}"${(0, import_index_c63d4b3a.b)("value", username, 0)}></fieldset>
					<fieldset class="${"form-group"}"><input class="${"form-control form-control-lg"}" type="${"email"}" required placeholder="${"Email"}"${(0, import_index_c63d4b3a.b)("value", email, 0)}></fieldset>
					<fieldset class="${"form-group"}"><input class="${"form-control form-control-lg"}" type="${"password"}" required placeholder="${"Password"}"${(0, import_index_c63d4b3a.b)("value", password, 0)}></fieldset>
					<button class="${"btn btn-lg btn-primary pull-xs-right"}">Sign up
					</button></form></div></div></div></div>`;
});
