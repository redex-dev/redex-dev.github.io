webpackJsonp([53735125994883],{1070:function(e,i){e.exports={data:{package:{id:"unpublished/AndrewKvalheim/bs-geofire",score:0,name:"AndrewKvalheim/bs-geofire",version:"0.2.0",description:"BuckleScript bindings to GeoFire",keywords:["bucklescript","reason"],license:"MIT",updated:"2017-12-23T18:54:42.518Z",stars:1,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>bs-geofire</h1>\n<p><a href="https://bucklescript.github.io/">BuckleScript</a> bindings to <a href="https://github.com/firebase/geofire-js/">GeoFire</a>, written in <a href="https://reasonml.github.io/">Reason</a>.</p>\n<h2>Installation</h2>\n<p>Install NPM packages <a href="https://github.com/viskahq/bs-firebase">bs-firebase</a> and <a href="https://github.com/AndrewKvalheim/bs-geofire">bs-geofire</a>—</p>\n<pre><code class="language-shell">yarn add \'bs-firebase\' \'https://github.com/AndrewKvalheim/bs-geofire\'\n</code></pre>\n<p>—and register both in <a href="https://bucklescript.github.io/bucklescript/Manual.html#_build_with_other_bucklescript_dependencies"><code>bsconfig.json</code></a>:</p>\n<pre><code class="language-diff">-  "bs-dependencies": []\n+  "bs-dependencies": ["bs-firebase", "bs-geofire"]\n</code></pre>\n<h2>Usage</h2>\n<p>Refer to the <a href="./src/GeoFire.rei">module interface</a> and <a href="https://github.com/firebase/geofire-js/blob/v4.1.2/docs/reference.md">GeoFire API</a>.</p>\n<h3>Example</h3>\n<pre><code class="language-reason">/* Initialize GeoFire. */\nlet app = ReasonFirebase.initializeApp(~options);\nlet database = ReasonFirebase.App.database(app);\nlet reference = ReasonFirebase.Database.ref(database, ~path="example", ());\nlet geoFire = GeoFire.make(reference);\n\n/* Start a query. */\nlet geoQuery = GeoFire.query(geoFire, ~center=(49.304, -123.145), ~radius=2.0);\n\n/* Subscribe to nearby moved locations. */\nlet callback = (key, location, distance) =>\n  Js.log({j|$key moved to $location, which is $distance km away.|j});\nlet registration = GeoFire.GeoQuery.on(geoQuery, `key_moved(callback));\n\n/* Add a location, */\nGeoFire.set(geoFire, "foo", (49.306, -123.156))\n/* then move it, */\n|> Js.Promise.then_(() => GeoFire.set(geoFire, "foo", (49.313, -123.148)))\n/* then unsubscribe and stop the query. */\n|> Js.Promise.then_(() => {\n     GeoFire.GeoCallbackRegistration.cancel(registration);\n     GeoFire.GeoQuery.cancel(geoQuery);\n     Js.Promise.resolve()\n   })\n</code></pre>\n',homepageUrl:null,repositoryUrl:"https://github.com/AndrewKvalheim/bs-geofire",npmUrl:null,issuesUrl:null,slug:"packages/unpublished/AndrewKvalheim/bs-geofire"}},pathContext:{id:"unpublished/AndrewKvalheim/bs-geofire"}}}});
//# sourceMappingURL=path---packages-unpublished-andrew-kvalheim-bs-geofire-b352867f9aa17c8cd56b.js.map