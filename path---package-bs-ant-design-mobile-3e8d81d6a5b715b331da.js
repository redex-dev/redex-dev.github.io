webpackJsonp([78693307344613],{1105:function(e,n){e.exports={data:{package:{type:"published",id:"bs-ant-design-mobile",name:"bs-ant-design-mobile",version:"1.0.4",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript bindings for Ant Design Mobile",keywords:["react","ui"],license:"MIT",updated:"2018-11-14T04:12:17.898Z",stars:0,score:.5036181417345853,quality:.5228544226357399,popularity:.022947554139473327,maintenance:.9678004885572793,readme:'<h1 id="bs-ant-design-mobile"><a href="#bs-ant-design-mobile" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-ant-design-mobile</h1>\n<h2 id="introduction"><a href="#introduction" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introduction</h2>\n<p><strong> See <a href="https://github.com/thangngoc89/bs-ant-design">bs-ant-design</a> repo for original credit on this pattern. </strong></p>\n<p>Bucklescript + ReasonReact binding for <a href="https://mobile.ant.design">Ant Design Mobile</a> components. I write bindings when I needed them in my projects.\nIf you find a component is missing, it\'s because I don\'t need it (yet).</p>\n<p>Difference from <a href="https://github.com/tiensonqin/bs-antd">bs-antd</a> style of bindings: It uses the official recommended way for writing bindings and it doesn\'t work for me. Best explained this in this <a href="https://khoanguyen.me/writing-reason-react-bindings-the-right-way/">blog post</a></p>\n<p>Cautionary note that I am very new to bindings so confirmation and testing is necessary for anything you want to use as I only tested what I use.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ul>\n<li>With npm:</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save bs-ant-design-mobile</code></pre></div>\n<ul>\n<li>With yarn:</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-ant-design-mobile</code></pre></div>\n<ul>\n<li>Add <code>bs-ant-design-mobile</code> to <code>bs-dependencies</code> in <code>bsconfig.json</code>.</li>\n<li>You also need to set up your bundler to handle less files (This is a requirement from ant-design-mobile)</li>\n</ul>\n<p>For webpack, you can do this:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm install --save-dev less@^2.7.3 less-loader css-loader style-loader</code></pre></div>\n<p>(<code>less@^2.7.3</code> is the important bit)</p>\n<p>Now add this to your webpack config:</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code><span class="hljs-comment">// webpack.config.js</span>\n<span class="hljs-class"><span class="hljs-keyword">module</span>.<span class="hljs-title">exports</span> = </span>{\n    ...\n    <span class="hljs-class"><span class="hljs-keyword">module</span>: </span>{\n        rules: [{\n        test: /\\.less$/,\n        use: [<span class="hljs-string">"style-loader"</span>, <span class="hljs-string">"css-loader"</span>, <span class="hljs-string">"less-loader"</span>]\n    }]\n}\n};</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Please check <a href="https://mobile.ant.design/components">ant design\'s documentation for each component</a>.</p>\n<p>I tried to keep the API as close to the original JS API as possible.</p>\n<p>Some common patterns I tried to use:</p>\n<ul>\n<li>string enums -> polymorphic variants</li>\n<li>function argument accepts different types: GDATs or <code>%identity</code> hack.</li>\n</ul>\n<h2 id="components"><a href="#components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Components</h2>\n<p>I did the components I needed.  While I usually made an attempt to do all the params technically, I only tested the\nones I needed.  Assume you will need to test everything you want to use well.</p>\n<h2 id="contributions"><a href="#contributions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributions</h2>\n<p>All contributions are welcomed.  I intend to merge and release anything you push quickly.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LICENSE</h2>\n<p>MIT</p>\n',homepageUrl:"https://github.com/Enalmada/bs-ant-design-mobile#readme",repositoryUrl:"https://github.com/Enalmada/bs-ant-design-mobile",npmUrl:"https://www.npmjs.com/package/bs-ant-design-mobile",issuesUrl:"https://github.com/Enalmada/bs-ant-design-mobile/issues",slug:"/package/bs-ant-design-mobile"}},pathContext:{id:"bs-ant-design-mobile"}}}});
//# sourceMappingURL=path---package-bs-ant-design-mobile-3e8d81d6a5b715b331da.js.map