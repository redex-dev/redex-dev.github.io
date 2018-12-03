webpackJsonp([0xa57bf1241612],{1139:function(s,e){s.exports={data:{package:{type:"published",id:"bs-fluture",name:"bs-fluture",version:"0.0.4",category:"binding",flags:[],platforms:["browser","node"],description:"Reason bindings for Fluture.js",keywords:["async"],license:"MIT",updated:"2018-12-03T12:11:33.741Z",stars:0,score:.4778511430867391,quality:.4104288641759499,popularity:.017853961327652663,maintenance:.9956388496265021,readme:'<h1 id="bs-fluture"><a href="#bs-fluture" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-fluture</h1>\n<p><a href="https://reasonml.github.io/">ReasonML</a> bindings for <a href="https://github.com/fluture-js/Fluture">Fluture</a>.</p>\n<p>This library of bindings is currently a work in progress. Please file an issue if one of the bindings is wrong or it isn\'t working for you in general.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-fluture</code></pre></div>\n<p>Then add bs-fluture to bs-dependencies in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-fluture"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> fetchData = () =&gt;\n  <span class="hljs-type">BsFluture</span>.encaseP(fetch, <span class="hljs-string">"https://example.com"</span>)\n  |&gt; <span class="hljs-type">BsFluture</span>.fork(\n       error =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Log</span>(error),\n       response =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Log</span>(response),\n     );\n\n<span class="hljs-keyword">let</span> cancelFetch = fetchData();</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> fetchData <span class="hljs-literal">()</span> =\n  (<span class="hljs-type">BsFluture</span>.encaseP fetch <span class="hljs-string">"https://example.com"</span>) |&gt;\n    (<span class="hljs-type">BsFluture</span>.fork (<span class="hljs-keyword">fun</span> error  -&gt; ((<span class="hljs-type">Js</span>.<span class="hljs-type">Log</span> (error))[@explicit_arity ]))\n       (<span class="hljs-keyword">fun</span> response  -&gt; ((<span class="hljs-type">Js</span>.<span class="hljs-type">Log</span> (response))[@explicit_arity ])))\n<span class="hljs-keyword">let</span> cancelFetch = fetchData <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/benadamstyles/bs-fluture",repositoryUrl:"https://github.com/benadamstyles/bs-fluture",npmUrl:"https://www.npmjs.com/package/bs-fluture",issuesUrl:"https://github.com/benadamstyles/bs-fluture/issues",slug:"/package/bs-fluture"}},pathContext:{id:"bs-fluture"}}}});
//# sourceMappingURL=path---package-bs-fluture-88c17aaf76dbc1efb643.js.map