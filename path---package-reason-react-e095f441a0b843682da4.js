webpackJsonp([0xd3e513b57936],{1386:function(e,a){e.exports={data:{package:{type:"published",id:"reason-react",name:"reason-react",version:"0.8.0",category:"binding",flags:[],platforms:["browser","node"],description:"React bindings for Reason",keywords:["state management","react","virtual dom"],license:"MIT",updated:"2020-05-08T03:34:51.088Z",stars:2789,score:.568104447567117,quality:.7564516030373712,popularity:.30810180949306376,maintenance:.6666666666666666,readme:'<h1 id="reasonreact---reasonml--bucklescript-bindings-for-reactjs"><a href="#reasonreact---reasonml--bucklescript-bindings-for-reactjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://reasonml.github.io/reason-react/">ReasonReact</a> - ReasonML / BuckleScript bindings for React.js</h1>\n<p><a href="https://www.npmjs.com/package/reason-react"><img src="https://badge.fury.io/js/reason-react.svg" alt="npm version"></a>\n<img src="https://img.shields.io/npm/dt/reason-react" alt="npm">\n<a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome"></a>\n<img src="https://img.shields.io/github/contributors/reasonml/reason-react" alt="contributors">\n<a href="https://discord.gg/reasonml"><img src="https://img.shields.io/discord/235176658175262720.svg?logo=discord&#x26;colorb=blue" alt="discord"></a>\n<a href="https://twitter.com/reasonml"><img src="https://img.shields.io/twitter/follow/reasonml?style=social" alt="twitter"></a></p>\n<p>ReasonReact is a safer, simpler way to build React components. You get a great type system with an even better developer experience. Why choose ReasonReact? Read more <a href="https://reasonml.github.io/reason-react/docs/en/what-and-why">here</a></p>\n<p>ReasonReact is just React.js under the hood. This makes it super easy to integrate with your current Next.js, Create React App, JavaScript, Flowtype or TypeScript project. Learn more about getting started <a href="https://reasonml.github.io/reason-react/docs/en/installation#adding-reason-to-an-existing-reactjs-project-create-react-app-nextjs-etc">here</a></p>\n<blockquote>\n<p>Watch Ricky Vetter\'s Reason Conf talk, <a href="https://www.youtube.com/watch?v=i9Kr9wuz24g">"Why React is Just Better in Reason"</a> to learn more about how Facebook &#x26; Messenger are using ReasonReact</p>\n<p>Watch Jordan Walke\'s Reason Conf talk,  <a href="https://www.youtube.com/watch?v=5fG_lyNuEAw">"React to the Future"</a> to learn more about the future of ReasonML and React</p>\n</blockquote>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Greeting.re */</span>\n\n[@react.component]\n<span class="hljs-keyword">let</span> make = (~name) =&gt; &lt;h1&gt; {<span class="hljs-type">React</span>.string(<span class="hljs-string">"Hello "</span> ++ name)} &lt;/h1&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> make ~name  = ((h1 ~children:[<span class="hljs-type">React</span>.<span class="hljs-built_in">string</span> (<span class="hljs-string">"Hello "</span> ^ name)] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])\n  [@@react.component ]</code></pre>\n      </div>\n    </div>\n  \n<p>See all of our examples <a href="https://reasonml.github.io/reason-react/docs/en/simple">here</a>. For a full application, check out <a href="https://github.com/reasonml-community/reason-react-hacker-news">reason-react-hacker-news</a>.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p><a href="http://bucklescript.github.io/">BuckleScript</a> is how your ReasonML code gets compiled to Javascript. Every project that uses BuckleScript will have a <code>bsconfig.json</code> file (the same way you\'d have tsconfig.json in a Typescript project) with project specific settings.</p>\n<p>You can install BuckleScript globally or keep it project specific by adding it as a <code>devDependency</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn global add bs-platform\n\n<span class="hljs-comment"># or npm</span>\nnpm install --global bs-platform</code></pre></div>\n<p>If you install BuckleScript globally, you can quickly generate a ReasonReact project template (similar to <code>create-react-app</code>):</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>bsb -init my-react-app -theme react-hooks\n<span class="hljs-built_in">cd</span> my-react-app &amp;&amp; npm install &amp;&amp; npm start\n\n<span class="hljs-comment"># in another tab</span>\nnpm run server</code></pre></div>\n<p>If you\'re interested in adding ReasonReact to your current project, it\'s a simple 2 step process:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-platform --dev --exact\n\n<span class="hljs-comment"># or npm</span>\nnpm install bs-platform -D -S</code></pre></div>\n<p>Add the appropriate script tags to package.json:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"scripts"</span>: {\n  <span class="hljs-string">"re:build"</span>: <span class="hljs-string">"bsb -make-world -clean-world"</span>,\n  <span class="hljs-string">"re:watch"</span>: <span class="hljs-string">"bsb -make-world -clean-world -w"</span>\n}</code></pre></div>\n<p>Copy the <code>bsconfig.json</code> file from our docs located <a href="https://reasonml.github.io/reason-react/docs/en/installation#adding-reason-to-an-existing-reactjs-project-create-react-app-nextjs-etc">here</a></p>\n<p>Then add some files somewhere (don\'t forget to change <code>bsconfig.json</code>, if needed).</p>\n<h2 id="using-your-favorite-javascript-libraries"><a href="#using-your-favorite-javascript-libraries" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using Your Favorite Javascript Libraries</h2>\n<p>The same way that TypeScript has <code>type annotations</code>, we have <code>bindings</code>. Bindings are libraries that allow you to import a popular project (like lodash) or to import your own local file. ReasonReact is in fact an example of a binding!</p>\n<h2 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h2>\n<p>See <a href="https://reasonml.github.io/reason-react">https://reasonml.github.io/reason-react</a></p>\n<h2 id="contribute"><a href="#contribute" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contribute</h2>\n<p>We welcome all contributors! Anything from docs to issues to pull requests. Please help us :smile:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>git <span class="hljs-built_in">clone</span> https://github.com/reasonml/reason-react.git\n<span class="hljs-built_in">cd</span> reason-react\nnpm install\nnpm start</code></pre></div>\n<p>See the README inside <code>src</code> for more info!</p>\n<h2 id="editor-support"><a href="#editor-support" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editor Support</h2>\n<p>Looking for syntax highlighting for your favorite editor? Check out <a href="https://reasonml.github.io/docs/en/editor-plugins">ReasonML Editor Plugins</a></p>\n<h2 id="friends-of-reasonreact"><a href="#friends-of-reasonreact" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Friends of ReasonReact</h2>\n<ul>\n<li><a href="https://github.com/cristianoc/genType">genType</a> - genType automatically generates bindings for your TypeScript / vanilla JS code.</li>\n<li><a href="https://github.com/reason-react-native/reason-react-native">reason-react-native</a> - ReasonML / Bucklescript bindings for React Native. Allows you to use Reason to build an iOS, Android or Web app!</li>\n<li><a href="https://reasonml.org/">reasonml.org</a> - An effort by the Reason Association to improve documentation for ReasonML &#x26; BuckleScript</li>\n<li><a href="https://redex.github.io/">redex.github.io</a> - Find bindings for your favorite libraries here</li>\n<li><a href="https://anchor.fm/reason-town">ReasonTown Podcast</a> - ReasonML Podcast</li>\n<li><a href="https://www.youtube.com/channel/UCtFP_Hn5nIbZY4Xi47qfHhw/videos">ReasonConf Youtube</a> Reason Conf on Youtube</li>\n</ul>\n',homepageUrl:"https://reasonml.github.io/reason-react/",repositoryUrl:"https://github.com/reasonml/reason-react",npmUrl:"https://www.npmjs.com/package/reason-react",issuesUrl:"https://github.com/reasonml/reason-react/issues",slug:"/package/reason-react"}},pathContext:{id:"reason-react"}}}});
//# sourceMappingURL=path---package-reason-react-e095f441a0b843682da4.js.map