webpackJsonp([46266855228421],{1299:function(e,a){e.exports={data:{package:{type:"published",id:"esy-peasy",name:"esy-peasy",version:"0.0.5",category:"tool",flags:["neglected"],platforms:["native"],description:"Esy-Peasy: Simple Esy Project Builder With Almost No Configuration",keywords:["boilerplate"],license:"MIT",updated:"2019-10-27T16:37:12.562Z",stars:93,score:.35340086357241396,quality:.2822159889097179,popularity:.06595000173279157,maintenance:.7018673322657758,readme:'<h1 id="esy-peasy"><a href="#esy-peasy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>esy-peasy</h1>\n<ul>\n<li>Easiest way to make native Reason programs and libraries.</li>\n<li>Merlin and LSP integration out of the box.</li>\n<li>For a project named <code>my-project</code>, produces single sharable library named\n<code>my-project</code> and a single executable named <code>MyProject</code>.</li>\n</ul>\n<h2 id="build-an-example"><a href="#build-an-example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build An Example:</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install -g esy@next\ngit <span class="hljs-built_in">clone</span> git@github.com:jordwalke/esy-peasy-starter.git\nesy install\nesy build</code></pre></div>\n<h2 id="make-it-your-own-package"><a href="#make-it-your-own-package" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Make It Your Own Package:</h2>\n<ul>\n<li>Change the <code>name</code> field in the <code>package.json</code> and rebuild.</li>\n</ul>\n<h2 id="how-are-the-binary-and-library-built"><a href="#how-are-the-binary-and-library-built" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How Are The Binary And Library Built?</h2>\n<ul>\n<li>The single <code>.re</code> file in <code>bin/</code> becomes the <code>MyProject</code> executable.</li>\n<li>The contents of <code>lib/</code> becomes the <code>my-project</code> named library.</li>\n<li>Your binary <code>.re</code> file can automatically see the <code>my-project</code> library as the\n<code>YourProjectLib</code> module.</li>\n<li>Packages that depend on your package can then use your\n<code>my-project</code> library, which then allows them to see the <code>YourProjectLib</code> module.</li>\n</ul>\n<h2 id="testing-the-binary"><a href="#testing-the-binary" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing The Binary:</h2>\n<p>Use the standard <code>esy x any-command-here</code> command to run <code>any-command-here</code> as\nif you had installed the package. For example <code>esy x YourPackage --args</code> builds\nand runs your <code>YourPackage</code> executable with arguments.</p>\n<h2 id="customize"><a href="#customize" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Customize:</h2>\n<ul>\n<li>Omit the <code>lib/</code> directory if everything fits into the single file in <code>bin/</code>.</li>\n<li>You may rename the <code>bin/Index.re</code> file to be\n<code>bin/YourProjectNameCamelCased.re</code>.</li>\n</ul>\n<h2 id="adding-new-package-dependencies"><a href="#adding-new-package-dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adding New Package Dependencies:</h2>\n<ul>\n<li><code>esy add @opam/dep-name@version</code> automatically builds and adds a new\ndependency to <code>package.json</code>.</li>\n<li>Find the name of the library inside of that new package by running <code>esy ls-libs</code>.</li>\n<li>Add that <em>library</em> name to <code>package.json</code> like this: <code>"peasyLibs": ["the-library-name"]</code>.</li>\n<li>Use that library in your code and run <code>esy build</code>.</li>\n</ul>\n<blockquote>\n<p>Note: After adding/building a new dependency you can use <code>esy ls-modules</code> to see\nwhich named modules become available to you by adding the <code>peasyLibs</code> entry.</p>\n</blockquote>\n<h2 id="publish-prebuilt-binaries-of-your-executables-to-npm"><a href="#publish-prebuilt-binaries-of-your-executables-to-npm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Publish Prebuilt binaries of your executables to <code>npm</code>.</h2>\n<p>Use <code>esy</code> to make prebuilt binary releases of your program that can be installed\nfrom plain <code>npm</code>.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>esy release bin\n<span class="hljs-built_in">cd</span> _release/bin-darwin\nnpm publish --tag darwin</code></pre></div>\n<h2 id="tradeoffs"><a href="#tradeoffs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tradeoffs:</h2>\n<p><code>esy-peasy</code> is good for rapidly making new small executables/libraries. Once they\ngrow, you\'ll want to "eject out" of <code>esy-peasy</code> and begin customizing using a more\nadvanced build system.</p>\n',homepageUrl:"https://github.com/jordwalke/esy-peasy#readme",repositoryUrl:"https://github.com/jordwalke/esy-peasy",npmUrl:"https://www.npmjs.com/package/esy-peasy",issuesUrl:"https://github.com/jordwalke/esy-peasy/issues",slug:"/package/esy-peasy"}},pathContext:{id:"esy-peasy"}}}});
//# sourceMappingURL=path---package-esy-peasy-2e2cdfc9a94eb8227e2f.js.map