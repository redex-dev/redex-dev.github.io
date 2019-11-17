webpackJsonp([0xee2c6576b324],{1375:function(s,a){s.exports={data:{package:{type:"published",id:"redataloader",name:"redataloader",version:"0.3.0",category:"library",flags:["neglected"],platforms:["browser"],description:"> A small caching module for front-end requests",keywords:["data fetching"],license:"MIT",updated:"2019-10-31T00:16:02.857Z",stars:null,score:.13001763567383254,quality:.4301795859036213,popularity:.0027535997221318177,maintenance:0,readme:'<h1 id="redataloader"><a href="#redataloader" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reDataLoader</h1>\n<blockquote>\n<p>A small caching module for front-end requests</p>\n</blockquote>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">MyLoaderSpec</span> = </span>{\n  <span class="hljs-keyword">type</span> t = int;\n  <span class="hljs-keyword">let</span> name = <span class="hljs-string">"MyLoader"</span>;\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">get</span> context::<span class="hljs-number">_</span>=? key =&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve (int_of_string key);\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">MyLoader</span> = <span class="hljs-title">DataLoader</span>.<span class="hljs-title">Make</span> <span class="hljs-title">MyLoaderSpec</span>;\n\n<span class="hljs-title">let</span> <span class="hljs-title">promise</span> = <span class="hljs-title">MyLoader</span>.<span class="hljs-title">load</span> "1";\n<span class="hljs-title">let</span> <span class="hljs-title">promises</span> = <span class="hljs-title">MyLoader</span>.<span class="hljs-title">loadMany</span> ["1", "2", "3"];\n<span class="hljs-title">let</span> <span class="hljs-title">promise</span> = <span class="hljs-title">MyLoader</span>.<span class="hljs-title">reload</span> "1";\n<span class="hljs-title">let</span> <span class="hljs-title">promise</span> = <span class="hljs-title">MyLoader</span>.<span class="hljs-title">clear</span> "1";</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">1525</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/redataloader",issuesUrl:null,slug:"/package/redataloader"}},pathContext:{id:"redataloader"}}}});
//# sourceMappingURL=path---package-redataloader-b26f72a1e37459f9df22.js.map