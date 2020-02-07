webpackJsonp([56201607670153],{1255:function(s,a){s.exports={data:{package:{type:"published",id:"bs-pixi",name:"bs-pixi",version:"0.1.10",category:"binding",flags:[],platforms:["browser"],description:"buckleScript bindings for PIXI v5",keywords:["opengl","graphics"],license:"MIT",updated:"2020-01-29T14:53:18.535Z",stars:1,score:.5770506599024965,quality:.724111930292582,popularity:.0280495519870471,maintenance:.99999925034073,readme:'<p><a href="https://github.com/ambientlight/bs-pixi/actions"><img src="https://github.com/ambientlight/bs-pixi/workflows/Deploy%20Docs/badge.svg" alt="STATUS"></a>\n<a href="https://www.npmjs.com/package/bs-pixi"><img src="https://img.shields.io/npm/v/bs-pixi" alt="VERSION"></a>\n<a href="https://github.com/ambientlight/bs-pixi/blob/master/LICENSE"><img src="https://img.shields.io/github/license/ambientlight/bs-pixi?t" alt="LICENSE"></a>\n<a href="https://github.com/ambientlight/bs-pixi/issues"><img src="https://img.shields.io/github/issues/ambientlight/bs-pixi" alt="ISSUES"></a></p>\n<h1 id="bs-pixi"><a href="#bs-pixi" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-pixi</h1>\n<p>BuckleScript bindings for <a href="https://github.com/pixijs">PixiJS v5</a> (Work in progress)</p>\n<p>Refer to <a href="https://ambientlight.github.io/bs-pixi">documentation</a> for existing coverage.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install bs-pixi</code></pre></div>\n<p>And add <code>bs-pixi</code> into <code>bs-dependencies</code> in your project <code>bsconfig.json</code>.</p>\n<h2 id="about-bindings"><a href="#about-bindings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>About Bindings</h2>\n<p><a href="https://github.com/pixijs">PIXI.js</a> relies heavily on inheritance, which in the context of bucklescript bindings is often realized via <a href="https://reasonml.github.io/docs/en/module#module-functions-functors">functors</a> where module containing subclass functionality would "spread" the implementation of the ancestor module (closest is mixin) - see <a href="https://reasonml.github.io/docs/en/module#extending-modules">Extending Modules</a>. This is often referred to as <strong>implementation inheritance</strong>. One example is in <a href="https://github.com/reasonml-community/bs-webapi-incubator#implementation-inheritance">bs-webapi-incubator</a>. In addition to this approach here we bind directly to javascript classes via bucklescript supported <code>class type</code> bindings, with most apis accepting all structural subtypes:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>[@bs.send]\n<span class="hljs-keyword">external</span> addChild: (<span class="hljs-type">Js</span>.t(#<span class="hljs-type">C</span>.displayObject), ~child: <span class="hljs-type">Js</span>.t(#<span class="hljs-type">C</span>.displayObject <span class="hljs-keyword">as</span> <span class="hljs-symbol">\'a</span>)) =&gt; <span class="hljs-type">Js</span>.t(<span class="hljs-symbol">\'a</span>) = <span class="hljs-string">"addChild"</span>;</code></pre></div>\n<p><code>#</code> denotes structural subtype, so when we see <code>Js.t(#C.displayObjects)</code> we can feed any js object types that are structural subtypes of displayObject directly without upcasting to a type which is defined in a module where <code>addChild</code> is defined. Also this allows us to utilize model functions as well as object methods for the same functionality like:</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> point = <span class="hljs-type">PIXI</span>.<span class="hljs-type">Point</span>.create(~x=<span class="hljs-number">1.0</span>, ~y=<span class="hljs-number">5.0</span>, <span class="hljs-literal">()</span>);\n<span class="hljs-keyword">let</span> x = point##x;\n<span class="hljs-keyword">let</span> x = point |. <span class="hljs-type">PIXI</span>.<span class="hljs-type">Point</span>.getX;</code></pre></div>\n<p>Although using object methods for anything slightly more complex as simple accessors is not really practical, as <code>[@bs]</code> class object methods do not support currying, labeled and optional parameters, feel free to use it if you feel comfortable with it, as in next example.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">PIXI</span>;\n\n<span class="hljs-keyword">let</span> app = <span class="hljs-type">Application</span>.create(~options=<span class="hljs-type">Application</span>.createApplicationOptions(\n  ~width=<span class="hljs-number">800</span>.,\n  ~height=<span class="hljs-number">600</span>.,\n  ~backgroundColor=int_of_string(<span class="hljs-string">"0x1099bb"</span>),\n  ~resolution=<span class="hljs-type">DomRe</span>.window |. <span class="hljs-type">Obj</span>.magic |. <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.unsafeGet(<span class="hljs-string">"devicePixelRatio"</span>), ()), \n  ());\n\n<span class="hljs-type">Webapi</span>.<span class="hljs-type">Dom</span>.document \n|&gt; <span class="hljs-type">Webapi</span>.<span class="hljs-type">Dom</span>.<span class="hljs-type">Document</span>.asHtmlDocument \n|. <span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.flatMap(document =&gt; document |&gt; <span class="hljs-type">Webapi</span>.<span class="hljs-type">Dom</span>.<span class="hljs-type">HtmlDocument</span>.body)\n|. <span class="hljs-type">Belt</span>.<span class="hljs-type">Option</span>.<span class="hljs-built_in">map</span>(body =&gt; body |&gt; <span class="hljs-type">Webapi</span>.<span class="hljs-type">Dom</span>.<span class="hljs-type">Element</span>.appendChild(app##view))\n|&gt; ignore;\n\n<span class="hljs-keyword">let</span> container = <span class="hljs-type">Container</span>.create();\n\napp \n|. <span class="hljs-type">Application</span>.getStage \n|. <span class="hljs-type">Container</span>.addChild(container);\n\n<span class="hljs-comment">// Create a new texture</span>\n<span class="hljs-keyword">let</span> texture = <span class="hljs-type">Texture</span>.from(~source=`<span class="hljs-type">String</span>(<span class="hljs-string">"https://pixijs.io/examples/examples/assets/bunny.png"</span>), ());\n\n<span class="hljs-comment">// Create a 5x5 grid of bunnies</span>\n<span class="hljs-type">Belt</span>.<span class="hljs-type">Array</span>.range(<span class="hljs-number">0</span>, <span class="hljs-number">24</span>)\n|. <span class="hljs-type">Belt</span>.<span class="hljs-type">Array</span>.forEach(i =&gt; {\n  <span class="hljs-keyword">let</span> bunny = <span class="hljs-type">Sprite</span>.create(texture);\n  bunny##anchor##<span class="hljs-keyword">set</span>(<span class="hljs-number">0.5</span>, <span class="hljs-number">0.5</span>);\n  bunny |. <span class="hljs-type">Sprite</span>.setX(float_of_int((i mod <span class="hljs-number">5</span>) * <span class="hljs-number">40</span>));\n  bunny |. <span class="hljs-type">Sprite</span>.setY(floor(float_of_int(i) /. <span class="hljs-number">5</span>.) *. <span class="hljs-number">40</span>.);\n  container |. <span class="hljs-type">Container</span>.addChild(bunny) |&gt; ignore;\n});\n\ncontainer |. <span class="hljs-type">Container</span>.setX(app##screen##width /. <span class="hljs-number">2</span>.);\ncontainer |. <span class="hljs-type">Container</span>.setY(app##screen##height /. <span class="hljs-number">2</span>.);\n\n<span class="hljs-comment">// Center bunny sprite in local container coordinates</span>\ncontainer##pivot##x #= (container##width /. <span class="hljs-number">2</span>.);\ncontainer##pivot##y #= (container##height /. <span class="hljs-number">2</span>.);\n\n<span class="hljs-comment">// Listen for animate update</span>\napp\n|. <span class="hljs-type">Application</span>.getTicker\n|. <span class="hljs-type">Ticker</span>.add(delta =&gt; {\n  <span class="hljs-comment">// rotate the container!</span>\n  <span class="hljs-comment">// use delta to create frame-independent transform</span>\n  container |. <span class="hljs-type">Container</span>.setRotation(container##rotation -. <span class="hljs-number">0.01</span> *. delta);\n}, ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>Also make sure to <strong>CHECK OUT</strong> other <a href="https://github.com/ambientlight/bs-pixi/tree/master/examples">examples</a>.</p>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<p>Any contribution is greatly appreciated. Take a look at <a href="https://github.com/ambientlight/bs-pixi/blob/master/CONTRIBUTING.md">CONTRIBUTING.md</a>. Feel free to reach out in <a href="https://github.com/ambientlight/bs-pixi/issues">issues</a> for any questions.</p>\n',homepageUrl:"https://github.com/ambientlight/bs-pixi#readme",repositoryUrl:"https://github.com/ambientlight/bs-pixi",npmUrl:"https://www.npmjs.com/package/bs-pixi",issuesUrl:"https://github.com/ambientlight/bs-pixi/issues",slug:"/package/bs-pixi"}},pathContext:{id:"bs-pixi"}}}});
//# sourceMappingURL=path---package-bs-pixi-d6dfac799fedad33fa32.js.map