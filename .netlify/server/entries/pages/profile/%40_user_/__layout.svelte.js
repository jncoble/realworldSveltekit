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
  default: () => _layout,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("../../../../chunks/index-c63d4b3a.js");
var import_stores_cb76d12e = require("../../../../chunks/stores-cb76d12e.js");
async function load({ params, fetch }) {
  const res = await fetch(`/profile/@${params.user}.json`);
  return { props: { profile: await res.json() } };
}
const _layout = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let segments;
  let is_favorites;
  let is_user;
  let $session, $$unsubscribe_session;
  let $page, $$unsubscribe_page;
  $$unsubscribe_session = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.s, (value) => $session = value);
  $$unsubscribe_page = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.p, (value) => $page = value);
  let { profile } = $$props;
  if ($$props.profile === void 0 && $$bindings.profile && profile !== void 0)
    $$bindings.profile(profile);
  segments = $page.url.pathname.split("/");
  is_favorites = segments.length === 4 && segments[3] === "favorites";
  is_user = $session.user && profile.username === $session.user.username;
  $$unsubscribe_session();
  $$unsubscribe_page();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_c63d4b3a.e)(profile.username)} \u2022 Conduit</title>`, ""}`, ""}

<div class="${"profile-page"}"><div class="${"user-info"}"><div class="${"container"}"><div class="${"row"}"><div class="${"col-xs-12 col-md-10 offset-md-1"}"><img${(0, import_index_c63d4b3a.b)("src", profile.image, 0)} class="${"user-img"}"${(0, import_index_c63d4b3a.b)("alt", profile.username, 0)}>
					<h4>${(0, import_index_c63d4b3a.e)(profile.username)}</h4>
					<p>${(0, import_index_c63d4b3a.e)(profile.bio)}</p>

					${is_user ? `<a href="${"/settings"}" class="${"btn btn-sm btn-outline-secondary action-btn"}"><i class="${"ion-gear-a"}"></i>
							Edit Profile Settings
						</a>` : `${$session.user ? `<button class="${"btn btn-sm action-btn " + (0, import_index_c63d4b3a.e)(profile.following ? "btn-secondary" : "btn-outline-secondary")}"><i class="${"ion-plus-round"}"></i>
							${(0, import_index_c63d4b3a.e)(profile.following ? "Unfollow" : "Follow")}
							${(0, import_index_c63d4b3a.e)(profile.username)}</button>` : `<a href="${"/login"}">Sign in to follow</a>`}`}</div></div></div></div>

	<div class="${"container"}"><div class="${"row"}"><div class="${"col-xs-12 col-md-10 offset-md-1"}"><div class="${"articles-toggle"}"><ul class="${"nav nav-pills outline-active"}"><li class="${"nav-item"}"><a href="${"/profile/@" + (0, import_index_c63d4b3a.e)(profile.username)}" class="${["nav-link", !is_favorites ? "active" : ""].join(" ").trim()}" rel="${"prefetch"}">Articles</a></li>

						<li class="${"nav-item"}"><a href="${"/profile/@" + (0, import_index_c63d4b3a.e)(profile.username) + "/favorites"}" class="${["nav-link", is_favorites ? "active" : ""].join(" ").trim()}" rel="${"prefetch"}">Favorites</a></li></ul></div>

				${slots.default ? slots.default({}) : ``}</div></div></div></div>`;
});
