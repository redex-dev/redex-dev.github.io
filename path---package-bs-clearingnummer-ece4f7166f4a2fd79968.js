webpackJsonp([1910425093433],{1118:function(e,a){e.exports={data:{package:{type:"published",id:"bs-clearingnummer",name:"bs-clearingnummer",version:"0.1.1",category:"library",flags:[],platforms:["browser","node"],description:"Clearing numbers for Swedish banks",keywords:["utilities"],license:"MIT",updated:"2018-11-28T07:52:39.467Z",stars:0,score:.5633516644274666,quality:.7022364592703709,popularity:.011966712744136016,maintenance:.9956925062454509,readme:'<h1 id="bs-clearingnummer"><a href="#bs-clearingnummer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-clearingnummer</h1>\n<p>Sort codes, <em>clearingnummer</em> in Swedish, are four or five digit identifiers for Swedish banks. This package helps you find the bank related to a specific number. All clearing numbers are taken from <a href="http://www.wikiwand.com/sv/Lista_%C3%B6ver_clearingnummer_till_svenska_banker">Wikipedia</a> and <a href="http://www.swedishbankers.se/media/3535/1710_clearingnummer-institut.pdf">Swedish Bankers Association</a>.</p>\n<p>This is a semi-port of my JavaScript library <a href="https://github.com/believer/clearingnummer">Clearingnummer</a> written completely in Reason.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install bs-clearingnummer</code></pre></div>\n<p>Add <code>bs-clearingnummer</code> to <code>bs-dependencies</code> in <code>bsconfig.json</code></p>\n<h2 id="functions"><a href="#functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Functions</h2>\n<h3 id="banknamebyinteger"><a href="#banknamebyinteger" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bankNameByInteger</h3>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> bankName = <span class="hljs-type">Clearingnummer</span>.bankNameByInteger(<span class="hljs-number">5202</span>)\n<span class="hljs-comment">(* bankName = "SEB" *)</span></code></pre></div>\n<h3 id="banknamebystring"><a href="#banknamebystring" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bankNameByString</h3>\n<p>Used by Swedbank and their old bank names (sparbanker)</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> bankName = <span class="hljs-type">Clearingnummer</span>.bankNameByString(<span class="hljs-string">"8060-6"</span>)\n<span class="hljs-comment">(* bankName = "Swedbank" *)</span></code></pre></div>\n<h3 id="allbanks"><a href="#allbanks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>allBanks</h3>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">let</span> banks = <span class="hljs-type">Clearingnummer</span>.allbanks(<span class="hljs-string">"8060-6"</span>)\n<span class="hljs-comment">(* banks = ["Amfa Bank", "Avanza Bank", ...] *)</span></code></pre></div>\n<h2 id="tests"><a href="#tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tests</h2>\n<p>Build JavaScript files first using <code>npm run build</code> or <code>npm run start</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>$ npm <span class="hljs-built_in">test</span></code></pre></div>\n',homepageUrl:"https://github.com/believer/bs-clearingnummer#readme",repositoryUrl:"https://github.com/believer/bs-clearingnummer",npmUrl:"https://www.npmjs.com/package/bs-clearingnummer",issuesUrl:"https://github.com/believer/bs-clearingnummer/issues",slug:"/package/bs-clearingnummer"}},pathContext:{id:"bs-clearingnummer"}}}});
//# sourceMappingURL=path---package-bs-clearingnummer-ece4f7166f4a2fd79968.js.map