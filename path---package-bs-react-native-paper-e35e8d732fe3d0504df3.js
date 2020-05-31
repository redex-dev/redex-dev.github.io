webpackJsonp([24466011031992],{1276:function(s,a){s.exports={data:{package:{type:"published",id:"bs-react-native-paper",name:"bs-react-native-paper",version:"5.1.0",category:"binding",flags:[],platforms:["node"],description:"React Native Paper bindings for ReasonML",keywords:["react","ui","react-native"],license:"MIT",updated:"2020-04-30T04:36:05.724Z",stars:41,score:.6266016555123491,quality:.8315019599598297,popularity:.07764064649144525,maintenance:.9999338321496984,readme:'<p align="center">\n  <img alt="react-native-paper" src="assets/reason.png" width="300">\n  <img alt="react-native-paper" src="assets/paper-logo.svg" width="300">\n</p>\n<p align="center">\n  <a href="https://github.com/callstack/react-native-paper">React-native-paper</a> for ReasonML.\n</p>\n<hr>\n<p><a href="https://circleci.com/gh/callstackincubator/bs-react-native-paper"><img src="https://img.shields.io/circleci/project/github/callstackincubator/bs-react-native-paper/master.svg?style=flat-square" alt="Build Status"></a>\n<a href="https://www.npmjs.com/package/bs-react-native-paper"><img src="https://img.shields.io/npm/v/bs-react-native-paper.svg?style=flat-square" alt="Version"></a>\n<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/bs-react-native-paper.svg?style=flat-square" alt="MIT License"></a>\n<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"></a>\n<a href="https://discord.gg/zwR2Cdh"><img src="https://img.shields.io/discord/426714625279524876.svg?style=flat-square&#x26;colorB=758ED3" alt="Chat"></a></p>\n<h1 id="bs-react-native-paper"><a href="#bs-react-native-paper" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-native-paper</h1>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Use yarn or npm</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ yarn add bs-react-native-paper react-native-paper</code></pre></div>\n<p>Then add <code>bs-react-native-paper</code> to <code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-react-native-paper"</span>]</code></pre></div>\n<h2 id="example-usage"><a href="#example-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example usage</h2>\n<h3 id="using-theme"><a href="#using-theme" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using theme</h3>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>/* <span class="hljs-type">We</span> provide a helper <span class="hljs-keyword">function</span> called `createTheme` that defaults <span class="hljs-keyword">with</span> <span class="hljs-type">DefaultTheme</span> */\n<span class="hljs-keyword">let</span> theme =\n  <span class="hljs-type">Paper</span>.<span class="hljs-type">ThemeProvider</span>.(\n    createTheme(\n      ~colors=\n        themeColors(\n          ~primary=<span class="hljs-string">"#6200EE"</span>,\n          ~accent=<span class="hljs-string">"#03dac4"</span>,\n          ~background=<span class="hljs-string">"#f6f6f6"</span>,\n          ~surface=<span class="hljs-string">"white"</span>,\n          ~error=<span class="hljs-string">"#B00020"</span>,\n          ~text=<span class="hljs-string">"black"</span>,\n          ~disabled=<span class="hljs-string">"rgba(0, 0, 0, 0.26)"</span>,\n          ~placeholder=<span class="hljs-string">"rgba(0, 0, 0, 0.54)"</span>,\n          ~backdrop=<span class="hljs-string">"rgba(0, 0, 0, 0.5)"</span>,\n        ),\n      <span class="hljs-literal">()</span>,\n    )\n  );\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"AppTheme"</span>);\n\n<span class="hljs-keyword">let</span> make = children =&gt; {\n  ...component,\n  render: _self =&gt;\n    &lt;<span class="hljs-type">Paper</span>.<span class="hljs-type">ThemeProvider</span> theme&gt;\n      (<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">array</span>(children))\n    &lt;/<span class="hljs-type">Paper</span>.<span class="hljs-type">ThemeProvider</span>&gt;,\n};</code></pre></div>\n<h3 id="using-components"><a href="#using-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using components</h3>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>&lt;<span class="hljs-type">Paper</span>.<span class="hljs-type">Button</span> mode=`contained onPress={_event =&gt; self.send(<span class="hljs-type">YourAction</span>)}&gt;\n  &lt;<span class="hljs-type">Paper</span>.<span class="hljs-type">Text</span>&gt;\n    {<span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>(<span class="hljs-string">"Click me"</span>)}\n  &lt;/<span class="hljs-type">Paper</span>.<span class="hljs-type">Text</span>&gt;\n&lt;/<span class="hljs-type">Paper</span>.<span class="hljs-type">Button</span>&gt;</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code>&lt;<span class="hljs-type">Paper</span>.<span class="hljs-type">FABGroup</span>\n  actions=<span class="hljs-type">Paper</span>.<span class="hljs-type">FABGroup</span>.[|\n    fabAction(~icon=<span class="hljs-type">Icon</span>.<span class="hljs-type">Name</span>(<span class="hljs-string">"add"</span>), ~onPress=<span class="hljs-literal">()</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"add"</span>), <span class="hljs-literal">()</span>),\n    fabAction(~icon=<span class="hljs-type">Icon</span>.<span class="hljs-type">Name</span>(<span class="hljs-string">"star"</span>), ~onPress=<span class="hljs-literal">()</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"start"</span>), <span class="hljs-literal">()</span>),\n    fabAction(~icon=<span class="hljs-type">Icon</span>.<span class="hljs-type">Name</span>(<span class="hljs-string">"notifications"</span>),  ~onPress=<span class="hljs-literal">()</span> =&gt; <span class="hljs-type">Js</span>.log(<span class="hljs-string">"notifications"</span>), <span class="hljs-literal">()</span>),\n  |]\n  onStateChange\n  icon={\n    <span class="hljs-type">Icon</span>.<span class="hljs-type">Element</span>(\n      <span class="hljs-type">Icon</span>.renderIcon((props: <span class="hljs-type">Icon</span>.iconProps) =&gt;\n        &lt;<span class="hljs-type">RNIcons</span>.<span class="hljs-type">MaterialIcons</span>\n          name=`_add\n          size={props.size}\n        /&gt;\n      ),\n    )\n  }\n/&gt;</code></pre></div>\n<h2 id="try-it-out"><a href="#try-it-out" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Try it out</h2>\n<p>Run the <a href="https://expo.io/@trensik/bs-react-native-paper-example">example app</a> with <a href="https://expo.io/">Expo</a> to see it in action.</p>\n<p>The source code for the examples are under the <a href="/example">/example</a> folder.</p>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<p>We do not have dedicated documentation for this library, but you can check example usage of components in our example app. It is located in /example directory. Components\' api in most cases is very similar or the same as in <a href="https://github.com/callstack/react-native-paper">react-native-paper</a>, but there are cases where we had to implement props differently, so if you encounter problems I would suggest to check the source code of particular binding.</p>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<p>Read the <a href="/CONTRIBUTING.md">contribution guidelines</a> before contributing.</p>\n<!-- badges -->\n',homepageUrl:"https://github.com/callstackincubator/bs-react-native-paper",repositoryUrl:"https://github.com/callstackincubator/bs-react-native-paper",npmUrl:"https://www.npmjs.com/package/bs-react-native-paper",issuesUrl:"https://github.com/callstackincubator/bs-react-native-paper/issues",slug:"/package/bs-react-native-paper"}},pathContext:{id:"bs-react-native-paper"}}}});
//# sourceMappingURL=path---package-bs-react-native-paper-e35e8d732fe3d0504df3.js.map