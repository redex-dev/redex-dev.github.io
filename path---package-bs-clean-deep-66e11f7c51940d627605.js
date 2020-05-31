webpackJsonp([28785898846697],{1199:function(e,s){e.exports={data:{package:{type:"published",id:"bs-clean-deep",name:"bs-clean-deep",version:"1.0.5",category:"binding",flags:[],platforms:["browser","node"],description:"Remove empty or nullable values from javascript objects",keywords:["utilities"],license:"MIT",updated:"2020-04-08T08:14:01.077Z",stars:0,score:.6356881910176082,quality:.9273377913398511,popularity:.021404162560003694,maintenance:.9999868477704335,readme:'<h1 id="bs-clean-deep"><a href="#bs-clean-deep" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-clean-deep</h1>\n<p><a href="https://www.npmjs.org/package/bs-clean-deep"><img src="http://img.shields.io/npm/v/bs-clean-deep.svg" alt="NPM version"></a>\n<a href="https://travis-ci.org/mikaello/bs-clean-deep"><img src="https://travis-ci.org/mikaello/bs-clean-deep.svg?branch=master" alt="Build Status"></a></p>\n<p>Bindings for <a href="https://github.com/nunofgs/clean-deep">clean-deep</a>, a library for\nremoving empty or nullable values from javascript objects.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-clean-deep</code></pre></div>\n<p>Then add <code>bs-clean-deep</code> as a dependency to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-diff"><code><span class="hljs-string">"bs-dependencies"</span>: [\n+  <span class="hljs-string">"bs-clean-deep"</span>\n]</code></pre></div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsCleanDeep</span>;\n\n<span class="hljs-keyword">let</span> jsObject = [%bs.raw {|\n{\n  bar: {},\n  baz: null,\n  biz: \'baz\',\n  foo: \'\',\n  net: [],\n  nit: undefined,\n  qux: {\n    baz: \'boz\',\n    txi: \'\'\n  }\n}\n|}];\n\n<span class="hljs-keyword">let</span> cleaned = <span class="hljs-type">CleanDeep</span>.cleanDeep(jsObject);\n\n<span class="hljs-type">Js</span>.log(cleaned);\n<span class="hljs-comment">/* =&gt; { biz: \'baz\', qux: { baz: \'boz\' } } */</span>\n\n<span class="hljs-keyword">let</span> cleanedKeepStrings = jsObject |&gt; <span class="hljs-type">CleanDeep</span>.cleanDeep(~emptyStrings=<span class="hljs-literal">false</span>);\n\n<span class="hljs-type">Js</span>.log(cleanedKeepStrings);\n<span class="hljs-comment">/* =&gt; { biz: \'baz\', foo: \'\', qux: { baz: \'boz\', txi: \'\' } } */</span>\n\n<span class="hljs-keyword">let</span> cleanedCustomValues = jsObject |&gt; <span class="hljs-type">CleanDeep</span>.cleanDeep(~cleanValues=[|<span class="hljs-string">"baz"</span>|]);\n\n<span class="hljs-type">Js</span>.log(cleanedCustomValues);\n<span class="hljs-comment">/* =&gt; { qux: { baz: \'boz\' } } */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsCleanDeep</span>\n<span class="hljs-keyword">let</span> jsObject =\n  [%bs.raw\n    {|\n{\n  bar: {},\n  baz: null,\n  biz: <span class="hljs-symbol">\'baz\'</span>,\n  foo: <span class="hljs-char">\'\'</span>,\n  net: <span class="hljs-literal">[]</span>,\n  nit: undefined,\n  qux: {\n    baz: <span class="hljs-symbol">\'boz\'</span>,\n    txi: <span class="hljs-char">\'\'</span>\n  }\n}\n|}]\n<span class="hljs-keyword">let</span> cleaned = <span class="hljs-type">CleanDeep</span>.cleanDeep jsObject\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log cleaned\n<span class="hljs-keyword">let</span> cleanedKeepStrings =\n  jsObject |&gt; (<span class="hljs-type">CleanDeep</span>.cleanDeep ~emptyStrings:<span class="hljs-literal">false</span>)\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log cleanedKeepStrings\n<span class="hljs-keyword">let</span> cleanedCustomValues =\n  jsObject |&gt; (<span class="hljs-type">CleanDeep</span>.cleanDeep ~cleanValues:[|<span class="hljs-string">"baz"</span>|])\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log cleanedCustomValues</code></pre>\n      </div>\n    </div>\n  \n<p>See also <a href="./example">example-project</a>.</p>\n<h2 id="contribute"><a href="#contribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribute</h2>\n<p>If you find bugs or there are updates in\n<a href="https://github.com/nunofgs/clean-deep">clean-deep</a>, feel free to open an issue\nor PR. If you are upgrading any dependencies, please use yarn so <code>yarn.lock</code> is\nupdated.</p>\n',homepageUrl:"https://github.com/mikaello/bs-clean-deep",repositoryUrl:"https://github.com/mikaello/bs-clean-deep",npmUrl:"https://www.npmjs.com/package/bs-clean-deep",issuesUrl:"https://github.com/mikaello/bs-clean-deep/issues",slug:"/package/bs-clean-deep"}},pathContext:{id:"bs-clean-deep"}}}});
//# sourceMappingURL=path---package-bs-clean-deep-66e11f7c51940d627605.js.map