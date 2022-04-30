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
  A: () => ArticleList
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("./index-c63d4b3a.js");
var import_stores_cb76d12e = require("./stores-cb76d12e.js");
const ArticlePreview = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  let { user } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<div class="${"article-preview"}"><div class="${"article-meta"}"><a href="${"/profile/@" + (0, import_index_c63d4b3a.e)(article.author.username)}"><img${(0, import_index_c63d4b3a.b)("src", article.author.image, 0)}${(0, import_index_c63d4b3a.b)("alt", article.author.username, 0)}></a>

		<div class="${"info"}"><a class="${"author"}" href="${"/profile/@" + (0, import_index_c63d4b3a.e)(article.author.username)}">${(0, import_index_c63d4b3a.e)(article.author.username)}</a>
			<span class="${"date"}">${(0, import_index_c63d4b3a.e)(new Date(article.createdAt).toDateString())}</span></div>

		${user ? `<div class="${"pull-xs-right"}"><button class="${"btn btn-sm " + (0, import_index_c63d4b3a.e)(article.favorited ? "btn-primary" : "btn-outline-primary")}"><i class="${"ion-heart"}"></i>
					${(0, import_index_c63d4b3a.e)(article.favoritesCount)}</button></div>` : ``}</div>

	<a href="${"/article/" + (0, import_index_c63d4b3a.e)(article.slug)}" rel="${"prefetch"}" class="${"preview-link"}"><h1>${(0, import_index_c63d4b3a.e)(article.title)}</h1>
		<p>${(0, import_index_c63d4b3a.e)(article.description)}</p>
		<span>Read more...</span>
		<ul class="${"tag-list"}">${(0, import_index_c63d4b3a.f)(article.tagList, (tag) => {
    return `<li class="${"tag-default tag-pill tag-outline"}"><a href="${"/?tag=" + (0, import_index_c63d4b3a.e)(tag)}">${(0, import_index_c63d4b3a.e)(tag)}</a></li>`;
  })}</ul></a></div>`;
});
const ArticleList = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.s, (value) => $session = value);
  let { articles } = $$props;
  if ($$props.articles === void 0 && $$bindings.articles && articles !== void 0)
    $$bindings.articles(articles);
  $$unsubscribe_session();
  return `${articles.length === 0 ? `<div class="${"article-preview"}">No articles are here... yet.</div>` : `<div>${(0, import_index_c63d4b3a.f)(articles, (article) => {
    return `${(0, import_index_c63d4b3a.v)(ArticlePreview, "ArticlePreview").$$render($$result, { article, user: $session.user }, {}, {})}`;
  })}</div>`}`;
});
