webpackJsonp([4871832117001],{1098:function(s,n){s.exports={data:{package:{id:"minimist.re",stars:null,name:"minimist.re",version:"0.0.4",category:"library",flags:["neglected"],platforms:["native"],description:"A no-frills cli argument parser for reason, inspired by [minimist](https://www.npmjs.com/package/minimist) and [yargs](https://www.npmjs.com/package/yargs).",keywords:["cli"],license:"MIT",updated:"2018-01-29T19:40:07.142Z",type:"published",score:.3423971628153887,quality:.7021841431797751,popularity:.04307215198511275,maintenance:.3333333333333334,readme:'<h1 id="minimistre"><a href="#minimistre" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Minimist.re</h1>\n<p>A no-frills cli argument parser for reason, inspired by <a href="https://www.npmjs.com/package/minimist">minimist</a> and <a href="https://www.npmjs.com/package/yargs">yargs</a>.</p>\n<h2 id="example-usage"><a href="#example-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example usage</h2>\n<p>(from <a href="https://www.npmjs.com/package/pack.re">pack.re</a>):</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-built_in">let</span> parse = Minimist.parse(~<span class="hljs-built_in">alias</span>=[(<span class="hljs-string">"h"</span>, <span class="hljs-string">"help"</span>)], ~presence=[<span class="hljs-string">"help"</span>], ~multi=[<span class="hljs-string">"rename"</span>], ~strings=[<span class="hljs-string">"base"</span>]);\n\n<span class="hljs-built_in">let</span> <span class="hljs-built_in">help</span> = {|\n<span class="hljs-comment"># pack.re - a simple js bundler for reason</span>\n\nUsage: pack.re [options] entry-file.js &gt; bundle.js\n\n  --base (default: current directory)\n      expected to contain node_modules\n  --rename newName=realName (can be defined multiple <span class="hljs-built_in">times</span>)\n      maps `require(<span class="hljs-string">"newName"</span>)` to a node_module called <span class="hljs-string">"realName"</span>\n  -h, --help\n      <span class="hljs-built_in">print</span> this <span class="hljs-built_in">help</span>\n|};\n\n<span class="hljs-built_in">let</span> fail = (msg) =&gt; {\n  <span class="hljs-built_in">print</span>_endline(msg);\n  <span class="hljs-built_in">print</span>_endline(<span class="hljs-built_in">help</span>);\n  <span class="hljs-built_in">exit</span>(<span class="hljs-number">1</span>);\n};\n\nswitch (parse(List.tl(Array.to_list(Sys.argv)))) {\n| Minimist.Error(err) =&gt; fail(Minimist.report(err))\n| Ok(opts) =&gt;\n<span class="hljs-keyword">if</span> (Minimist.StrSet.mem(<span class="hljs-string">"help"</span>, opts.presence)) {\n  <span class="hljs-built_in">print</span>_endline(<span class="hljs-built_in">help</span>); <span class="hljs-built_in">exit</span>(<span class="hljs-number">0</span>);\n} <span class="hljs-keyword">else</span> switch (opts.rest) {\n  | [] =&gt; fail(<span class="hljs-string">"Expected entry file as final argument"</span>)\n  | [entry] =&gt; process(\n      ~base=?Minimist.get(opts.strings, <span class="hljs-string">"base"</span>),\n      ~renames=\n        List.map(item =&gt; switch (Str.split(Str.regexp(<span class="hljs-string">"="</span>), item)) {\n        | [<span class="hljs-built_in">alias</span>, m] =&gt; (<span class="hljs-built_in">alias</span>, m)\n        | _ =&gt; fail(<span class="hljs-string">"Expected rename argument to be of the form alias=realname"</span>)\n        }, Minimist.multi(opts.multi, <span class="hljs-string">"rename"</span>)),\n      entry\n    ) |&gt; <span class="hljs-built_in">print</span>_endline\n  | _ =&gt; fail(<span class="hljs-string">"Only one entry file allowed"</span>)\n}\n};</code></pre></div>\n',homepageUrl:null,repositoryUrl:null,npmUrl:"https://www.npmjs.com/package/minimist.re",issuesUrl:null,slug:"/package/minimist.re"}},pathContext:{id:"minimist.re"}}}});
//# sourceMappingURL=path---package-minimist-re-505e259d5192a8456506.js.map