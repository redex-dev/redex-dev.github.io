webpackJsonp([92397246558241],{1366:function(s,e){s.exports={data:{package:{type:"published",id:"reason-maybe",name:"reason-maybe",version:"0.3.0",category:"library",flags:[],platforms:["any"],description:"A simple Maybe library in Reason.",keywords:["utilities"],license:"MIT",updated:"2020-01-05T18:51:24.633Z",stars:6,score:.3573794461053561,quality:.5091078103567018,popularity:.026594048447497593,maintenance:.5581119601192039,readme:'<h1 id="reason-maybe"><a href="#reason-maybe" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reason-maybe</h1>\n<p>A simple Maybe library in Reason.</p>\n<p><a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/gluten-free.svg" alt="forthebadge"></a>\n<a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="forthebadge"></a></p>\n<p><a href="https://reasonml.github.io/"><img src="https://img.shields.io/badge/Made%20with-Reason-red.svg?longCache=true&#x26;style=for-the-badge" alt="Made with Reason"></a></p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<ul>\n<li>Install <a href="https://yarnpkg.com">Yarn</a>.</li>\n<li>Run <code>yarn add reason-maybe</code>.</li>\n<li>Add <code>reason-maybe</code> to your <code>bs-dependencies</code> in <code>bsconfig.json</code></li>\n</ul>\n<p><strong><code>bsconfig.json</code></strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"reason-maybe"</span>\n]</code></pre></div>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="from"><a href="#from" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>from</code></h3>\n<p>To create a Maybe use <code>Maybe.from</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> one = <span class="hljs-type">Maybe</span>.from(<span class="hljs-type">Some</span>(<span class="hljs-number">1</span>)); <span class="hljs-comment">/* Just(1) */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> one = <span class="hljs-type">Maybe</span>.from ((<span class="hljs-type">Some</span> (<span class="hljs-number">1</span>))[@explicit_arity ])</code></pre>\n      </div>\n    </div>\n  \n<h3 id="map"><a href="#map" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>map</code></h3>\n<p>To map a function on the Maybe, use <code>Maybe.map</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> plusOne = x =&gt; x + <span class="hljs-number">1</span>;\n<span class="hljs-keyword">let</span> onePlusOne = one |&gt; <span class="hljs-type">Maybe</span>.<span class="hljs-built_in">map</span>(plusOne); <span class="hljs-comment">/* Just(2) */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> plusOne x = x + <span class="hljs-number">1</span>\n<span class="hljs-keyword">let</span> onePlusOne = one |&gt; (<span class="hljs-type">Maybe</span>.map plusOne)</code></pre>\n      </div>\n    </div>\n  \n<p>Alternatively, you can import the equivalent infix operator <code>||></code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> (||&gt;) = <span class="hljs-type">Maybe</span>.(||&gt;);\n\n<span class="hljs-keyword">let</span> onePlusOne = one ||&gt; plusOne; <span class="hljs-comment">/* Just(2) */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> (||&gt;) = <span class="hljs-type">Maybe</span>.(||&gt;)\n<span class="hljs-keyword">let</span> onePlusOne = one ||&gt; plusOne</code></pre>\n      </div>\n    </div>\n  \n<p>If the map operation provides a value, it will return <code>Just(value)</code>. Else, it will return a <code>Nothing</code>.</p>\n<h3 id="value"><a href="#value" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>value</code></h3>\n<p>To extract the value of the Maybe, we need to use <code>Maybe.value</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> value = onePlusOne |&gt; <span class="hljs-type">Maybe</span>.value(<span class="hljs-number">0</span>); <span class="hljs-comment">/* 2 */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> <span class="hljs-keyword">value</span> = onePlusOne |&gt; (<span class="hljs-type">Maybe</span>.<span class="hljs-keyword">value</span> <span class="hljs-number">0</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>Alternatively, you can import the equivalent infix operator <code>>|</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> (&gt;|) = <span class="hljs-type">Maybe</span>.(&gt;|);\n\n<span class="hljs-keyword">let</span> value = onePlusOne &gt;| <span class="hljs-number">0</span>; <span class="hljs-comment">/* 2 */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> (&gt;|) = <span class="hljs-type">Maybe</span>.(&gt;|)\n<span class="hljs-keyword">let</span> <span class="hljs-keyword">value</span> = onePlusOne &gt;| <span class="hljs-number">0</span></code></pre>\n      </div>\n    </div>\n  \n<p>If the Maybe was actually a <code>Nothing</code>, the value given to the <code>Maybe.value</code> function will be the resulting value.\nIn this case if <code>onePlusOne</code> was <code>Nothing</code>, the value of <code>value</code> would be <code>0</code>.</p>\n<h3 id="chain"><a href="#chain" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>chain</code></h3>\n<p>To run a function that returns a Maybe on a Maybe, we use <code>Maybe.chain</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> two = <span class="hljs-type">Maybe</span>.from(<span class="hljs-type">Some</span>(<span class="hljs-number">2</span>));\n<span class="hljs-keyword">let</span> plusOneMaybe = x =&gt; one |&gt; <span class="hljs-type">Maybe</span>.<span class="hljs-built_in">map</span>(y =&gt; x + y);\n<span class="hljs-keyword">let</span> twoPlusOneMaybe = two |&gt; <span class="hljs-type">Maybe</span>.chain(plusOneMaybe); <span class="hljs-comment">/* Just(3) */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> two = <span class="hljs-type">Maybe</span>.from ((<span class="hljs-type">Some</span> (<span class="hljs-number">2</span>))[@explicit_arity ])\n<span class="hljs-keyword">let</span> plusOneMaybe x = one |&gt; (<span class="hljs-type">Maybe</span>.map (<span class="hljs-keyword">fun</span> y  -&gt; x + y))\n<span class="hljs-keyword">let</span> twoPlusOneMaybe = two |&gt; (<span class="hljs-type">Maybe</span>.chain plusOneMaybe)</code></pre>\n      </div>\n    </div>\n  \n<p>Alternatively, you can import the equivalent infix operator <code>|||></code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> (|||&gt;) = <span class="hljs-type">Maybe</span>.(|||&gt;);\n\n<span class="hljs-keyword">let</span> twoPlusOneMaybe = two |||&gt; plusOneMaybe; <span class="hljs-comment">/* Just(3) */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> (|||&gt;) = <span class="hljs-type">Maybe</span>.(|||&gt;)\n<span class="hljs-keyword">let</span> twoPlusOneMaybe = two |||&gt; plusOneMaybe</code></pre>\n      </div>\n    </div>\n  \n<p>We use the <code>plusOneMaybe</code> function which returns a Maybe on the <code>two</code> Maybe.\nInstead of <code>Maybe.map</code>, we use <code>Maybe.chain</code> to lift it from the returned Maybe unto the current Maybe.</p>\n<h3 id="branch"><a href="#branch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>branch</code></h3>\n<p>If the Maybe has turned into a Nothing and you want to handle that, you can use <code>Maybe.branch</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> addToRoute = s =&gt; x =&gt;\n  <span class="hljs-keyword">switch</span> s {\n    | <span class="hljs-string">""</span> =&gt; <span class="hljs-type">Maybe</span>.<span class="hljs-type">Nothing</span>\n    | v =&gt; <span class="hljs-type">Maybe</span>.<span class="hljs-type">Just</span>(x ++ v)\n  }\n;\n<span class="hljs-keyword">let</span> noslug = () =&gt; <span class="hljs-string">"/not_found"</span>;\n<span class="hljs-keyword">let</span> hasslug = v =&gt; v\n<span class="hljs-keyword">let</span> getArticleRoute = slug =&gt; <span class="hljs-type">Maybe</span>.from(<span class="hljs-type">Some</span>(<span class="hljs-string">"/articles/"</span>))\n  |&gt; <span class="hljs-type">Maybe</span>.chain(addToRoute(slug))\n  |&gt; <span class="hljs-type">Maybe</span>.branch(noslug, hasslug)\n  |&gt; <span class="hljs-type">Maybe</span>.value(<span class="hljs-string">"/articles"</span>);\n\n<span class="hljs-keyword">let</span> validArticleRoute = getArticleRoute(<span class="hljs-string">"awesome"</span>);\n<span class="hljs-type">Js</span>.log(validArticleRoute); <span class="hljs-comment">/* /articles/awesome */</span>\n\n<span class="hljs-keyword">let</span> invalidArticleRoute = getArticleRoute(<span class="hljs-string">""</span>);\n<span class="hljs-type">Js</span>.log(invalidArticleRoute); <span class="hljs-comment">/* /not_found */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>Alternatively, you can import the equivalent infix operator <code>&#x3C;-></code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> (&lt;-&gt;) = <span class="hljs-type">Maybe</span>.(&lt;-&gt;);\n<span class="hljs-keyword">let</span> (|||&gt;) = <span class="hljs-type">Maybe</span>.(|||&gt;);\n<span class="hljs-keyword">let</span> (&gt;|) = <span class="hljs-type">Maybe</span>.(&gt;|);\n\n<span class="hljs-comment">/* Previously defined functions here */</span>\n\n<span class="hljs-keyword">let</span> getArticleRoute = slug =&gt;\n    <span class="hljs-type">Maybe</span>.from(<span class="hljs-type">Some</span>(<span class="hljs-string">"/articles/"</span>))\n        |||&gt; addToRoute(slug)\n        |&gt; (noslug &lt;-&gt; hasslug)\n        &gt;| <span class="hljs-string">"/articles"</span>\n;\n\n<span class="hljs-keyword">let</span> validArticleRoute = getArticleRoute(<span class="hljs-string">"awesome"</span>);\n<span class="hljs-type">Js</span>.log(validArticleRoute); <span class="hljs-comment">/* /articles/awesome */</span>\n\n<span class="hljs-keyword">let</span> invalidArticleRoute = getArticleRoute(<span class="hljs-string">""</span>);\n<span class="hljs-type">Js</span>.log(invalidArticleRoute); <span class="hljs-comment">/* /not_found */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> (&lt;-&gt;) = <span class="hljs-type">Maybe</span>.(&lt;-&gt;)\n<span class="hljs-keyword">let</span> (|||&gt;) = <span class="hljs-type">Maybe</span>.(|||&gt;)\n<span class="hljs-keyword">let</span> (&gt;|) = <span class="hljs-type">Maybe</span>.(&gt;|)\n<span class="hljs-keyword">let</span> getArticleRoute slug =\n  (((<span class="hljs-type">Maybe</span>.from ((<span class="hljs-type">Some</span> (<span class="hljs-string">"/articles/"</span>))[@explicit_arity ])) |||&gt;\n      (addToRoute slug))\n     |&gt; (noslug &lt;-&gt; hasslug))\n    &gt;| <span class="hljs-string">"/articles"</span>\n<span class="hljs-keyword">let</span> validArticleRoute = getArticleRoute <span class="hljs-string">"awesome"</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log validArticleRoute\n<span class="hljs-keyword">let</span> invalidArticleRoute = getArticleRoute <span class="hljs-string">""</span>\n<span class="hljs-keyword">let</span> _ = <span class="hljs-type">Js</span>.log invalidArticleRoute</code></pre>\n      </div>\n    </div>\n  \n<p>This form is less readable but more terse yields the same result.</p>\n<h2 id="development"><a href="#development" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development</h2>\n<ol>\n<li>Clone this repo.</li>\n<li>Move to this directory with <code>cd reason-maybe</code>.</li>\n<li>Install <a href="https://yarnpkg.com">Yarn</a>.</li>\n<li>Run <code>yarn</code>.</li>\n</ol>\n<h3 id="build"><a href="#build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run build</code></pre></div>\n<h3 id="build--watch"><a href="#build--watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Build + Watch</h3>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>npm run start</code></pre></div>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>MIT</p>\n',homepageUrl:"https://www.npmjs.com/package/reason-maybe",repositoryUrl:"https://github.com/johnpaulada/reason-maybe",npmUrl:"https://www.npmjs.com/package/reason-maybe",issuesUrl:null,slug:"/package/reason-maybe"}},pathContext:{id:"reason-maybe"}}}});
//# sourceMappingURL=path---package-reason-maybe-841628c63b342bb67d34.js.map