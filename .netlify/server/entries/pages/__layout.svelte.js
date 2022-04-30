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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("../../chunks/index-c63d4b3a.js");
var import_stores_cb76d12e = require("../../chunks/stores-cb76d12e.js");
const Nav = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $session, $$unsubscribe_session;
  $$unsubscribe_page = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.p, (value) => $page = value);
  $$unsubscribe_session = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.s, (value) => $session = value);
  $$unsubscribe_page();
  $$unsubscribe_session();
  return `<nav class="${"navbar navbar-light"}"><div class="${"container"}"><a rel="${"prefetch"}" class="${"navbar-brand"}" href="${"/"}">conduit</a>
		<ul class="${"nav navbar-nav pull-xs-right"}"><li class="${"nav-item"}"><a rel="${"prefetch"}" class="${["nav-link", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}" href="${"/"}">Home</a></li>

			${$session.user ? `<li class="${"nav-item"}"><a rel="${"prefetch"}" href="${"/editor"}" class="${["nav-link", $page.url.pathname === "/editor" ? "active" : ""].join(" ").trim()}"><i class="${"ion-compose"}"></i>\xA0New Post
					</a></li>

				<li class="${"nav-item"}"><a rel="${"prefetch"}" href="${"/settings"}" class="${["nav-link", $page.url.pathname === "/settings" ? "active" : ""].join(" ").trim()}"><i class="${"ion-gear-a"}"></i>\xA0Settings
					</a></li>

				<li class="${"nav-item"}"><a rel="${"prefetch"}" href="${"/profile/@" + (0, import_index_c63d4b3a.e)($session.user.username)}" class="${"nav-link"}">
						${(0, import_index_c63d4b3a.e)($session.user.username)}</a></li>` : `<li class="${"nav-item"}"><a rel="${"prefetch"}" href="${"/login"}" class="${["nav-link", $page.url.pathname === "/login" ? "active" : ""].join(" ").trim()}">Sign in
					</a></li>

				<li class="${"nav-item"}"><a rel="${"prefetch"}" href="${"/register"}" class="${["nav-link", $page.url.pathname === "/register" ? "active" : ""].join(" ").trim()}">Sign up
					</a></li>`}</ul></div></nav>`;
});
var PreloadingIndicator_svelte_svelte_type_style_lang = "";
const css = {
  code: ".progress-container.svelte-1a68va7{position:absolute;top:0;left:0;width:100%;height:4px;z-index:999}.progress.svelte-1a68va7{position:absolute;left:0;top:0;height:100%;background-color:#5cb85c;transition:width 0.4s}.fade.svelte-1a68va7{position:fixed;width:100%;height:100%;background-color:rgba(255, 255, 255, 0.3);pointer-events:none;z-index:998;animation:svelte-1a68va7-fade 0.4s}@keyframes svelte-1a68va7-fade{from{opacity:0}to{opacity:1}}",
  map: null
};
const PreloadingIndicator = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${``}

${``}`;
});
const _layout = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.n, (value) => $navigating = value);
  $$unsubscribe_navigating();
  return `${$navigating ? `${(0, import_index_c63d4b3a.v)(PreloadingIndicator, "PreloadingIndicator").$$render($$result, {}, {}, {})}` : ``}

${(0, import_index_c63d4b3a.v)(Nav, "Nav").$$render($$result, {}, {}, {})}

<main>${slots.default ? slots.default({}) : ``}</main>`;
});
