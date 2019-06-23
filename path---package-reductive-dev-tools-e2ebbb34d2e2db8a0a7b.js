webpackJsonp([0x759d1c50d05a],{1351:function(s,n){s.exports={data:{package:{type:"published",id:"reductive-dev-tools",name:"reductive-dev-tools",version:"0.2.6",category:"tool",flags:[],platforms:["browser"],description:"reductive and reason-react reducer component integration with Redux DevTools",keywords:["development tools"],license:"MIT",updated:"2019-06-02T15:49:36.875Z",stars:10,score:.4893690803337101,quality:.4295777986535114,popularity:.04215607575713935,maintenance:.9878317549218798,readme:'<h2 id="reductive-dev-tools"><a href="#reductive-dev-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reductive-dev-tools</h2>\n<p><a href="https://github.com/reasonml-community/reductive">reductive</a> and <a href="https://github.com/reasonml/reason-react">reason-react</a> reducer component integration with <a href="https://github.com/zalmoxisus/redux-devtools-extension">redux-devtools-extension</a></p>\n<p><img src="assets/demo.gif" alt="image"></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>via npm:</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install --save-dev reductive-dev-tools</code></pre></div>\n<p>then add <code>reductive-dev-tools</code> to your "bs-dependencies" inside <code>bsconfig.json</code>.</p>\n<p><strong>Peer depedencies</strong><br>\nreason-react, reductive, redux-devtools-extension, redux (redux-devtools-extension\'s peer dep.) should be also installed.</p>\n<h2 id="caveats"><a href="#caveats" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Caveats</h2>\n<ol>\n<li>Add <code>-bs-g</code> into <code>"bsc-flags"</code> of your <strong>bsconfig.json</strong> to have variant and record field names available inside extension.</li>\n<li>Prefer variants with constructors to plain (<code>SomeAction(unit)</code> to <code>SomeAction</code>) since plain varaints do no carry debug metedata with them (represented as numbers in js)</li>\n<li>Extension will be locked (newly dispatched actions will be ignored) when you jump back in action history.</li>\n<li>Records inside variants do not carry debug metadata in bucklescript yet, if needed you can tag them manually. See <a href="https://github.com/ambientlight/reductive-dev-tools#additional-tagging">Additional Tagging</a></li>\n</ol>\n<h2 id="supported-devtools-features"><a href="#supported-devtools-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Supported DevTools Features</h2>\n<table>\n<thead>\n<tr>\n<th>feature</th>\n<th>reductive</th>\n<th>reducer component</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>pause</td>\n<td>✔</td>\n<td>✔</td>\n</tr>\n<tr>\n<td>lock</td>\n<td><a href="https://github.com/zalmoxisus/redux-devtools-extension/issues/618">redux-devtools-extension/#618</a></td>\n<td><a href="https://github.com/zalmoxisus/redux-devtools-extension/issues/618">redux-devtools-extension/#618</a></td>\n</tr>\n<tr>\n<td>persist</td>\n<td>✔</td>\n<td>✔</td>\n</tr>\n<tr>\n<td>export</td>\n<td>✔</td>\n<td>✔</td>\n</tr>\n<tr>\n<td>import</td>\n<td>✔</td>\n<td>✔</td>\n</tr>\n<tr>\n<td>jump</td>\n<td>✔</td>\n<td>✔</td>\n</tr>\n<tr>\n<td>skip</td>\n<td>✔</td>\n<td>✔</td>\n</tr>\n<tr>\n<td>sweep</td>\n<td><a href="https://github.com/zalmoxisus/redux-devtools-extension/issues/618">redux-devtools-extension/#618</a></td>\n<td><a href="https://github.com/zalmoxisus/redux-devtools-extension/issues/618">redux-devtools-extension/#618</a></td>\n</tr>\n<tr>\n<td>reorder</td>\n<td><a href="https://github.com/zalmoxisus/redux-devtools-extension/issues/618">redux-devtools-extension/#618</a></td>\n<td><a href="https://github.com/zalmoxisus/redux-devtools-extension/issues/618">redux-devtools-extension/#618</a></td>\n</tr>\n<tr>\n<td>dispatch</td>\n<td>✔</td>\n<td>✔</td>\n</tr>\n<tr>\n<td>test</td>\n<td>REDUX ONLY</td>\n<td>REDUX ONLY</td>\n</tr>\n<tr>\n<td>trace</td>\n<td>REDUX ONLY</td>\n<td>REDUX ONLY</td>\n</tr>\n</tbody>\n</table>\n<h2 id="usage-with-reductive"><a href="#usage-with-reductive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage with Reductive</h2>\n<p>Utilize provided store enhancer <code>ReductiveDevTools.Connectors.reductiveEnhancer</code></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> storeEnhancer =\n  <span class="hljs-type">ReductiveDevTools</span>.(\n    <span class="hljs-type">Connectors</span>.reductiveEnhancer(\n      <span class="hljs-type">Extension</span>.enhancerOptions(~name=<span class="hljs-string">"MyApp"</span>, ()),\n    )\n  );\n  \n<span class="hljs-keyword">let</span> storeCreator = storeEnhancer @@ <span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.create;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> storeEnhancer =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">ReductiveDevTools</span> <span class="hljs-keyword">in</span>\n    <span class="hljs-type">Connectors</span>.reductiveEnhancer (<span class="hljs-type">Extension</span>.enhancerOptions ~name:<span class="hljs-string">"MyApp"</span> <span class="hljs-literal">()</span>)\n<span class="hljs-keyword">let</span> storeCreator = storeEnhancer @@ <span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.create</code></pre>\n      </div>\n    </div>\n  \n<h2 id="usage-with-reactreason-reducer-component"><a href="#usage-with-reactreason-reducer-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage with ReactReason reducer component</h2>\n<ol>\n<li>\n<p>Create devtools connection with <code>ReductiveDevTools.Connectors.register()</code>.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* in your component */</span>\ndidMount: <span class="hljs-keyword">self</span> =&gt;\n  <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Connectors</span>.register(\n    ~connectionId, \n    ~component=<span class="hljs-keyword">self</span>, \n    ~options=<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions(\n      ~actionCreators=<span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList([\n        (<span class="hljs-string">"click"</span>, (.) =&gt; `<span class="hljs-type">Click</span>()),\n        (<span class="hljs-string">"toogle"</span>, (.) =&gt; `<span class="hljs-type">Toggle</span>(()))\n      ]),\n      ()), \n    ()),</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">1688</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n</li>\n<li>\n<p>Wrap your reducer into <code>componentReducerEnhancer</code> with passed connectionId and handle actions dispatched from the monitor (<code>DevToolStateUpdate(\'state)</code>) to support rewind, revert, import extension features:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* inside your component */</span>\nreducer: <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Connectors</span>.componentReducerEnhancer(connectionId) @@ (action, state) =&gt; {\n  <span class="hljs-keyword">switch</span> (action) {\n  | `<span class="hljs-type">Click</span>(<span class="hljs-number">_</span>) =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">Update</span>({...state, <span class="hljs-built_in">count</span>: state.<span class="hljs-built_in">count</span> + <span class="hljs-number">1</span>})\n  | `<span class="hljs-type">Toggle</span>(<span class="hljs-number">_</span>) =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">Update</span>({...state, show: !state.show})\n  <span class="hljs-comment">/* handle the actions dispatched from the dev tools monitor */</span>\n  | `<span class="hljs-type">DevToolStateUpdate</span>(devToolsState) =&gt; <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">Update</span>(devToolsState)\n  }\n},</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">1686</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n</li>\n<li>\n<p>Unsubscribe when needed with <code>ReductiveDevTools.Connectors.unsubscribe(~connectionId)</code></p>\n</li>\n</ol>\n<h2 id="options"><a href="#options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Options</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions(\n  <span class="hljs-comment">/* the instance name to be showed on the monitor page */</span>\n  ~name=<span class="hljs-string">"SomeTest"</span>,\n  \n  <span class="hljs-comment">/* action creators functions to be available in the Dispatcher. */</span>\n  ~actionCreators=<span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList([\n    (<span class="hljs-string">"increment"</span>, (.) =&gt; <span class="hljs-type">CounterAction</span>(<span class="hljs-type">Increment</span>)),\n    (<span class="hljs-string">"decrement"</span>, (.) =&gt; <span class="hljs-type">CounterAction</span>(<span class="hljs-type">Decrement</span>)),\n    (<span class="hljs-string">"complexAppend"</span>, ((first, last) =&gt; <span class="hljs-type">StringAction</span>(<span class="hljs-type">ComplexAppend</span>(first, last))) |&gt; <span class="hljs-type">Obj</span>.magic)\n  ]),\n  \n  <span class="hljs-comment">/* if more than one action is dispatched in the indicated interval, all new actions will be collected and sent at once */</span>\n  ~latency=<span class="hljs-number">500</span>,\n  \n  <span class="hljs-comment">/* maximum allowed actions to be stored in the history tree. */</span>\n  ~maxAge=<span class="hljs-number">50</span>,\n  \n  <span class="hljs-comment">/* actions types to be hidden / shown in the monitors (while passed to the reducers), If `actionsWhitelist` specified, `actionsBlacklist` is ignored. */</span>\n  ~actionsBlacklist=[|<span class="hljs-string">"StringAction"</span>|],\n  \n  <span class="hljs-comment">/* actions types to be hidden / shown in the monitors (while passed to the reducers), If `actionsWhitelist` specified, `actionsBlacklist` is ignored. */</span>\n  ~actionsWhitelist=[|<span class="hljs-string">"CounterAction"</span>|],\n  \n  <span class="hljs-comment">/* if specified as `true`, whenever there\'s an exception in reducers, the monitors will show the error message, and next actions will not be dispatched. */</span>\n  ~shouldCatchErrors=<span class="hljs-literal">false</span>,\n  \n  <span class="hljs-comment">/* If you want to restrict the extension, specify the features you allow. */</span>\n  ~features=<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerFeatures(\n    ~pause=<span class="hljs-literal">true</span>,\n    ~persist=<span class="hljs-literal">true</span>,\n    ~export=<span class="hljs-literal">true</span>,\n    ~<span class="hljs-keyword">import</span>=<span class="hljs-type">Obj</span>.magic(<span class="hljs-string">"custom"</span>),\n    ~jump=<span class="hljs-literal">true</span>,\n    ~dispatch=<span class="hljs-literal">true</span>,\n    ()),\n  ())</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerOptions ~name:<span class="hljs-string">"SomeTest"</span>\n    ~actionCreators:(<span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.fromList\n                       [(<span class="hljs-string">"increment"</span>,\n                          (((<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                               ((<span class="hljs-type">CounterAction</span> (<span class="hljs-type">Increment</span>))[@explicit_arity ])))\n                          [@bs ]));\n                       (<span class="hljs-string">"decrement"</span>,\n                         (((<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                              ((<span class="hljs-type">CounterAction</span> (<span class="hljs-type">Decrement</span>))[@explicit_arity ])))\n                         [@bs ]));\n                       (<span class="hljs-string">"complexAppend"</span>,\n                         ((<span class="hljs-keyword">fun</span> first  -&gt;\n                             <span class="hljs-keyword">fun</span> last  -&gt;\n                               ((<span class="hljs-type">StringAction</span>\n                                   (((<span class="hljs-type">ComplexAppend</span> (first, last))[@explicit_arity\n                                                                    ])))\n                               [@explicit_arity ]))\n                            |&gt; <span class="hljs-type">Obj</span>.magic))]) ~latency:<span class="hljs-number">500</span> ~maxAge:<span class="hljs-number">50</span>\n    ~actionsBlacklist:[|<span class="hljs-string">"StringAction"</span>|]\n    ~actionsWhitelist:[|<span class="hljs-string">"CounterAction"</span>|] ~shouldCatchErrors:<span class="hljs-literal">false</span>\n    ~features:(<span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Extension</span>.enhancerFeatures ~pause:<span class="hljs-literal">true</span>\n                 ~persist:<span class="hljs-literal">true</span> ~export:<span class="hljs-literal">true</span> ~import:(<span class="hljs-type">Obj</span>.magic <span class="hljs-string">"custom"</span>)\n                 ~jump:<span class="hljs-literal">true</span> ~dispatch:<span class="hljs-literal">true</span> <span class="hljs-literal">()</span>) <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="additional-tagging"><a href="#additional-tagging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Additional Tagging</h2>\n<p>You can also manually customize serialized objects keys and action names displayed inside extension.\nTwo common usecases:</p>\n<ol>\n<li>\n<p>Labeling variants with constructors.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> routerActions = [\n  | `<span class="hljs-type">RouterLocationChanged</span>(list(string), string, string)\n];\n\nopen <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>;\n<span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.dispatch(store, \n  `<span class="hljs-type">RouterLocationChanged</span>(url.path, url.hash, url.search)\n    |. labelVariant([|<span class="hljs-string">"path"</span>, <span class="hljs-string">"hash"</span>, <span class="hljs-string">"search"</span>|]));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> routerActions =\n  [ <span class="hljs-tag">`RouterLocationChanged</span> <span class="hljs-keyword">of</span> (<span class="hljs-built_in">string</span> <span class="hljs-built_in">list</span>* <span class="hljs-built_in">string</span>* <span class="hljs-built_in">string</span>) ]\n<span class="hljs-keyword">open</span> <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.dispatch store\n    ((<span class="hljs-tag">`RouterLocationChanged</span> ((url.path), (url.hash), (url.search))) |.\n       (labelVariant [|<span class="hljs-string">"path"</span>;<span class="hljs-string">"hash"</span>;<span class="hljs-string">"search"</span>|]))</code></pre>\n      </div>\n    </div>\n  \n</li>\n<li>\n<p>Labeling record keys for records inside variants (since Records inside variants do not carry debug metadata in bucklescript yet).</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> url = {\n  path: list(string),\n  hash: string,\n  search: string,\n};\n<span class="hljs-keyword">type</span> routerActions = [\n  | `<span class="hljs-type">RouterLocationChanged</span>(url)\n];\n\nopen <span class="hljs-type">ReductiveDevTools</span>.<span class="hljs-type">Utilities</span>;\n<span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.dispatch(store, \n  `<span class="hljs-type">RouterLocationChanged</span>(url\n    |. tagRecord([|<span class="hljs-string">"path"</span>, <span class="hljs-string">"hash"</span>, <span class="hljs-string">"search"</span>|]));</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">949</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n</li>\n</ol>\n<p>This can also be used to override bucklescript debug metadata(if really needed). Definitions are at: <a href="https://github.com/ambientlight/reductive-dev-tools/blob/a530ea6d09d7facad2b70c061703eff52cfa80b4/src/utilities.rei#L63-L67">utilities.rei</a></p>\n<h2 id="word-of-caution"><a href="#word-of-caution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Word Of Caution</h2>\n<p>Current implementation depends on internal bucklescript representation of debug metadata and variants in js. Changes to it in future may silently break the extension.</p>\n',homepageUrl:"https://github.com/ambientlight/reductive-dev-tools#readme",repositoryUrl:"https://github.com/ambientlight/reductive-dev-tools",npmUrl:"https://www.npmjs.com/package/reductive-dev-tools",issuesUrl:"https://github.com/ambientlight/reductive-dev-tools/issues",slug:"/package/reductive-dev-tools"}},pathContext:{id:"reductive-dev-tools"}}}});
//# sourceMappingURL=path---package-reductive-dev-tools-e2ebbb34d2e2db8a0a7b.js.map