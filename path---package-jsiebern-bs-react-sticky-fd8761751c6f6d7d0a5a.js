webpackJsonp([0x88ec85bb423a],{1262:function(s,e){s.exports={data:{package:{type:"published",id:"@jsiebern/bs-react-sticky",name:"@jsiebern/bs-react-sticky",version:"1.0.0",category:"binding",flags:[],platforms:["browser"],description:"Reason bindings for the react-sticky package",keywords:["react","utilities","ui"],license:"MIT",updated:"2019-03-14T15:38:44.269Z",stars:0,score:.40477338802265495,quality:.5229174569017371,popularity:.02380092863088925,maintenance:.6844795026609216,readme:'<h1 id="reason-bindings-for-react-sticky"><a href="#reason-bindings-for-react-sticky" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason bindings for react-sticky</h1>\n<p>This library provides Reason bindings for\n<a href="https://github.com/captivationsoftware/react-sticky">react-sticky</a>.</p>\n<p><em>These bindings should be complete and working, I use them in production without problems. If, however, you encounter any problems, feel free to open an issue.</em></p>\n<h2 id="installation-for-your-reason-project"><a href="#installation-for-your-reason-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation (for your Reason project)</h2>\n<p>Run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add react-sticky @jsiebern/bs-react-sticky</code></pre></div>\n<p>to add the library to your project dependencies. And add <code>@jsiebern/bs-react-sticky</code> to the <code>bs-dependencies</code> node of your <code>bsconfig.json</code>.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p><a href="https://github.com/jsiebern/bs-react-sticky/blob/master/examples/Example.re">See this link for the full example.</a></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"App"</span>);\n\n<span class="hljs-keyword">let</span> make = _children =&gt; {\n  ...component,\n  render: _self =&gt;\n    &lt;<span class="hljs-type">ReactSticky</span>.<span class="hljs-type">StickyContainer</span>&gt;\n      &lt;<span class="hljs-type">ReactSticky</span>.<span class="hljs-type">Sticky</span>&gt;\n        ...(\n             stickyProps =&gt;\n               <span class="hljs-type">ReactSticky</span>.<span class="hljs-type">Sticky</span>.<span class="hljs-type">RenderProps</span>.(\n                 &lt;div style=(stickyProps |. style)&gt;\n                   ((stickyProps |. isSticky ? <span class="hljs-string">"Moving"</span> : <span class="hljs-string">"Not Moving"</span>) |. <span class="hljs-type">ReasonReact</span>.string)\n                 &lt;/div&gt;\n               )\n           )\n      &lt;/<span class="hljs-type">ReactSticky</span>.<span class="hljs-type">Sticky</span>&gt;\n    &lt;/<span class="hljs-type">ReactSticky</span>.<span class="hljs-type">StickyContainer</span>&gt;,\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"App"</span>\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((<span class="hljs-type">ReactSticky</span>.<span class="hljs-type">StickyContainer</span>.createElement\n             ~children:[((<span class="hljs-type">ReactSticky</span>.<span class="hljs-type">Sticky</span>.createElement\n                            ~children:(<span class="hljs-keyword">fun</span> stickyProps  -&gt;\n                                         <span class="hljs-keyword">let</span> <span class="hljs-keyword">open</span> <span class="hljs-type">ReactSticky</span>.<span class="hljs-type">Sticky</span>.<span class="hljs-type">RenderProps</span> <span class="hljs-keyword">in</span>\n                                           ((div\n                                               ~style:(stickyProps |. style)\n                                               ~children:[(<span class="hljs-keyword">match</span> stickyProps\n                                                                   |.\n                                                                   isSticky\n                                                           <span class="hljs-keyword">with</span>\n                                                           | <span class="hljs-literal">true</span>  -&gt;\n                                                               <span class="hljs-string">"Moving"</span>\n                                                           | <span class="hljs-literal">false</span>  -&gt;\n                                                               <span class="hljs-string">"Not Moving"</span>)\n                                                            |.\n                                                            <span class="hljs-type">ReasonReact</span>.<span class="hljs-built_in">string</span>]\n                                               <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])) <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n         [@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n<p><strong>Important</strong>: The bindings use an <a href="https://bucklescript.github.io/docs/en/generate-converters-accessors.html#abstract-type">abstract object type</a>, so the easiest thing to access the <code>stickyProps</code> is to open <code>ReactSticky.Sticky.RenderProps</code> and then access the render functions props by the chain operator (e.g. <code>stickyProps |. isSticky</code>).</p>\n',homepageUrl:"https://github.com/jsiebern/bs-react-sticky",repositoryUrl:"https://github.com/jsiebern/bs-react-sticky",npmUrl:"https://www.npmjs.com/package/%40jsiebern%2Fbs-react-sticky",issuesUrl:"https://github.com/jsiebern/bs-react-sticky/issues",slug:"/package/@jsiebern/bs-react-sticky"}},pathContext:{id:"@jsiebern/bs-react-sticky"}}}});
//# sourceMappingURL=path---package-jsiebern-bs-react-sticky-fd8761751c6f6d7d0a5a.js.map