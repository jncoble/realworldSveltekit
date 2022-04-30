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
  default: () => Settings,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("../../../chunks/index-c63d4b3a.js");
var import_stores_cb76d12e = require("../../../chunks/stores-cb76d12e.js");
var import_ListErrors_34e905ca = require("../../../chunks/ListErrors-34e905ca.js");
function load({ session: session2 }) {
  const { user } = session2;
  if (!user) {
    return { status: 302, redirect: "/login" };
  }
  return { props: { user } };
}
const Settings = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.s, (value) => value);
  let { user } = $$props;
  let errors;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$unsubscribe_session();
  return `${$$result.head += `${$$result.title = `<title>Settings \u2022 Conduit</title>`, ""}`, ""}

<div class="${"settings-page"}"><div class="${"container page"}"><div class="${"row"}"><div class="${"col-md-6 offset-md-3 col-xs-12"}"><h1 class="${"text-xs-center"}">Your Settings</h1>

				${(0, import_index_c63d4b3a.v)(import_ListErrors_34e905ca.L, "ListErrors").$$render($$result, { errors }, {}, {})}

				<form><fieldset><fieldset class="${"form-group"}"><input class="${"form-control"}" type="${"text"}" placeholder="${"URL of profile picture"}"${(0, import_index_c63d4b3a.b)("value", user.image, 0)}></fieldset>

						<fieldset class="${"form-group"}"><input class="${"form-control form-control-lg"}" type="${"text"}" placeholder="${"Username"}"${(0, import_index_c63d4b3a.b)("value", user.username, 0)}></fieldset>

						<fieldset class="${"form-group"}"><textarea class="${"form-control form-control-lg"}" rows="${"8"}" placeholder="${"Short bio about you"}">${user.bio || ""}</textarea></fieldset>

						<fieldset class="${"form-group"}"><input class="${"form-control form-control-lg"}" type="${"email"}" placeholder="${"Email"}"${(0, import_index_c63d4b3a.b)("value", user.email, 0)}></fieldset>

						<fieldset class="${"form-group"}"><input class="${"form-control form-control-lg"}" type="${"password"}" placeholder="${"New Password"}"${(0, import_index_c63d4b3a.b)("value", user.password, 0)}></fieldset>

						<button class="${"btn btn-lg btn-primary pull-xs-right"}" type="${"submit"}" ${""}>Update Settings
						</button></fieldset></form>

				<hr>

				<button class="${"btn btn-outline-danger"}">Or click here to logout. </button></div></div></div></div>`;
});
