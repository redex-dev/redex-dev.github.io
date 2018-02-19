webpackJsonp([0xa67f5c16e124],{1036:function(e,o){e.exports={data:{package:{id:"add-reason",stars:107,name:"add-reason",version:"1.0.10",category:"tool",flags:[],platforms:["node"],description:"Simple tool for seamlessly integrating ReasonML into your existing JavaScript projects.",keywords:["boilerplate"],license:"MIT",updated:"2018-02-11T17:36:16.010Z",type:"published",score:.6463726601306394,quality:.8933651341135447,popularity:.08108728761797762,maintenance:.9999501978008114,readme:'<img width="392" src="public/logo.png" alt="add-reason" />\n<blockquote>\n<p>Simple tool for seamlessly integrating ReasonML into your existing JavaScript projects.</p>\n</blockquote>\n<p><a href="#"><img src="https://travis-ci.org/nickzuber/add-reason.svg?branch=master" /></a> <a href="#"><img src="https://img.shields.io/badge/project-active-brightgreen.svg" /></a> <a href="#"><img src="https://img.shields.io/badge/released-yes-green.svg" /></a> <a href="#"><img src="https://img.shields.io/badge/license-MIT%20Licence-blue.svg" /></a></p>\n<p>This is an easy to use <a href="https://en.wikipedia.org/wiki/Command-line_interface">cli tool</a> that helps you seamlessly interop <a href="https://reasonml.github.io/">ReasonML</a> code with an existing JavaScript project. You tell us where your ReasonML code is, and we\'ll handle the rest!</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ npm install -g add-reason</code></pre></div>\n<p>or</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ yarn add global add-reason</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>The most basic use case would be to simply add an interop between your JavaScript and ReasonML code. In this case, you\'d probably want to go with the <code>setup</code> command and specify the location of your ReasonML code and optionally include the name of a package you\'d want to give it.</p>\n<p>Let\'s assume you had file structure like this, where all your ReasonML code is located in a single directory called <code>reasonCode</code> or something:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>myCoolProject/\n├── reasonCode/\n│   ├── index.re\n│   ├── file1.re\n│   ├── file2.re\n│   └── utils/\n│       ├── fs.re\n│       └── path.re\n├── src/\n│   ├── index.js\n│   ├── main.js\n│   ├── example1.js\n│   ├── example2.js\n│   └── example3.js\n└── etc/</code></pre></div>\n<p>You\'d simply go to your project root and type:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ add-reason setup ./reasonCode</code></pre></div>\n<p>or, since <code>setup</code> is the default command, you can even write</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ add-reason ./reasonCode</code></pre></div>\n<p>and that\'s it! Now you can import your compiled ReasonML code with</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>const reasonCode = require(<span class="hljs-string">\'reasonCode\'</span>);\n// ...</code></pre></div>\n<p>If you don\'t specify a package name you want to give your code, we just use the directory name. You can choose any name you want though, so long as it doesn\'t collide with the name of a package you already have in your <code>node_modules/</code>!</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ add-reason setup ./reasonCode my-cool-code</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>const myCoolCode = require(<span class="hljs-string">\'my-cool-code\'</span>);\n// ...</code></pre></div>\n<p>You can do a variety of other things too, the more basic usage is:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-type">Usage</span>: add-reason [command] [options]\n\n  <span class="hljs-type">Commands</span>:\n\n    setup &lt;directory&gt; [package-name]  set up <span class="hljs-type">Reason</span> directory, config files, <span class="hljs-keyword">and</span> symlink\n    link &lt;directory&gt; [package-name]   create a symlink <span class="hljs-keyword">with</span> the given package name\n    linter &lt;directory&gt;                create a merlin file <span class="hljs-keyword">for</span> linting your <span class="hljs-type">ReasonML</span> code\n    config &lt;directory&gt;                create a bsconfig file <span class="hljs-keyword">for</span> building your <span class="hljs-type">ReasonML</span> code\n\n  <span class="hljs-type">Options</span>:\n\n    -h, --help     output usage information\n    -<span class="hljs-type">V</span>, --version  output the version number\n    --no-linking   don\'t create the symlink <span class="hljs-keyword">to</span> your compiled <span class="hljs-type">ReasonML</span> code</code></pre></div>\n<h2 id="how-it-works"><a href="#how-it-works" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How It Works</h2>\n<p>This is a very simple tool. All it does is make sure you have the typical basic config related files for writing  ReasonML and creates a symlink in your <code>node_modules/</code> targeting your compiled ReasonML code so you can easily import and use it within your JavaScript.</p>\n<p>There are a few steps that happen when you call <code>setup</code>:</p>\n<ol>\n<li>Prepare target directory</li>\n<li>Make sure we have a config file</li>\n<li>Make sure we have a linting file</li>\n<li>Create symlink</li>\n<li>Create postinstall</li>\n</ol>\n<p>Preparing the target directory just makes sure that the path <code>./lib/js/[your ReasonML directory name]</code> exists. This is where BuckleScript will put your compiled ReasonML/OCaml code, so this is the spot where we want to create a symlink later to down the line.</p>\n<p>Next we just want to make sure you\'re all set up with at least the most basic of configurations. We check to see if you have a <code>.merlin</code> file for linting and a <code>bsconfig.json</code> for ReasonML configuration. If you don\'t, no worries! We will just create a basic file for each one that you don\'t have and set you up with it.</p>\n<p>Then we just create that symlink  that hooks in your compiled ReasonML code to your <code>node_modules/</code> for easy access. We also create a postinstall script that will add this symlink every time someone installs your project, given that the link doesn\'t already exist. You always have the option to skip this symlinking step with the <code>--no-linking</code> flag too if you want.</p>\n<h2 id="faq"><a href="#faq" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FAQ</h2>\n<blockquote>\n<h4 id="i-ran-setup-and-everything-worked-fine-but-when-i-try-to-import-my-code-i-get-error-cannot-find-module"><a href="#i-ran-setup-and-everything-worked-fine-but-when-i-try-to-import-my-code-i-get-error-cannot-find-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>I ran <code>setup</code> and everything worked fine, but when I try to import my code I get <code>Error: Cannot find module</code></h4>\n</blockquote>\n<p>This is almost always because your ReasonML directory doesn\'t have an <code>index.re</code> file. Normally, this isn\'t a necessary thing, but if you want to be able to write</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>const reasonCode = require(<span class="hljs-string">\'reasonCode\'</span>);\n// ...</code></pre></div>\n<p>your directory needs to have the <code>index</code> file for node to grab! You don\'t <em>need</em> to have an <code>index.re</code> file though, instead you can just access the files you want directly.</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>const reasonCode = require(<span class="hljs-string">\'reasonCode/file1.js\'</span>);\n// ...</code></pre></div>\n<blockquote>\n<h4 id="i-ran-setup-but-my-code-isnt-compiled"><a href="#i-ran-setup-but-my-code-isnt-compiled" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>I ran <code>setup</code> but my code isn\'t compiled!</h4>\n</blockquote>\n<p><code>add-reason</code> doesn\'t actually compile your code or deal with that bit. You still need to make sure you\'re compiling your code yourself with BuckleScript something like</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>$ bsb -make-world</code></pre></div>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>This software is free to use under the MIT License. See <a href="https://opensource.org/licenses/MIT">this reference</a> for license text and copyright information.</p>\n',homepageUrl:"https://github.com/nickzuber/add-reason#readme",repositoryUrl:"https://github.com/nickzuber/add-reason",npmUrl:"https://www.npmjs.com/package/add-reason",issuesUrl:"https://github.com/nickzuber/add-reason/issues",slug:"/package/add-reason"}},pathContext:{id:"add-reason"}}}});
//# sourceMappingURL=path---package-add-reason-4ea4d4e084eabf7b5ccc.js.map