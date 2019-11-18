webpackJsonp([0x5c20ea117e35],{1274:function(s,e){s.exports={data:{package:{type:"published",id:"bs-restyled",name:"bs-restyled",version:"1.0.1",category:"binding",flags:["unusable"],platforms:["browser"],description:"Boilerplate for BuckleScript NPM package",keywords:["css","react"],license:"MIT",updated:"2019-10-26T16:03:22.662Z",stars:67,score:.5313654687096336,quality:.5348800871341615,popularity:.05986893395989254,maintenance:.999849473381208,readme:'<h1 id="bs-restyled"><a href="#bs-restyled" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-restyled</h1>\n<p><a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/Astrocoders/restyled.svg" alt="Greenkeeper badge"></a>\n<a href="https://travis-ci.org/Astrocoders/restyled"><img src="https://travis-ci.org/Astrocoders/restyled.svg?branch=master" alt="Build Status"></a></p>\n<p>Styled Components concept for Reason</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<ul>\n<li><code>yarn add bs-styled</code></li>\n<li>Then add it to your bs-dependencies</li>\n</ul>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>{\n  <span class="hljs-string">"name"</span>: <span class="hljs-string">"myapp"</span>,\n  <span class="hljs-string">"reason"</span>: {\n    <span class="hljs-string">"react-jsx"</span>: <span class="hljs-number">2</span>\n  },\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bs-react-native"</span>,\n    <span class="hljs-string">"reason-react"</span>,\n    <span class="hljs-string">"bs-restyled"</span>\n  ],\n  <span class="hljs-string">"bsc-flags"</span>: [<span class="hljs-string">"-bs-super-errors"</span>],\n}</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">File</span> <span class="hljs-string">""</span>, line <span class="hljs-number">1</span>, characters <span class="hljs-number">29</span>-<span class="hljs-number">30</span>:\n<span class="hljs-type">Error</span>: <span class="hljs-type">Syntax</span> error</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Wrapper</span> = <span class="hljs-type">Styled</span>.<span class="hljs-type">View</span> {\n  <span class="hljs-keyword">type</span> styleParams = <span class="hljs-built_in">unit</span>;\n  <span class="hljs-keyword">let</span> style (_) =&gt; <span class="hljs-type">Style</span>.(style([flex(<span class="hljs-number">1</span>), flexDirection(`column), justifyContent(`center)]));\n};\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"MyView"</span>);\n\n<span class="hljs-keyword">let</span> make = (_children) =&gt; {\n  ...component,\n  render: (_self) =&gt;\n    &lt;<span class="hljs-type">Wrapper</span>&gt;\n      ...anything <span class="hljs-keyword">else</span>...\n    &lt;/<span class="hljs-type">Wrapper</span>&gt;\n}</code></pre>\n      </div>\n    </div>\n  \n<p>Take a look in the <a href="https://github.com/Astrocoders/restyled/blob/master/re/REStyled.re">REStyled.re</a> for more</p>\n<h3 id="acknowledgments"><a href="#acknowledgments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Acknowledgments</h3>\n<p>Thanks everyone in Reason Discord for pointing me\ndirections and specially to Jared who proposed this\nusage to me here <a href="https://gist.github.com/jaredly/a5e0102c060b7a1b40525d41f87843a8">https://gist.github.com/jaredly/a5e0102c060b7a1b40525d41f87843a8</a></p>\n',homepageUrl:"https://github.com/Astrocoders/restyled#readme",repositoryUrl:"https://github.com/Astrocoders/restyled",npmUrl:"https://www.npmjs.com/package/bs-restyled",issuesUrl:"https://github.com/Astrocoders/restyled/issues",slug:"/package/bs-restyled"}},pathContext:{id:"bs-restyled"}}}});
//# sourceMappingURL=path---package-bs-restyled-b98659b5ef57a696a446.js.map