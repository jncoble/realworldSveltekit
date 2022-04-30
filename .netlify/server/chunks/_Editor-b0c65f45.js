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
  E: () => Editor
});
module.exports = __toCommonJS(stdin_exports);
var import_index_c63d4b3a = require("./index-c63d4b3a.js");
var import_ListErrors_34e905ca = require("./ListErrors-34e905ca.js");
const Editor = (0, import_index_c63d4b3a.c)(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  let { slug } = $$props;
  let errors;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  return `<div class="${"editor-page"}"><div class="${"container page"}"><div class="${"row"}"><div class="${"col-md-10 offset-md-1 col-xs-12"}">${(0, import_index_c63d4b3a.v)(import_ListErrors_34e905ca.L, "ListErrors").$$render($$result, { errors }, {}, {})}

				<form${(0, import_index_c63d4b3a.b)("action", slug ? `/article/${slug}.json?_method=put` : `/article.json`, 0)} method="${"post"}"><fieldset><fieldset class="${"form-group"}"><input class="${"form-control form-control-lg"}" type="${"text"}" placeholder="${"Article Title"}"${(0, import_index_c63d4b3a.b)("value", article.title, 0)}></fieldset>

						<fieldset class="${"form-group"}"><input class="${"form-control"}" type="${"text"}" placeholder="${"What's this article about?"}"${(0, import_index_c63d4b3a.b)("value", article.description, 0)}></fieldset>

						<fieldset class="${"form-group"}"><textarea class="${"form-control"}" rows="${"8"}" placeholder="${"Write your article (in markdown)"}">${article.body || ""}</textarea></fieldset>

						<fieldset class="${"form-group"}"><input class="${"form-control"}" type="${"text"}" placeholder="${"Enter tags"}">

							<div class="${"tag-list"}">${(0, import_index_c63d4b3a.f)(article.tagList, (tag, i) => {
    return `<span class="${"tag-default tag-pill"}"><i class="${"ion-close-round"}"></i>
										${(0, import_index_c63d4b3a.e)(tag)}
									</span>`;
  })}</div></fieldset>

						<button class="${"btn btn-lg pull-xs-right btn-primary"}" ${""}>Publish Article
						</button></fieldset></form></div></div></div></div>`;
});
