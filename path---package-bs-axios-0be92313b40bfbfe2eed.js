webpackJsonp([0x95d5b4d16025],{1171:function(s,a){s.exports={data:{package:{type:"published",id:"bs-axios",name:"bs-axios",version:"0.0.42",category:"binding",flags:[],platforms:["browser","node"],description:"Axios bindings for Bucklescript",keywords:["http client"],license:"MIT",updated:"2019-09-27T09:37:45.019Z",stars:62,score:.5396818478108781,quality:.5156792732921851,popularity:.10109612983071638,maintenance:.998841201092777,readme:'<h1 id="bs-axios-npm-version"><a href="#bs-axios-npm-version" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-axios <a href="https://www.npmjs.com/package/bs-axios"><img src="https://img.shields.io/npm/v/bs-axios.svg?style=flat-square" alt="npm version"></a></h1>\n<p><a href="https://github.com/axios/axios">Axios</a> bindings for Bucklescript.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ol>\n<li>Install bs-axios</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>$ yarn add bs-axios</code></pre></div>\n<p>or</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>$ npm install --save bs-axios</code></pre></div>\n<ol start="2">\n<li>Add "bs-axios" to "bs-dependencies" section of <code>bsconfig.json</code></li>\n</ol>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>See usage examples in examples folder:</p>\n<ul>\n<li><a href="./examples/request_examples.re">Request examples</a> (GET, POST)</li>\n<li><a href="./examples/instance_example.re">Instance example</a></li>\n</ul>\n<h3 id="simple-request"><a href="#simple-request" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Simple request</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"/user?ID=12345"</span>)\n  |&gt; then_((response) =&gt; resolve(<span class="hljs-type">Js</span>.log(response##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Axios</span>.get <span class="hljs-string">"/user?ID=12345"</span>) |&gt;\n       (then_ (<span class="hljs-keyword">fun</span> response  -&gt; resolve (<span class="hljs-type">Js</span>.log (## response data)))))\n      |&gt; (catch (<span class="hljs-keyword">fun</span> error  -&gt; resolve (<span class="hljs-type">Js</span>.log error)))</code></pre>\n      </div>\n    </div>\n  \n<h3 id="post-requests"><a href="#post-requests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Post requests</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.post(<span class="hljs-string">"/user"</span>)\n  |&gt; then_((response) =&gt; resolve(<span class="hljs-type">Js</span>.log(response##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Axios</span>.post <span class="hljs-string">"/user"</span>) |&gt;\n       (then_ (<span class="hljs-keyword">fun</span> response  -&gt; resolve (<span class="hljs-type">Js</span>.log (## response data)))))\n      |&gt; (catch (<span class="hljs-keyword">fun</span> error  -&gt; resolve (<span class="hljs-type">Js</span>.log error)))</code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> user = {\n  <span class="hljs-string">"username"</span>: <span class="hljs-string">"michel"</span>,\n  <span class="hljs-string">"password"</span>: <span class="hljs-string">"12345678"</span>\n};\n\n<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.postData(<span class="hljs-string">"/auth"</span>, {user})\n  |&gt; then_((response) =&gt; resolve(<span class="hljs-type">Js</span>.log(response##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> user = [%bs.obj { username = <span class="hljs-string">"michel"</span>; password = <span class="hljs-string">"12345678"</span> }]\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Axios</span>.postData <span class="hljs-string">"/auth"</span> user) |&gt;\n       (then_ (<span class="hljs-keyword">fun</span> response  -&gt; resolve (<span class="hljs-type">Js</span>.log (## response data)))))\n      |&gt; (catch (<span class="hljs-keyword">fun</span> error  -&gt; resolve (<span class="hljs-type">Js</span>.log error)))</code></pre>\n      </div>\n    </div>\n  \n<h3 id="concurrency"><a href="#concurrency" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Concurrency</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Axios</span>.all2((<span class="hljs-type">Axios</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"/users/1"</span>), <span class="hljs-type">Axios</span>.<span class="hljs-keyword">get</span>(<span class="hljs-string">"/users/1/friends"</span>)))\n  |&gt; then_(((user, friends)) =&gt; resolve(<span class="hljs-type">Js</span>.log2(user##data, friends##data)))\n  |&gt; catch((error) =&gt; resolve(<span class="hljs-type">Js</span>.log(error)))\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Axios</span>.all2 ((<span class="hljs-type">Axios</span>.get <span class="hljs-string">"/users/1"</span>), (<span class="hljs-type">Axios</span>.get <span class="hljs-string">"/users/1/friends"</span>))) |&gt;\n       (then_\n          (<span class="hljs-keyword">fun</span> (user,friends)  -&gt;\n             resolve (<span class="hljs-type">Js</span>.log2 (## user data) (## friends data)))))\n      |&gt; (catch (<span class="hljs-keyword">fun</span> error  -&gt; resolve (<span class="hljs-type">Js</span>.log error)))</code></pre>\n      </div>\n    </div>\n  \n<h3 id="creating-an-instance"><a href="#creating-an-instance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating an instance</h3>\n<p>You can create a new instance of axios with a custom config.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Axios</span>;\n\n<span class="hljs-keyword">let</span> inst = <span class="hljs-type">Instance</span>.create(makeConfig(~baseURL=<span class="hljs-string">"https://example.com"</span>, ()));\n<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(<span class="hljs-type">Instance</span>.<span class="hljs-keyword">get</span>(inst, <span class="hljs-string">"/"</span>) |&gt; then_((resp) =&gt; resolve(<span class="hljs-type">Js</span>.log(resp##data))));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Axios</span>\n<span class="hljs-keyword">let</span> inst = <span class="hljs-type">Instance</span>.create (makeConfig ~baseURL:<span class="hljs-string">"https://example.com"</span> <span class="hljs-literal">()</span>)\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    (<span class="hljs-type">Instance</span>.get inst <span class="hljs-string">"/"</span>) |&gt;\n      (then_ (<span class="hljs-keyword">fun</span> resp  -&gt; resolve (<span class="hljs-type">Js</span>.log (## resp data))))</code></pre>\n      </div>\n    </div>\n  \n<h3 id="error-handling"><a href="#error-handling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Error handling</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>external promiseErrorToJsObj : <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.error =&gt; <span class="hljs-type">Js</span>.t(\'a) = <span class="hljs-string">"%identity"</span>;\n\n<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n  <span class="hljs-type">Instance</span>.<span class="hljs-keyword">get</span>(inst, <span class="hljs-string">"/"</span>)\n  |&gt; then_(resp =&gt; resolve(<span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span>(resp)))\n  |&gt; catch(error =&gt; {\n       <span class="hljs-keyword">let</span> error = error |&gt; promiseErrorToJsObj;\n       <span class="hljs-type">Js</span>.log(error##response##status);\n       resolve(<span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span>(error));\n     })\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">external</span> promiseErrorToJsObj : <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.error -&gt; <span class="hljs-symbol">\'a</span> <span class="hljs-type">Js</span>.t = <span class="hljs-string">"%identity"</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span> <span class="hljs-keyword">in</span>\n    ((<span class="hljs-type">Instance</span>.get inst <span class="hljs-string">"/"</span>) |&gt;\n       (then_\n          (<span class="hljs-keyword">fun</span> resp  -&gt; resolve ((<span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span> (resp))[@explicit_arity ]))))\n      |&gt;\n      (catch\n         (<span class="hljs-keyword">fun</span> error  -&gt;\n            <span class="hljs-keyword">let</span> error = error |&gt; promiseErrorToJsObj <span class="hljs-keyword">in</span>\n            <span class="hljs-type">Js</span>.log (## (## error response) status);\n            resolve ((<span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span> (error))[@explicit_arity ])))</code></pre>\n      </div>\n    </div>\n  \n<h3 id="headers"><a href="#headers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Headers</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> headers = <span class="hljs-type">Axios</span>.<span class="hljs-type">Headers</span>.fromObj({<span class="hljs-string">"Content-type"</span>: <span class="hljs-string">"application/json"</span>});\n<span class="hljs-type">Axios</span>.getc(<span class="hljs-string">"https://example.com"</span>, <span class="hljs-type">Axios</span>.makeConfig(~headers, ()));\n\n<span class="hljs-keyword">let</span> headersDict =\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.(\n    {\n      <span class="hljs-keyword">let</span> dict = empty();\n      dict-&gt;<span class="hljs-keyword">set</span>(<span class="hljs-string">"Content-type"</span>, <span class="hljs-string">"application/json"</span>);\n      dict;\n    }\n  );\n<span class="hljs-keyword">let</span> headers = <span class="hljs-type">Axios</span>.<span class="hljs-type">Headers</span>.fromDict(headersDict);\n<span class="hljs-type">Axios</span>.getc(<span class="hljs-string">"https://example.com"</span>, <span class="hljs-type">Axios</span>.makeConfig(~headers, ()));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="nodejs-httphttps-agent"><a href="#nodejs-httphttps-agent" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Node.js HTTP/HTTPS Agent</h3>\n<p>Providing custom Node.js <a href="https://nodejs.org/api/http.html#http_class_http_agent"><code>HTTP Agent</code></a>\nallows for configuring connection persistence and reuse. For secure connections,\n<a href="https://nodejs.org/api/https.html#https_class_https_agent"><code>HTTPS Agent</code></a> allows security related\nconfiguration to be provided.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> httpsAgent =\n  <span class="hljs-type">Axios</span>.<span class="hljs-type">Agent</span>.<span class="hljs-type">Https</span>.(config(~rejectUnauthorized=<span class="hljs-literal">false</span>, ()) |&gt; create);\n\n<span class="hljs-type">Axios</span>.getc(\n  <span class="hljs-string">"https://insecure-example.com"</span>,\n  <span class="hljs-type">Axios</span>.makeConfig(~httpsAgent, ()),\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> httpsAgent =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Axios</span>.<span class="hljs-type">Agent</span>.<span class="hljs-type">Https</span> <span class="hljs-keyword">in</span>\n    (config ~rejectUnauthorized:<span class="hljs-literal">false</span> <span class="hljs-literal">()</span>) |&gt; create\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Axios</span>.getc <span class="hljs-string">"https://insecure-example.com"</span> (<span class="hljs-type">Axios</span>.makeConfig ~httpsAgent <span class="hljs-literal">()</span>)</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/meafmira/bs-axios#readme",repositoryUrl:"https://github.com/meafmira/bs-axios",npmUrl:"https://www.npmjs.com/package/bs-axios",issuesUrl:"https://github.com/meafmira/bs-axios/issues",slug:"/package/bs-axios"}},pathContext:{id:"bs-axios"}}}});
//# sourceMappingURL=path---package-bs-axios-0be92313b40bfbfe2eed.js.map