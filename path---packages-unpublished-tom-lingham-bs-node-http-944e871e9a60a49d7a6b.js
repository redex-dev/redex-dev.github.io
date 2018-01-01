webpackJsonp([0x6e0ed6d70fb3],{1119:function(e,n){e.exports={data:{package:{id:"unpublished/TomLingham/bs-node-http",score:0,name:"TomLingham/bs-node-http",version:"0.0.5",description:"",keywords:["bucklescript"],license:"MIT",updated:"2018-01-01T06:58:08.984Z",stars:2,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>bs-node-http</h1>\n<p>Node <code>http</code> bindings for\n<a href="https://github.com/BuckleScript/bucklescript">Bucklescript</a> in\n<a href="https://github.com/facebook/reason">Reason</a></p>\n<h2>Status</h2>\n<p>Obligatory "this is just a WIP" section. Feel free to pull down and extend\nthe API and/or make it better ... I don\'t pretend to be a ReasonML wizard.</p>\n<p>I will be accepting PR\'s. Node HTTP is one of my most used modules and I\'m\nsurprised this wasn\'t done yet. A good alternative, though, is the\n<a href="https://github.com/reasonml-community/bs-express">bs-express</a> project if\nyou are after routing as well.</p>\n<h2>Installation</h2>\n<p>Install <code>bs-node-http</code> from npm. <code>npm i -S bs-node-http</code>.</p>\n<p>Then, add <code>bs-node-http</code> to yor <code>bs-dependencies</code> in your <code>bsconfig.json</code>.</p>\n<pre><code class="language-json">{\n  "bs-dependencies": ["bs-node-http"]\n}\n</code></pre>\n<h2>Usage</h2>\n<p>The api is modified to favour piping the response so doesn\'t map 1 to 1 with\nthe Node API. It\'s very minimal at the moment - if what you want isn\'t added\nfeel free to add a binding in <code>src/NodeHTTP.re</code> then implement the API in\n<code>src/Http.re</code></p>\n<pre><code class="language-reasonml">open Http;\n\nlet handler = (~request as _, ~response) =>\n  response\n  |> Response.setStatusCode(200)\n  |> Response.setHeader("X-some-fancy-header", "hederz 4 dayz")\n  |> Response.write("Foo")\n  |> Response.write("Bar")\n  |> Response.close;\n\nlet server = create_server(handler) |> Server.listen(~port=3000);\n</code></pre>\n',homepageUrl:null,repositoryUrl:"https://github.com/TomLingham/bs-node-http",npmUrl:null,issuesUrl:null,slug:"packages/unpublished/TomLingham/bs-node-http"}},pathContext:{id:"unpublished/TomLingham/bs-node-http"}}}});
//# sourceMappingURL=path---packages-unpublished-tom-lingham-bs-node-http-944e871e9a60a49d7a6b.js.map