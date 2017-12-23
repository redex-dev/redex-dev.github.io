webpackJsonp([58830221465563],{1044:function(e,s){e.exports={data:{package:{id:"bs-websockets",score:.3226708214170194,name:"bs-websockets",version:"1.0.9",description:"WebSockets bindings for BuckleScript",keywords:[],license:"MIT",updated:"2017-12-14T17:15:33.610Z",stars:2,type:"published",quality:.5230423905081558,popularity:.03156619359333483,maintenance:.4420283900197301,readme:'<h1>bs-websockets</h1>\n<p>WebSockets bindings for BuckleScript.</p>\n<p>Available on npm repository: <code>yarn add bs-websockets</code> or <code>npm i -S bs-websockets</code> to install. Don\'t forget to add <code>bs-websockets</code> to <code>bs-dependencies</code> of <code>bsconfig.json</code>.</p>\n<h2>Example</h2>\n<pre><code class="language-reason">let ws = WebSocket.make webSocketUrl;\nlet handleOpen () => ...;\nlet hanhleClose evt /* CloseEvent */ => ...;\nlet handleMessage evt /* MessageEvent */ => ...;\nlet handleError errmsg => ...;\nws\n  |> WebSocket.setBinaryType ArrayBuffer\n  |> WebSocket.on @@ Open handleOpen\n  |> WebSocket.on @@ Close handleClose\n  |> WebSocket.on @@ Message handleMessage\n  |> WebSocket.on @@ Error handleError\n  |> ignore;\n</code></pre>\n',homepageUrl:"https://github.com/cxa/bs-websockets#readme",repositoryUrl:"https://github.com/cxa/bs-websockets",npmUrl:"https://www.npmjs.com/package/bs-websockets",issuesUrl:"https://github.com/cxa/bs-websockets/issues",slug:"packages/bs-websockets"}},pathContext:{id:"bs-websockets"}}}});
//# sourceMappingURL=path---packages-bs-websockets-897471803c2c6a9de2bd.js.map