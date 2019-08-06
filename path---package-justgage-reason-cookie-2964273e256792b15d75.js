webpackJsonp([68340569382596],{1310:function(s,e){s.exports={data:{package:{type:"published",id:"@justgage/reason-cookie",name:"@justgage/reason-cookie",version:"0.1.2",category:"binding",flags:[],platforms:["browser"],description:"a simple way to use cross-browser cookies that contain JSON.",keywords:["platform api"],license:"MIT",updated:"2019-06-17T22:04:51.307Z",stars:13,score:.45615332390219393,quality:.7049680960813183,popularity:.046751886208614236,maintenance:.65228495687081,readme:'<p><img src="https://raw.githubusercontent.com/justgage/reason-cookie/master/logo.png" alt="Reason Cookie Logo"></p>\n<h1 id="-reasoncookie"><a href="#-reasoncookie" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>🍪 ReasonCookie</h1>\n<p>a simple way to use cross-browser cookies that contain JSON.</p>\n<p>Note this wrapps <a href="https://github.com/js-cookie/js-cookie">js-cookie</a></p>\n<h1 id="is-it-ready-for-prime-time"><a href="#is-it-ready-for-prime-time" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Is it ready for prime time?</h1>\n<p>These are just some simple bindings to the library it wraps. I\'ve used it on some side projects but it should be <em>reasonably</em> good. The Underlying library is pretty battle tested and can even work in older browsers.</p>\n<h1 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save @justgage/reason-cookie</code></pre></div>\n<p>Then in your <code>bsconfig.json</code>.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"@justgage/reason-cookie"</span>],</code></pre></div>\n<h1 id="api-"><a href="#api-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API 😋</h1>\n<h3 id="working-with-string-values"><a href="#working-with-string-values" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Working with string values</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">JustgageReasonCookie</span>;\n\n<span class="hljs-type">Cookie</span>.getAsString(<span class="hljs-string">"hello"</span>) <span class="hljs-comment">/* None */</span>\n<span class="hljs-type">Cookie</span>.setString(<span class="hljs-string">"hello"</span>, <span class="hljs-string">"test"</span>);\n<span class="hljs-type">Cookie</span>.getAsString(<span class="hljs-string">"hello"</span>) <span class="hljs-comment">/* Some("test") */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2310</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="working-with-json"><a href="#working-with-json" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>working with JSON</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">JustgageReasonCookie</span>;\n\n<span class="hljs-keyword">let</span> obj = <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.empty();\n<span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.<span class="hljs-keyword">set</span>(obj, <span class="hljs-string">"a"</span>, <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.number(<span class="hljs-number">2</span>.));\n<span class="hljs-keyword">let</span> obj = <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.object_(obj);\n\n<span class="hljs-type">Cookie</span>.setJson(<span class="hljs-string">"hello"</span>, obj);\n\n<span class="hljs-keyword">let</span> maybeCookie = <span class="hljs-type">Cookie</span>.getAsJson(<span class="hljs-string">"hello"</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">JustgageReasonCookie</span>\n<span class="hljs-keyword">let</span> obj = <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.empty <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.set obj <span class="hljs-string">"a"</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.number <span class="hljs-number">2.</span>)\n<span class="hljs-keyword">let</span> obj = <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.object_ obj\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Cookie</span>.setJson <span class="hljs-string">"hello"</span> obj\n<span class="hljs-keyword">let</span> maybeCookie = <span class="hljs-type">Cookie</span>.getAsJson <span class="hljs-string">"hello"</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="set-pathexpiry"><a href="#set-pathexpiry" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>set path/expiry</h3>\n<ul>\n<li><strong>expires</strong>: number of days till it\'s gone.</li>\n<li><strong>path</strong>: this scopes it to a page on your website (note: haven\'t used this personally)</li>\n</ul>\n<p>(see <a href="https://github.com/js-cookie/js-cookie">js-cookie</a> for more uses)</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">JustgageReasonCookie</span>;\n\n<span class="hljs-type">Cookie</span>.setJsonConfig(\n  <span class="hljs-string">"hello"</span>,\n  obj,\n  <span class="hljs-type">Cookie</span>.makeConfig(~path=<span class="hljs-string">""</span>, ~expires=<span class="hljs-number">2</span>, ()),\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">JustgageReasonCookie</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Cookie</span>.setJsonConfig <span class="hljs-string">"hello"</span> obj (<span class="hljs-type">Cookie</span>.makeConfig ~path:<span class="hljs-string">""</span> ~expires:<span class="hljs-number">2</span> <span class="hljs-literal">()</span>)</code></pre>\n      </div>\n    </div>\n  \n<h1 id="contribute"><a href="#contribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribute?</h1>\n<p>Best thing somone can do is just use it and find any problems it has.</p>\n<p>Absolutely! Just make an issue. Please note that I usually ask people to make the changes themselves.</p>\n',homepageUrl:"https://github.com/justgage/reason-cookie#readme",repositoryUrl:"https://github.com/justgage/reason-cookie",npmUrl:"https://www.npmjs.com/package/%40justgage%2Freason-cookie",issuesUrl:"https://github.com/justgage/reason-cookie/issues",slug:"/package/@justgage/reason-cookie"}},pathContext:{id:"@justgage/reason-cookie"}}}});
//# sourceMappingURL=path---package-justgage-reason-cookie-2964273e256792b15d75.js.map