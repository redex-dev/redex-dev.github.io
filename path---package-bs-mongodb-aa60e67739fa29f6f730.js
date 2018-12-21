webpackJsonp([0xeb51c4195d45],{1159:function(s,e){s.exports={data:{package:{type:"published",id:"bs-mongodb",name:"bs-mongodb",version:"0.2.0",category:"binding",flags:["neglected"],platforms:["node"],description:"Bucklescript bindings to node mongodb driver",keywords:["database","nosql"],license:"MIT",updated:"2018-10-25T06:18:12.389Z",stars:7,score:.5893651580994264,quality:.8313819043109979,popularity:.03460169894854156,maintenance:.9366856919261073,readme:'<h1 id="mongodb-bindings-for-bucklescript"><a href="#mongodb-bindings-for-bucklescript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MongoDB bindings for bucklescript</h1>\n<p><a href="https://travis-ci.org/PeteProgrammer/bs-mongodb"><img src="https://travis-ci.org/PeteProgrammer/bs-mongodb.svg?branch=master" alt="Build Status"></a></p>\n<p>This library contains preliminary bindings to MongoDB. There is very little\ndocumentation yet, and far from all features are implemented.</p>\n<p>This library is need-driven, I am adding bindings as I need them. If you add\nbindings to this, feel free to send me a pull request.</p>\n<h2 id="future-breaking-change---be-aware"><a href="#future-breaking-change---be-aware" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Future breaking change - be aware</h2>\n<p>When I first created the <code>Collection.createIndex</code> function, I needed to pass\noptions. But it didn\'t occur to me then, that the options should be options. So\nin a future version, the options will be passed as an optional argument.\nCurrently there is a <code>Collection.createIndexNoOpts</code> for a no-options call.</p>\n<h2 id="handling-async-code"><a href="#handling-async-code" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Handling Async code</h2>\n<p>The mongo driver is inherently async, every result is either provided to a\ncallback, or delivered in a Promise. I personally use the callbacks with <a href="https://github.com/PeteProgrammer/resync">my own\nasync handling library</a>.</p>\n<p>But I didn\'t want to push a specific async library upon any users of this\nlibrary, so in order to use the library, you construct the module through a\nfunctor, that takes a <code>CallbackHandler</code> as argument.</p>\n<p>This piece of code is from my project where I bind the mongo library to my async\nlibrary.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-keyword">include</span> <span class="hljs-type">MongoDB</span>;\n\n<span class="hljs-keyword">module</span> <span class="hljs-type">AsyncHandler</span> : <span class="hljs-type">CallbackHandler</span> <span class="hljs-keyword">with</span> <span class="hljs-keyword">type</span> t(<span class="hljs-symbol">\'a</span>) = <span class="hljs-type">Async</span>.t(<span class="hljs-symbol">\'a</span>) = {\n  <span class="hljs-keyword">type</span> t(<span class="hljs-symbol">\'a</span>) = <span class="hljs-type">Async</span>.t(<span class="hljs-symbol">\'a</span>);\n  <span class="hljs-keyword">let</span> callbackConverter = (x:callback(<span class="hljs-symbol">\'a</span>)) : <span class="hljs-type">Async</span>.t(<span class="hljs-symbol">\'a</span>) =&gt; x |&gt; <span class="hljs-type">Async</span>.from_js;\n};\n\n<span class="hljs-keyword">include</span> <span class="hljs-type">Make</span>(<span class="hljs-type">AsyncHandler</span>);</code></pre></div>\n<p>If you prefer to use a <code>(Js.Result.t(\'a,MongoError.t) => unit) => unit</code>, you can\ndo so. I might get some examples up.</p>\n<p>And I will try to see if I can get it to work with Promises, for those who\nprefer this route (the underlying node library returns a promise, if no callback\nis passed to the aync functions).</p>\n',homepageUrl:"https://github.com/stroiman/bs-mongodb#readme",repositoryUrl:"https://github.com/stroiman/bs-mongodb",npmUrl:"https://www.npmjs.com/package/bs-mongodb",issuesUrl:"https://github.com/stroiman/bs-mongodb/issues",slug:"/package/bs-mongodb"}},pathContext:{id:"bs-mongodb"}}}});
//# sourceMappingURL=path---package-bs-mongodb-aa60e67739fa29f6f730.js.map