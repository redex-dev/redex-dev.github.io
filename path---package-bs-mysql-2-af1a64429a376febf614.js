webpackJsonp([0xf003af889790],{1051:function(s,a){s.exports={data:{package:{id:"bs-mysql2",stars:0,name:"bs-mysql2",version:"0.3.3",category:"binding",flags:[],platforms:["node"],description:"ReasonML bindings to the mysql2 library.",keywords:["database","sql"],license:"MIT",updated:"2018-01-28T22:01:26.871Z",type:"published",score:.3599815056906195,quality:.4115709689227276,popularity:.01430840516402453,maintenance:.661435066303979,readme:'<p><img src="https://img.shields.io/badge/status-alpha-red.svg" alt="Project Status"></p>\n<h1 id="bs-mysql2"><a href="#bs-mysql2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-mysql2</h1>\n<p>ReasonML bindings to the <a href="https://www.npmjs.com/package/mysql2">mysql2</a> library.</p>\n<p>This is a very rough implementation that will enable very simple use cases.</p>\n<p>Initially this was just a copy of <a href="https://github.com/davidgomes/bs-mysql">bs-mysql</a>.</p>\n<h2 id="why"><a href="#why" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why?</h2>\n<p>The main difference between these bindings and the <a href="https://github.com/davidgomes/bs-mysql">bs-mysql</a> bindings is the\nuse of the <a href="https://www.npmjs.com/package/mysql2">mysql2</a> library / driver over the <a href="https://www.npmjs.com/package/mysql">mysql</a> (version 1) driver. You\ncan see the reasoning behind the new <a href="https://www.npmjs.com/package/mysql2">mysql2</a> driver here:\n<a href="https://github.com/sidorares/node-mysql2#history-and-why-mysql2">History and Why MySQL2</a></p>\n<p>Also, hopefully, the interface presented feels more conventional\nfor ReasonmML / OCaml</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>Not all of the <a href="https://www.npmjs.com/package/mysql2">mysql2</a> library <a href="https://github.com/sidorares/node-mysql2#history-and-why-mysql2">features</a> are implemented but\nthere is a usable implementation of the <a href="#promise-interface">Promise based wrapper</a>\nand <a href="#named-placeholders">Named Placeholders</a>.</p>\n<ul>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> Faster / Better Performance (<em>kind of get this for free</em>)</p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Prepared-Statements.md">Prepared Statements</a> - <a href="#prepared-statements">examples</a>*</p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> MySQL Binary Log Protocol</p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/MySQL-Server.md">MySQL Server</a></p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> Extended support for Encoding and Collation</p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" checked disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Promise-Wrapper.md">Promise Wrapper</a> - <a href="#promise-interface">examples</a>*</p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> Compression</p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> SSL and <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Authentication-Switch.md">Authentication Switch</a></p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> <a href="https://github.com/sidorares/node-mysql2/tree/master/documentation/Extras.md">Custom Streams</a></p>\n</li>\n<li class="task-list-item">\n<p><input type="checkbox" disabled> Pooling</p>\n<p><em>* incomplete but usable implementation</em></p>\n</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="standard-callback-interface"><a href="#standard-callback-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standard Callback Interface</h3>\n<h4 id="standard-query-method"><a href="#standard-query-method" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standard Query Method</h4>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn =\n  <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.make(~host=<span class="hljs-string">"127.0.0.1"</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-type">Mysql</span>.query(conn, <span class="hljs-string">"SHOW DATABASES"</span>, (error, results, fields) =&gt;\n  <span class="hljs-keyword">switch</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt(error)) {\n  | <span class="hljs-type">None</span> =&gt;\n    <span class="hljs-type">Js</span>.log(results);\n    <span class="hljs-type">Js</span>.log(fields);\n  | <span class="hljs-type">Some</span>(error) =&gt; <span class="hljs-type">Js</span>.log(error##message)\n  }\n);\n\n<span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.end_(conn);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.make ~host:<span class="hljs-string">"127.0.0.1"</span> ~port:<span class="hljs-number">3306</span> ~user:<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Mysql</span>.query conn <span class="hljs-string">"SHOW DATABASES"</span>\n    (<span class="hljs-keyword">fun</span> error  -&gt;\n       <span class="hljs-keyword">fun</span> results  -&gt;\n         <span class="hljs-keyword">fun</span> fields  -&gt;\n           <span class="hljs-keyword">match</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt error <span class="hljs-keyword">with</span>\n           | <span class="hljs-type">None</span>  -&gt; (<span class="hljs-type">Js</span>.log results; <span class="hljs-type">Js</span>.log fields)\n           | ((<span class="hljs-type">Some</span> (error))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log (## error message))\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.end_ conn</code></pre>\n      </div>\n    </div>\n  \n<h4 id="prepared-statements"><a href="#prepared-statements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prepared Statements</h4>\n<h5 id="named-placeholders"><a href="#named-placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Named Placeholders</h5>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn =\n  <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.make(~host=<span class="hljs-string">"127.0.0.1"</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-type">Mysql</span>.<span class="hljs-type">Execute</span>.named(\n  ~connection=conn,\n  ~sql=<span class="hljs-string">"SELECT :x + :y as z"</span>,\n  ~placeholders={<span class="hljs-string">"x"</span>: <span class="hljs-number">1</span>, <span class="hljs-string">"y"</span>: <span class="hljs-number">2</span>},\n  (err, rows, fields) =&gt;\n  <span class="hljs-keyword">switch</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt(err)) {\n  | <span class="hljs-type">None</span> =&gt;\n    <span class="hljs-type">Js</span>.log(rows);\n    <span class="hljs-type">Js</span>.log(fields);\n  | <span class="hljs-type">Some</span>(err) =&gt; <span class="hljs-type">Js</span>.log(err)\n  }\n);\n\n<span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.end_(conn);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.make ~host:<span class="hljs-string">"127.0.0.1"</span> ~port:<span class="hljs-number">3306</span> ~user:<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Mysql</span>.<span class="hljs-type">Execute</span>.named ~connection:conn ~sql:<span class="hljs-string">"SELECT :x + :y as z"</span>\n    ~placeholders:([%bs.obj { x = <span class="hljs-number">1</span>; y = <span class="hljs-number">2</span> }])\n    (<span class="hljs-keyword">fun</span> err  -&gt;\n       <span class="hljs-keyword">fun</span> rows  -&gt;\n         <span class="hljs-keyword">fun</span> fields  -&gt;\n           <span class="hljs-keyword">match</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt err <span class="hljs-keyword">with</span>\n           | <span class="hljs-type">None</span>  -&gt; (<span class="hljs-type">Js</span>.log rows; <span class="hljs-type">Js</span>.log fields)\n           | ((<span class="hljs-type">Some</span> (err))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log err)\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.end_ conn</code></pre>\n      </div>\n    </div>\n  \n<h5 id="unnamed-placeholders"><a href="#unnamed-placeholders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unnamed Placeholders</h5>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn =\n  <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.make(~host=<span class="hljs-string">"127.0.0.1"</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-type">Mysql</span>.<span class="hljs-type">Execute</span>.unnamed(\n  ~connection=conn,\n  ~sql=<span class="hljs-string">"SELECT 1 + ? + ? as result"</span>,\n  ~placeholders=[|<span class="hljs-number">5</span>, <span class="hljs-number">6</span>|],\n  (err, rows, fields) =&gt;\n  <span class="hljs-keyword">switch</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt(err)) {\n  | <span class="hljs-type">None</span> =&gt;\n    <span class="hljs-type">Js</span>.log(rows);\n    <span class="hljs-type">Js</span>.log(fields);\n  | <span class="hljs-type">Some</span>(err) =&gt; <span class="hljs-type">Js</span>.log(err)\n  }\n);\n\n<span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.end_(conn);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.make ~host:<span class="hljs-string">"127.0.0.1"</span> ~port:<span class="hljs-number">3306</span> ~user:<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Mysql</span>.<span class="hljs-type">Execute</span>.unnamed ~connection:conn ~sql:<span class="hljs-string">"SELECT 1 + ? + ? as result"</span>\n    ~placeholders:[|<span class="hljs-number">5</span>;<span class="hljs-number">6</span>|]\n    (<span class="hljs-keyword">fun</span> err  -&gt;\n       <span class="hljs-keyword">fun</span> rows  -&gt;\n         <span class="hljs-keyword">fun</span> fields  -&gt;\n           <span class="hljs-keyword">match</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Nullable</span>.to_opt err <span class="hljs-keyword">with</span>\n           | <span class="hljs-type">None</span>  -&gt; (<span class="hljs-type">Js</span>.log rows; <span class="hljs-type">Js</span>.log fields)\n           | ((<span class="hljs-type">Some</span> (err))[@explicit_arity ]) -&gt; <span class="hljs-type">Js</span>.log err)\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.end_ conn</code></pre>\n      </div>\n    </div>\n  \n<h3 id="promise-interface"><a href="#promise-interface" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Promise Interface</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> conn =\n  <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.make(~host=<span class="hljs-string">"127.0.0.1"</span>, ~port=<span class="hljs-number">3306</span>, ~user=<span class="hljs-string">"root"</span>, ());\n\n<span class="hljs-comment">/* Here we use the pipe query function (pquery) */</span>\n<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(conn)\n|&gt; <span class="hljs-type">Mysql</span>.<span class="hljs-type">Promise</span>.pquery\n    (~sql=<span class="hljs-string">"SELECT ? as search"</span>, ~placeholders=[|<span class="hljs-string">"%schema"</span>|])\n<span class="hljs-comment">/* Alternatively we could use the normal query method\n|&gt; Js.Promise.then_(Mysql.Promise.query(\n    ~sql="SELECT ? as search",\n    ~placeholders=[|"%something"|]\n  ))\n*/</span>\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_(value =&gt; {\n     <span class="hljs-type">Js</span>.log(value);\n     <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(<span class="hljs-number">1</span>);\n   })\n|&gt; <span class="hljs-type">Mysql</span>.<span class="hljs-type">Promise</span>.<span class="hljs-type">Connection</span>.end_(conn)\n|&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.catch((err: <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.error) =&gt; {\n     <span class="hljs-type">Js</span>.log2(<span class="hljs-string">"Failure!!"</span>, err);\n     <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.end_(conn);\n     <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve(-<span class="hljs-number">1</span>);\n   });</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> conn = <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.make ~host:<span class="hljs-string">"127.0.0.1"</span> ~port:<span class="hljs-number">3306</span> ~user:<span class="hljs-string">"root"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> _ =\n  ((((<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve conn) |&gt;\n       (<span class="hljs-type">Mysql</span>.<span class="hljs-type">Promise</span>.pquery ~sql:<span class="hljs-string">"SELECT ? as search"</span>\n          ~placeholders:[|<span class="hljs-string">"%schema"</span>|]))\n      |&gt;\n      (<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.then_ (<span class="hljs-keyword">fun</span> <span class="hljs-keyword">value</span>  -&gt; <span class="hljs-type">Js</span>.log <span class="hljs-keyword">value</span>; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve <span class="hljs-number">1</span>)))\n     |&gt; (<span class="hljs-type">Mysql</span>.<span class="hljs-type">Promise</span>.<span class="hljs-type">Connection</span>.end_ conn))\n    |&gt;\n    (<span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.catch\n       (<span class="hljs-keyword">fun</span> (err : <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.error)  -&gt;\n          <span class="hljs-type">Js</span>.log2 <span class="hljs-string">"Failure!!"</span> err;\n          <span class="hljs-type">Mysql</span>.<span class="hljs-type">Connection</span>.end_ conn;\n          <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.resolve (-<span class="hljs-number">1</span>)))</code></pre>\n      </div>\n    </div>\n  \n<h2 id="how-do-i-install-it"><a href="#how-do-i-install-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install it?</h2>\n<p>Inside of a BuckleScript project:</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn install --save bs-mysql2</code></pre></div>\n<p>Then add <code>bs-mysql2</code> to your <code>bs-dependencies</code> in <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"bs-mysql2"</span>\n  ]\n}</code></pre></div>\n<h2 id="how-do-i-use-it"><a href="#how-do-i-use-it" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I use it?</h2>\n<h3 id="use-it-in-your-project"><a href="#use-it-in-your-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use it in your project</h3>\n<p>See the <a href="#usage">Usage</a> section above...</p>\n<h3 id="run-the-examples"><a href="#run-the-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run the examples</h3>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn run examples:simple</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn run examples:promise</code></pre></div>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn run examples:prepared-statements</code></pre></div>\n<h2 id="whats-missing"><a href="#whats-missing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What\'s missing?</h2>\n<p>Mostly everything...</p>\n',homepageUrl:"https://github.com/scull7/bs-mysql2",repositoryUrl:"https://github.com/scull7/bs-mysql2",npmUrl:"https://www.npmjs.com/package/bs-mysql2",issuesUrl:"https://github.com/scull7/bs-mysql2/issues",slug:"/package/bs-mysql2"}},pathContext:{id:"bs-mysql2"}}}});
//# sourceMappingURL=path---package-bs-mysql-2-af1a64429a376febf614.js.map