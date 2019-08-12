webpackJsonp([0x96c0614e163c],{1387:function(s,n){s.exports={data:{package:{type:"published",id:"@ryb73/decco",name:"@ryb73/decco",version:"0.1.0",category:"library",flags:[],platforms:["browser","node"],description:"Bucklescript PPX which generates JSON (de)serializers for user-defined types",keywords:["json","ppx","data serialization","parsing"],license:"MIT",updated:"2019-08-11T04:29:09.793Z",stars:57,score:.5247697943898487,quality:.7758393465302607,popularity:.11814862980923016,maintenance:.7161884857072571,readme:'<h1 id="ppx_decco"><a href="#ppx_decco" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ppx_decco</h1>\n<h2 id="what-is-it"><a href="#what-is-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is it?</h2>\n<p>Bucklescript PPX which generates JSON serializers and deserializers for user-defined types.</p>\n<p>Example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Define types */</span>\n[@decco] <span class="hljs-keyword">type</span> variant(\'a) = <span class="hljs-type">A</span> | <span class="hljs-type">B</span>(int) | <span class="hljs-type">C</span>(int, \'a);\n<span class="hljs-keyword">type</span> dict = <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.t(string);\n[@decco] <span class="hljs-keyword">type</span> mytype = {\n    s: string,\n    i: int,\n    o: option(int),\n    complex: array(option(list(variant(string)))),\n    [@decco.<span class="hljs-keyword">default</span> <span class="hljs-number">1.0</span>] f: float,\n    [@decco.key <span class="hljs-string">"other_key"</span>] otherKey: string,\n    magic: [@decco.codec <span class="hljs-type">Decco</span>.<span class="hljs-type">Codecs</span>.magic] dict,\n};\n\n<span class="hljs-comment">/* Use &lt;typename&gt;_encode to encode */</span>\n<span class="hljs-keyword">let</span> encoded = mytype_encode({\n    s: <span class="hljs-string">"hello"</span>,\n    i: <span class="hljs-number">12</span>,\n    o: <span class="hljs-type">None</span>,\n    complex: [| <span class="hljs-type">Some</span>([ <span class="hljs-type">C</span>(<span class="hljs-number">25</span>, <span class="hljs-string">"bullseye"</span>) ]) |],\n    f: <span class="hljs-number">13</span>.,\n    otherKey: <span class="hljs-string">"other"</span>,\n    magic: <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromArray([|(<span class="hljs-string">"key"</span>,<span class="hljs-string">"value"</span>)|]),\n});\n\n<span class="hljs-type">Js</span>.log(<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.stringifyWithSpace(encoded, <span class="hljs-number">2</span>));\n<span class="hljs-comment">/* {\n     "s": "hello",\n     "i": 12,\n     "o": null,\n     "complex": [ [ ["C", 25, "bullseye"] ] ],\n     "f": 13,\n     "other_key": "other",\n     "magic": { "key": "value" }\n  } */</span>\n\n<span class="hljs-comment">/* Use &lt;typename&gt;_decode to decode */</span>\n<span class="hljs-keyword">let</span> { s, i, o, complex, f, otherKey, magic } =\n    mytype_decode(encoded)\n    |&gt; <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.getExn;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> <span class="hljs-symbol">\'a</span> variant =\n  | <span class="hljs-type">A</span>\n  | <span class="hljs-type">B</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">int</span>\n  | <span class="hljs-type">C</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">int</span>* <span class="hljs-symbol">\'a</span>[@@decco ]\n<span class="hljs-keyword">type</span> dict = <span class="hljs-built_in">string</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.t\n<span class="hljs-keyword">type</span> mytype =\n  {\n  s: <span class="hljs-built_in">string</span>;\n  i: <span class="hljs-built_in">int</span>;\n  o: <span class="hljs-built_in">int</span> option;\n  complex: <span class="hljs-built_in">string</span> variant <span class="hljs-built_in">list</span> option <span class="hljs-built_in">array</span>;\n  f: <span class="hljs-built_in">float</span>[@decco.default <span class="hljs-number">1.0</span>];\n  otherKey: <span class="hljs-built_in">string</span>[@decco.key <span class="hljs-string">"other_key"</span>];\n  magic: ((dict)[@decco.codec <span class="hljs-type">Decco</span>.<span class="hljs-type">Codecs</span>.magic]);}[@@decco ]\n<span class="hljs-keyword">let</span> encoded =\n  mytype_encode\n    {\n      s = <span class="hljs-string">"hello"</span>;\n      i = <span class="hljs-number">12</span>;\n      o = <span class="hljs-type">None</span>;\n      complex =\n        [|((<span class="hljs-type">Some</span> ([((<span class="hljs-type">C</span> (<span class="hljs-number">25</span>, <span class="hljs-string">"bullseye"</span>))[@explicit_arity ])]))[@explicit_arity\n                                                                ])|];\n      f = <span class="hljs-number">13.</span>;\n      otherKey = <span class="hljs-string">"other"</span>;\n      magic = (<span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromArray [|(<span class="hljs-string">"key"</span>, <span class="hljs-string">"value"</span>)|])\n    }\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log (<span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.stringifyWithSpace encoded <span class="hljs-number">2</span>)\n<span class="hljs-keyword">let</span> { s; i; o; complex; f; otherKey; magic } =\n  (mytype_decode encoded) |&gt; <span class="hljs-type">Belt</span>.<span class="hljs-type">Result</span>.getExn</code></pre>\n      </div>\n    </div>\n  \n<h2 id="what-state-is-it-in"><a href="#what-state-is-it-in" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What state is it in?</h2>\n<p>I\'ve been using it for personal projects for a while, but it\'s never been used for anything important, so YMMV.</p>\n<h2 id="how-do-i-install-it"><a href="#how-do-i-install-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install it?</h2>\n<ol>\n<li>Install package</li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm i @ryb73/decco</code></pre></div>\n<ol start="2">\n<li>Update your <code>bsconfig.json</code></li>\n</ol>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  ...,\n  <span class="hljs-string">"bs-dependencies"</span>: [ <span class="hljs-string">"@ryb73/decco"</span> ],\n  <span class="hljs-string">"ppx-flags"</span>: [ <span class="hljs-string">"@ryb73/decco/ppx/ppx_decco.sh"</span> ],\n  ...\n}</code></pre></div>\n<p>Adding <code>ppx_decco</code> to <code>ppx-flags</code> will enable the PPX. Adding decco to <code>bs-dependencies</code> is required because the code generated by the PPX references the <code>Decco</code> module.</p>\n<h2 id="how-do-i-use-it"><a href="#how-do-i-use-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I use it?</h2>\n<p>See <a href="__tests__/test.re"><code>__tests__/test.re</code></a> for some examples.</p>\n',homepageUrl:"https://github.com/ryb73/ppx_decco#readme",repositoryUrl:"https://github.com/ryb73/ppx_decco",npmUrl:"https://www.npmjs.com/package/%40ryb73%2Fdecco",issuesUrl:"https://github.com/ryb73/ppx_decco/issues",slug:"/package/@ryb73/decco"}},pathContext:{id:"@ryb73/decco"}}}});
//# sourceMappingURL=path---package-ryb-73-decco-1b6681ed929d80cc967c.js.map