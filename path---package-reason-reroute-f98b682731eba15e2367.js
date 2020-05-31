webpackJsonp([0x6e2dade8cbdd],{1388:function(s,a){s.exports={data:{package:{type:"published",id:"reason-reroute",name:"reason-reroute",version:"0.0.4",category:"library",flags:[],platforms:["browser"],description:"Tiny wrapper around ReasonReact.Router",keywords:["react","routing"],license:"MIT",updated:"2020-05-06T23:38:33.171Z",stars:120,score:.20424425362443385,quality:.4115675145994061,popularity:.06867238070723532,maintenance:.1621104742773705,readme:'<h1 id="reroute"><a href="#reroute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reroute</h1>\n<blockquote>\n<p>a fast, declarative microrouter for reason-react</p>\n</blockquote>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting started</h2>\n<h3 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h3>\n<p>Open a Terminal in your project\'s folder and run,</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ yarn add reason-reroute</code></pre></div>\n<p>After installation, you will need to add this library to your <code>bsconfig.json</code> dependencies</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"reason-react"</span>,\n  <span class="hljs-string">"reason-reroute"</span>\n],</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">RouterConfig</span> = </span>{\n  <span class="hljs-keyword">type</span> route =\n    | <span class="hljs-type">Admin</span>\n    | <span class="hljs-type">Home</span>;\n  <span class="hljs-keyword">let</span> routeFromUrl = (url: <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">Router</span>.url) =&gt;\n    <span class="hljs-keyword">switch</span> url.path {\n    | [<span class="hljs-string">"admin"</span>] =&gt; <span class="hljs-type">Admin</span>\n    | [] =&gt; <span class="hljs-type">Home</span>\n    };\n  <span class="hljs-keyword">let</span> routeToUrl = (route: route) =&gt;\n    <span class="hljs-keyword">switch</span> route {\n    | <span class="hljs-type">Admin</span> =&gt; <span class="hljs-string">"/admin"</span>\n    | <span class="hljs-type">Home</span> =&gt; <span class="hljs-string">"/"</span>\n    };\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Router</span> = <span class="hljs-title">ReRoute</span>.<span class="hljs-title">CreateRouter</span>(<span class="hljs-title">RouterConfig</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">component</span> = <span class="hljs-title">ReasonReact</span>.<span class="hljs-title">statelessComponent</span>("<span class="hljs-title">App</span>");\n\n<span class="hljs-title">let</span> <span class="hljs-title">make</span> = <span class="hljs-title">_children</span> =&gt; </span>{\n  ...component,\n  render: _self =&gt;\n    &lt;<span class="hljs-type">Router</span>.<span class="hljs-type">Container</span>&gt;\n      ...(\n           (~currentRoute) =&gt;\n             <span class="hljs-keyword">switch</span> currentRoute {\n             | <span class="hljs-type">RouterConfig</span>.<span class="hljs-type">Admin</span> =&gt; &lt;<span class="hljs-type">Admin</span> /&gt;\n             | <span class="hljs-type">RouterConfig</span>.<span class="hljs-type">Home</span> =&gt; &lt;<span class="hljs-type">Home</span> /&gt;\n             }\n         )\n    &lt;/<span class="hljs-type">Router</span>.<span class="hljs-type">Container</span>&gt;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">RouterConfig</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">type</span> route =\n      | <span class="hljs-type">Admin</span>\n      | <span class="hljs-type">Home</span>\n    <span class="hljs-keyword">let</span> routeFromUrl (url : <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">Router</span>.url) =\n      <span class="hljs-keyword">match</span> url.path <span class="hljs-keyword">with</span> | <span class="hljs-string">"admin"</span>::<span class="hljs-literal">[]</span> -&gt; <span class="hljs-type">Admin</span> | <span class="hljs-literal">[]</span> -&gt; <span class="hljs-type">Home</span>\n    <span class="hljs-keyword">let</span> routeToUrl (route : route) =\n      <span class="hljs-keyword">match</span> route <span class="hljs-keyword">with</span> | <span class="hljs-type">Admin</span>  -&gt; <span class="hljs-string">"/admin"</span> | <span class="hljs-type">Home</span>  -&gt; <span class="hljs-string">"/"</span>\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">module</span> <span class="hljs-type">Router</span> = <span class="hljs-type">ReRoute</span>.<span class="hljs-type">CreateRouter</span>(<span class="hljs-type">RouterConfig</span>)\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"App"</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((<span class="hljs-type">Router</span>.<span class="hljs-type">Container</span>.createElement\n             ~children:(<span class="hljs-keyword">fun</span> ~currentRoute  -&gt;\n                          <span class="hljs-keyword">match</span> currentRoute <span class="hljs-keyword">with</span>\n                          | <span class="hljs-type">RouterConfig</span>.<span class="hljs-type">Admin</span>  -&gt;\n                              ((<span class="hljs-type">Admin</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])\n                          | <span class="hljs-type">RouterConfig</span>.<span class="hljs-type">Home</span>  -&gt;\n                              ((<span class="hljs-type">Home</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n             <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<h2 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h2>\n<p>Sections below are under construction.</p>\n<h3 id="link"><a href="#link" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Link</h3>\n<h3 id="container"><a href="#container" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Container</h3>\n<h2 id="rationale"><a href="#rationale" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rationale</h2>\n<h2 id="credits"><a href="#credits" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Credits</h2>\n<p>The concept of <code>reroute</code> has been highly influenced by <a href="https://github.com/thangngoc89">@thangngoc89</a> and his <a href="https://gist.github.com/thangngoc89/c9162c0263df5427fe9a36fc7f94ac94">reference implementation</a>. Thank you for pushing this forward!  </p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT (c) 2018 Callstack</p>\n',homepageUrl:"https://github.com/callstack/reroute#readme",repositoryUrl:"https://github.com/callstack/reroute",npmUrl:"https://www.npmjs.com/package/reason-reroute",issuesUrl:"https://github.com/callstack/reroute/issues",slug:"/package/reason-reroute"}},pathContext:{id:"reason-reroute"}}}});
//# sourceMappingURL=path---package-reason-reroute-f98b682731eba15e2367.js.map