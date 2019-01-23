webpackJsonp([0x7eadef9a7f66],{1132:function(s,e){s.exports={data:{package:{type:"published",id:"bs-dom-testing-library",name:"bs-dom-testing-library",version:"0.3.0",category:"binding",flags:[],platforms:["node"],description:"BuckleScript bindings for dom-testing-library.",keywords:["dom","testing"],license:"MIT",updated:"2019-01-16T20:16:15.739Z",stars:7,score:.6365180079282199,quality:.891483102399326,popularity:.06013705106975331,maintenance:.9943574552400242,readme:'<h1 id="bs-dom-testing-library"><a href="#bs-dom-testing-library" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-dom-testing-library</h1>\n<p><a href="https://travis-ci.org/wyze/bs-dom-testing-library"><img src="https://img.shields.io/travis/wyze/bs-dom-testing-library.svg?style=flat-square" alt="Build Status"></a>\n<a href="https://npm.im/bs-dom-testing-library"><img src="https://img.shields.io/npm/v/bs-dom-testing-library.svg?style=flat-square" alt="npm"></a></p>\n<blockquote>\n<p><a href="//github.com/BuckleScript/bucklescript">BuckleScript</a> bindings for <a href="//github.com/kentcdodds/dom-testing-library">dom-testing-library</a>.</p>\n</blockquote>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>$ yarn add --dev bs-dom-testing-library\n\n<span class="hljs-comment"># or..</span>\n\n$ npm install --save-dev bs-dom-testing-library</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h4 id="add-to-bsconfigjson"><a href="#add-to-bsconfigjson" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Add to <code>bsconfig.json</code></h4>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [\n    <span class="hljs-string">"bs-dom-testing-library"</span>\n  ]\n}</code></pre></div>\n<h4 id="with-bs-jest"><a href="#with-bs-jest" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With <a href="//github.com/reasonml-community/bs-jest"><code>bs-jest</code></a></h4>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>/* <span class="hljs-type">A_test</span>.re */\n\n<span class="hljs-keyword">open</span> <span class="hljs-type">Jest</span>;\n\n[@bs.<span class="hljs-keyword">new</span>]\n<span class="hljs-keyword">external</span> domParser : <span class="hljs-built_in">unit</span> =&gt; <span class="hljs-keyword">parser</span> = <span class="hljs-string">"DOMParser"</span>;\n\n[@bs.send.pipe : <span class="hljs-keyword">parser</span>]\n<span class="hljs-keyword">external</span> parseFromString : ( <span class="hljs-built_in">string</span>, [@bs.<span class="hljs-keyword">as</span> <span class="hljs-string">"text/html"</span>] _) =&gt; <span class="hljs-type">Dom</span>.element = <span class="hljs-string">""</span>;\n\n[@bs.get]\n<span class="hljs-keyword">external</span> body : <span class="hljs-type">Dom</span>.element =&gt; <span class="hljs-type">Dom</span>.element = <span class="hljs-string">""</span>;\n\n[@bs.get]\n<span class="hljs-keyword">external</span> firstChild : <span class="hljs-type">Dom</span>.element =&gt; <span class="hljs-type">Dom</span>.element = <span class="hljs-string">""</span>;\n\ndescribe(<span class="hljs-string">"prettyDOM"</span>, <span class="hljs-literal">()</span> =&gt; {\n  <span class="hljs-keyword">open</span> <span class="hljs-type">Expect</span>;\n\n  <span class="hljs-keyword">let</span> div = domParser<span class="hljs-literal">()</span>\n    |&gt; parseFromString(<span class="hljs-string">"&lt;div&gt;&lt;b&gt;Hello,&lt;/b&gt;&lt;p&gt; World!&lt;/p&gt;&lt;/div&gt;"</span>)\n    |&gt; body\n    |&gt; firstChild;\n\n  describe(<span class="hljs-string">"prettyDOM"</span>, <span class="hljs-literal">()</span> =&gt; {\n    test(<span class="hljs-string">"works"</span>, <span class="hljs-literal">()</span> =&gt; {\n      <span class="hljs-keyword">let</span> actual = div |&gt; <span class="hljs-type">DomTestingLibrary</span>.prettyDOM;\n\n      expect(actual) |&gt; toMatchSnapshot;\n    });\n\n    test(<span class="hljs-string">"works with maxLength"</span>, <span class="hljs-literal">()</span> =&gt; {\n      <span class="hljs-keyword">let</span> actual = div |&gt; <span class="hljs-type">DomTestingLibrary</span>.prettyDOM(~maxLength=<span class="hljs-number">25</span>);\n\n      expect(actual) |&gt; toMatchSnapshot;\n    });\n  });\n});</code></pre></div>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>See <a href="src/__tests__"><code>src/__tests__</code></a> for some examples.</p>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>$ git <span class="hljs-built_in">clone</span> https://github.com/wyze/bs-dom-testing-library.git\n$ <span class="hljs-built_in">cd</span> bs-dom-testing-library\n$ yarn <span class="hljs-comment"># or `npm install`</span></code></pre></div>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>$ yarn build</code></pre></div>\n<h2 id="test"><a href="#test" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Test</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>$ yarn <span class="hljs-built_in">test</span></code></pre></div>\n<h2 id="change-log"><a href="#change-log" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Change Log</h2>\n<blockquote>\n<p><a href="changelog.md">Full Change Log</a></p>\n</blockquote>\n<h3 id="v030-2018-10-10"><a href="#v030-2018-10-10" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/wyze/bs-dom-testing-library/releases/tag/v0.3.0">v0.3.0</a> (2018-10-10)</h3>\n<ul>\n<li>[<a href="https://github.com/wyze/bs-dom-testing-library/commit/2a6ddfe79f"><code>2a6ddfe79f</code></a>] - Split main module into submodules (#4) (Neil Kistner)</li>\n<li>[<a href="https://github.com/wyze/bs-dom-testing-library/commit/584e1de278"><code>584e1de278</code></a>] - Add FireEvent.click and FireEvent.change methods (#2) (Neil Kistner)</li>\n<li>[<a href="https://github.com/wyze/bs-dom-testing-library/commit/c6aa67ffcf"><code>c6aa67ffcf</code></a>] - Add ignore option to getByText query (#3) (Neil Kistner)</li>\n<li>[<a href="https://github.com/wyze/bs-dom-testing-library/commit/8424bb3f8e"><code>8424bb3f8e</code></a>] - Upgrade dependencies (Neil Kistner)</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT © <a href="https://neilkistner.com">Neil Kistner</a></p>\n',homepageUrl:"https://github.com/wyze/bs-dom-testing-library#readme",repositoryUrl:"https://github.com/wyze/bs-dom-testing-library",npmUrl:"https://www.npmjs.com/package/bs-dom-testing-library",issuesUrl:"https://github.com/wyze/bs-dom-testing-library/issues",slug:"/package/bs-dom-testing-library"}},pathContext:{id:"bs-dom-testing-library"}}}});
//# sourceMappingURL=path---package-bs-dom-testing-library-b8ee7aa706f2a5da9723.js.map