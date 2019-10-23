webpackJsonp([0xba2bf265950f],{1240:function(e,s){e.exports={data:{package:{type:"published",id:"bs-ospec",name:"bs-ospec",version:"1.0.0",category:"binding",flags:[],platforms:["browser","node"],description:"BuckleScript bindings for ospec.",keywords:["testing"],license:"MIT",updated:"2019-10-21T00:38:55.678Z",stars:3,score:.39029885596872804,quality:.5116026390581601,popularity:.023985147292244834,maintenance:.652637893425698,readme:'<h1 id="bs-ospec"><a href="#bs-ospec" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-ospec</h1>\n<p>BuckleScript bindings for the excellent and minimal <a href="https://www.npmjs.com/package/ospec">ospec testing library</a>. Perfect for simple testing and constructing your own, custom assertions.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ npm install --save-dev ospec bs-ospec</code></pre></div>\n<p>Then add <code>"bs-ospec"</code> to your <code>bsconfig.json</code> dev dependencies:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  ...\n  <span class="hljs-string">"bs-dev-dependencies"</span>: [\n    <span class="hljs-string">"bs-ospec"</span>\n  ]\n}</code></pre></div>\n<h2 id="example-usage"><a href="#example-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example Usage</h2>\n<p>First make sure your test files names are easily distinguishable. Here are some examples:</p>\n<table>\n<thead>\n<tr>\n<th>Format</th>\n<th>Command to Run</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Within a \n<code>tests/</code>\n folder</td>\n<td><code>ospec</code></td>\n</tr>\n<tr>\n<td>Within a custom folder like \n<code>spec/</code></td>\n<td><code>ospec \'spec/**/*.bs.js\'</code></td>\n</tr>\n<tr>\n<td>Named \n<code>MyModuleTest.re</code>\n in any folder</td>\n<td><code>ospec \'**/*Test.bs.js\'</code></td>\n</tr>\n</tbody>\n</table>\n<p>Next, write your tests. Ospec uses a single function <code>o()</code> to do pretty much everything. However, OCaml doesn\'t support overloaded functions, so bs-ospec separates each use case into its own function (it all compiles to a single function in the end).</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsOspec</span>.<span class="hljs-type">Cjs</span>;\n\ndescribe(<span class="hljs-string">"Example"</span>, <span class="hljs-literal">()</span> =&gt; {\n\n  test(<span class="hljs-string">"sync example"</span>, <span class="hljs-literal">()</span> =&gt; {\n    f(x,y) |. equals(<span class="hljs-number">123</span>);\n    f(x,y) |. equals(~m=<span class="hljs-string">"A descriptive failure message"</span>, <span class="hljs-number">123</span>);\n    g(x,y) |. deepEquals([<span class="hljs-string">"another"</span>, <span class="hljs-string">"correct"</span>, <span class="hljs-string">"value"</span>]);\n  });\n\n  testAsync(<span class="hljs-string">"async example"</span>, done_ =&gt; {\n    /* _ _  _  _  _   ___ _ _   _ _ __ __  __ _ _  __ _ */\n    /* <span class="hljs-type">Note</span> how we use testAsync<span class="hljs-literal">()</span> instead <span class="hljs-keyword">of</span> test<span class="hljs-literal">()</span> !! */\n    /*  ^^^ ^ ^ ^ ^^ ^ ^ ^ ^^ ^ ^ ^ ^ ^  ^^^ ^ ^^ ^^^ ^ */\n    someFuture<span class="hljs-literal">()</span>\n    |. <span class="hljs-type">Future</span>.get(result =&gt; {\n      result |. equals(<span class="hljs-string">"expected"</span>);\n      done_<span class="hljs-literal">()</span>\n    })\n  });\n\n  testAsyncLong(<span class="hljs-string">"longer async example"</span>, (done_, timeout) =&gt; {\n    timeout(<span class="hljs-number">2000</span>) /* ospec default is <span class="hljs-number">50</span> milliseconds. */\n\n    someLongFuture<span class="hljs-literal">()</span>\n    |. <span class="hljs-type">Future</span>.get(result =&gt; {\n      result |. equals(<span class="hljs-string">"expected"</span>);\n      done_<span class="hljs-literal">()</span>\n    })\n  });\n});</code></pre></div>\n<p>Lastly, run your test suite by running an ospec command like the table shown above.</p>\n<h2 id="es-modules"><a href="#es-modules" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ES Modules</h2>\n<p><code>BsOspec</code> supports both CommonJS and ES Modules (ESM). BuckleScript is configured to use CommonJS by default; if you are using ESM, first configure your bsconfig.json to use <code>es6-global</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  ...\n  <span class="hljs-string">"package-specs"</span>: {\n    <span class="hljs-string">"module"</span>: <span class="hljs-string">"es6-global"</span>,\n    <span class="hljs-string">"in-source"</span>: <span class="hljs-literal">true</span>\n  }\n}</code></pre></div>\n<p>Then just write <code>open BsOspec.Esm;</code> instead of <code>open BsOspec.Cjs;</code> in your test files.</p>\n<p>If you\'re interested in using ESM today, you can install the <a href="https://www.npmjs.com/package/esm">esm package</a> and add <code>--require esm</code> to the end of your ospec command. For example:</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>ospec <span class="hljs-string">\'**/*Test.bs.js\'</span> --require esm</code></pre></div>\n<h2 id="bindings"><a href="#bindings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bindings</h2>\n<p>See <a href="./src/BsOspec.re">the source</a> for the full details.</p>\n<p>Test Definitions:</p>\n<ul>\n<li><code>describe</code> - Group a collection of tests. Not required.</li>\n<li><code>test</code> - Define a <strong>synchronous</strong> test</li>\n<li><code>testAsync</code> - Define an async test</li>\n<li><code>testAsyncLong</code> - Define an async test expected to last longer than 50ms.</li>\n<li><code>testOnly</code>, <code>testAsyncOnly</code>, <code>testAsyncLongOnly</code> - Define and <strong>only</strong> run this test. Useful for focusing on a single test.</li>\n</ul>\n<p>Hooks:</p>\n<ul>\n<li><code>beforeEach</code>, <code>beforeEachAsync</code> - Run code before each test</li>\n<li><code>afterEach</code>, <code>afterEachAsync</code> - Run code after each test</li>\n<li><code>before</code>, <code>beforeAsync</code> - Run code <strong>once</strong> before <strong>all</strong> tests</li>\n<li><code>after</code>, <code>afterAsync</code> - Run code once after all tests</li>\n</ul>\n<p>Assertions:</p>\n<ul>\n<li><code>equals(expected, ~m=?, actual)</code> - Expect a value to equal another value. Optionally pass in <code>~m="my msg"</code> to show a custom message if the assertion fails.</li>\n<li><code>deepEquals(expected, ~m=?, actual)</code> - Expect a value to <strong>deep equal</strong> another value.</li>\n<li><code>notEquals(expected, ~m=?, actual)</code></li>\n<li><code>notDeepEquals(expected, ~m=?, actual)</code></li>\n</ul>\n<h2 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run build</code></pre></div>\n<h2 id="build--watch"><a href="#build--watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build + Watch</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run start</code></pre></div>\n<h2 id="editor"><a href="#editor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editor</h2>\n<p>If you use <code>vscode</code>, Press <code>Windows + Shift + B</code> it will build automatically</p>\n',homepageUrl:"https://github.com/RationalJS/bs-ospec#readme",repositoryUrl:"https://github.com/RationalJS/bs-ospec",npmUrl:"https://www.npmjs.com/package/bs-ospec",issuesUrl:"https://github.com/RationalJS/bs-ospec/issues",slug:"/package/bs-ospec"}},pathContext:{id:"bs-ospec"}}}});
//# sourceMappingURL=path---package-bs-ospec-a198c0a5afad3f20868e.js.map