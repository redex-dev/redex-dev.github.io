webpackJsonp([31861113473235],{1378:function(n,t){n.exports={data:{package:{type:"published",id:"reason-powerplug",name:"reason-powerplug",version:"0.1.2",category:"library",flags:[],platforms:["browser"],description:"A set of reuseable `components` and `functors` for  reason react",keywords:["react","utilities"],license:"MIT",updated:"2020-05-18T15:15:22.753Z",stars:8,score:.3346554767783819,quality:.42994870284823317,popularity:.02936955258456326,maintenance:.5582614929123282,readme:'<h1 id="reason-powerplug"><a href="#reason-powerplug" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason PowerPlug</h1>\n<p>Reason PowerPlug is a set of reuseable <code>components</code> and <code>functors</code> for  reason react.\nThis project is inspired by <a href="https://github.com/renatorib/react-powerplug">react-powerplug</a>. </p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">StringList</span> = <span class="hljs-type">ReList</span>.<span class="hljs-type">Make</span>(<span class="hljs-type">String</span>);\n\n  &lt;<span class="hljs-type">StringList</span> initial=[<span class="hljs-string">"d"</span>, <span class="hljs-string">"c"</span>, <span class="hljs-string">"a"</span>, <span class="hljs-string">"e"</span>, <span class="hljs-string">"b"</span>, <span class="hljs-string">"h"</span>, <span class="hljs-string">"g"</span>]&gt;\n    ...{\n          ({<span class="hljs-built_in">list</span>, sort, reset}) =&gt;\n            &lt;div&gt;\n              &lt;button onClick={_ =&gt; sort(<span class="hljs-type">String</span>.compare)}&gt;\n                {<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"sort"</span>)}\n              &lt;/button&gt;\n              &lt;button onClick={_ =&gt; reset<span class="hljs-literal">()</span>}&gt;\n                {<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"reset"</span>)}\n              &lt;/button&gt;\n              &lt;ul&gt;\n                {\n                  <span class="hljs-built_in">list</span>\n                  |&gt; <span class="hljs-type">List</span>.map(s =&gt; &lt;li key=s&gt; {<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(s)} &lt;/li&gt;)\n                  |&gt; <span class="hljs-type">Array</span>.of_list\n                  |&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">array</span>\n                }\n              &lt;/ul&gt;\n            &lt;/div&gt;\n        }\n  &lt;/<span class="hljs-type">StringList</span>&gt;</code></pre></div>\n<p><a href="https://github.com/beizhedenglong/reason-powerplug/blob/master/examples/Index.re">More Examples</a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p><code>yarn add reason-powerplug</code> or <code>npm install reason-powerplug --save</code></p>\n<p>then add <code>reason-powerplug</code> to <code>bs-dependencies</code> in <code>bsconfig.json</code>.</p>\n<h2 id="componentsfunctors"><a href="#componentsfunctors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Components/Functors</h2>\n<p>All components and functors base on <code>Value.Make</code> Functor.</p>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Component Props</th>\n<th>Render Props</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><h6>\nSTATE CONTAINERS\n</h6></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><strong>Toggle</strong></td>\n<td>Component</td>\n<td><code>{ initial, onChange }</code></td>\n<td><code>{ on, toggle, set, reset }</code></td>\n</tr>\n<tr>\n<td><strong>Counter</strong></td>\n<td>Component</td>\n<td><code>{ initial, onChange }</code></td>\n<td><code>{ count, inc, dec, incBy, decBy, set, reset }</code></td>\n</tr>\n<tr>\n<td><strong>Value</strong></td>\n<td>Functor Value.Make(M:S)\n<br />\n<code>module type S = {type t;};</code></td>\n<td><code>{ initial, onChange }</code></td>\n<td><code>{ value, set, reset }</code></td>\n</tr>\n<tr>\n<td><strong>ReMap</strong></td>\n<td>Functor ReMap.Make(M:S)\n<br />\n<code>module type S = {&#x3C;br />type t;let compare: (t, t) => int;type value;};</code></td>\n<td><code>{ initial, onChange }</code></td>\n<td><code>{ values, clear, get, has, remove, add, set, reset }</code></td>\n</tr>\n<tr>\n<td><strong>ReSet</strong></td>\n<td>Functor ReSet.Make(M:S)\n<br />\n<code>module type S = {&#x3C;br />type t;let compare: (t, t) => int;};</code></td>\n<td><code>{ initial, onChange }</code></td>\n<td><code>{ values, add, clear, remove, has, set, reset }</code></td>\n</tr>\n<tr>\n<td><strong>ReList</strong></td>\n<td>Functor ReList.Make(M:S)\n<br />\n<code>module type S = {type t;};</code></td>\n<td><code>{ initial, onChange }</code></td>\n<td><code>{ list, first, last, push, pull, sort, set, reset }</code></td>\n</tr>\n<tr>\n<td><h6>\nFEEDBACK CONTAINERS\n</h6></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><strong>Hover</strong></td>\n<td>Component</td>\n<td><code>{ onChange }</code></td>\n<td><code>{ hovered, onMouseEnter, onMouseLeave }</code></td>\n</tr>\n<tr>\n<td><strong>Active</strong></td>\n<td>Component</td>\n<td><code>{ onChange }</code></td>\n<td><code>{ active, onMouseDown, onMouseUp }</code></td>\n</tr>\n<tr>\n<td><strong>Focus</strong></td>\n<td>Component</td>\n<td><code>{ onChange }</code></td>\n<td><code>{ focused, onFocus, onBlur }</code></td>\n</tr>\n<tr>\n<td><strong>Touch</strong></td>\n<td>Component</td>\n<td><code>{ onChange }</code></td>\n<td><code>{ touched, onTouchStart, onTouchEnd }</code></td>\n</tr>\n<tr>\n<td><strong>FocusManager</strong></td>\n<td>Component</td>\n<td><code>{ onChange }</code></td>\n<td><code>{ focused, blur, tabIndex, onBlur, onFocus, onMouseDown, onMouseUp }</code></td>\n</tr>\n<tr>\n<td><h6>\nFORM CONTAINERS\n</h6></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><strong>Input</strong></td>\n<td>Component</td>\n<td><code>{ initial, onChange }</code></td>\n<td><code>{value, onChange, set, reset, }</code></td>\n</tr>\n<tr>\n<td><h6>\nOTHER\n</h6></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td><strong>Interval</strong></td>\n<td>Component</td>\n<td><code>{ delay }</code></td>\n<td><code>{ stop, start, toggle }</code></td>\n</tr>\n</tbody>\n</table>\n<h3 id="value"><a href="#value" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Value</h3>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Number</span> =\n  <span class="hljs-type">Value</span>.<span class="hljs-type">Make</span>({\n    <span class="hljs-keyword">type</span> t = <span class="hljs-built_in">int</span>;\n  });\n\n&lt;<span class="hljs-type">Number</span> initial=<span class="hljs-number">1</span>&gt;\n  ...{\n       ({<span class="hljs-keyword">value</span>, set}) =&gt;\n         &lt;div onClick={_ =&gt; set(<span class="hljs-keyword">value</span> =&gt; <span class="hljs-keyword">value</span> + <span class="hljs-number">1</span>)}&gt;\n           {<span class="hljs-keyword">value</span> |&gt; string_of_int |&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>}\n         &lt;/div&gt;\n     }\n&lt;/<span class="hljs-type">Number</span>&gt;</code></pre></div>\n<p>TODO</p>\n',homepageUrl:"https://github.com/beizhedenglong/reason-powerplug",repositoryUrl:"https://github.com/beizhedenglong/reason-powerplug",npmUrl:"https://www.npmjs.com/package/reason-powerplug",issuesUrl:"https://github.com/beizhedenglong/reason-powerplug/issues",slug:"/package/reason-powerplug"}},pathContext:{id:"reason-powerplug"}}}});
//# sourceMappingURL=path---package-reason-powerplug-fd0ac9603b79a253c3f8.js.map