webpackJsonp([58830221465563],{1065:function(e,s){e.exports={data:{package:{id:"bs-websockets",score:.32338848473369913,name:"bs-websockets",version:"1.0.9",description:"WebSockets bindings for BuckleScript",keywords:[],license:"MIT",updated:"2017-12-29T17:37:11.814Z",stars:2,type:"published",quality:.5230304276544608,popularity:.032977953522598004,maintenance:.4426773505841474,readme:'<h1>bs-websockets</h1>\n<p>WebSockets bindings for BuckleScript.</p>\n<p>Available on npm repository: <code>yarn add bs-websockets</code> or <code>npm i -S bs-websockets</code> to install. Don\'t forget to add <code>bs-websockets</code> to <code>bs-dependencies</code> of <code>bsconfig.json</code>.</p>\n<h2>Example</h2>\n<pre><code class="language-reason">let ws = WebSocket.make webSocketUrl;\nlet handleOpen () => ...;\nlet hanhleClose evt /* CloseEvent */ => ...;\nlet handleMessage evt /* MessageEvent */ => ...;\nlet handleError errmsg => ...;\nws\n  |> WebSocket.setBinaryType ArrayBuffer\n  |> WebSocket.on @@ Open handleOpen\n  |> WebSocket.on @@ Close handleClose\n  |> WebSocket.on @@ Message handleMessage\n  |> WebSocket.on @@ Error handleError\n  |> ignore;\n</code></pre>\n',homepageUrl:"https://github.com/cxa/bs-websockets#readme",repositoryUrl:"https://github.com/cxa/bs-websockets",npmUrl:"https://www.npmjs.com/package/bs-websockets",issuesUrl:"https://github.com/cxa/bs-websockets/issues",slug:"packages/bs-websockets"}},pathContext:{id:"bs-websockets"}}}});
//# sourceMappingURL=path---packages-bs-websockets-2680ff6da63148167427.js.map