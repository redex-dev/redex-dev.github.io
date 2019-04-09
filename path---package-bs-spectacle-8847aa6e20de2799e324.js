webpackJsonp([0xf6a4162768a8],{1248:function(s,e){s.exports={data:{package:{type:"published",id:"bs-spectacle",name:"bs-spectacle",version:"1.0.2",category:"binding",flags:[],platforms:["browser"],description:"Spectacle bindings for Bucklescript",keywords:["react","presentation"],license:"MIT",updated:"2019-03-16T10:42:19.938Z",stars:14,score:.6488274035176759,quality:.9471424236896059,popularity:.04208842907871232,maintenance:.9998677892378423,readme:'<h1 id="bs-spectacle"><a href="#bs-spectacle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-spectacle</h1>\n<h2 id="bucklescript-bindings-for-spectacle"><a href="#bucklescript-bindings-for-spectacle" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://github.com/bucklescript/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/FormidableLabs/spectacle">Spectacle</a></h2>\n<p><a href="https://www.npmjs.com/package/bs-spectacle"><img src="https://img.shields.io/npm/v/bs-spectacle.svg?style=flat-square" alt="npm (scoped)"></a>\n<img src="https://img.shields.io/circleci/project/github/piotrdubiel/bs-spectacle.svg" alt="CircleCI"></p>\n<hr>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>See <code>examples/full-spectacle</code>. It uses <em>almost</em> all features of <strong>Spectacle</strong>.</p>\n<p><code>examples/extras</code> aims to showcase features not included in original Spectacle example.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsSpectacle</span>;\n\n<span class="hljs-keyword">let</span> theme =\n  <span class="hljs-type">Theme</span>.(\n    createTheme(\n      {primary: <span class="hljs-string">"#26A0D1"</span>, secondary: <span class="hljs-string">"white"</span>, tertiary: <span class="hljs-string">"#505050"</span>, quarternary: <span class="hljs-string">"white"</span>},\n      {\n        primary: {name: <span class="hljs-string">"Merriweather"</span>, googleFont: <span class="hljs-literal">true</span>, styles: [|<span class="hljs-string">"300"</span>|]},\n        secondary: {name: <span class="hljs-string">"Roboto"</span>, googleFont: <span class="hljs-literal">true</span>, styles: [|<span class="hljs-string">"100"</span>|]},\n        tertiary: simpleFont(<span class="hljs-string">"monospace"</span>)\n      }\n    )\n  );\n\n<span class="hljs-keyword">let</span> s = <span class="hljs-type">ReasonReact</span>.stringToElement;\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"Simple"</span>);\n\n<span class="hljs-keyword">let</span> make = (_children) =&gt; {\n  ...component,\n  render: (_self) =&gt;\n    &lt;<span class="hljs-type">Deck</span> transition=[|<span class="hljs-type">Zoom</span>, <span class="hljs-type">Slide</span>|] theme&gt;\n      &lt;<span class="hljs-type">Slide</span>&gt;\n        &lt;<span class="hljs-type">Heading</span> textColor=<span class="hljs-string">"secondary"</span> textFont=<span class="hljs-string">"secondary"</span>&gt; (s(<span class="hljs-string">"Hello, world"</span>)) &lt;/<span class="hljs-type">Heading</span>&gt;\n      &lt;/<span class="hljs-type">Slide</span>&gt;\n      &lt;<span class="hljs-type">Slide</span> transition=[|<span class="hljs-type">Slide</span>|] bgColor=<span class="hljs-string">"secondary"</span>&gt;\n        &lt;<span class="hljs-type">BlockQuote</span>&gt;\n          &lt;<span class="hljs-type">Quote</span>&gt; (s({js|<span class="hljs-type">It</span>’s easy, see...|js})) &lt;/<span class="hljs-type">Quote</span>&gt;\n          &lt;<span class="hljs-type">Cite</span>&gt; (s(<span class="hljs-string">"Unknown"</span>)) &lt;/<span class="hljs-type">Cite</span>&gt;\n        &lt;/<span class="hljs-type">BlockQuote</span>&gt;\n      &lt;/<span class="hljs-type">Slide</span>&gt;\n    &lt;/<span class="hljs-type">Deck</span>&gt;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsSpectacle</span>\n<span class="hljs-keyword">let</span> theme =\n  <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">Theme</span> <span class="hljs-keyword">in</span>\n    createTheme\n      {\n        primary = <span class="hljs-string">"#26A0D1"</span>;\n        secondary = <span class="hljs-string">"white"</span>;\n        tertiary = <span class="hljs-string">"#505050"</span>;\n        quarternary = <span class="hljs-string">"white"</span>\n      }\n      {\n        primary =\n          { name = <span class="hljs-string">"Merriweather"</span>; googleFont = <span class="hljs-literal">true</span>; styles = [|<span class="hljs-string">"300"</span>|] };\n        secondary =\n          { name = <span class="hljs-string">"Roboto"</span>; googleFont = <span class="hljs-literal">true</span>; styles = [|<span class="hljs-string">"100"</span>|] };\n        tertiary = (simpleFont <span class="hljs-string">"monospace"</span>)\n      }\n<span class="hljs-keyword">let</span> s = <span class="hljs-type">ReasonReact</span>.stringToElement\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"Simple"</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((<span class="hljs-type">Deck</span>.createElement ~transition:[|<span class="hljs-type">Zoom</span>;<span class="hljs-type">Slide</span>|] ~theme\n             ~children:[((<span class="hljs-type">Slide</span>.createElement\n                            ~children:[((<span class="hljs-type">Heading</span>.createElement\n                                           ~textColor:<span class="hljs-string">"secondary"</span>\n                                           ~textFont:<span class="hljs-string">"secondary"</span>\n                                           ~children:[s <span class="hljs-string">"Hello, world"</span>] <span class="hljs-literal">()</span>)\n                                      [@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                       ((<span class="hljs-type">Slide</span>.createElement ~transition:[|<span class="hljs-type">Slide</span>|]\n                           ~bgColor:<span class="hljs-string">"secondary"</span>\n                           ~children:[((<span class="hljs-type">BlockQuote</span>.createElement\n                                          ~children:[((<span class="hljs-type">Quote</span>.createElement\n                                                         ~children:[s\n                                                                    {js|<span class="hljs-type">It</span>’s easy, see...|js}]\n                                                         <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]);\n                                                    ((<span class="hljs-type">Cite</span>.createElement\n                                                        ~children:[s\n                                                                    <span class="hljs-string">"Unknown"</span>]\n                                                        <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n                                     [@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Easiest way is:</p>\n<ol>\n<li>\n<p>use <code>create-react-app</code></p>\n</li>\n<li>\n<p>install this bindings and spectacle</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ npm install --save bs-spectacle spectacle-scripts reason-react\n<span class="hljs-comment"># or</span>\n$ yarn add bs-spectacle spectacle-scripts reason-react</code></pre></div>\n</li>\n<li>\n<p>add <code>bs-spectacle</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n...\n<span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-spectacle"</span>]\n}</code></pre></div>\n</li>\n<li>\n<p>modify <code>package.json</code> scripts</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"scripts"</span>: {\n    <span class="hljs-string">"build"</span>: <span class="hljs-string">"bsb -make-world &amp;&amp; react-scripts build"</span>,\n    <span class="hljs-string">"start"</span>: <span class="hljs-string">"bsb -make-world -w"</span>,\n    <span class="hljs-string">"clean"</span>: <span class="hljs-string">"bsb -clean-world"</span>,\n    <span class="hljs-string">"test"</span>: <span class="hljs-string">"echo \\"Error: no test specified\\" &amp;&amp; exit 1"</span>\n}</code></pre></div>\n</li>\n</ol>\n<p>To run it in dev mode, run <code>npm start</code> in one shell and <code>react-scripts start</code> in another shell.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>Every <code>spectacle</code> feature is supported.</p>\n<h3 id="components"><a href="#components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Components</h3>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Deck</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Slide (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Notes</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Layout</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Fit</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Fill</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Markdown</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Magic</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Appear</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> BlockQuote, Quote and Cite (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> CodePane (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Code (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> ComponentPlayground</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> GoToAction (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Heading (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Image (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Link (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> List &#x26; ListItem (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> S (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Table, TableRow, TableBody, TableHeader, TableHeaderItem and TableItem (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Text (Base)</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Typeface</li>\n</ul>\n<h3 id="apis"><a href="#apis" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>APIs</h3>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Theme</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Transition Function</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> MarkdownSlides</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Preloader</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> History</li>\n</ul>\n',homepageUrl:"https://github.com/piotrdubiel/bs-spectacle#readme",repositoryUrl:"https://github.com/piotrdubiel/bs-spectacle",npmUrl:"https://www.npmjs.com/package/bs-spectacle",issuesUrl:"https://github.com/piotrdubiel/bs-spectacle/issues",slug:"/package/bs-spectacle"}},pathContext:{id:"bs-spectacle"}}}});
//# sourceMappingURL=path---package-bs-spectacle-8847aa6e20de2799e324.js.map