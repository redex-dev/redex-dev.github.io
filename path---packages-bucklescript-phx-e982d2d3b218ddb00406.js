webpackJsonp([0x84b8dd5fafed],{1086:function(e,n){e.exports={data:{package:{id:"bucklescript-phx",score:.43884713529019814,name:"bucklescript-phx",version:"0.1.3",description:"BuckleScript binding for Phoenix Channel/Presence to Phoenix's official JavaScript client",keywords:["tea","phoenix","ocaml","bucklescript"],license:"LGPL-3.0",updated:"2018-01-07T15:53:27.447Z",stars:12,type:"published",quality:.5067845122459033,popularity:.04807856570185856,maintenance:.7713836674879333,readme:'<h1>BuckleScript Phoenix</h1>\n<p><a href="https://nodei.co/npm/bucklescript-phx/"><img src="https://nodei.co/npm/bucklescript-phx.png?compact=true" alt="NPM"></a></p>\n<p><a href="https://travis-ci.org/OvermindDL1/bucklescript-phx"><img src="https://travis-ci.org/phoenix-china/bucklescript-phx.svg?branch=master" alt="Build Status"></a></p>\n<h4>BuckleScript binding for Phoenix Channel/Presence to Phoenix\'s official JavaScript client.</h4>\n<h4>This is usable now.</h4>\n<h4>Feel free to create PRs.</h4>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> Connect socket</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Join channel</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Push event</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Handle event</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> Presence</li>\n<li class="task-list-item"><input type="checkbox" disabled> Support The Elm Architecture on BuckleScript (<a href="BuckleScript-tea">https://github.com/OvermindDL1/bucklescript-tea</a>)</li>\n<li class="task-list-item"><input type="checkbox" disabled> Fallback support for polling.</li>\n</ul>\n<h4>To install</h4>\n<pre><code class="language-bash">npm install -save bucklescript-phx\n</code></pre>\n<h4>Please update your <code>bsconfig.json</code> to make <code>bsb</code> aware of this dependency</h4>\n<pre><code>"bs-dependencies": [\n    "bucklescript-phx"\n  ]\n</code></pre>\n<h4>Notice:</h4>\n<ol>\n<li>\n<p>Please add official Phoenix client as your dependency to make sure BuckleScript is able to require Phoenix\'s js.</p>\n</li>\n<li>\n<p>Meta of Presence and payload of incoming event are decalred as <code>Js_json.t</code> which means you need to decode it with your prefered decoder (in TEA it is very convenient with <code>Json.Decoder.decodeValue</code>).</p>\n</li>\n<li>\n<p>The bindings are based on <a href="DefinitelyTyped">https://github.com/DefinitelyTyped/DefinitelyTyped</a>. There might be some error on mapping the types. Please help correct them if you find anything wrong. Thank you!</p>\n</li>\n</ol>\n<h4>Here are the examples:</h4>\n<p>To join a channel:</p>\n<pre><code class="language-ocaml">open Phx\n\nlet handleReiceive event any =\n  match event with\n  | "ok" -> Js.log ("handleReiceive:" ^ event, "Joined")\n  | "error" -> Js.log ("handleReiceive:" ^ event, "Failed to join channel")\n  | _ -> Js.log ("handleReiceive:" ^ event, any)\n\nlet handleEvent event response =\n  let _ = Js.log ("handleEvent:" ^ event, response) in\n  ()\n\n\nlet handleSyncState response =\n  let _ = Js.log ("handleSyncState", response) in\n  (*let _ = Js.log (Array.iter (fun key -> Js.log (Js_dict.unsafeGet response key)) (Js_dict.keys response) ) in*)\n  let _presences  =  Presence.syncState (Js.Dict.empty ()) response in\n  ()\n\nlet handleSyncDiff diff =\n  let _ = Js.log ("handleSyncDiff:diff", diff) in\n  let presences  =  Presence.syncDiff (Js.Dict.empty ()) diff in\n  let _ = Js.log ("handleSyncDiff:presences", presences) in\n  ()\n\nlet _ =\n  let socket = initSocket "/socket"\n               |> connectSocket\n               |> putOnClose (fun () -> Js.log "Socket closed") in\n  let channel = socket\n                |> initChannel "user:lobby" in\n  let _ = channel\n          |> putOn "from_server" (handleEvent "from:server")\n          |> putOnSyncState handleSyncState\n          |> putOnsyncDiff handleSyncDiff\n          |> joinChannel\n          |> putReceive "ok" (handleReiceive "ok")\n          |> putReceive "error" (handleReiceive "error") in\n  push "new:message" [%bs.obj { user = "Hello, Elixir! This is a greeting from BuckleScript!"} ] channel\n</code></pre>\n',homepageUrl:"https://github.com/phoenix-china/bucklescript-phx#readme",repositoryUrl:"https://github.com/phoenix-china/bucklescript-phx",npmUrl:"https://www.npmjs.com/package/bucklescript-phx",issuesUrl:"https://github.com/phoenix-china/bucklescript-phx/issues",slug:"packages/bucklescript-phx"}},pathContext:{id:"bucklescript-phx"}}}});
//# sourceMappingURL=path---packages-bucklescript-phx-e982d2d3b218ddb00406.js.map