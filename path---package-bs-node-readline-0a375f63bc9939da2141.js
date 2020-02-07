webpackJsonp([44623124045505],{1248:function(s,n){s.exports={data:{package:{type:"published",id:"bs-node-readline",name:"bs-node-readline",version:"0.2.0",category:"binding",flags:[],platforms:["node"],description:"Node readline bindings for BuckleScript",keywords:["utilities","cli"],license:"MIT",updated:"2020-01-27T17:47:05.697Z",stars:5,score:.48485576380436674,quality:.43018654878573626,popularity:.032487153979596076,maintenance:.9840837007879637,readme:'<h1 id="bs-node-readline"><a href="#bs-node-readline" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-node-readline</h1>\n<p>Low level bindings for Node\'s readline</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> options =\n  <span class="hljs-type">Readline</span>.interfaceOptions(\n    ~input=[%raw <span class="hljs-string">"process.stdin"</span>],\n    ~output=[%raw <span class="hljs-string">"process.stdout"</span>],\n    (),\n  );\n\n<span class="hljs-keyword">let</span> readline = <span class="hljs-type">Readline</span>.createInterface(options);\n<span class="hljs-keyword">let</span> yes = [%re <span class="hljs-string">"/yes|y/gi"</span>];\n<span class="hljs-keyword">let</span> no = [%re <span class="hljs-string">"/no|n/gi"</span>];\n\nreadline\n|. <span class="hljs-type">Readline</span>.question(<span class="hljs-string">"Is ReasonML and BuckleScript awesome? "</span>, answer =&gt; {\n     <span class="hljs-keyword">switch</span> (answer) {\n     | a when <span class="hljs-type">Js</span>.<span class="hljs-type">Re</span>.test(a, yes) =&gt; print_endline(<span class="hljs-string">"You know it!"</span>)\n     | a when <span class="hljs-type">Js</span>.<span class="hljs-type">Re</span>.test(a, no) =&gt;\n       print_endline(<span class="hljs-string">"You need to revaluate your answer"</span>)\n     | a =&gt;\n       print_endline({j| <span class="hljs-type">I</span> don\'t have a variant <span class="hljs-keyword">for</span> your answer 😦: $a |j})\n     };\n     <span class="hljs-type">Readline</span>.close(readline);\n   });</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> options =\n  <span class="hljs-type">Readline</span>.interfaceOptions ~input:([%raw <span class="hljs-string">"process.stdin"</span>])\n    ~output:([%raw <span class="hljs-string">"process.stdout"</span>]) <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> readline = <span class="hljs-type">Readline</span>.createInterface options\n<span class="hljs-keyword">let</span> yes = [%re <span class="hljs-string">"/yes|y/gi"</span>]\n<span class="hljs-keyword">let</span> no = [%re <span class="hljs-string">"/no|n/gi"</span>]\n<span class="hljs-keyword">let</span> _ =\n  readline |.\n    (<span class="hljs-type">Readline</span>.question <span class="hljs-string">"Is ReasonML and BuckleScript awesome? "</span>\n       (<span class="hljs-keyword">fun</span> answer  -&gt;\n          (<span class="hljs-keyword">match</span> answer <span class="hljs-keyword">with</span>\n           | a <span class="hljs-keyword">when</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Re</span>.test a yes -&gt; print_endline <span class="hljs-string">"You know it!"</span>\n           | a <span class="hljs-keyword">when</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Re</span>.test a no -&gt;\n               print_endline <span class="hljs-string">"You need to revaluate your answer"</span>\n           | a -&gt;\n               print_endline\n                 {j| <span class="hljs-type">I</span> don\'t have a variant <span class="hljs-keyword">for</span> your answer 😦: $a |j});\n          <span class="hljs-type">Readline</span>.close readline))</code></pre>\n      </div>\n    </div>\n  \n<p>then you can run the compiled JS file with Node:\n<img src="./Screen Shot 2018-07-05 at 8.46.24 AM.png" alt="Example of binding" /></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm i --save bs-node-readline</code></pre></div>\n<p>then add\nThen add <code>bs-node-readline</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-node-readline"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>See example in <code>example/example.re</code>. Follows the NodeJS API found here: <a href="https://nodejs.org/api/readline.html">https://nodejs.org/api/readline.html</a></p>\n',homepageUrl:"https://github.com/sscaff1/bs-node-readline",repositoryUrl:"https://github.com/sscaff1/bs-node-readline",npmUrl:"https://www.npmjs.com/package/bs-node-readline",issuesUrl:"https://github.com/sscaff1/bs-node-readline/issues",slug:"/package/bs-node-readline"}},pathContext:{id:"bs-node-readline"}}}});
//# sourceMappingURL=path---package-bs-node-readline-0a375f63bc9939da2141.js.map