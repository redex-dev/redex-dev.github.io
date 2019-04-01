webpackJsonp([0x5f3b9ae85a6f],{1199:function(e,t){e.exports={data:{package:{type:"published",id:"bs-puppeteer",name:"bs-puppeteer",version:"0.12.0",category:"binding",flags:[],platforms:["node"],description:"Bucklescript bindings for Puppeteer (headless chrome browser) written in Reason",keywords:["development tools","platform api"],license:"MIT",updated:"2019-03-18T22:07:56.441Z",stars:35,score:.6290342182264783,quality:.8697717344703805,popularity:.05330079076685697,maintenance:.9984212031913267,readme:'<h1 id="bs-puppeteer"><a href="#bs-puppeteer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-puppeteer</h1>\n<p>BuckleScript bindings to\n<a href="https://github.com/GoogleChrome/puppeteer">Puppeteer</a>\n(the Headless Chrome Node API)\nwritten in <a href="https://reasonml.github.io">ReasonML</a>.\nThis allows programmatic control of an instance of the Chrome or Chromium browser\nfrom BuckleScript or Reason.</p>\n<p><a href="https://npmjs.org/package/bs-puppeteer"><img src="https://img.shields.io/npm/v/bs-puppeteer.svg" alt="NPM bs-puppeteer package"></a>\n<a href="https://travis-ci.org/zploskey/bs-puppeteer"><img src="https://travis-ci.org/zploskey/bs-puppeteer.svg?branch=master" alt="Travis build status"></a>\n<a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/zploskey/bs-puppeteer.svg" alt="Greenkeeper badge"></a></p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>These bindings are a work in progress.\nMost bindings for navigation and interaction with web pages have been implemented.\nThere may be some minor breaking changes as we refine the API.\nBindings to the page events API are planned for a future version.\nSee <a href="examples/">examples</a> and the <a href="__tests__/puppeteer_test.re">test suite</a>\nfor examples of usage.\nFeatures of the Puppeteer API are implemented as we need or get to them.\nWe do our best to track upstream API changes.\nIf you would like to add or fix some bindings, see <a href="#contributing">Contributing</a>.</p>\n<p>Changes are documented in <a href="HISTORY.md">HISTORY.md</a>.</p>\n<h2 id="creating-a-project-using-bs-puppeteer"><a href="#creating-a-project-using-bs-puppeteer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating a project using bs-puppeteer</h2>\n<p>Create a new BuckleScript project if you have not already:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>bsb -init my-project -theme basic-reason\n<span class="hljs-built_in">cd</span> my-project</code></pre></div>\n<p>See the\n<a href="https://bucklescript.github.io/docs/en/installation.html">BuckleScript documentation</a>\nfor more information about starting a project.</p>\n<p>Add bs-puppeteer as a dependency.\nThis will install the currently supported version of Puppeteer.</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn\nyarn add bs-puppeteer</code></pre></div>\n<p>Edit your <code>bsconfig.json</code> file to add <code>bs-puppeteer</code> to <code>bs-dependencies</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>  <span class="hljs-string">"bs-dependencies"</span> : [\n    <span class="hljs-string">"bs-puppeteer"</span>,\n  ],</code></pre></div>\n<p>Now run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn start</code></pre></div>\n<p>While the <code>start</code> command is running, it will attempt to recompile your code each time you save it.\nOne-off builds can be done with <code>yarn build</code>.</p>\n<p>The <code>BsPuppeteer</code> module should now be available in your source files.\nYou can launch a new browser instance using <code>BsPuppeteer.Puppeteer.launch()</code>.\nSee the <a href="examples/">examples</a> for a more detailed demonstration.</p>\n<p>For interacting with the DOM on pages you navigate to we recommend using\n<a href="https://github.com/reasonml-community/bs-webapi-incubator">bs-webapi</a>.</p>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<p>Contributions are welcome.\nGet started by cloning the respository and starting the compiler in watch mode.\nWe recommend using <a href="https://yarnpkg.com/">yarn</a>, but <code>npm</code> should also work.</p>\n<h3 id="basic-development-workflow"><a href="#basic-development-workflow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic development workflow</h3>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>git <span class="hljs-built_in">clone</span> https://github.com/zploskey/bs-puppeteer.git\n<span class="hljs-built_in">cd</span> bs-puppeteer\nyarn\nyarn start</code></pre></div>\n<p>Any changes should pass the test suite (<code>yarn test</code>).\nOne great way to contribute is by writing tests for features that don\'t yet have them.\nTests can be found in the <code>__tests__</code> directory.\nA git hook will automatically run <code>refmt</code> on your code and run the test suite each time you commit.</p>\n<h3 id="snapshot-diffs"><a href="#snapshot-diffs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Snapshot diffs</h3>\n<p>If you would like to see a diff of the compiled javascript code from your changes,\nyou can take a snapshot of the built JS you would like to compare to with our <code>snap</code>\nand <code>snap-diff</code> package commands.\nA typical workflow might look like this:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>git checkout master <span class="hljs-comment"># you may want to stash any changes with git stash</span>\nyarn snap <span class="hljs-comment"># snapshot the built JS to the snap/ directory</span>\n<span class="hljs-comment"># edit the code to make whatever changes</span>\nyarn snap-diff</code></pre></div>\n<p>This should rebuild and display <code>git diff --no-index</code> output comparing <code>lib/js</code> and <code>snap/js</code>.\nThis can be handy in making sure that the right code is being generated.</p>\n<h3 id="references"><a href="#references" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>References</h3>\n<p>Good references for contributing to this library are:</p>\n<ul>\n<li><a href="https://bucklescript.github.io/docs/en/interop-cheatsheet.html">BuckleScript Interop Cheatsheet</a></li>\n<li><a href="https://pptr.dev">Puppeteer API Docs</a></li>\n</ul>\n<h2 id="projects-using-bs-puppeteer"><a href="#projects-using-bs-puppeteer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Projects using bs-puppeteer</h2>\n<ul>\n<li><a href="https://github.com/jrdrg/hamilton-lottery">Hamilton Lottery</a></li>\n<li><a href="https://github.com/rej156/lux-pos-web-wallet-e2e">lux-pos-web-wallet-e2e</a></li>\n</ul>\n',homepageUrl:"https://github.com/zploskey/bs-puppeteer",repositoryUrl:"https://github.com/zploskey/bs-puppeteer",npmUrl:"https://www.npmjs.com/package/bs-puppeteer",issuesUrl:"https://github.com/zploskey/bs-puppeteer/issues",slug:"/package/bs-puppeteer"}},pathContext:{id:"bs-puppeteer"}}}});
//# sourceMappingURL=path---package-bs-puppeteer-bd5ca440b771346c7a0c.js.map