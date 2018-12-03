webpackJsonp([0x9e492a993eef],{1220:function(e,a){e.exports={data:{package:{type:"published",id:"generator-reasonable-node",name:"generator-reasonable-node",version:"0.0.2",category:"tool",flags:["neglected"],platforms:["node"],description:"A generator for Yeoman, with node, express, handlebars, and bootstrap.",keywords:["code generation"],license:"MIT",updated:"2018-10-15T17:01:43.718Z",stars:0,score:.40578930181644274,quality:.7515102431180326,popularity:.01951987974818857,maintenance:.4957264884833342,readme:'<h1 id="generator-reasonable-node-build-status"><a href="#generator-reasonable-node-build-status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>generator-reasonable-node <a href="https://travis-ci.org/jfrazelle/generator-reasonable-node"><img src="https://secure.travis-ci.org/glamp/generator-reasonable-node.png?branch=master" alt="Build Status"></a></h1>\n<p>A generator for <a href="http://yeoman.io">Yeoman</a>.</p>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<h3 id="what-is-yeoman"><a href="#what-is-yeoman" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is Yeoman?</h3>\n<p>Trick question. It\'s not a thing. It\'s this guy:</p>\n<p><img src="http://i.imgur.com/JHaAlBJ.png"></p>\n<p>Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.</p>\n<p>Not every new computer comes with a Yeoman pre-installed. He lives in the <a href="https://npmjs.org">npm</a> package repository. You only have to ask for him once, then he packs up and moves into your hard drive. <em>Make sure you clean up, he likes new and shiny things.</em></p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ npm install -g yo</code></pre></div>\n<h3 id="yeoman-generators"><a href="#yeoman-generators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Yeoman Generators</h3>\n<p>Yeoman travels light. He didn\'t pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.</p>\n<p>To install generator-reasonable-node from npm, run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ npm install -g generator-reasonable-node</code></pre></div>\n<p>Finally, initiate the generator:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ yo xbars</code></pre></div>\n<h3 id="getting-to-know-yeoman"><a href="#getting-to-know-yeoman" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting To Know Yeoman</h3>\n<p>Yeoman has a heart of gold. He\'s a person with feelings and opinions, but he\'s very easy to work with. If you think he\'s too opinionated, he can be easily convinced.</p>\n<p>If you\'d like to get to know Yeoman better and meet some of his friends, <a href="http://gruntjs.com">Grunt</a> and <a href="http://bower.io">Bower</a>, check out the complete <a href="https://github.com/yeoman/yeoman/wiki/Getting-Started">Getting Started Guide</a>.</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p><a href="http://en.wikipedia.org/wiki/MIT_License">MIT License</a></p>\n',homepageUrl:"https://github.com/glamp/generator-reasonable-node",repositoryUrl:"https://github.com/glamp/generator-reasonable-node",npmUrl:"https://www.npmjs.com/package/generator-reasonable-node",issuesUrl:"https://github.com/glamp/generator-reasonable-node/issues",slug:"/package/generator-reasonable-node"}},pathContext:{id:"generator-reasonable-node"}}}});
//# sourceMappingURL=path---package-generator-reasonable-node-0f2b912f5d8b2a1274c2.js.map