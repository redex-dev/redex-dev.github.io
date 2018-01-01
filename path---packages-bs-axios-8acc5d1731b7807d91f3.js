webpackJsonp([0xcf0ba9164c5c],{1020:function(s,e){s.exports={data:{package:{id:"bs-axios",score:.5182177246812204,name:"bs-axios",version:"0.0.22",description:"Axios bindings for Bucklescript",keywords:["axios","ocaml","bucklescript"],license:"MIT",updated:"2017-12-31T20:15:23.858Z",stars:11,type:"published",quality:.49495318227613827,popularity:.056655302716594434,maintenance:.9997211829930597,readme:'<h1>bs-axios <a href="https://www.npmjs.com/package/bs-axios"><img src="https://img.shields.io/npm/v/bs-axios.svg?style=flat-square" alt="npm version"></a></h1>\n<p><a href="https://github.com/axios/axios">Axios</a> bindings for Bucklescript.</p>\n<h2>Installation</h2>\n<ol>\n<li>Install bs-axios</li>\n</ol>\n<pre><code class="language-bash">$ yarn add bs-axios\n</code></pre>\n<p>or</p>\n<pre><code class="language-bash">$ npm install --save bs-axios\n</code></pre>\n<ol start="2">\n<li>Add "bs-axios" to "bs-dependencies" section of <code>bsconfig.json</code></li>\n</ol>\n<h2>Examples</h2>\n<h3>Simple request</h3>\n<pre><code class="language-reason">Js.Promise.(\n  Axios.get("/user?ID=12345")\n  |> then_((response) => resolve(Js.log(response##data)))\n  |> catch((error) => resolve(Js.log(error)))\n);\n</code></pre>\n<h3>Post requests</h3>\n<pre><code class="language-reason">Js.Promise.(\n  Axios.post("/user")\n  |> then_((response) => resolve(Js.log(response##data)))\n  |> catch((error) => resolve(Js.log(error)))\n);\n</code></pre>\n<pre><code class="language-reason">let user = {\n  "username": "michel",\n  "password": "12345678"\n};\n\nJs.Promise.(\n  Axios.postData("/auth", {user})\n  |> then_((response) => resolve(Js.log(response##data)))\n  |> catch((error) => resolve(Js.log(error)))\n);\n</code></pre>\n<h3>Concurrency</h3>\n<pre><code class="language-reason">Js.Promise.(\n  Axios.all2((Axios.get("/users/1"), Axios.get("/users/1/friends")))\n  |> then_(((user, friends)) => resolve(Js.log2(user##data, friends##data)))\n  |> catch((error) => resolve(Js.log(error)))\n);\n</code></pre>\n',homepageUrl:"https://github.com/meafmira/bs-axios#readme",repositoryUrl:"https://github.com/meafmira/bs-axios",npmUrl:"https://www.npmjs.com/package/bs-axios",issuesUrl:"https://github.com/meafmira/bs-axios/issues",slug:"packages/bs-axios"}},pathContext:{id:"bs-axios"}}}});
//# sourceMappingURL=path---packages-bs-axios-8acc5d1731b7807d91f3.js.map