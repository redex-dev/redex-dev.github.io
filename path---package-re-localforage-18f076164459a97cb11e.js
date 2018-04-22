webpackJsonp([0x6ac2678fbadb],{1178:function(e,s){e.exports={data:{package:{id:"re-localforage",stars:0,name:"re-localforage",version:"1.1.0",category:"binding",flags:["neglected"],platforms:["browser","node"],description:"A small Reason library for interacting with localforage. Very early and incomplete. Contributions welcome.",keywords:["database"],license:"MIT",updated:"2018-04-08T05:07:25.330Z",type:"published",score:.5481714208680485,quality:.7305320873613985,popularity:.0268881970896736,maintenance:.9131455019378376,readme:'<h1 id="re-localforage"><a href="#re-localforage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>re-localforage</h1>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add localforage\nyarn add re-localforage</code></pre></div>\n<p>Then add</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"re-localforage"</span>]</code></pre></div>\n<p>to your bsconfig.json.</p>\n<p>Then you can use it like this (assuming you have some webpack setup that can import Elm files like <a href="https://github.com/elm-community/elm-webpack-loader">elm-webpack-loader</a>):</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> lf = <span class="hljs-type">LocalForage</span>.instance;\n<span class="hljs-comment">/* This\'ll be a promise of unit. */</span>\n<span class="hljs-keyword">let</span> setItemPromise = lf##setItem(<span class="hljs-string">"user"</span>, someJson)\n<span class="hljs-comment">/* This\'ll be a promise with some json in it.*/</span>\n<span class="hljs-keyword">let</span> getItemPromise = lf##getItem(<span class="hljs-string">"user"</span>)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">883</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/bloom/re-localforage#readme",repositoryUrl:"https://github.com/bloom/re-localforage",npmUrl:"https://www.npmjs.com/package/re-localforage",issuesUrl:"https://github.com/bloom/re-localforage/issues",slug:"/package/re-localforage"}},pathContext:{id:"re-localforage"}}}});
//# sourceMappingURL=path---package-re-localforage-18f076164459a97cb11e.js.map