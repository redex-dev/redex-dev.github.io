webpackJsonp([0x7c4e17d57b9a],{1300:function(e,s){e.exports={data:{package:{type:"published",id:"@gmmorris/bs-rewire",name:"@gmmorris/bs-rewire",version:"0.3.0",category:"binding",flags:[],platforms:["node"],description:"BuckleScript bindings to the Rewire unit test monkey-patching utility",keywords:["testing"],license:"MIT",updated:"2019-08-09T15:20:21.084Z",stars:1,score:.4977601917309011,quality:.8443214956825609,popularity:.026287376016632356,maintenance:.67218046120089,readme:'<h1 id="bs-rewire-alt-travisci-build"><a href="#bs-rewire-alt-travisci-build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-rewire <img src="https://travis-ci.org/gmmorris/bs-rewire.svg?branch=master" alt="alt TravisCI Build"></h1>\n<p><a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/jhnns/rewire">Rewire</a></p>\n<p>Rewire adds a special setter and getter to modules so you can modify their behaviour for better unit testing.\nbs-rewire provides the bindings to allow you to use the familiar rewire approach to test your ReasonML and OCaml code when targetting the Node ecosystem through Bucklescript (damn, that was amouthful, wasn\'t it?).</p>\n<br />\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save-dev @gmmorris/bs-rewire</code></pre></div>\n<p>Then add <code>@gmmorris/bs-rewire</code> to <code>bs-dev-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [<span class="hljs-string">"@gmmorris/bs-rewire"</span>]\n}</code></pre></div>\n<br />\n<h2 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h2>\n<h3 id="rewirefilename-string-rewirerewiredmodule"><a href="#rewirefilename-string-rewirerewiredmodule" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>rewire(filename: String): Rewire.RewiredModule</h3>\n<p>Returns a rewired version of the module found at <code>filename</code>.\nUse <code>Rewire.rewire()</code> exactly like the JS version <code>rewire()</code>.</p>\n<h3 id="rewiredsetrewirerewiredmodule-name--string-value-a--rewiredreset-unit--unit"><a href="#rewiredsetrewirerewiredmodule-name--string-value-a--rewiredreset-unit--unit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rewired.set(Rewire.RewiredModule, name : string, value: \'a) : (Rewired.reset: unit => unit)</h3>\n<p>Sets the internal variable <code>name</code> to the given <code>value</code>. Returns a function which can be called to revert the change.</p>\n<h3 id="rewiredsetallrewirerewiredmodule-values--jsdictta--rewiredreset-unit--unit"><a href="#rewiredsetallrewirerewiredmodule-values--jsdictta--rewiredreset-unit--unit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rewired.setAll(Rewire.RewiredModule, values : Js.Dict.t(\'a)) : (Rewired.reset: unit => unit)</h3>\n<p>Takes all keys of <code>dict</code> as variable names and sets the values respectively. Returns a function which can be called to revert the change.</p>\n<h3 id="rewiredgetrewirerewiredmodule-name--string--a"><a href="#rewiredgetrewirerewiredmodule-name--string--a" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rewired.get(Rewire.RewiredModule, name : string) : \'a</h3>\n<p>Returns the private variable with the given <code>name</code>.</p>\n<h3 id="rewiredwithrewiringrewirerewiredmodule-values--jsdictta--rewiredrewiringexecutor--unit--unit--unit"><a href="#rewiredwithrewiringrewirerewiredmodule-values--jsdictta--rewiredrewiringexecutor--unit--unit--unit" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rewired.withRewiring(Rewire.RewiredModule, values : Js.Dict.t(\'a)) : (Rewired.rewiringExecutor : unit => unit => unit)</h3>\n<p>Returns a function which - when being called - sets <code>obj</code>, executes the given <code>callback</code> and reverts <code>obj</code>.</p>\n<h3 id="rewiredwithasyncrewiringrewirerewiredmodule-values--jsdictta--rewiredrewiringasyncexecutor--unit--jspromisetx"><a href="#rewiredwithasyncrewiringrewirerewiredmodule-values--jsdictta--rewiredrewiringasyncexecutor--unit--jspromisetx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rewired.withAsyncRewiring(Rewire.RewiredModule, values : Js.Dict.t(\'a)) : (Rewired.rewiringAsyncExecutor : unit => Js.Promise.t(\'x))</h3>\n<p>Returns a function which - when being called - sets <code>obj</code>, executes the given <code>callback</code> and expects a Promise to be returned.\n<code>obj</code> is only reverted after the promise has been resolved or rejected. For your convenience the returned function passes the received promise through.</p>\n<h3 id="rewiredmakerewired--rewiredmakemodulerewiring"><a href="#rewiredmakerewired--rewiredmakemodulerewiring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rewired.MakeRewired &#x26; Rewired.MakeModuleRewiring</h3>\n<p>The MakeRewired &#x26; MakeModuleRewiring Functors allow you to create a custom Rewire module tailerd to your Javscript module\'s API.</p>\n<br />\n<h2 id="examples-in-reasonml"><a href="#examples-in-reasonml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples In ReasonML</h2>\n<h3 id="example-1--basic-use-case"><a href="#example-1--basic-use-case" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example #1 : Basic Use Case</h3>\n<p>The following is the basic use case.\nIn this use case the following approach is being taken:</p>\n<ul>\n<li><code>Rewire.rewire</code> is called with a local module file being rewired at <code>./testAsset.js</code>.</li>\n<li>A global variable in the <code>testAsset</code> is then overridden using the <code>Rewire.set</code> API which takes the rewired module, the name of the variable being overridden and the mock value.</li>\n<li>The mock value is a JS object created using Bucklescript\'s jsConverter generator.</li>\n<li>As the rewiredModule only has the Rewire API we then need to use some Raw JS to trick the Reason compiler into letting us call the \'getParam\' within the testAsset module.</li>\n</ul>\n<h4 id="testassetjs"><a href="#testassetjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>testAsset.js</h4>\n<p>The module we wish to rewire</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>/*\n * <span class="hljs-type">This</span> <span class="hljs-keyword">module</span> returns a simple <span class="hljs-keyword">object</span>: { param: <span class="hljs-string">"someValue"</span> }\n */\n<span class="hljs-keyword">let</span> someModule = require(<span class="hljs-char">\'./someModule.js\'</span>); \n\n<span class="hljs-keyword">module</span>.exports = {\n  getParam: <span class="hljs-keyword">function</span> <span class="hljs-literal">()</span> {\n    return someModule.param;\n  }\n};</code></pre></div>\n<h4 id="testre"><a href="#testre" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Test.re</h4>\n<p>The test file which uses rewire to test the testAsset.js file</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Jest</span>;\n\n[@bs.deriving jsConverter]\n<span class="hljs-keyword">type</span> oneParamModule = {param: string};\n\ndescribe(<span class="hljs-string">"testAsset.getParam"</span>, () =&gt; {\n  open <span class="hljs-type">Expect</span>;\n\n  <span class="hljs-keyword">let</span> getParam = [%raw\n    {|\n          function(rewiredModule) {\n            <span class="hljs-keyword">return</span> rewiredModule.getParam();\n          }\n        |}\n  ];\n\n  test(<span class="hljs-string">"getParam returns the value in the global `someModule.param`"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> rewiredModule = <span class="hljs-type">Rewire</span>.rewire(<span class="hljs-string">"./testAsset.js"</span>);\n\n    <span class="hljs-type">Rewire</span>.<span class="hljs-keyword">set</span>(\n      rewiredModule,\n      <span class="hljs-string">"someModule"</span>,\n      oneParamModuleToJs({param: <span class="hljs-string">"someMockedValue"</span>}),\n    );\n\n    expect(\n      getParam(rewiredModule)\n    ) |&gt; toEqual(<span class="hljs-string">"someMockedValue"</span>);\n  })\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Jest</span>\n<span class="hljs-keyword">type</span> oneParamModule = {\n  param: <span class="hljs-built_in">string</span>;}[@@bs.deriving jsConverter]\n<span class="hljs-keyword">let</span> _ =\n  describe <span class="hljs-string">"testAsset.getParam"</span>\n    (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n       <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Expect</span> <span class="hljs-keyword">in</span>\n         <span class="hljs-keyword">let</span> getParam =\n           [%raw\n             {|\n          <span class="hljs-keyword">function</span>(rewiredModule) {\n            return rewiredModule.getParam<span class="hljs-literal">()</span>;\n          }\n        |}] <span class="hljs-keyword">in</span>\n         test <span class="hljs-string">"getParam returns the value in the global `someModule.param`"</span>\n           (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n              <span class="hljs-keyword">let</span> rewiredModule = <span class="hljs-type">Rewire</span>.rewire <span class="hljs-string">"./testAsset.js"</span> <span class="hljs-keyword">in</span>\n              <span class="hljs-type">Rewire</span>.set rewiredModule <span class="hljs-string">"someModule"</span>\n                (oneParamModuleToJs { param = <span class="hljs-string">"someMockedValue"</span> });\n              (expect (getParam rewiredModule)) |&gt;\n                (toEqual <span class="hljs-string">"someMockedValue"</span>)))</code></pre>\n      </div>\n    </div>\n  \n<h3 id="example-2--custom-js-api-of-module"><a href="#example-2--custom-js-api-of-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example #2 : Custom JS API of module</h3>\n<p>The downside to Example #1 is that we have to use Raw JS to trick the compiler.\nThis means our tests are no longer type safe - seems to defeat the purpose of using ReasonML, doesn\'t it?</p>\n<h4 id="makerewired"><a href="#makerewired" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MakeRewired</h4>\n<p>Start by defining a custom API which mirrors the API of the JS module you\'re testing.\nIf we take our testAsset.js as an example, we have a single function, <code>getParam</code>, which returns a string.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">TestAssetModule</span> = </span>{\n  <span class="hljs-keyword">include</span>\n    <span class="hljs-type">MakeRewired</span>(\n      {\n        <span class="hljs-keyword">type</span> t;\n      },\n    );\n  [@bs.send] external getParam : t =&gt; string = <span class="hljs-string">""</span>;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">TestAssetModule</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">include</span> <span class="hljs-type">MakeRewired</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> t <span class="hljs-keyword">end</span>)\n    <span class="hljs-keyword">external</span> getParam : t -&gt; <span class="hljs-built_in">string</span> = <span class="hljs-string">""</span>[@@bs.send ]\n  <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n<p>Using <code>MakeRewired</code> allows us to define our single function on our module and extend this module with the Rewire API.</p>\n<h4 id="makemodulerewiring"><a href="#makemodulerewiring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MakeModuleRewiring</h4>\n<p>Now that we have a type which mirrors our JS module, we can use <code>MakeModuleRewiring</code> to create a custom \'Rewire.rewire()\' function which will return our custom module type.\nThis makes it possible for us to call <code>getParam</code> directly.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Jest</span>;\n\nopen <span class="hljs-type">Rewire</span>;\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">TestAssetModule</span> = </span>{\n  <span class="hljs-keyword">include</span>\n    <span class="hljs-type">MakeRewired</span>(\n      {\n        <span class="hljs-keyword">type</span> t;\n      },\n    );\n  [@bs.send] external getParam : t =&gt; string = <span class="hljs-string">""</span>;\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">TestAssetRewiring</span> = </span>{\n  <span class="hljs-keyword">include</span> <span class="hljs-type">MakeModuleRewiring</span>(<span class="hljs-type">TestAssetModule</span>);\n};\n\ndescribe(<span class="hljs-string">"testAsset.getParam"</span>, () =&gt;\n  <span class="hljs-type">Expect</span>.(\n    test(\n      <span class="hljs-string">"getParam returns the value in the global `someModule.param`"</span>,\n      () =&gt; {\n      <span class="hljs-keyword">let</span> rewiredModule = <span class="hljs-type">TestAssetRewiring</span>.rewire(<span class="hljs-string">"./assets/testAsset.js"</span>);\n      expect(<span class="hljs-type">TestAssetModule</span>.getParam(rewiredModule))\n      |&gt; toEqual(<span class="hljs-string">"someValue"</span>);\n    })\n  )\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Jest</span>\n<span class="hljs-keyword">open</span> <span class="hljs-type">Rewire</span>\n<span class="hljs-keyword">module</span> <span class="hljs-type">TestAssetModule</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">include</span> <span class="hljs-type">MakeRewired</span>(<span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> t <span class="hljs-keyword">end</span>)\n    <span class="hljs-keyword">external</span> getParam : t -&gt; <span class="hljs-built_in">string</span> = <span class="hljs-string">""</span>[@@bs.send ]\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">module</span> <span class="hljs-type">TestAssetRewiring</span> =\n  <span class="hljs-keyword">struct</span> <span class="hljs-keyword">include</span> <span class="hljs-type">MakeModuleRewiring</span>(<span class="hljs-type">TestAssetModule</span>) <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">let</span> _ =\n  describe <span class="hljs-string">"testAsset.getParam"</span>\n    (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n       <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Expect</span> <span class="hljs-keyword">in</span>\n         test <span class="hljs-string">"getParam returns the value in the global `someModule.param`"</span>\n           (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n              <span class="hljs-keyword">let</span> rewiredModule =\n                <span class="hljs-type">TestAssetRewiring</span>.rewire <span class="hljs-string">"./assets/testAsset.js"</span> <span class="hljs-keyword">in</span>\n              (expect (<span class="hljs-type">TestAssetModule</span>.getParam rewiredModule)) |&gt;\n                (toEqual <span class="hljs-string">"someValue"</span>)))</code></pre>\n      </div>\n    </div>\n  \n<p>See <a href="https://github.com/gmmorris/bs-rewire/tree/master/__tests__">the tests</a> for more examples.</p>\n',homepageUrl:"https://github.com/gmmorris/bs-rewire#readme",repositoryUrl:"https://github.com/gmmorris/bs-rewire",npmUrl:"https://www.npmjs.com/package/%40gmmorris%2Fbs-rewire",issuesUrl:"https://github.com/gmmorris/bs-rewire/issues",slug:"/package/@gmmorris/bs-rewire"}},pathContext:{id:"@gmmorris/bs-rewire"}}}});
//# sourceMappingURL=path---package-gmmorris-bs-rewire-0004e0880c475a7a4e25.js.map