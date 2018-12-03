webpackJsonp([0x719c324efc92],{1186:function(s,a){s.exports={data:{package:{type:"published",id:"bs-react-script-loader",name:"bs-react-script-loader",version:"0.0.6",category:"library",flags:[],platforms:["browser"],description:"A utility for loading third party scripts on the client.",keywords:["react","utilities"],license:"MIT",updated:"2018-11-06T15:51:07.350Z",stars:2,score:.4377592148096445,quality:.3464089412653022,popularity:.02400389747810465,maintenance:.9298147666077636,readme:'<h1 id="bs-react-script-loader"><a href="#bs-react-script-loader" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-script-loader</h1>\n<p>A script loader for reason-react.</p>\n<p>A debt is owed to: <a href="https://github.com/blueberryapps/react-load-script">https://github.com/blueberryapps/react-load-script</a></p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>usage</h2>\n<p>All you can do is pass a <code>url</code>. </p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>  /* only a single script tag is created per unique url */\n\n  &lt;<span class="hljs-type">Script</span> url=<span class="hljs-string">"https://www.gstatic.com/charts/loader.js"</span>&gt;\n    ...(\n         remote =&gt;\n           switch (remote) {\n           | <span class="hljs-type">Script</span>.<span class="hljs-type">NotAsked</span> =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"not asked"</span>)\n           | <span class="hljs-type">Script</span>.<span class="hljs-type">Loading</span> =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"loading asked"</span>)\n           | <span class="hljs-type">Script</span>.<span class="hljs-type">Success</span> =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"success"</span>)\n           | <span class="hljs-type">Script</span>.<span class="hljs-type">Failure</span> =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"failure"</span>)\n           }\n       )\n  &lt;/<span class="hljs-type">Script</span>&gt;\n  &lt;<span class="hljs-type">Script</span> url=<span class="hljs-string">"https://www.gstatic.com/charts/loader.js"</span>&gt;\n    ...(\n         remote =&gt;\n           switch (remote) {\n           | <span class="hljs-type">Script</span>.<span class="hljs-type">NotAsked</span> =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"not asked"</span>)\n           | <span class="hljs-type">Script</span>.<span class="hljs-type">Loading</span> =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"loading asked"</span>)\n           | <span class="hljs-type">Script</span>.<span class="hljs-type">Success</span> =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"success"</span>)\n           | <span class="hljs-type">Script</span>.<span class="hljs-type">Failure</span> =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"failure"</span>)\n           }\n       )\n  &lt;/<span class="hljs-type">Script</span>&gt;</code></pre></div>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-react-script-loader</code></pre></div>\n<p>Then add <code>bs-react-script-loader</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-react-script-loader"</span>]\n}</code></pre></div>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>demo</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn\nyarn start\n<span class="hljs-comment"># in another tab</span>\nyarn run webpack</code></pre></div>\n<p>After you see the webpack compilation succeed (the <code>npm run webpack</code> step), open up <code>demo/index.html</code> (<strong>no server needed!</strong>).</p>\n',homepageUrl:"https://github.com/mattmarcello/bs-react-script-loader",repositoryUrl:"https://github.com/mattmarcello/bs-react-script-loader",npmUrl:"https://www.npmjs.com/package/bs-react-script-loader",issuesUrl:"https://github.com/mattmarcello/bs-react-script-loader/issues",slug:"/package/bs-react-script-loader"}},pathContext:{id:"bs-react-script-loader"}}}});
//# sourceMappingURL=path---package-bs-react-script-loader-ed5ec078f5fa089e5221.js.map