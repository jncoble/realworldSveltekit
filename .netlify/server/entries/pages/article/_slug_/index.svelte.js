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
  default: () => U5Bslugu5D,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("../../../../chunks/index-c63d4b3a.js");
var import_stores_cb76d12e = require("../../../../chunks/stores-cb76d12e.js");
var import_marked = require("marked");
var import_constants_2f482215 = require("../../../../chunks/constants-2f482215.js");
const ArticleMeta = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let can_modify;
  let { article } = $$props;
  let { user } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  can_modify = user && article.author.username === user.username;
  return `<div class="${"article-meta"}"><a href="${"/profile/@" + (0, import_index_c63d4b3a.e)(article.author.username)}"><img${(0, import_index_c63d4b3a.b)("src", article.author.image, 0)}${(0, import_index_c63d4b3a.b)("alt", article.author.username, 0)}></a>

	<div class="${"info"}"><a href="${"/profile/@" + (0, import_index_c63d4b3a.e)(article.author.username)}" class="${"author"}">${(0, import_index_c63d4b3a.e)(article.author.username)}</a>
		<span class="${"date"}">${(0, import_index_c63d4b3a.e)(new Date(article.createdAt).toDateString())}</span></div>

	${can_modify ? `<span><a href="${"/editor/" + (0, import_index_c63d4b3a.e)(article.slug)}" class="${"btn btn-outline-secondary btn-sm"}"><i class="${"ion-edit"}"></i> Edit Article
			</a>

			<button class="${"btn btn-outline-danger btn-sm"}"><i class="${"ion-trash-a"}"></i> Delete Article
			</button></span>` : ``}</div>`;
});
const CommentInput = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let { slug } = $$props;
  let { user } = $$props;
  (0, import_index_c63d4b3a.d)();
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<form action="${"/article/" + (0, import_index_c63d4b3a.e)(slug) + "/comments.json"}" method="${"post"}" class="${"card comment-form"}"><div class="${"card-block"}"><textarea ${""} class="${"form-control"}" name="${"comment"}" placeholder="${"Write a comment..."}" rows="${"3"}">${""}</textarea></div>

	<div class="${"card-footer"}"><img${(0, import_index_c63d4b3a.b)("src", user.image || import_constants_2f482215.a, 0)} class="${"comment-author-img"}"${(0, import_index_c63d4b3a.b)("alt", user.username, 0)}>
		<button ${""} class="${"btn btn-sm btn-primary"}" type="${"submit"}">Post Comment</button></div></form>`;
});
var _Comment_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1u5sev7{background:none;border:none;padding:0;margin:0;font-size:inherit;margin-left:5px;opacity:0.6;cursor:pointer}",
  map: null
};
const Comment = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let { comment } = $$props;
  let { slug } = $$props;
  let { user } = $$props;
  (0, import_index_c63d4b3a.d)();
  if ($$props.comment === void 0 && $$bindings.comment && comment !== void 0)
    $$bindings.comment(comment);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css);
  return `<div class="${"card"}"><div class="${"card-block"}"><p class="${"card-text"}">${(0, import_index_c63d4b3a.e)(comment.body)}</p></div>

	<div class="${"card-footer"}"><a href="${"/profile/@" + (0, import_index_c63d4b3a.e)(comment.author.username)}" class="${"comment-author"}"><img${(0, import_index_c63d4b3a.b)("src", comment.author.image, 0)} class="${"comment-author-img"}"${(0, import_index_c63d4b3a.b)("alt", comment.author.username, 0)}></a>

		<a href="${"/profile/@" + (0, import_index_c63d4b3a.e)(comment.author.username)}" class="${"comment-author"}">${(0, import_index_c63d4b3a.e)(comment.author.username)}</a>

		<span class="${"date-posted"}">${(0, import_index_c63d4b3a.e)(new Date(comment.createdAt).toDateString())}</span>

		${user && comment.author.username === user.username ? `<form action="${"/article/" + (0, import_index_c63d4b3a.e)(slug) + "/comments/" + (0, import_index_c63d4b3a.e)(comment.id) + ".json?_method=delete"}" method="${"post"}" class="${"mod-options"}"><button class="${"ion-trash-a svelte-1u5sev7"}"></button></form>` : ``}</div>
</div>`;
});
const CommentContainer = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let { comments } = $$props;
  let { slug } = $$props;
  let { user } = $$props;
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0)
    $$bindings.comments(comments);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<div class="${"col-xs-12 col-md-8 offset-md-2"}">${user ? `<div>${(0, import_index_c63d4b3a.v)(CommentInput, "CommentInput").$$render($$result, { slug, user }, {}, {})}</div>` : `<p><a href="${"/login"}">Sign in</a>
			or
			<a href="${"/register"}">sign up</a>
			to add comments on this article.
		</p>`}

	${(0, import_index_c63d4b3a.f)(comments, (comment, i) => {
    return `${(0, import_index_c63d4b3a.v)(Comment, "Comment").$$render($$result, { comment, slug, user }, {}, {})}`;
  })}</div>`;
});
async function load({ params, fetch }) {
  const { slug } = params;
  const [article, comments] = await Promise.all([
    fetch(`/article/${slug}.json`).then((r) => r.json()),
    fetch(`/article/${slug}/comments.json`).then((r) => r.json())
  ]);
  return { props: { article, comments, slug } };
}
const U5Bslugu5D = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let markup;
  let $session, $$unsubscribe_session;
  $$unsubscribe_session = (0, import_index_c63d4b3a.a)(import_stores_cb76d12e.s, (value) => $session = value);
  let { article } = $$props;
  let { comments } = $$props;
  let { slug } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.comments === void 0 && $$bindings.comments && comments !== void 0)
    $$bindings.comments(comments);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  markup = (0, import_marked.marked)(article.body);
  $$unsubscribe_session();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_c63d4b3a.e)(article.title)}</title>`, ""}`, ""}

<div class="${"article-page"}"><div class="${"banner"}"><div class="${"container"}"><h1>${(0, import_index_c63d4b3a.e)(article.title)}</h1>
			${(0, import_index_c63d4b3a.v)(ArticleMeta, "ArticleMeta").$$render($$result, { article, user: $session.user }, {}, {})}</div></div>

	<div class="${"container page"}"><div class="${"row article-content"}"><div class="${"col-xs-12"}"><div><!-- HTML_TAG_START -->${markup}<!-- HTML_TAG_END --></div>

				<ul class="${"tag-list"}">${(0, import_index_c63d4b3a.f)(article.tagList, (tag) => {
    return `<li class="${"tag-default tag-pill tag-outline"}">${(0, import_index_c63d4b3a.e)(tag)}</li>`;
  })}</ul></div></div>

		<hr>

		<div class="${"article-actions"}"></div>

		<div class="${"row"}">${(0, import_index_c63d4b3a.v)(CommentContainer, "CommentContainer").$$render($$result, {
    slug,
    comments,
    user: $session.user,
    errors: []
  }, {}, {})}</div></div></div>`;
});
