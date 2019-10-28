webpackJsonp([73424874176229],{1231:function(e,s){e.exports={data:{package:{type:"published",id:"bs-music-theory",name:"bs-music-theory",version:"0.1.0",category:"library",flags:[],platforms:["browser","node"],description:"A port of the Swift MusicTheory library",keywords:["music"],license:"LGPL-3.0",updated:"2019-08-11T07:58:24.892Z",stars:2,score:.6035648561985887,quality:.8259597558151694,popularity:.022951812429505,maintenance:.9935537002963175,readme:'<h1 id="bs-music-theory--circleci"><a href="#bs-music-theory--circleci" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-music-theory  <a href="https://circleci.com/gh/mattmarcello/bs-music-theory"><img src="https://circleci.com/gh/mattmarcello/bs-music-theory.svg?style=svg" alt="CircleCI"></a></h1>\n<p>This is basically a straight port of <a href="https://github.com/cemolcay/MusicTheory">this</a> library.  It is a collection of data structures that represent musical entities, such as <code>Key</code>, <code>Pitch</code>, <code>Interval</code>, <code>Scale</code>, and <code>Chord</code>.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-music-theory</code></pre></div>\n<p>Then add bs-music-theory to bs-dependencies in your bsconfig.json:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>{\n  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-music-theory"</span>]\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>Look <a href="https://github.com/cemolcay/MusicTheory">here</a>.</p>\n<p>Additional documentation forthcoming.  </p>\n<p><a href="https://github.com/mattmarcello/bs-music-theory-examples">Here</a> is a repo.  I will attempt to provide some usage examples.</p>\n<h2 id="tests"><a href="#tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tests</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn run <span class="hljs-built_in">test</span></code></pre></div>\n',homepageUrl:"https://github.com/mattmarcello/bs-music-theory",repositoryUrl:"https://github.com/mattmarcello/bs-music-theory",npmUrl:"https://www.npmjs.com/package/bs-music-theory",issuesUrl:"https://github.com/mattmarcello/bs-music-theory/issues",slug:"/package/bs-music-theory"}},pathContext:{id:"bs-music-theory"}}}});
//# sourceMappingURL=path---package-bs-music-theory-948c6f7ce1bdbcf760ce.js.map