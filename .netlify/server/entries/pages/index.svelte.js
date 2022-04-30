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
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("../../chunks/index-c63d4b3a.js");
var import_stores_cb76d12e = require("../../chunks/stores-cb76d12e.js");
var import_index_987f0ee2 = require("../../chunks/index-987f0ee2.js");
const Pagination = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let { pages } = $$props;
  let { p } = $$props;
  let { href } = $$props;
  let range;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  if ($$props.p === void 0 && $$bindings.p && p !== void 0)
    $$bindings.p(p);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  {
    {
      range = [];
      for (let i = 1; i <= pages; ++i) {
        range.push(i);
      }
    }
  }
  return `${pages > 1 ? `<nav><ul class="${"pagination"}">${(0, import_index_c63d4b3a.f)(range, (n) => {
    return `<li class="${["page-item", n == p ? "active" : ""].join(" ").trim()}"><a class="${"page-link"}"${(0, import_index_c63d4b3a.b)("href", href(n), 0)}>${(0, import_index_c63d4b3a.e)(n)}</a></li>`;
  })}</ul></nav>` : ``}`;
});
async function load({ url, fetch }) {
  const [{ articles, pages }, { tags }] = await Promise.all([
    fetch(`/articles.json${url.search}`, { credentials: "include" }).then((r) => r.json()),
    fetch("/tags.json").then((r) => r.json())
  ]);
  return { props: { articles, pages, tags } };
}
const Routes = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let p;
  let tag;
  let tab;
  let page_link_base;
  let $page, $$unsubscribe_page;
  let $session, $$unsubscribe_session;
  $$unsubscribe_page = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.p, (value) => $page = value);
  $$unsubscribe_session = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.s, (value) => $session = value);
  let { articles } = $$props;
  let { pages } = $$props;
  let { tags } = $$props;
  if ($$props.articles === void 0 && $$bindings.articles && articles !== void 0)
    $$bindings.articles(articles);
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  p = +$page.url.searchParams.get("p") || 1;
  tag = $page.url.searchParams.get("tag");
  tab = $page.url.searchParams.get("tab") || "all";
  page_link_base = tag ? `tag=${tag}` : `tab=${tab}`;
  $$unsubscribe_page();
  $$unsubscribe_session();
  return `${$$result.head += `${$$result.title = `<title>Conduit</title>`, ""}`, ""}

<div class="${"home-page"}">${!$session.user ? `<div class="${"banner"}"><div class="${"container"}"><h1 class="${"logo-font"}">conduit</h1>
				<p>A place to share your knowledge.</p></div></div>` : ``}

	<div class="${"container page"}"><div class="${"row"}"><div class="${"col-md-9"}"><div class="${"feed-toggle"}"><ul class="${"nav nav-pills outline-active"}"><li class="${"nav-item"}"><a href="${"/?tab=all"}" rel="${"prefetch"}" class="${["nav-link", tab === "all" && !tag ? "active" : ""].join(" ").trim()}">Global Feed
							</a></li>

						${$session.user ? `<li class="${"nav-item"}"><a href="${"/?tab=feed"}" rel="${"prefetch"}" class="${["nav-link", tab === "feed" ? "active" : ""].join(" ").trim()}">Your Feed
								</a></li>` : `<li class="${"nav-item"}"><a href="${"/login"}" rel="${"prefetch"}" class="${"nav-link"}">Sign in to see your Feed </a></li>`}

						${tag ? `<li class="${"nav-item"}"><a href="${"/?tag=" + (0, import_index_c63d4b3a.e)(tag)}" rel="${"prefetch"}" class="${"nav-link active"}"><i class="${"ion-pound"}"></i>
									${(0, import_index_c63d4b3a.e)(tag)}</a></li>` : ``}</ul></div>

				${(0, import_index_c63d4b3a.v)(import_index_987f0ee2.A, "ArticleList").$$render($$result, { articles }, {}, {})}
				${(0, import_index_c63d4b3a.v)(Pagination, "Pagination").$$render($$result, {
    pages,
    p,
    href: (p2) => `/?${page_link_base}&page=${p2}`
  }, {}, {})}</div>

			<div class="${"col-md-3"}"><div class="${"sidebar"}"><p>Popular Tags</p>
					<div class="${"tag-list"}">${(0, import_index_c63d4b3a.f)(tags, (tag2) => {
    return `<a href="${"/?tag=" + (0, import_index_c63d4b3a.e)(tag2)}" rel="${"prefetch"}" class="${"tag-default tag-pill"}">${(0, import_index_c63d4b3a.e)(tag2)} </a>`;
  })}</div></div></div></div></div></div>`;
});
