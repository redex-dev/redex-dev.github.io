webpackJsonp([0xf173925900c8],{1328:function(s,e){s.exports={data:{package:{type:"unpublished",id:"unpublished/threepointone/bs-nice",name:"threepointone/bs-nice",version:"0.1.5",category:"library",flags:["neglected"],platforms:["browser"],description:"css-in-reason",keywords:["css"],license:"MIT",updated:"2018-11-10T21:08:56.270Z",stars:176,score:0,quality:0,popularity:0,maintenance:0,readme:'<p>(work in progress)</p>\n<h2 id="nice"><a href="#nice" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>nice</h2>\n<p>css-in-reason. just because.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">Nice</span>;\n\n<span class="hljs-keyword">let</span> className = css([|\n  <span class="hljs-type">Display</span>(<span class="hljs-type">Flex</span>),\n  <span class="hljs-type">AlignItems</span>(<span class="hljs-type">Center</span>),\n  <span class="hljs-type">Color</span>(<span class="hljs-type">Red</span>),\n  <span class="hljs-type">Select</span>(<span class="hljs-string">":hover"</span>, [<span class="hljs-type">Color</span>(<span class="hljs-type">Blue</span>)])\n|]);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">Nice</span>\n<span class="hljs-keyword">let</span> className =\n  css\n    [|((<span class="hljs-type">Display</span> (<span class="hljs-type">Flex</span>))[@explicit_arity ]);((<span class="hljs-type">AlignItems</span> (<span class="hljs-type">Center</span>))[@explicit_arity\n                                                                   ]);((\n      <span class="hljs-type">Color</span> (<span class="hljs-type">Red</span>))[@explicit_arity ]);((<span class="hljs-type">Select</span>\n                                          (<span class="hljs-string">":hover"</span>,\n                                            [((<span class="hljs-type">Color</span> (<span class="hljs-type">Blue</span>))[@explicit_arity\n                                                              ])]))[@explicit_arity\n                                                                    ])|]</code></pre>\n      </div>\n    </div>\n  \n<h2 id="some-nice-features"><a href="#some-nice-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>some nice features</h2>\n<ul>\n<li>pure reason</li>\n<li>typed css</li>\n<li>glamor-style composition</li>\n<li>escape hatch - <code>Raw(key, value)</code></li>\n</ul>\n<h2 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>todo</h2>\n<ul>\n<li>vendor prefixing</li>\n<li>keyframes / animations</li>\n<li>font-faces</li>\n<li>better types</li>\n<li>~ hot reloading</li>\n<li>benchmarks / tests</li>\n</ul>\n',homepageUrl:"https://github.com/threepointone/bs-nice#readme",repositoryUrl:"https://github.com/threepointone/bs-nice",npmUrl:null,issuesUrl:"https://github.com/threepointone/bs-nice/issues",slug:"/package/unpublished/threepointone/bs-nice"}},pathContext:{id:"unpublished/threepointone/bs-nice"}}}});
//# sourceMappingURL=path---package-unpublished-threepointone-bs-nice-75edc82a4e2c5162fb3f.js.map