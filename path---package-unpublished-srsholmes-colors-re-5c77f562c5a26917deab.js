webpackJsonp([0xd4841d2db0a8],{1238:function(s,e){s.exports={data:{package:{id:"unpublished/srsholmes/colors.re",stars:2,name:"srsholmes/colors.re",version:"0.0.4",category:"library",flags:[],platforms:["node"],description:"Style terminal strings with ReasonMl.",keywords:["cli"],license:"MIT",updated:"2018-03-10T19:07:09.794Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="colorsre"><a href="#colorsre" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>colors.re</h1>\n<p><a href="https://travis-ci.org/srsholmes/colors.re"><img src="https://travis-ci.org/srsholmes/colors.re.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/srsholmes/colors.re?branch=master"><img src="https://coveralls.io/repos/github/srsholmes/colors.re/badge.svg?branch=master&#x26;service=github" alt="Coverage Status"></a></p>\n<p>Terminal utility to display colours in your terminal written in reasonml. Very much inspired from <a href="https://github.com/chalk/chalk">Chalk</a> and <a href="https://github.com/Marak/colors.js">Colors.js</a>, go check them out.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Install the project:</p>\n<p><code>npm install colors.re --save</code></p>\n<p>And add the dependency to your bs-dependencies in <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"colors.re"</span>\n]</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage:</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>open Colors;\n\n<span class="hljs-built_in">let</span> redString = changeColor(Red, <span class="hljs-string">"Red String"</span>);\n<span class="hljs-built_in">let</span> redBgString = changeBackground(Red, <span class="hljs-string">"String with red background"</span>);\n<span class="hljs-built_in">let</span> modifyString = modify(Bold, <span class="hljs-string">"Bold String"</span>);\n\n<span class="hljs-built_in">let</span> myString =\n  colors(\n    ~color=White,\n    ~modifier=Bold,\n    ~<span class="hljs-built_in">bg</span>=BgBlueBright,\n    ~keywordOptions={colorType: Green, word: <span class="hljs-string">"my"</span>},\n    <span class="hljs-string">"this is my string"</span>\n  );\n\nJs.log(myString); // White text with blue background, with highlighted word <span class="hljs-string">"my"</span> <span class="hljs-keyword">in</span> Green</code></pre></div>\n<p>Or using the utils.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>open Colors_Utils;\n\n<span class="hljs-built_in">let</span> (&lt;&lt;) = Colors_Utils.compose;\n\n<span class="hljs-built_in">let</span> (&gt;&gt;) = Colors_Utils.pipe;\n\n<span class="hljs-built_in">let</span> composedStyle =\n  Colors_Utils.bold\n  &lt;&lt; Colors_Utils.bgBlue\n  &lt;&lt; Colors_Utils.underline\n  &lt;&lt; Colors_Utils.green;\n\nJs.log(\n  composedStyle(<span class="hljs-string">"This string will be bold, underlined with a blue background with green text"</span>)\n);</code></pre></div>\n<h2 id="types"><a href="#types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Types:</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-built_in">type</span> color =\n| Red\n| Yellow\n| Green\n| Blue\n| White\n| Cyan\n| Magenta\n| BgBlack\n| BgRed\n| BgGreen\n| BgYellow\n| BgBlue\n| BgMagenta\n| BgCyan\n| BgWhite\n| BgRedBright\n| BgGreenBright\n| BgYellowBright\n| BgBlueBright\n| BgMagentaBright\n| BgCyanBright\n| BgWhiteBright;\n\n<span class="hljs-built_in">type</span> modifier =\n| Reset\n| Bold\n| Dim\n| Italic\n| Underline\n| Inverse\n| Hidden\n| Strikethrough;</code></pre></div>\n<h2 id="in-progress"><a href="#in-progress" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>In Progress:</h2>\n<p>Support color detection.</p>\n<h2 id="todo"><a href="#todo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>TODO:</h2>\n<ul>\n<li>Unit Tests.</li>\n<li>Color conversions.</li>\n<li>256/Truecolor support, need to finish support detection for this.</li>\n<li>Optimise performance.</li>\n<li>Publish to npm.</li>\n</ul>\n',homepageUrl:"https://github.com/srsholmes/colors.re#readme",repositoryUrl:"https://github.com/srsholmes/colors.re",npmUrl:null,issuesUrl:"https://github.com/srsholmes/colors.re/issues",slug:"/package/unpublished/srsholmes/colors.re"}},pathContext:{id:"unpublished/srsholmes/colors.re"}}}});
//# sourceMappingURL=path---package-unpublished-srsholmes-colors-re-5c77f562c5a26917deab.js.map