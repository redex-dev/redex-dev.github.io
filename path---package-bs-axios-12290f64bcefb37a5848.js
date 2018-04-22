webpackJsonp([0x95d5b4d16025],{1072:function(s,a){s.exports={data:{package:{id:"bs-axios",stars:28,name:"bs-axios",version:"0.0.36",category:"binding",flags:[],platforms:["browser","node"],description:"Axios bindings for Bucklescript",keywords:["http client"],license:"MIT",updated:"2018-04-22T10:21:37.674Z",type:"published",score:.5268723195874525,quality:.49559032185563723,popularity:.08055968733865879,maintenance:.9999980927492309,readme:'<h1 id="bs-axios-npm-version"><a href="#bs-axios-npm-version" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-axios <a href="https://www.npmjs.com/package/bs-axios"><img src="https://img.shields.io/npm/v/bs-axios.svg?style=flat-square" alt="npm version"></a></h1>\n<p><a href="https://github.com/axios/axios">Axios</a> bindings for Bucklescript.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ol>\n<li>Install bs-axios</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>$ yarn add bs-axios</code></pre></div>\n<p>or</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>$ npm install --save bs-axios</code></pre></div>\n<ol start="2">\n<li>Add "bs-axios" to "bs-dependencies" section of <code>bsconfig.json</code></li>\n</ol>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>See usage examples in examples folder:</p>\n<ul>\n<li><a href="./examples/request_examples.re">Request examples</a> (GET, POST)</li>\n<li><a href="./examples/instance_example.re">Instance example</a></li>\n</ul>\n<h3 id="simple-request"><a href="#simple-request" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simple request</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"/user?ID=12345"</span>)\n  |&gt; then_((response) =&gt; resolve(<span class="hljs-type">Js</span>.log(response##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Axios</span>.get <span class="hljs-string">"/user?ID=12345"</span>) |&gt;\n       (then_ (<span class="hljs-keyword">fun</span> response  -&gt; resolve (<span class="hljs-type">Js</span>.log (## response data)))))\n      |&gt; (catch (<span class="hljs-keyword">fun</span> error  -&gt; resolve (<span class="hljs-type">Js</span>.log error)))</code></pre>\n      </div>\n    </div>\n  \n<h3 id="post-requests"><a href="#post-requests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Post requests</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.post(<span class="hljs-string">"/user"</span>)\n  |&gt; then_((response) =&gt; resolve(<span class="hljs-type">Js</span>.log(response##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Axios</span>.post <span class="hljs-string">"/user"</span>) |&gt;\n       (then_ (<span class="hljs-keyword">fun</span> response  -&gt; resolve (<span class="hljs-type">Js</span>.log (## response data)))))\n      |&gt; (catch (<span class="hljs-keyword">fun</span> error  -&gt; resolve (<span class="hljs-type">Js</span>.log error)))</code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> user = {\n  <span class="hljs-string">"username"</span>: <span class="hljs-string">"michel"</span>,\n  <span class="hljs-string">"password"</span>: <span class="hljs-string">"12345678"</span>\n};\n\n<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.postData(<span class="hljs-string">"/auth"</span>, {user})\n  |&gt; then_((response) =&gt; resolve(<span class="hljs-type">Js</span>.log(response##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> user = [%bs.obj { username = <span class="hljs-string">"michel"</span>; password = <span class="hljs-string">"12345678"</span> }]\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Axios</span>.postData <span class="hljs-string">"/auth"</span> user) |&gt;\n       (then_ (<span class="hljs-keyword">fun</span> response  -&gt; resolve (<span class="hljs-type">Js</span>.log (## response data)))))\n      |&gt; (catch (<span class="hljs-keyword">fun</span> error  -&gt; resolve (<span class="hljs-type">Js</span>.log error)))</code></pre>\n      </div>\n    </div>\n  \n<h3 id="concurrency"><a href="#concurrency" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Concurrency</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.all2((<span class="hljs-type">Axios</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"/users/1"</span>), <span class="hljs-type">Axios</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"/users/1/friends"</span>)))\n  |&gt; then_(((user, friends)) =&gt; resolve(<span class="hljs-type">Js</span>.log2(user##data, friends##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Axios</span>.all2 ((<span class="hljs-type">Axios</span>.get <span class="hljs-string">"/users/1"</span>), (<span class="hljs-type">Axios</span>.get <span class="hljs-string">"/users/1/friends"</span>))) |&gt;\n       (then_\n          (<span class="hljs-keyword">fun</span> (user,friends)  -&gt;\n             resolve (<span class="hljs-type">Js</span>.log2 (## user data) (## friends data)))))\n      |&gt; (catch (<span class="hljs-keyword">fun</span> error  -&gt; resolve (<span class="hljs-type">Js</span>.log error)))</code></pre>\n      </div>\n    </div>\n  \n<h3 id="creating-an-instance"><a href="#creating-an-instance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating an instance</h3>\n<p>You can create a new instance of axios with a custom config.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Axios</span>;\n\n<span class="hljs-keyword">let</span> inst = <span class="hljs-type">Instance</span>.create(makeConfig(~baseURL=<span class="hljs-string">"https://example.com"</span>, ()));\n<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(<span class="hljs-type">Instance</span>.<span class="hljs-keyword">get</span>(inst, <span class="hljs-string">"/"</span>) |&gt; then_((resp) =&gt; resolve(<span class="hljs-type">Js</span>.log(resp##data))));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Axios</span>\n<span class="hljs-keyword">let</span> inst = <span class="hljs-type">Instance</span>.create (makeConfig ~baseURL:<span class="hljs-string">"https://example.com"</span> <span class="hljs-literal">()</span>)\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    (<span class="hljs-type">Instance</span>.get inst <span class="hljs-string">"/"</span>) |&gt;\n      (then_ (<span class="hljs-keyword">fun</span> resp  -&gt; resolve (<span class="hljs-type">Js</span>.log (## resp data))))</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/meafmira/bs-axios#readme",repositoryUrl:"https://github.com/meafmira/bs-axios",npmUrl:"https://www.npmjs.com/package/bs-axios",issuesUrl:"https://github.com/meafmira/bs-axios/issues",slug:"/package/bs-axios"}},pathContext:{id:"bs-axios"}}}});
//# sourceMappingURL=path---package-bs-axios-12290f64bcefb37a5848.js.map