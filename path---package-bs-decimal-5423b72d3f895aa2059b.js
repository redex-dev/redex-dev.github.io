webpackJsonp([96413239840278],{1203:function(s,a){s.exports={data:{package:{type:"published",id:"bs-decimal",name:"bs-decimal",version:"0.0.3",category:"library",flags:[],platforms:["any"],description:"Decimal number utilities",keywords:["math"],license:"MIT",updated:"2020-02-04T04:59:17.592Z",stars:6,score:.2433364357741119,quality:.7053596572850342,popularity:.029241813558515566,maintenance:.06141115383748911,readme:'<h1 id="bs-decimal"><a href="#bs-decimal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-decimal</h1>\n<p>Decimal number functions for ReasonML - experimental stage</p>\n<p>Decimals are represented as a tuple of mantissa and exponent, both <code>int</code>.\nIt supports basic mathematical operations and conversion to and from string.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-decimal</code></pre></div>\n<p>Add it to <code>bs-dependencies</code> in <code>bsconfig.json</code>, e.g:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"myapp"</span>,\n  <span class="hljs-string">"sources"</span>: <span class="hljs-string">"src"</span>,\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-decimal"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Decimal</span>;\n\n<span class="hljs-keyword">let</span> a = dec(<span class="hljs-string">"1.50"</span>);\n<span class="hljs-keyword">let</span> b = dec(<span class="hljs-string">"2"</span>);\n\nadd(a, b)-&gt;to_s;                 # =&gt; <span class="hljs-number">3.50</span>\nsubtract(a, b)-&gt;to_s;            # =&gt; -<span class="hljs-number">0.50</span>\nmultiply(a, b)-&gt;to_s;            # =&gt; <span class="hljs-number">3.00</span>\ndivide(a, b)-&gt;to_s;              # =&gt; <span class="hljs-number">0.75</span>\n\ndivide(a, b, ~precision=<span class="hljs-number">1</span>)-&gt;to_s;   # =&gt; <span class="hljs-number">0.7</span>\ndivide(a, b, ~round=<span class="hljs-number">1</span>)-&gt;to_s;       # =&gt; <span class="hljs-number">0.8</span></code></pre></div>\n<h2 id="running-tests"><a href="#running-tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running tests</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn <span class="hljs-built_in">test</span></code></pre></div>\n<p>During development:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-comment"># console 1 - watch &amp; build .re -&gt; .js</span>\nyarn start\n\n<span class="hljs-comment"># console 2 - watch &amp; run tests</span>\nyart <span class="hljs-built_in">test</span>:watch</code></pre></div>\n<h2 id="licence"><a href="#licence" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Licence</h2>\n<p>MIT - See LICENCE file.</p>\n',homepageUrl:"https://github.com/bagilevi/bs-decimal",repositoryUrl:"https://github.com/bagilevi/bs-decimal",npmUrl:"https://www.npmjs.com/package/bs-decimal",issuesUrl:"https://github.com/bagilevi/bs-decimal/issues",slug:"/package/bs-decimal"}},pathContext:{id:"bs-decimal"}}}});
//# sourceMappingURL=path---package-bs-decimal-5423b72d3f895aa2059b.js.map