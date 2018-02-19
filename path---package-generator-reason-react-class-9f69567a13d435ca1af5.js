webpackJsonp([0x75b31606b7e5],{1126:function(e,a){e.exports={data:{package:{id:"generator-reason-react-class",stars:0,name:"generator-reason-react-class",version:"1.0.1",category:"tool",flags:[],platforms:["node"],description:"Generates a Reason-React class",keywords:["code generation"],license:"MIT",updated:"2018-02-12T10:58:08.834Z",type:"published",score:.6163862517057146,quality:.8674280580895968,popularity:.017797615528235274,maintenance:.9997961966970094,readme:'<h1 id="generator-reason-react-class-npm-version-build-status-dependency-status"><a href="#generator-reason-react-class-npm-version-build-status-dependency-status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>generator-reason-react-class <a href="https://npmjs.org/package/generator-reason-react-class"><img src="https://badge.fury.io/js/generator-reason-react-class.svg" alt="NPM version"></a> <a href="https://travis-ci.org/ryb73/generator-reason-react-class"><img src="https://travis-ci.org/ryb73/generator-reason-react-class.svg?branch=master" alt="Build Status"></a> <a href="https://david-dm.org/ryb73/generator-reason-react-class"><img src="https://david-dm.org/ryb73/generator-reason-react-class.svg?theme=shields.io" alt="Dependency Status"></a></h1>\n<blockquote>\n<p>Generates a Reason-React class</p>\n</blockquote>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>First, install <a href="http://yeoman.io">Yeoman</a> and generator-reason-react-class using <a href="https://www.npmjs.com/">npm</a> (we assume you have pre-installed <a href="https://nodejs.org/">node.js</a>).</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install -g yo\nnpm install -g generator-reason-react-class</code></pre></div>\n<p>Then generate your new project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>yo reason-react-class</code></pre></div>\n<h2 id="getting-to-know-yeoman"><a href="#getting-to-know-yeoman" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting To Know Yeoman</h2>\n<ul>\n<li>Yeoman has a heart of gold.</li>\n<li>Yeoman is a person with feelings and opinions, but is very easy to work with.</li>\n<li>Yeoman can be too opinionated at times but is easily convinced not to be.</li>\n<li>Feel free to <a href="http://yeoman.io/">learn more about Yeoman</a>.</li>\n</ul>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT © <a href="">Ryan Biwer</a></p>\n',homepageUrl:"https://github.com/ryb73/generator-reason-react-class",repositoryUrl:"https://github.com/ryb73/generator-reason-react-class",npmUrl:"https://www.npmjs.com/package/generator-reason-react-class",issuesUrl:"https://github.com/ryb73/generator-reason-react-class/issues",slug:"/package/generator-reason-react-class"}},pathContext:{id:"generator-reason-react-class"}}}});
//# sourceMappingURL=path---package-generator-reason-react-class-9f69567a13d435ca1af5.js.map