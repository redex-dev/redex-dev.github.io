webpackJsonp([0x6334fea7a392],{1357:function(s,e){s.exports={data:{package:{type:"unpublished",id:"unpublished/reasonml-community/bs-socket.io",name:"reasonml-community/bs-socket.io",version:"1.1.0",category:"binding",flags:["neglected"],platforms:["browser","node"],description:"socket.io in Reason",keywords:["real-time communication"],license:null,updated:"2019-04-01T09:50:57.734Z",stars:32,score:0,quality:0,popularity:0,maintenance:0,readme:'<h2 id="bs-socket"><a href="#bs-socket" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-socket</h2>\n<p>Simple bindings to <a href="https://socket.io/">socket.io</a>.</p>\n<p>To build everything run <code>npm run build</code> and to run the demo run <code>npm run run</code> and go to <code>localhost:3000</code> on two tabs. You can send messages back and forth!</p>\n<h1 id="documentation"><a href="#documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documentation</h1>\n<p>Everything lives under the namespace BsSocket.  To create a\nserver/client/namespace, use <code>Server.Make</code>, <code>Client.Make</code> and\n<code>Namespace.Make</code> respectively. These functors take a module that\ncontains 2 things: a type called <code>clientToServer</code> and a type called\n<code>serverToClient</code>, which define the type of the message that the client\nwill send to the server and vice versa.</p>\n<p>For example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Messages</span> = </span>{\n  <span class="hljs-keyword">type</span> username = string;\n  <span class="hljs-keyword">type</span> clientToServer = \n  | <span class="hljs-type">Login</span>(username);\n  <span class="hljs-keyword">type</span> serverToClient = \n  | <span class="hljs-type">LoginSuccessful</span>(username, bool);\n};\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">MyServer</span> = <span class="hljs-title">BsSocket</span>.<span class="hljs-title">Server</span>.<span class="hljs-title">Make</span>(<span class="hljs-title">Messages</span>);\n<span class="hljs-title">let</span> <span class="hljs-title">io</span> = <span class="hljs-title">MyServer</span>.<span class="hljs-title">create</span>();</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Messages</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">type</span> username = <span class="hljs-built_in">string</span>\n    <span class="hljs-keyword">type</span> clientToServer =\n      | <span class="hljs-type">Login</span> <span class="hljs-keyword">of</span> username\n    <span class="hljs-keyword">type</span> serverToClient =\n      | <span class="hljs-type">LoginSuccessful</span> <span class="hljs-keyword">of</span> username* <span class="hljs-built_in">bool</span>\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">module</span> <span class="hljs-type">MyServer</span> = <span class="hljs-type">BsSocket</span>.<span class="hljs-type">Server</span>.<span class="hljs-type">Make</span>(<span class="hljs-type">Messages</span>)\n<span class="hljs-keyword">let</span> io = <span class="hljs-type">MyServer</span>.create <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<p>A common pattern is to use the same message type for <code>clientToServer</code> and <code>serverToClient</code> in the following way:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Messages</span> = </span>{\n  <span class="hljs-keyword">type</span> t = ...;\n  <span class="hljs-keyword">type</span> clientToServer = t;\n  <span class="hljs-keyword">type</span> serverToClient = t;\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">229</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>See <code>example/</code> folder for full usage.</p>\n<p>The API differs a bit from socket.io\'s API to be more idiomatic in\nReason. Generally, e.g. JavaScript\'s <code>socket.emit("bla", 10)</code> becomes\n<code>Server.emit(socket, Bla(10))</code> in Reason.</p>\n<h2 id="conceptual-difference-between-socketio-and-bs-socketio"><a href="#conceptual-difference-between-socketio-and-bs-socketio" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Conceptual difference between socket.io and bs-socket.io</h2>\n<p>Whereas in socket.io, emitting a message requires a string as the\nfirst argument as a way to tag what type of message you\'re sending, in\nbs-socket.io, the intended usage is that there is only one type of\nmessage and therefore there is no string tag required.  This is so\nthat the function that handles messages from the other side of the\nsocket, i.e. <code>MyClient.on</code> and <code>MyServer.on</code>, can leverage Reason\'s\nexhaustive pattern matching on variant types, which can help ensure\nthat they are handling all potential message variants that they could\npossibly be sent.</p>\n<p>As a concrete example, the following socket.io and bs-socket.io pseudo-code\nwould be analogous to each other.</p>\n<p>Socket.io:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>// client\nsocket.emit(<span class="hljs-string">\'login\'</span>, { username: <span class="hljs-string">\'user2157\'</span> });\nsocket.emit(<span class="hljs-string">\'chat message\'</span>, <span class="hljs-string">\'hello\'</span>);\n\n// server\nsocket.on(<span class="hljs-string">\'login\'</span>, msg =&gt; ...);\nsocket.on(<span class="hljs-string">\'chat message\'</span>, msg =&gt; ...);</code></pre></div>\n<p>Bs-socket.io:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">// client</span>\n<span class="hljs-type">MyClient</span>.emit(client, <span class="hljs-type">Login</span>(<span class="hljs-string">"user2157"</span>));\n<span class="hljs-type">MyClient</span>.emit(client, <span class="hljs-type">ChatMessage</span>(<span class="hljs-string">"hello"</span>));\n\n<span class="hljs-comment">// server</span>\n<span class="hljs-type">MyServer</span>.<span class="hljs-type">Socket</span>.on(socket, msg =&gt; \n  <span class="hljs-keyword">switch</span>(msg) {\n  | <span class="hljs-type">Login</span>(username) =&gt; ...\n  | <span class="hljs-type">ChatMessage</span>(msg) =&gt; ...\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>If you later extended the type of <code>clientToServer</code> to have another case, i.e.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> username = string;\n<span class="hljs-keyword">type</span> clientToServer = \n  | <span class="hljs-type">Login</span>(username)\n  | <span class="hljs-type">ChatMessage</span>(string)\n  | <span class="hljs-type">Logout</span>(username);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> username = <span class="hljs-built_in">string</span>\n<span class="hljs-keyword">type</span> clientToServer =\n  | <span class="hljs-type">Login</span> <span class="hljs-keyword">of</span> username\n  | <span class="hljs-type">ChatMessage</span> <span class="hljs-keyword">of</span> <span class="hljs-built_in">string</span>\n  | <span class="hljs-type">Logout</span> <span class="hljs-keyword">of</span> username</code></pre>\n      </div>\n    </div>\n  \n<p>Then the previous implementation of <code>MyServer.on</code> would no longer\ncompile with the reason that you haven\'t handled the <code>Logout</code> variant\nof the <code>clientToServer</code> type.</p>\n<h2 id="couple-gotchas"><a href="#couple-gotchas" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Couple Gotchas</h2>\n<p>There are a couple differences between the JS API and this one. We\'ll refer to the supposed module you\'ve created from the <code>Server.Make</code> functor as <code>MyServer</code>. Same for <code>Namespace</code> and <code>Client</code>.</p>\n<ul>\n<li><code>MyServer.emit</code> is different from <code>MyServer.Socket.emit</code>. The former emits to all connected peers while the latter emits to the given peer.</li>\n<li>Instead of <code>io.sockets</code> there is <code>MyNamespace.default(io)</code> which does the same thing.</li>\n<li>Instead of <code>io.of</code> there is <code>MyNamespace.of_(io)</code> which does the same thing. (<code>of</code> is a Reason keyword)</li>\n<li>All functions that are overloaded have different names depending on what you\'re passing. There\'s <code>MyServer.create</code> but also <code>MyServer.createWithHttp</code> (see example) among others.</li>\n</ul>\n',homepageUrl:null,repositoryUrl:"https://github.com/reasonml-community/bs-socket.io",npmUrl:null,issuesUrl:null,slug:"/package/unpublished/reasonml-community/bs-socket.io"}},pathContext:{id:"unpublished/reasonml-community/bs-socket.io"}}}});
//# sourceMappingURL=path---package-unpublished-reasonml-community-bs-socket-io-9f644b6c0b1e1854fe00.js.map