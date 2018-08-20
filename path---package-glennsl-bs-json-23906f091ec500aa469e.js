webpackJsonp([0x79a395c82aeb],{1199:function(s,e){s.exports={data:{package:{id:"@glennsl/bs-json",stars:121,name:"@glennsl/bs-json",version:"3.0.0",category:"library",flags:[],platforms:["browser","node"],description:"Compositional JSON encode/decode library for BuckleScript",keywords:["json","data serialization"],license:"LGPL-3.0",updated:"2018-08-16T21:20:40.144Z",type:"published",score:.7076688578200361,quality:.9711052760630446,popularity:.18954033152025487,maintenance:.9999947399115243,readme:'<h1 id="bs-json"><a href="#bs-json" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-json</h1>\n<p>Compositional JSON encode/decode library for BuckleScript.</p>\n<p><a href="https://npmjs.org/@glennsl/bs-json"><img src="https://img.shields.io/npm/v/@glennsl/bs-json.svg" alt="npm"></a>\n<a href="https://travis-ci.org/glennsl/bs-json"><img src="https://img.shields.io/travis/glennsl/bs-json/master.svg" alt="Travis"></a>\n<a href="https://coveralls.io/github/glennsl/bs-json?branch=master"><img src="https://img.shields.io/coveralls/glennsl/bs-json/master.svg" alt="Coveralls"></a>\n<a href="https://github.com/glennsl/bs-json/issues"><img src="https://img.shields.io/github/issues/glennsl/bs-json.svg" alt="Issues"></a>\n<a href="https://github.com/glennsl/bs-json/commits/master"><img src="https://img.shields.io/github/last-commit/glennsl/bs-json.svg" alt="Last Commit"></a></p>\n<p>The Decode module in particular provides a basic set of decoder functions to be composed into more complex decoders. A\ndecoder is a function that takes a <code>Js.Json.t</code> and either returns a value of the desired type if successful or raises a\n<code>DecodeError</code> exception if not. Other functions accept a decoder and produce another decoder. Like <code>array</code>, which when\ngiven a decoder for type <code>t</code> will return a decoder that tries to produce a value of type <code>t array</code>. So to decode an\n<code>int array</code> you combine <code>Json.Decode.int</code> with <code>Json.Decode.array</code> into <code>Json.Decode.(array int)</code>. An array of arrays of\nints? <code>Json.Decode.(array (array int))</code>. Dict containing arrays of ints? <code>Json.Decode.(dict (array int))</code>.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> line = {\n  start: point,\n  end_: point,\n  thickness: option(int)\n}\nand point = {\n  x: float,\n  y: float\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Decode</span> = </span>{\n  <span class="hljs-keyword">let</span> point = json =&gt;\n    <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.{\n      x: json |&gt; field(<span class="hljs-string">"x"</span>, float),\n      y: json |&gt; field(<span class="hljs-string">"y"</span>, float)\n    };\n\n  <span class="hljs-keyword">let</span> line = json =&gt;\n    <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.{\n      start:     json |&gt; field(<span class="hljs-string">"start"</span>, point),\n      end_:      json |&gt; field(<span class="hljs-string">"end"</span>, point),\n      thickness: json |&gt; optional(field(<span class="hljs-string">"thickness"</span>, int))\n    };\n};\n\n<span class="hljs-keyword">let</span> data = {| {\n  <span class="hljs-string">"start"</span>: { <span class="hljs-string">"x"</span>: <span class="hljs-number">1.1</span>, <span class="hljs-string">"y"</span>: -<span class="hljs-number">0.4</span> },\n  <span class="hljs-string">"end"</span>:   { <span class="hljs-string">"x"</span>: <span class="hljs-number">5.3</span>, <span class="hljs-string">"y"</span>: <span class="hljs-number">3.8</span> }\n} |};\n\n<span class="hljs-keyword">let</span> line = data |&gt; <span class="hljs-type">Json</span>.parseOrRaise\n                |&gt; <span class="hljs-type">Decode</span>.line;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> line = {\n  start: point;\n  end_: point;\n  thickness: <span class="hljs-built_in">int</span> option;}\n<span class="hljs-keyword">and</span> point = {\n  x: <span class="hljs-built_in">float</span>;\n  y: <span class="hljs-built_in">float</span>;}\n<span class="hljs-keyword">module</span> <span class="hljs-type">Decode</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">let</span> point json =\n      <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span> <span class="hljs-keyword">in</span>\n        { x = (json |&gt; (field <span class="hljs-string">"x"</span> <span class="hljs-built_in">float</span>)); y = (json |&gt; (field <span class="hljs-string">"y"</span> <span class="hljs-built_in">float</span>)) }\n    <span class="hljs-keyword">let</span> line json =\n      <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span> <span class="hljs-keyword">in</span>\n        {\n          start = (json |&gt; (field <span class="hljs-string">"start"</span> point));\n          end_ = (json |&gt; (field <span class="hljs-string">"end"</span> point));\n          thickness = (json |&gt; (optional (field <span class="hljs-string">"thickness"</span> <span class="hljs-built_in">int</span>)))\n        }\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">let</span> data =\n  {| {\n  <span class="hljs-string">"start"</span>: { <span class="hljs-string">"x"</span>: <span class="hljs-number">1.1</span>, <span class="hljs-string">"y"</span>: -<span class="hljs-number">0.4</span> },\n  <span class="hljs-string">"end"</span>:   { <span class="hljs-string">"x"</span>: <span class="hljs-number">5.3</span>, <span class="hljs-string">"y"</span>: <span class="hljs-number">3.8</span> }\n} |}\n<span class="hljs-keyword">let</span> line = (data |&gt; <span class="hljs-type">Json</span>.parseOrRaise) |&gt; <span class="hljs-type">Decode</span>.line</code></pre>\n      </div>\n    </div>\n  \n<p>See <a href="https://github.com/glennsl/bs-json/blob/master/examples/">examples</a> for more.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save @glennsl/bs-json</code></pre></div>\n<p>Then add <code>@glennsl/bs-json</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"@glennsl/bs-json"</span>]\n}</code></pre></div>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<h3 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h3>\n<p>For the moment, please see the interface files:</p>\n<ul>\n<li><a href="https://github.com/glennsl/bs-json/blob/master/src/Json.mli">Json</a></li>\n<li><a href="https://github.com/glennsl/bs-json/blob/master/src/Json_encode.mli">Json.Encode</a></li>\n<li><a href="https://github.com/glennsl/bs-json/blob/master/src/Json_decode.mli">Json.Decode</a></li>\n</ul>\n<h3 id="writing-custom-decoders-and-encoders"><a href="#writing-custom-decoders-and-encoders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing custom decoders and encoders</h3>\n<p>If you look at the type signature of <code>Js.Decode.array</code>, for example, you\'ll see it takes an <code>\'a decoder</code> and returns an\n<code>\'a array decoder</code>. <code>\'a decoder</code> is just an alias for <code>Js.Json.t -> \'a</code>, so if we expand the type signature of <code>array</code>\nwe\'ll get <code>(Js.Json.t -> \'a) -> Js.Json.t -> \'a array</code>. We can now see that it is a function that takes a decoder and\nreturns a function, itself a decoder. Applying the <code>int</code> decoder to <code>array</code> will give us an <code>int array decoder</code>, a\nfunction <code>Js.Json.t -> int array</code>.</p>\n<p>If you\'ve written a function that takes just <code>Js.Json.t</code> and returns user-defined types of your own, you\'ve already been\nwriting composable decoders! Let\'s look at <code>Decode.point</code> from the example above:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> point = json =&gt; {\n  open! <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>;\n  {\n    x: json |&gt; field(<span class="hljs-string">"x"</span>, float),\n    y: json |&gt; field(<span class="hljs-string">"y"</span>, float)\n  };\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> point json =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open!</span> <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span> <span class="hljs-keyword">in</span>\n    { x = (json |&gt; (field <span class="hljs-string">"x"</span> <span class="hljs-built_in">float</span>)); y = (json |&gt; (field <span class="hljs-string">"y"</span> <span class="hljs-built_in">float</span>)) }</code></pre>\n      </div>\n    </div>\n  \n<p>This is a function <code>Js.Json.t -> point</code>, or a <code>point decoder</code>. So if we\'d like to decode an array of points, we can just\npass it to <code>Json.Decode.array</code> to get a <code>point array decoder</code> in return.</p>\n<h4 id="builders"><a href="#builders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Builders</h4>\n<p>To write a decoder <em>builder</em> like <code>Json.Decode.array</code> we need to take another decoder as an argument, and thanks to\ncurrying we just need to apply it where we\'d otherwise use a fixed decoder. Say we want to be able to decode both\n<code>int point</code>s and <code>float point</code>s. First we\'d have to parameterize the type:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> point(\'a) = {\n  x: \'a,\n  y: \'a\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> <span class="hljs-symbol">\'a</span> point = {\n  x: <span class="hljs-symbol">\'a</span>;\n  y: <span class="hljs-symbol">\'a</span>;}</code></pre>\n      </div>\n    </div>\n  \n<p>Then we can change our <code>point</code> function from above to take and use a decoder argument:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> point = (decodeNumber, json) =&gt; {\n  open! <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>;\n  {\n    x: json |&gt; field(<span class="hljs-string">"x"</span>, decodeNumber),\n    y: json |&gt; field(<span class="hljs-string">"y"</span>, decodeNumber)\n  };\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> point decodeNumber json =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open!</span> <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span> <span class="hljs-keyword">in</span>\n    {\n      x = (json |&gt; (field <span class="hljs-string">"x"</span> decodeNumber));\n      y = (json |&gt; (field <span class="hljs-string">"y"</span> decodeNumber))\n    }</code></pre>\n      </div>\n    </div>\n  \n<p>And if we wish we can now create aliases for each variant:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> intPoint = point(<span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.int);\n<span class="hljs-keyword">let</span> floatPoint = point(<span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.float);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> intPoint = point <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.<span class="hljs-built_in">int</span>\n<span class="hljs-keyword">let</span> floatPoint = point <span class="hljs-type">Json</span>.<span class="hljs-type">Decode</span>.<span class="hljs-built_in">float</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="encoders"><a href="#encoders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Encoders</h4>\n<p>Encoders work exactly the same way, just in reverse. <code>\'a encoder</code> is just an alias for <code>\'a -> Js.Json.t</code>, and this also\ntransfers to composition: <code>\'a encoder -> \'a array encoder</code> expands to <code>(\'a -> Js.Json.t) -> \'a array -> Js.Json.t</code>.</p>\n<h2 id="changes"><a href="#changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changes</h2>\n<h3 id="300"><a href="#300" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3.0.0</h3>\n<ul>\n<li>Replace usage of <code>Js.Date.toJSON</code> with <code>Js.Date.toJSONUsafe</code>, which is exactly the same, just to avoid deprecation warnings for end users (Thanks Bob!)</li>\n<li>Requires <code>bs-platform</code> >= 4.0.2</li>\n</ul>\n<h3 id="200"><a href="#200" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2.0.0</h3>\n<ul>\n<li>Removed <code>Json.Decode.boolean</code>, <code>Json.Encode.boolean</code>, <code>Json.Encode.booleanArray</code></li>\n<li>Requires <code>bs-platform</code> >= 3.0.0</li>\n</ul>\n<h3 id="131"><a href="#131" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.3.1</h3>\n<ul>\n<li>Reverted commits that broke backwards compatibility despite only affecting the implementation</li>\n</ul>\n<h3 id="130"><a href="#130" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.3.0</h3>\n<ul>\n<li>Deprecated <code>Json.Decode.boolean</code>, <code>Json.Encode.boolean</code>, <code>Json.Encode.booleanArray</code></li>\n<li>Added <code>Json.Encode.boolArray</code></li>\n</ul>\n<h3 id="120"><a href="#120" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.2.0</h3>\n<ul>\n<li>Added <code>Json.Encode.char</code> and <code>Json.Decode.char</code></li>\n</ul>\n<h3 id="110"><a href="#110" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.1.0</h3>\n<ul>\n<li>Added "stack traces" to higher-order decoders, making it easier to find the location of an error.</li>\n</ul>\n<h3 id="101"><a href="#101" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.0.1</h3>\n<ul>\n<li>Moved repository from <code>reasonml-community/bs-json</code> to <code>glennsl/bs-json</code></li>\n<li>Renamed NPM package from <code>bs-json</code> to <code>@glennsl/bs-json</code></li>\n</ul>\n<h3 id="100"><a href="#100" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.0.0</h3>\n<ul>\n<li>Replaced <code>Json.Encoder.array</code> with <code>Json.Encode.arrayOf</code> renamed to <code>array</code>. Deprecated <code>arrayOf</code> alias.</li>\n<li>Added <code>Json.parse</code>, <code>Json.parseOrRaise</code>, <code>Json.stringify</code></li>\n<li>Added <code>date</code> encoder and decoder</li>\n<li>Added <code>tuple2</code>/<code>tuple3</code>/<code>tuple4</code> encoders and decoders</li>\n<li>Fixed bug where js integers > 32-bit were rejected as integers by Json.Decode.int (#15)</li>\n</ul>\n<h3 id="024"><a href="#024" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.2.4</h3>\n<ul>\n<li>Added <code>Json.Encode.bool</code></li>\n<li>Added <code>Json.Encode.pair</code></li>\n<li>Added <code>Json.Encode.withDefault</code></li>\n<li>Added <code>Json.Encode.nullable</code></li>\n<li>Added <code>Json.Encode.arrayOf</code></li>\n<li>Added <code>Json.Encode.jsonArray</code> as replacement for <code>Json.Encode.array</code></li>\n<li>Deprecated <code>Json.Encode.array</code></li>\n</ul>\n<h3 id="023"><a href="#023" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.2.3</h3>\n<ul>\n<li>Fixed embarrassing bug where an API was used that isn\'t available on IE (honestly more embarrassed on behalf of IE though)</li>\n</ul>\n<h3 id="022"><a href="#022" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.2.2</h3>\n<ul>\n<li>Added <code>Json.Decode.pair</code></li>\n</ul>\n<h3 id="021"><a href="#021" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.2.1</h3>\n<ul>\n<li>Added <code>Json.Encode.list</code></li>\n</ul>\n<h3 id="020"><a href="#020" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>0.2.0</h3>\n<ul>\n<li>Breaking: Renamed <code>Json.Encode.object_</code> to <code>Json.Encode.dict</code></li>\n<li>Added <code>Json.Encode.object_</code> taking a list of properties instead of a Json.Dict.t as before</li>\n</ul>\n',homepageUrl:"https://github.com/glennsl/bs-json#readme",repositoryUrl:"https://github.com/glennsl/bs-json",npmUrl:"https://www.npmjs.com/package/%40glennsl%2Fbs-json",issuesUrl:"https://github.com/glennsl/bs-json/issues",slug:"/package/@glennsl/bs-json"}},pathContext:{id:"@glennsl/bs-json"}}}});
//# sourceMappingURL=path---package-glennsl-bs-json-23906f091ec500aa469e.js.map