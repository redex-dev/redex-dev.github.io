webpackJsonp([49550553588977],{1223:function(s,n){s.exports={data:{package:{type:"published",id:"bs-snabbdom",name:"bs-snabbdom",version:"0.4.2",category:"binding",flags:["neglected"],platforms:["browser"],description:"Bucklescript bindings to Snabbdom",keywords:["virtual dom"],license:"MIT",updated:"2019-03-04T02:01:14.599Z",stars:null,score:.17242535945298232,quality:.4546875000039477,popularity:.0044122124782074385,maintenance:.09849952881264397,readme:'<h1 id="bucklescript--snabbdom"><a href="#bucklescript--snabbdom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bucklescript + Snabbdom</h1>\n<p>These are <em>experimental and incomplete</em> bindings to <a href="https://github.com/snabbdom/snabbdom">Snabbdom</a> for <a href="http://bucklescript.github.io/bucklescript/">Bucklescript</a>.</p>\n<p><a href="https://jordwest.github.io/bs-snabbdom/">API Documentation</a></p>\n<h2 id="why"><a href="#why" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why</h2>\n<p><a href="https://github.com/snabbdom/snabbdom">Snabbdom</a> is a small, fast, functional and extensible virtual DOM library that meshes really well with OCaml. Using something like Snabbdom in OCaml can bring you the best parts of languages like Elm plus a tiny bundle size, without a complete architectural overhaul.</p>\n<p>If you\'re already working on a Snabbdom project in JavaScript, you can use these bindings to introduce OCaml for safer types and less runtime errors. Snabbdom components are just functions which return vnodes, so they\'re totally interchangeable between JavaScript and Bucklescript.</p>\n<p>This project was inspired by <a href="https://github.com/OvermindDL1/bucklescript-tea">bucklescript-tea</a>, which provides an almost drop-in replacement of Elm for Bucklescript. I wanted something that provided a functional, type-safe declarative UI language, without adopting the entire Elm architecture. In contrast to Elm and bucklescript-tea, Snabbdom (and <code>bs-snabbdom</code>) does not provide a data model so you\'ll need to bring your own.</p>\n<h2 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>\n<p>This project adds basic OCaml bindings for Snabbdom functions, as well as an OCaml friendly replacement <code>h</code> function for constructing virtual dom nodes.</p>\n<p>In JavaScript, you might write something like the following:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>var click_handler = <span class="hljs-keyword">function</span>(e) {\n    console.log(<span class="hljs-string">\'Clicked!\'</span>, e);\n}\n\nvar vnode = h(<span class="hljs-string">\'ul.my-list\'</span>, {style: {<span class="hljs-string">\'list-style\'</span>: <span class="hljs-string">\'none\'</span>}}, [\n    h(<span class="hljs-string">\'li\'</span>, {on: {click: click_handler}}, <span class="hljs-string">\'First item\'</span>)]),\n    h(<span class="hljs-string">\'li\'</span>, <span class="hljs-string">\'Second item\'</span>),\n]);</code></pre></div>\n<p>In OCaml with bs-snabbdom, the equivalent is:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> click_handler e =\n    <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"Clicked!"</span> e\n<span class="hljs-keyword">in</span>\n\n<span class="hljs-keyword">let</span> vnode = h <span class="hljs-string">"ul.my-list"</span> [style <span class="hljs-string">"list-style"</span> <span class="hljs-string">"none"</span>; children [\n    h <span class="hljs-string">"li"</span> [click click_handler; text <span class="hljs-string">"First item"</span>;]\n    h <span class="hljs-string">"li"</span> [text <span class="hljs-string">"Second item"</span>];\n]]</code></pre></div>\n<p>The main difference when compared to JavaScript is that the <code>h</code> function here always takes two arguments:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>h : <span class="hljs-built_in">string</span> -&gt; vnode_transformer <span class="hljs-built_in">list</span> -&gt; vnode</code></pre></div>\n<p>The first parameter - the element selector (eg: <code>"ul.my-list"</code>) - remains the same.</p>\n<p>The second parameter takes a list of transformer functions. These transformers describe how to alter the vnode - whether that\'s setting a property on the <code>data</code> object, adding children, or setting the node\'s text.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>\n<h3 id="install-bucklescript"><a href="#install-bucklescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install Bucklescript</h3>\n<p>If you\'re starting from scratch, or adding bucklescript to an existing JavaScript project, you\'ll first need to install the Bucklescript compiler:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install bs-platform\n./node_modules/.bin/bsb -init .</code></pre></div>\n<p>See the <a href="http://bucklescript.github.io/bucklescript/">Bucklescript docs</a> for more details.</p>\n<h3 id="install-bs-snabbdom-and-snabbdom"><a href="#install-bs-snabbdom-and-snabbdom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install <code>bs-snabbdom</code> and <code>snabbdom</code></h3>\n<ol>\n<li>Install with your package manager of choice:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install snabbdom bs-snabbdom</code></pre></div>\n<ol start="2">\n<li>Let the Bucklescript compiler know about bs-snabbdom. Add the dependency to <code>bsconfig.json</code> in your project directory:</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n    <span class="hljs-comment">/* ... */</span>\n    <span class="hljs-string">"bs-dependencies"</span> : [<span class="hljs-string">"bs-snabbdom"</span>],\n    <span class="hljs-comment">/* ... */</span>\n}</code></pre></div>\n<h3 id="write-some-code"><a href="#write-some-code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Write some code</h3>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Snabbdom</span>.<span class="hljs-type">Base</span>\n\n<span class="hljs-comment">(* Define a function that returns a new virtual dom node *)</span>\n<span class="hljs-keyword">let</span> view title =\n  h <span class="hljs-string">"div"</span> [\n    style <span class="hljs-string">"box-shadow"</span> <span class="hljs-string">"0px 0px 10px black"</span>;\n    children [\n      h <span class="hljs-string">"h1"</span> [text (<span class="hljs-string">"Hello, "</span> ^ title ^ <span class="hljs-string">"!"</span>)];\n      h <span class="hljs-string">"ol"</span> [children [\n        h <span class="hljs-string">"li"</span> [text <span class="hljs-string">"Item 1"</span>];\n        h <span class="hljs-string">"li"</span> [text <span class="hljs-string">"Item 2"</span>];\n        h <span class="hljs-string">"li"</span> [text <span class="hljs-string">"Item 3"</span>];\n      ]]\n    ]\n  ]\n\n<span class="hljs-comment">(* Create a patch function from an array of Snabbdom modules *)</span>\n<span class="hljs-keyword">let</span> patch = init [|module_style|]\n\n<span class="hljs-comment">(* Patch a dom element with id "#app" to the new virtual dom node *)</span>\n<span class="hljs-keyword">let</span> <span class="hljs-literal">()</span> = patch (<span class="hljs-type">VNode</span>.from_dom_id <span class="hljs-string">"app"</span>) (view <span class="hljs-string">"Snabbdom"</span>)</code></pre></div>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/bs-snabbdom",issuesUrl:null,slug:"/package/bs-snabbdom"}},pathContext:{id:"bs-snabbdom"}}}});
//# sourceMappingURL=path---package-bs-snabbdom-40fb531888fbba6abbf7.js.map