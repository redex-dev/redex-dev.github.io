webpackJsonp([0xf03d6489103e],{1215:function(s,a){s.exports={data:{package:{type:"published",id:"bs-msal",name:"bs-msal",version:"1.0.3",category:"binding",flags:[],platforms:["browser"],description:"Bucklescript/ReasonML bindings for https://www.npmjs.com/package/msal (Microsoft Authentication Library Preview for JavaScript)",keywords:["platform api"],license:"MIT",updated:"2019-06-03T06:46:58.490Z",stars:0,score:.51587529101665,quality:.5229670194570895,popularity:.025795776421104352,maintenance:.999876181234676,readme:'<h1 id="bs-msal"><a href="#bs-msal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-msal</h1>\n<p>Bindings for <a href="https://github.com/AzureAD/microsoft-authentication-library-for-js">microsoft-authentication-library-for-js (msal)</a></p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>You\'ll notice that the intilization function has been simplified from <code>UserAgentApplication</code> to <code>initApp</code>, and that all parameters are named. All optional properties on the optional options object in the original <code>msal</code> have been moved to the root of the function call, also as named parameters. The only required parameters are <code>clientId</code>, <code>authority</code>, and <code>tokenReceivedCallback</code>.</p>\n<h3 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> authApp =\n      <span class="hljs-type">Msal</span>.initApp(\n        ~clientId=<span class="hljs-string">"CLIENT_ID_HERE"</span>,\n        ~authority=\n          <span class="hljs-string">"B2C_AUTHORITY_HERE"</span>,\n        ~tokenReceivedCallback=\n          (_errorDesc, _token, error, _tokenType) =&gt; {\n            <span class="hljs-type">Js</span>.log(<span class="hljs-string">"Error in tokenReceivedCallback:"</span>);\n            <span class="hljs-type">Js</span>.log(error);\n          },\n        ~redirectUri=<span class="hljs-string">"http://YOU_REDIRECT_URI"</span>,\n        ~postLogoutRedirectUri=<span class="hljs-string">"http://YOU_LOGOUT_REDIRECT_URI"</span>,\n        ~storeAuthStateInCookie=<span class="hljs-literal">false</span>,\n        ~validateAuthority=<span class="hljs-literal">false</span>,\n        ~cacheLocation=`localStorage,\n        (),\n      );\n\n    <span class="hljs-type">Js</span>.log(authApp |&gt; <span class="hljs-type">Msal</span>.logger |&gt; <span class="hljs-type">Msal</span>.correlationId);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> authApp =\n  <span class="hljs-type">Msal</span>.initApp ~clientId:<span class="hljs-string">"CLIENT_ID_HERE"</span> ~authority:<span class="hljs-string">"B2C_AUTHORITY_HERE"</span>\n    ~tokenReceivedCallback:(<span class="hljs-keyword">fun</span> _errorDesc  -&gt;\n                              <span class="hljs-keyword">fun</span> _token  -&gt;\n                                <span class="hljs-keyword">fun</span> error  -&gt;\n                                  <span class="hljs-keyword">fun</span> _tokenType  -&gt;\n                                    <span class="hljs-type">Js</span>.log <span class="hljs-string">"Error in tokenReceivedCallback:"</span>;\n                                    <span class="hljs-type">Js</span>.log error)\n    ~redirectUri:<span class="hljs-string">"http://YOU_REDIRECT_URI"</span>\n    ~postLogoutRedirectUri:<span class="hljs-string">"http://YOU_LOGOUT_REDIRECT_URI"</span>\n    ~storeAuthStateInCookie:<span class="hljs-literal">false</span> ~validateAuthority:<span class="hljs-literal">false</span>\n    ~cacheLocation:`localStorage <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log ((authApp |&gt; <span class="hljs-type">Msal</span>.logger) |&gt; <span class="hljs-type">Msal</span>.correlationId)</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/SeaMonster-Studios/bs-msal#readme",repositoryUrl:"https://github.com/SeaMonster-Studios/bs-msal",npmUrl:"https://www.npmjs.com/package/bs-msal",issuesUrl:"https://github.com/SeaMonster-Studios/bs-msal/issues",slug:"/package/bs-msal"}},pathContext:{id:"bs-msal"}}}});
//# sourceMappingURL=path---package-bs-msal-f4ca57b4919872b758cc.js.map