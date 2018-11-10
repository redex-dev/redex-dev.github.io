webpackJsonp([0x997278c00c3],{1331:function(s,e){s.exports={data:{package:{type:"unpublished",id:"unpublished/voodoos/bs-jszip",name:"voodoos/bs-jszip",version:"0.1.0",category:"binding",flags:[],platforms:["browser","node"],description:"Bucklescript bindings for JSZip",keywords:["utilities"],license:"MIT",updated:"2018-11-10T21:08:56.322Z",stars:1,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="bs-jszip"><a href="#bs-jszip" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-jszip</h1>\n<p>A set of Bucklescript bindings for <a href="https://stuk.github.io/jszip/">JSZip</a>. </p>\n<p>Required bindings for <a href="https://developer.mozilla.org/fr/docs/Web/API/Blob">Blob</a> are also included.</p>\n<p>You can find a example usage of theses bindings in the ElpIDE project : <a href="https://github.com/voodoos/ElpIDE/src/components/subcomponents/loadModal.re">source</a> || <a href="https://voodoos.github.io/ElpIDE/">demo</a></p>\n<h2 id="example-usage"><a href="#example-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> readZip = f =&gt;\n      <span class="hljs-comment">/* Locally open zip module */</span>\n      <span class="hljs-type">Zip</span>.(\n        create()\n        <span class="hljs-comment">/* Load from blob */</span>\n        |. loadAsync(`blob(f))\n        |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(zip =&gt; {\n             zip\n             |. forEach((_relativePath, zipEntry) =&gt;\n                    zipEntry\n                    <span class="hljs-comment">/* Read each file in zip */</span>\n                    |. <span class="hljs-type">Object</span>.asyncString()\n                    |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(content =&gt; {\n                         <span class="hljs-comment">/* Do something */</span>\n                         <span class="hljs-type">Js</span>.log(content);\n                         <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(content);\n                       })\n                    |&gt; ignore;\n                );\n             <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(zip);\n           })\n        |&gt; ignore\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">949</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>\n<p>These binding are not complete but in a very usable state. Please fill a issue or make a pull request if there are feature you miss !</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>To use these bindings in an existing ReasonReact project simply add the repository to your dependencies :</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add <span class="hljs-string">"https://github.com/voodoos/bs-jszip"</span></code></pre></div>\n<p>And ask <code>bsb</code> to use it by adding <code>bs-jszip</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>.</p>\n<h2 id="contributions"><a href="#contributions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributions</h2>\n<p>All contributions are welcomed.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LICENSE</h2>\n<p>MIT (see LICENSE file for more details)</p>\n',homepageUrl:"https://github.com/voodoos/bs-jszip",repositoryUrl:"https://github.com/voodoos/bs-jszip",npmUrl:null,issuesUrl:"https://github.com/voodoos/bs-jszip/issues",slug:"/package/unpublished/voodoos/bs-jszip"}},pathContext:{id:"unpublished/voodoos/bs-jszip"}}}});
//# sourceMappingURL=path---package-unpublished-voodoos-bs-jszip-a0da73dcb3610722bcc4.js.map