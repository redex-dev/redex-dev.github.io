webpackJsonp([0xcebfb86fd173],{1115:function(s,a){s.exports={data:{package:{id:"reason-navigation",stars:7,name:"reason-navigation",version:"0.4.1",category:"library",flags:[],platforms:["browser"],description:"reason navigation",keywords:["react","routing"],license:"MIT",updated:"2018-01-31T03:12:07.493Z",type:"published",score:.5206706237616671,quality:.5101908563100152,popularity:.050549865878201504,maintenance:.9997740394608343,readme:'<p align="center">\n  <img width="300px" src="assets/reason-navigation.png" />\n</p>\n<p style="margin-top: 20px; font-size: 24px; font-weight: 500;" align="center">reason-navigation</p>\n<p style="margin-top: 20px;" align="center">\n  <a href="http://npm.im/reason-navigation">\n    <img src="https://img.shields.io/npm/v/reason-navigation.svg?style=flat-square"/>\n  </a>\n  <a href="http://npm-stat.com/charts.html?package=reason-navigation">\n    <img src="https://img.shields.io/npm/dm/reason-navigation.svg?style=flat-square"/>\n  </a>\n  <a href="http://opensource.org/licenses/MIT">\n    <img src="https://img.shields.io/npm/l/reason-navigation.svg?style=flat-square" />\n  </a>\n</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yarn install reason-navigation</code></pre></div>\n<h2 id="bsconfig"><a href="#bsconfig" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bsconfig</h2>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"reason-react"</span>,\n  <span class="hljs-string">"reason-navigator"</span>\n]</code></pre></div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"App"</span>);\n\n<span class="hljs-keyword">let</span> make = (_children) =&gt; {\n  ...component,\n  render: (_self) =&gt;\n    &lt;<span class="hljs-type">Router</span>&gt;\n      (\n        (match) =&gt;\n          &lt;div&gt;\n            &lt;h1&gt; (<span class="hljs-type">U</span>.se(<span class="hljs-string">"Reason Router"</span>)) &lt;/h1&gt;\n            &lt;<span class="hljs-type">Link</span> match href=<span class="hljs-string">"/game"</span>&gt; (<span class="hljs-type">U</span>.se(<span class="hljs-string">"GAME"</span>)) &lt;/<span class="hljs-type">Link</span>&gt;\n            &lt;<span class="hljs-type">Route</span> match path=<span class="hljs-string">"/"</span> render=(() =&gt; &lt;<span class="hljs-type">Landing</span> match /&gt;) /&gt;\n            &lt;<span class="hljs-type">Route</span> match path=<span class="hljs-string">"/game"</span> render=(() =&gt; &lt;<span class="hljs-type">Canvas</span> match /&gt;) /&gt;\n            &lt;<span class="hljs-type">Route</span>\n              match\n              path=<span class="hljs-string">"/re/:id"</span>\n              render=(\n                () =&gt; {\n                  <span class="hljs-keyword">switch</span> (<span class="hljs-type">Match</span>.getInt(match.state.params, <span class="hljs-string">"id"</span>)) {\n                  | <span class="hljs-type">Some</span>(v) =&gt; <span class="hljs-type">Js</span>.log(v)\n                  | <span class="hljs-type">None</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"None"</span>)\n                  };\n                  &lt;p&gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"Query params!"</span>)) &lt;/p&gt;\n                }\n              )\n            /&gt;\n            &lt;<span class="hljs-type">Route</span> match path=<span class="hljs-string">"/highscores"</span> render=(() =&gt; &lt;<span class="hljs-type">HighScore</span> match /&gt;) /&gt;\n          &lt;/div&gt;\n      )\n    &lt;/<span class="hljs-type">Router</span>&gt;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"App"</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((<span class="hljs-type">Router</span>.createElement\n             ~children:[(<span class="hljs-keyword">fun</span> match_  -&gt;\n                           ((div\n                               ~children:[((h1\n                                              ~children:[<span class="hljs-type">U</span>.se <span class="hljs-string">"Reason Router"</span>]\n                                              <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                                         ((<span class="hljs-type">Link</span>.createElement ~<span class="hljs-keyword">match</span>:match_\n                                             ~href:<span class="hljs-string">"/game"</span>\n                                             ~children:[<span class="hljs-type">U</span>.se <span class="hljs-string">"GAME"</span>] <span class="hljs-literal">()</span>)\n                                         [@<span class="hljs-type">JSX</span> ]);\n                                         ((<span class="hljs-type">Route</span>.createElement ~<span class="hljs-keyword">match</span>:match_\n                                             ~path:<span class="hljs-string">"/"</span>\n                                             ~render:(<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                                                        ((<span class="hljs-type">Landing</span>.createElement\n                                                            ~<span class="hljs-keyword">match</span>:match_\n                                                            ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n                                                        [@<span class="hljs-type">JSX</span> ]))\n                                             ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                                         ((<span class="hljs-type">Route</span>.createElement ~<span class="hljs-keyword">match</span>:match_\n                                             ~path:<span class="hljs-string">"/game"</span>\n                                             ~render:(<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                                                        ((<span class="hljs-type">Canvas</span>.createElement\n                                                            ~<span class="hljs-keyword">match</span>:match_\n                                                            ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n                                                        [@<span class="hljs-type">JSX</span> ]))\n                                             ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                                         ((<span class="hljs-type">Route</span>.createElement ~<span class="hljs-keyword">match</span>:match_\n                                             ~path:<span class="hljs-string">"/re/:id"</span>\n                                             ~render:(<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                                                        (<span class="hljs-keyword">match</span> <span class="hljs-type">Match</span>.getInt\n                                                                 (match_.state).params\n                                                                 <span class="hljs-string">"id"</span>\n                                                         <span class="hljs-keyword">with</span>\n                                                         | ((<span class="hljs-type">Some</span>\n                                                             (v))[@explicit_arity\n                                                                   ])\n                                                             -&gt; <span class="hljs-type">Js</span>.log v\n                                                         | <span class="hljs-type">None</span>  -&gt;\n                                                             <span class="hljs-type">Js</span>.log <span class="hljs-string">"None"</span>);\n                                                        ((p\n                                                            ~children:\n                                                            [<span class="hljs-type">ReasonReact</span>.stringToElement\n                                                               <span class="hljs-string">"Query params!"</span>]\n                                                            <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n                                             ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                                         ((<span class="hljs-type">Route</span>.createElement ~<span class="hljs-keyword">match</span>:match_\n                                             ~path:<span class="hljs-string">"/highscores"</span>\n                                             ~render:(<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n                                                        ((<span class="hljs-type">HighScore</span>.createElement\n                                                            ~<span class="hljs-keyword">match</span>:match_\n                                                            ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n                                                        [@<span class="hljs-type">JSX</span> ]))\n                                             ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n                           [@<span class="hljs-type">JSX</span> ]))] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<h2 id="navigation-components"><a href="#navigation-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Navigation Components</h2>\n<h3 id="router-children-history--reasonreactelement"><a href="#router-children-history--reasonreactelement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>&#x3C;Router children: (history) => ReasonReact.element/></code></h3>\n<p>Router takes a function as a child, with a parameter that is passed a history\nobject. The body should be a single reason-react component, like a <code>&#x3C;div /></code>\nthat wraps a bunch of child <code>&#x3C;Route /></code> components.</p>\n<h3 id="route-history-routerhistory-path-string-render-unit--reasonreactelement-"><a href="#route-history-routerhistory-path-string-render-unit--reasonreactelement-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>&#x3C;Route history: Router.history path: string render: unit => ReasonReact.element /></code></h3>\n<p>Route needs to be passed the <code>Router.history</code> record that contains data in order\nto determine whether it should render on a certain path or not. It also requires\na <code>path</code> that the route needs to match against, and lastly a <code>render</code> function\nthat passes query params and other data that is useful.</p>\n<h3 id="link-history-routerhistory-href-string-target-string-"><a href="#link-history-routerhistory-href-string-target-string-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>&#x3C;Link history: Router.history href: string target: string /></code></h3>\n<p>Link needs to be passed the <code>Router.history</code> record that contains actions to\nupdate the browser location. It also takes an <code>href</code> to determine where to go\nwhen the link is pressed. and lastly takes a target to determine where to open\nthe link.</p>\n<h2 id="query-params"><a href="#query-params" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Query Params</h2>\n<p>When accessing query params, you should use the query accessors that\n<code>reason-navigation</code> provides.</p>\n<h3 id="getintparams-jsdicttstring-field-string--optionint"><a href="#getintparams-jsdicttstring-field-string--optionint" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>getInt(params: Js.Dict.t(string), field: string) => option(int)</code></h3>\n<p>It will return <code>Some(int)</code> if they field you are accessing is present and an\n<code>int</code>.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">switch</span> (<span class="hljs-type">Match</span>.getInt(match.state.params, <span class="hljs-string">"id"</span>)) {\n| <span class="hljs-type">Some</span>(v) =&gt; <span class="hljs-type">Js</span>.log(v)\n| <span class="hljs-type">None</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"None"</span>)\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">match</span> <span class="hljs-type">Match</span>.getInt (match_.state).params <span class="hljs-string">"id"</span> <span class="hljs-keyword">with</span>\n  | ((<span class="hljs-type">Some</span> (v))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log v\n  | <span class="hljs-type">None</span>  -&gt; <span class="hljs-type">Js</span>.log <span class="hljs-string">"None"</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="getstringparams-jsdicttstring-field-string--optionstring"><a href="#getstringparams-jsdicttstring-field-string--optionstring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>getString(params: Js.Dict.t(string), field: string) => option(string)</code></h3>\n<p>It will return <code>Some(string)</code> if they field you are accessing is present and an\n<code>string</code>.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">switch</span> (<span class="hljs-type">Match</span>.getString(match.state.params, <span class="hljs-string">"id"</span>)) {\n| <span class="hljs-type">Some</span>(v) =&gt; <span class="hljs-type">Js</span>.log(v)\n| <span class="hljs-type">None</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"None"</span>)\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-keyword">match</span> <span class="hljs-type">Match</span>.getString (match_.state).params <span class="hljs-string">"id"</span> <span class="hljs-keyword">with</span>\n  | ((<span class="hljs-type">Some</span> (v))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log v\n  | <span class="hljs-type">None</span>  -&gt; <span class="hljs-type">Js</span>.log <span class="hljs-string">"None"</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="types"><a href="#types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Types</h2>\n<h3 id="routerstate"><a href="#routerstate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Router.state</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> state = {\n  path: string,\n  search: string,\n  hash: string,\n  params: <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.t(string),\n  unlisten: [@bs] (unit =&gt; unit)\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> state =\n  {\n  path: <span class="hljs-built_in">string</span>;\n  search: <span class="hljs-built_in">string</span>;\n  hash: <span class="hljs-built_in">string</span>;\n  params: <span class="hljs-built_in">string</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.t;\n  unlisten: ((<span class="hljs-built_in">unit</span> -&gt; <span class="hljs-built_in">unit</span>)[@bs ]);}</code></pre>\n      </div>\n    </div>\n  \n<h3 id="routeractions"><a href="#routeractions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Router.actions</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> actions = {\n  push: string =&gt; unit,\n  replace: string =&gt; unit,\n  updateMatch: (string, string, <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.t(string)) =&gt; unit\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> actions =\n  {\n  push: <span class="hljs-built_in">string</span> -&gt; <span class="hljs-built_in">unit</span>;\n  replace: <span class="hljs-built_in">string</span> -&gt; <span class="hljs-built_in">unit</span>;\n  updateMatch: <span class="hljs-built_in">string</span> -&gt; <span class="hljs-built_in">string</span> -&gt; <span class="hljs-built_in">string</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Dict</span>.t -&gt; <span class="hljs-built_in">unit</span>;}</code></pre>\n      </div>\n    </div>\n  \n<h3 id="routerhistory"><a href="#routerhistory" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Router.history</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> history = {\n  state,\n  actions\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> history = {\n  state: state;\n  actions: actions;}</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/kennetpostigo/reason-navigation#readme",repositoryUrl:"https://github.com/kennetpostigo/reason-navigation",npmUrl:"https://www.npmjs.com/package/reason-navigation",issuesUrl:"https://github.com/kennetpostigo/reason-navigation/issues",slug:"/package/reason-navigation"}},pathContext:{id:"reason-navigation"}}}});
//# sourceMappingURL=path---package-reason-navigation-345312244ca6816e7aaf.js.map