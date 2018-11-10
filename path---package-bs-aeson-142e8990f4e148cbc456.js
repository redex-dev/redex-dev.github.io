webpackJsonp([0x7011da0603af],{1098:function(s,n){s.exports={data:{package:{type:"published",id:"bs-aeson",name:"bs-aeson",version:"3.0.0",category:"library",flags:["neglected"],platforms:["browser","node"],description:"BuckleScript JSON serializations that match Haskell aeson",keywords:["json","data serialization"],license:"MIT",updated:"2018-10-22T15:50:15.131Z",stars:3,score:.6125872874429368,quality:.8029083867346398,popularity:.06221829784076677,maintenance:.9998239062236471,readme:'<h1 id="bs-aeson"><a href="#bs-aeson" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-aeson</h1>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* OCaml */</span>\n<span class="hljs-keyword">type</span> line = {\n  start: point,\n  end_: point,\n  thickness: option(int),\n}\nand point = {\n  x: float,\n  y: float,\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Decode</span> = </span>{\n  <span class="hljs-keyword">let</span> point = json =&gt; {\n    open! <span class="hljs-type">Aeson</span>.<span class="hljs-type">Decode</span>;\n    {x: json |&gt; field(<span class="hljs-string">"x"</span>, float), y: json |&gt; field(<span class="hljs-string">"y"</span>, float)};\n  };\n  <span class="hljs-keyword">let</span> line = json =&gt;\n    <span class="hljs-type">Aeson</span>.<span class="hljs-type">Decode</span>.{\n      start: json |&gt; field(<span class="hljs-string">"start"</span>, point),\n      end_: json |&gt; field(<span class="hljs-string">"end"</span>, point),\n      thickness: json |&gt; optional(field(<span class="hljs-string">"thickness"</span>, int)),\n    };\n};\n\n<span class="hljs-keyword">let</span> data = {| {\n  <span class="hljs-string">"start"</span>: { <span class="hljs-string">"x"</span>: <span class="hljs-number">1.1</span>, <span class="hljs-string">"y"</span>: -<span class="hljs-number">0.4</span> },\n  <span class="hljs-string">"end"</span>:   { <span class="hljs-string">"x"</span>: <span class="hljs-number">5.3</span>, <span class="hljs-string">"y"</span>: <span class="hljs-number">3.8</span> }\n} |};\n\n<span class="hljs-keyword">let</span> line = data |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.parseExn |&gt; <span class="hljs-type">Decode</span>.line;\n</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-comment">(* OCaml *)</span>\n<span class="hljs-keyword">type</span> line = {\n  start: point;\n  end_: point;\n  thickness: <span class="hljs-built_in">int</span> option\n}\n<span class="hljs-keyword">and</span> point = {\n  x: <span class="hljs-built_in">float</span>;\n  y: <span class="hljs-built_in">float</span>\n}\n\n<span class="hljs-keyword">module</span> <span class="hljs-type">Decode</span> = <span class="hljs-keyword">struct</span>\n  <span class="hljs-keyword">let</span> point json =\n    <span class="hljs-keyword">let</span> <span class="hljs-keyword">open!</span> <span class="hljs-type">Aeson</span>.<span class="hljs-type">Decode</span> <span class="hljs-keyword">in</span> {\n      x = json |&gt; field <span class="hljs-string">"x"</span> <span class="hljs-built_in">float</span>;\n      y = json |&gt; field <span class="hljs-string">"y"</span> <span class="hljs-built_in">float</span>\n    }\n\n  <span class="hljs-keyword">let</span> line json =\n    <span class="hljs-type">Aeson</span>.<span class="hljs-type">Decode</span>.{\n      start     = json |&gt; field <span class="hljs-string">"start"</span> point;\n      end_      = json |&gt; field <span class="hljs-string">"end"</span> point;\n      thickness = json |&gt; optional (field <span class="hljs-string">"thickness"</span> <span class="hljs-built_in">int</span>)\n    }\n<span class="hljs-keyword">end</span>\n\n<span class="hljs-keyword">let</span> data = {| {\n  <span class="hljs-string">"start"</span>: { <span class="hljs-string">"x"</span>: <span class="hljs-number">1.1</span>, <span class="hljs-string">"y"</span>: -<span class="hljs-number">0.4</span> },\n  <span class="hljs-string">"end"</span>:   { <span class="hljs-string">"x"</span>: <span class="hljs-number">5.3</span>, <span class="hljs-string">"y"</span>: <span class="hljs-number">3.8</span> }\n} |}\n\n<span class="hljs-keyword">let</span> line = data |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.parseExn\n                |&gt; <span class="hljs-type">Decode</span>.line</code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Reason */</span>\n<span class="hljs-keyword">type</span> line = {\n  start: point,\n  end_: point,\n  thickness: option int\n}\nand point = {\n  x: float,\n  y: float\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Decode</span> = </span>{\n  <span class="hljs-keyword">let</span> point json =&gt;\n    <span class="hljs-type">Aeson</span>.<span class="hljs-type">Decode</span>.{\n      x: json |&gt; field <span class="hljs-string">"x"</span> float,\n      y: json |&gt; field <span class="hljs-string">"y"</span> float\n    };\n  \n  <span class="hljs-keyword">let</span> line json =&gt;\n    <span class="hljs-type">Aeson</span>.<span class="hljs-type">Decode</span>.{\n      start:     json |&gt; field <span class="hljs-string">"start"</span> point,\n      end_:      json |&gt; field <span class="hljs-string">"end"</span> point,\n      thickness: json |&gt; optional (field <span class="hljs-string">"thickness"</span> int)\n    };\n};\n\n<span class="hljs-keyword">let</span> data = {| {\n  <span class="hljs-string">"start"</span>: { <span class="hljs-string">"x"</span>: <span class="hljs-number">1.1</span>, <span class="hljs-string">"y"</span>: -<span class="hljs-number">0.4</span> },\n  <span class="hljs-string">"end"</span>:   { <span class="hljs-string">"x"</span>: <span class="hljs-number">5.3</span>, <span class="hljs-string">"y"</span>: <span class="hljs-number">3.8</span> }\n} |};\n\n<span class="hljs-keyword">let</span> line = data |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Json</span>.parseExn\n                |&gt; <span class="hljs-type">Decode</span>.line;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">342</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install --save bs-aeson</code></pre></div>\n<p>Then add <code>bs-aeson</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-aeson"</span>]\n}</code></pre></div>\n<h2 id="changes"><a href="#changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changes</h2>\n<h3 id="300"><a href="#300" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3.0.0</h3>\n<ul>\n<li>Change <code>Aeson.Decode.int64</code> to decode a literal.</li>\n<li>Move previous definition of <code>Aeson.Decode.int64</code> to <code>Aeson.Decode.int64_of_array</code> and <code>Aeson.Encode.int64</code> to <code>Aeson.Decode.int64_to_array</code>.</li>\n<li>Bring back <code>Aeson.Compatibility.Either</code> and the definitions of <code>Aeson.Decode.boolean</code> and <code>Aeson.Encode.boolean</code> from <code>1.1.0</code>.</li>\n<li>Add <code>Aeson.Compatibility.Either.to_result</code> and <code>Aeson.Compatibility.Either.of_result</code>.</li>\n</ul>\n<h3 id="200"><a href="#200" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2.0.0</h3>\n<ul>\n<li>Remove support for <code>Js.boolean</code>. Remove <code>Aeson.Decode.boolean</code>, <code>Aeson.Decode.booleanArray</code>, <code>Aeson.Encode.boolean</code> and <code>Aeson.Encode.boolean</code>.</li>\n<li>Remove <code>Aeson.Compatibility</code>, <code>Aeson.Decode.either</code> and <code>Aeson.Encode.either</code> depend on <code>Belt.Result.t</code>.</li>\n<li>Remove <code>Aeson.Option</code>. These functions are now available in the BuckleScript stdlib Belt in <code>Belt.Option</code>.</li>\n<li>Add <code>Aeson.Decode.boolArray</code>, <code>Aeson.Encode.boolArray</code>, <code>Aeson.Decode.int32</code>, <code>Aeson.Encode.int32</code>, <code>Aeson.Decode.int64</code>, <code>Aeson.Encode.int64</code>, <code>Aeson.Decode.nativeint</code>, <code>Aeson.Encode.nativeint</code>, <code>Aeson.Decode.result</code>, <code>Aeson.Encode.result</code>.</li>\n<li>Require BuckleScript >= 3.1.0.</li>\n</ul>\n<h3 id="110"><a href="#110" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.1.0</h3>\n<ul>\n<li>\n<p>Add <code>Aeson.Encode.singleEnumerator</code> and <code>Aeson.Decode.singleEnumerator</code> to support Haskell aeson style of serializing a enumeration type with only a single enumerator (as an empty JSON list <code>[]</code>).</p>\n</li>\n<li>\n<p>Add <code>Aeson.Compatibility.Either</code> and serialization functions.</p>\n</li>\n<li>\n<p>Fix <code>Aeson.Encode.date</code> and <code>Aeson.Decode.int</code>.</p>\n</li>\n</ul>\n<h3 id="100"><a href="#100" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1.0.0</h3>\n<ul>\n<li>\n<p>Fork from <a href="https://github.com/reasonml-community/bs-json">bs-json</a>.</p>\n</li>\n<li>\n<p>Add <code>Aeson.Decode.date</code>, <code>Aeson.Decode.tuple2</code>, <code>Aeson.Decode.tuple3</code>, <code>Aeson.Decode.tuple4</code>, <code>Aeson.Decode.tuple5</code>, <code>Aeson.Decode.tuple6</code>, <code>Aeson.Decode.unwrapResult</code>.</p>\n</li>\n<li>\n<p>Add <code>Aeson.Encode.tuple2</code>, <code>Aeson.Encode.tuple3</code>, <code>Aeson.Encode.tuple4</code>, <code>Aeson.Encode.tuple5</code>, <code>Aeson.Encode.tuple6</code>.</p>\n</li>\n</ul>\n',homepageUrl:"https://github.com/plow-technologies/bs-aeson#readme",repositoryUrl:"https://github.com/plow-technologies/bs-aeson",npmUrl:"https://www.npmjs.com/package/bs-aeson",issuesUrl:"https://github.com/plow-technologies/bs-aeson/issues",slug:"/package/bs-aeson"}},pathContext:{id:"bs-aeson"}}}});
//# sourceMappingURL=path---package-bs-aeson-142e8990f4e148cbc456.js.map