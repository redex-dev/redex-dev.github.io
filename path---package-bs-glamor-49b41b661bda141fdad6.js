webpackJsonp([60489678114862],{1137:function(s,a){s.exports={data:{package:{type:"published",id:"bs-glamor",name:"bs-glamor",version:"0.2.0",category:"binding",flags:["neglected"],platforms:["browser"],description:"BuckleScript bindings for glamor",keywords:["css"],license:"ISC",updated:"2018-10-25T06:30:22.110Z",stars:68,score:.5488620042104375,quality:.7459260804372112,popularity:.09089641763321445,maintenance:.8379155254504262,readme:'<h1 id="bs-glamor--bucklescript-bindings-for-glamor"><a href="#bs-glamor--bucklescript-bindings-for-glamor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-glamor – <a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/threepointone/glamor">glamor</a></h1>\n<p>The API is still <strong>experimental</strong>. Only the <code>css</code> function from glamor is exposed (with its result slightly incorrectly typed as a <code>string</code>); no other functions such as <code>renderStatic</code> are supported yet.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-glamor</code></pre></div>\n<p>In your <code>bsconfig.json</code>, include <code>"bs-glamor"</code> in the <code>bs-dependencies</code>.</p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>The following examples (in <a href="http://reasonml.github.io">Reason</a> syntax) assume that <code>Glamor</code> is included in the namespace:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Glamor</span>;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Glamor</span></code></pre>\n      </div>\n    </div>\n  \n<ul>\n<li>\n<p>Simple styling:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>css([\n    color(<span class="hljs-string">"red"</span>),\n    border(<span class="hljs-string">"1px solid black"</span>)\n])</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = css [color <span class="hljs-string">"red"</span>; border <span class="hljs-string">"1px solid black"</span>]</code></pre>\n      </div>\n    </div>\n  \n</li>\n<li>\n<p>Styling with selectors (<code>@media</code>, <code>:hover</code>, <code>&#x26;</code>, etc.):</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>css([\n    color(<span class="hljs-string">"red"</span>),\n    <span class="hljs-type">Selector</span>(<span class="hljs-string">"@media (min-width: 300px)"</span>, [\n        color(<span class="hljs-string">"green"</span>)\n    ])\n])</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  css\n    [color <span class="hljs-string">"red"</span>;\n    ((<span class="hljs-type">Selector</span> (<span class="hljs-string">"@media (min-width: 300px)"</span>, [color <span class="hljs-string">"green"</span>]))[@explicit_arity\n                                                                ])]</code></pre>\n      </div>\n    </div>\n  \n</li>\n<li>\n<p>Selectors can be nested:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>css([\n    color(<span class="hljs-string">"red"</span>),\n    <span class="hljs-type">Selector</span>(<span class="hljs-string">"@media (min-width: 300px)"</span>, [\n        color(<span class="hljs-string">"green"</span>),\n        <span class="hljs-type">Selector</span>(<span class="hljs-string">"&amp; .foo"</span>, [\n            color(<span class="hljs-string">"blue"</span>)\n        ])\n    ])\n])</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  css\n    [color <span class="hljs-string">"red"</span>;\n    ((<span class="hljs-type">Selector</span>\n        (<span class="hljs-string">"@media (min-width: 300px)"</span>,\n          [color <span class="hljs-string">"green"</span>;\n          ((<span class="hljs-type">Selector</span> (<span class="hljs-string">"&amp; .foo"</span>, [color <span class="hljs-string">"blue"</span>]))[@explicit_arity ])]))\n    [@explicit_arity ])]</code></pre>\n      </div>\n    </div>\n  \n</li>\n</ul>\n<p>You can isolate inclusion of the <code>Glamor</code> namespace in the following way:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Glamor</span>.(css([color(<span class="hljs-string">"red"</span>)]))</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Glamor</span> <span class="hljs-keyword">in</span> css [color <span class="hljs-string">"red"</span>]</code></pre>\n      </div>\n    </div>\n  \n<p>The result of the <code>css</code> function can be assigned to a class name, e.g. in JSX:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>&lt;div className=(css([color(<span class="hljs-string">"red"</span>)])) /&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = ((div ~className:(css [color <span class="hljs-string">"red"</span>]) ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])</code></pre>\n      </div>\n    </div>\n  \n<p>You can also combine stylings with a class names. For example, if you want to use\nsome classes from third-party libraries (e.g. Bootstrap), or just to add a class name\nfor testing purposes along with glamor styles:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>&lt;div className=(<span class="hljs-string">"btn "</span> ^ css([color(<span class="hljs-string">"red"</span>)])) /&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>### Merging css rules</p>\n<p>You can merge css rules using <code>merge</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> text_primary = css([color(<span class="hljs-string">"indigo"</span>)]);\n<span class="hljs-keyword">let</span> small = css([fontSize(<span class="hljs-string">"10px"</span>)]);\n\n&lt;p className=(merge([text_primary, small])) /&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> text_primary = css [color <span class="hljs-string">"indigo"</span>]\n<span class="hljs-keyword">let</span> small = css [fontSize <span class="hljs-string">"10px"</span>]\n<span class="hljs-keyword">let</span> _ = ((p ~className:(merge [text_primary; small]) ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])</code></pre>\n      </div>\n    </div>\n  \n<p>glamor will make sure that rules are merged in the correct order, managing nesting and precedence for you.</p>\n<h3 id="global-css"><a href="#global-css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Global CSS</h3>\n<p> You can define global CSS rules with <code>global</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Glamor</span>.(global(<span class="hljs-string">"body"</span>, [margin(<span class="hljs-string">"0px"</span>)]));\n<span class="hljs-type">Glamor</span>.(global(<span class="hljs-string">"h1, h2, h3"</span>, [color(<span class="hljs-string">"palegoldenrod"</span>)]));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Glamor</span> <span class="hljs-keyword">in</span> global <span class="hljs-string">"body"</span> [margin <span class="hljs-string">"0px"</span>]\n<span class="hljs-keyword">let</span> _ = <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Glamor</span> <span class="hljs-keyword">in</span> global <span class="hljs-string">"h1, h2, h3"</span> [color <span class="hljs-string">"palegoldenrod"</span>]</code></pre>\n      </div>\n    </div>\n  \n<p>## Keyframes</p>\n<p>Define animation keyframes:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-built_in">let</span> bounce = Glamor.keyframes([\n  (<span class="hljs-string">"0%"</span>: [transform(<span class="hljs-string">"scale(0.1)"</span>), opacity(<span class="hljs-string">"0"</span>)]),\n  (<span class="hljs-string">"60%"</span>: [transform(<span class="hljs-string">"scale(1.2)"</span>), opacity(<span class="hljs-string">"1"</span>)]),\n  (<span class="hljs-string">"100%"</span>: [transform(<span class="hljs-string">"scale(1)"</span>)])\n]);\n<span class="hljs-built_in">let</span> styles = css([\n    animationName(bounce),\n    animationDuration(<span class="hljs-string">"2s"</span>),\n    width(<span class="hljs-string">"50px"</span>),\n    height(<span class="hljs-string">"50px"</span>),\n    backgroundColor(<span class="hljs-string">"red"</span>)\n]);\n\n&lt;div className=styles&gt;bounce!&lt;/div&gt;</code></pre></div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>See <a href="https://github.com/poeschko/reason-react-tictactoe">reason-react-tictactoe</a> for a live example.</p>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm run start</code></pre></div>\n<h3 id="tests"><a href="#tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tests</h3>\n<p>There are some simplistic tests using <a href="https://github.com/BuckleTypes/bs-jest">bs-jest</a>.</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm run <span class="hljs-built_in">test</span></code></pre></div>\n<h2 id="thanks"><a href="#thanks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thanks</h2>\n<p>Thanks to <a href="https://github.com/chenglou/reason-react-example">reason-react-example</a>, <a href="https://github.com/reasonml/reason-react">reason-react</a>, and <a href="https://github.com/BuckleTypes/bs-jest">bs-jest</a> for inspiration how to create a Reason library, and of course, thanks to <a href="https://github.com/threepointone/glamor">glamor</a>.</p>\n',homepageUrl:"https://github.com/poeschko/bs-glamor#readme",repositoryUrl:"https://github.com/poeschko/bs-glamor",npmUrl:"https://www.npmjs.com/package/bs-glamor",issuesUrl:"https://github.com/poeschko/bs-glamor/issues",slug:"/package/bs-glamor"}},pathContext:{id:"bs-glamor"}}}});
//# sourceMappingURL=path---package-bs-glamor-49b41b661bda141fdad6.js.map