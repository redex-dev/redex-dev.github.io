webpackJsonp([0xaff2bbe29bd4],{1228:function(s,n){s.exports={data:{package:{id:"unpublished/state-machine-systems/JsonCodec",stars:11,name:"state-machine-systems/JsonCodec",version:"0.1.0",category:"library",flags:["neglected"],platforms:["browser","node"],description:"JSON combinator library for BuckleScript/Reason",keywords:["json","data serialization"],license:"Apache-2.0",updated:"2018-02-22T18:21:55.517Z",type:"unpublished",score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="jsoncodec"><a href="#jsoncodec" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JsonCodec</h1>\n<h2 id="json-combinator-library-for-bucklescriptreason"><a href="#json-combinator-library-for-bucklescriptreason" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSON combinator library for BuckleScript/Reason</h2>\n<p>Using the magic of <a href="https://www.microsoft.com/en-us/research/wp-content/uploads/2004/01/picklercombinators.pdf">pickler combinators</a>, this library allows you to parse and serialize JSON structures in a declarative way, free of boilerplate.</p>\n<p>Here\'s a little example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> json = {js|\n{\n    <span class="hljs-string">"name"</span>: <span class="hljs-string">"Great Pyramid of Giza"</span>,\n    <span class="hljs-string">"lat"</span>: <span class="hljs-number">29.979175</span>,\n    <span class="hljs-string">"lon"</span>: <span class="hljs-number">31.134358</span>,\n    <span class="hljs-string">"height"</span>: <span class="hljs-number">146.5</span>\n}\n|js};\n\n<span class="hljs-comment">/* Define a codec for the above object type */</span>\n<span class="hljs-keyword">let</span> codec =\n  <span class="hljs-type">JsonCodec</span>.(\n    object4\n      (field <span class="hljs-string">"name"</span> string) (field <span class="hljs-string">"lat"</span> number) (field <span class="hljs-string">"long"</span> number) (field <span class="hljs-string">"height"</span> number)\n  );\n\n<span class="hljs-comment">/* Decoding */</span>\n<span class="hljs-keyword">let</span> () =\n  <span class="hljs-keyword">switch</span> (<span class="hljs-type">JsonCodec</span>.decodeJson codec json) {\n  | <span class="hljs-type">Js</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Ok</span> (name, lat, lon, height) =&gt;\n    <span class="hljs-type">Printf</span>.printf <span class="hljs-string">"name=\'%s\' location=%f,%f height=%f\\n"</span> name lat lon height\n  | <span class="hljs-type">Js</span>.<span class="hljs-type">Result</span>.<span class="hljs-type">Error</span> error =&gt; <span class="hljs-type">Printf</span>.printf <span class="hljs-string">"Decoding error: %s"</span> error\n  };\n\n<span class="hljs-comment">/* Encoding */</span>\n<span class="hljs-keyword">let</span> encoded = <span class="hljs-type">JsonCodec</span>.encodeJson codec (<span class="hljs-string">"Machu Picchu"</span>, -<span class="hljs-number">13.163333</span>, -<span class="hljs-number">72.545556</span>, <span class="hljs-number">2430.0</span>);\n\n<span class="hljs-keyword">let</span> () = <span class="hljs-type">Printf</span>.printf <span class="hljs-string">"JSON: %s\\n"</span> encoded;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">880</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>© 2017 State Machine Systems Ltd. <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache Licence, Version 2.0</a></p>\n',homepageUrl:"https://github.com/state-machine-systems/JsonCodec#readme",repositoryUrl:"https://github.com/state-machine-systems/JsonCodec",npmUrl:null,issuesUrl:"https://github.com/state-machine-systems/JsonCodec/issues",slug:"/package/unpublished/state-machine-systems/JsonCodec"}},pathContext:{id:"unpublished/state-machine-systems/JsonCodec"}}}});
//# sourceMappingURL=path---package-unpublished-state-machine-systems-json-codec-735aeff2278cab468b3b.js.map