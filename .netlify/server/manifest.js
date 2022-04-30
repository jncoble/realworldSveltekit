var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.ico", "logo-256.png", "manifest.json", "robots.txt"]),
  mimeTypes: { ".ico": "image/vnd.microsoft.icon", ".png": "image/png", ".json": "application/json", ".txt": "text/plain" },
  _: {
    entry: { "file": "start-42c53eda.js", "js": ["start-42c53eda.js", "chunks/index-4cc24504.js", "chunks/singletons-d1fb5791.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "endpoint",
        id: "tags.json",
        pattern: /^\/tags\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/tags.json.js")))
      },
      {
        type: "endpoint",
        id: "articles.json",
        pattern: /^\/articles\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/articles.json.js")))
      },
      {
        type: "endpoint",
        id: "article.json",
        pattern: /^\/article\.json$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/article/index.json.js")))
      },
      {
        type: "page",
        id: "editor",
        pattern: /^\/editor\/?$/,
        names: [],
        types: [],
        path: "/editor",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        id: "login",
        pattern: /^\/login\/?$/,
        names: [],
        types: [],
        path: "/login",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        id: "profile",
        pattern: /^\/profile\/?$/,
        names: [],
        types: [],
        path: "/profile",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        id: "register",
        pattern: /^\/register\/?$/,
        names: [],
        types: [],
        path: "/register",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        id: "settings",
        pattern: /^\/settings\/?$/,
        names: [],
        types: [],
        path: "/settings",
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "endpoint",
        id: "auth/save",
        pattern: /^\/auth\/save\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/auth/save.js")))
      },
      {
        type: "endpoint",
        id: "auth/register",
        pattern: /^\/auth\/register\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/auth/register.js")))
      },
      {
        type: "endpoint",
        id: "auth/logout",
        pattern: /^\/auth\/logout\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/auth/logout.js")))
      },
      {
        type: "endpoint",
        id: "auth/login",
        pattern: /^\/auth\/login\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/auth/login.js")))
      },
      {
        type: "endpoint",
        id: "profile/%40[user].json",
        pattern: /^\/profile\/@([^/]+?)\.json$/,
        names: ["user"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/profile/%40_user_/index.json.js")))
      },
      {
        type: "page",
        id: "profile/%40[user]",
        pattern: /^\/profile\/@([^/]+?)\/?$/,
        names: ["user"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 8, 9],
        b: [1]
      },
      {
        type: "endpoint",
        id: "profile/%40[user]/follow",
        pattern: /^\/profile\/@([^/]+?)\/follow\/?$/,
        names: ["user"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/profile/%40_user_/follow.js")))
      },
      {
        type: "endpoint",
        id: "profile/%40[user]/favorites.json",
        pattern: /^\/profile\/@([^/]+?)\/favorites\.json$/,
        names: ["user"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/profile/%40_user_/favorites.json.js")))
      },
      {
        type: "endpoint",
        id: "profile/%40[user]/articles.json",
        pattern: /^\/profile\/@([^/]+?)\/articles\.json$/,
        names: ["user"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/profile/%40_user_/articles.json.js")))
      },
      {
        type: "page",
        id: "profile/%40[user]/favorites",
        pattern: /^\/profile\/@([^/]+?)\/favorites\/?$/,
        names: ["user"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 8, 10],
        b: [1]
      },
      {
        type: "endpoint",
        id: "article/[slug].json",
        pattern: /^\/article\/([^/]+?)\.json$/,
        names: ["slug"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/article/_slug_/index.json.js")))
      },
      {
        type: "page",
        id: "article/[slug]",
        pattern: /^\/article\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 11],
        b: [1]
      },
      {
        type: "page",
        id: "editor/[slug]",
        pattern: /^\/editor\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        path: null,
        shadow: null,
        a: [0, 12],
        b: [1]
      },
      {
        type: "endpoint",
        id: "article/[slug]/comments.json",
        pattern: /^\/article\/([^/]+?)\/comments\.json$/,
        names: ["slug"],
        types: [null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/article/_slug_/comments/index.json.js")))
      },
      {
        type: "endpoint",
        id: "article/[slug]/comments/[id].json",
        pattern: /^\/article\/([^/]+?)\/comments\/([^/]+?)\.json$/,
        names: ["slug", "id"],
        types: [null, null],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/article/_slug_/comments/_id_.json.js")))
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
