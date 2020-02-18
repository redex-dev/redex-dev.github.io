webpackJsonp([0xac9b57389d41],{1297:function(s,a){s.exports={data:{package:{type:"published",id:"bs-validation",name:"bs-validation",version:"2.0.0",category:"library",flags:[],platforms:["any"],description:"BucklesScript bindings to the validationjs library",keywords:["utilities","form validation"],license:"MIT",updated:"2020-01-31T01:21:25.864Z",stars:2,score:.6425318274072656,quality:.9479450555351214,popularity:.023342974816848983,maintenance:.9999379130309485,readme:'<p><a href="https://www.travis-ci.org/scull7/bs-validation"><img src="https://www.travis-ci.org/scull7/bs-validation.svg?branch=master" alt="Build Status"></a>\n<a href="https://coveralls.io/github/scull7/bs-validation?branch=master"><img src="https://coveralls.io/repos/github/scull7/bs-validation/badge.svg?branch=master" alt="Coverage Status"></a></p>\n<h1 id="bs-validation"><a href="#bs-validation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-validation</h1>\n<p>A BuckleScript implementation of the <a href="http://folktale.origamitower.com/">Folktale</a>\n<a href="http://folktale.origamitower.com/api/v2.1.0/en/folktale.validation.html">validation</a> applicative</p>\n<p><strong><em>NOTE:</em></strong> These are <strong><em>not</em></strong> bindings, this a ReasonML implementation of the\n<code>Validation</code> applicative.</p>\n<h2 id="why"><a href="#why" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why?</h2>\n<p>I wanted a way to do validations for my server side project.</p>\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>Not all of the <a href="http://folktale.origamitower.com/api/v2.1.0/en/folktale.validation.html">Folktale/Validation</a> functions will be\nimplemented. Here is a list of the currently implemented functions:</p>\n<ul>\n<li class="task-list-item"><input type="checkbox" checked disabled> map</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> apply</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> unsafeGet</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> getOrElse</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> orElse</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> concat</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> fold</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> swap</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> bimap</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> mapFailure</li>\n<li class="task-list-item"><input type="checkbox" checked disabled> toOption</li>\n<li class="task-list-item"><input type="checkbox" disabled> <del>merge</del> <em>see note in the code.</em></li>\n</ul>\n<p>All implemented functions are found in <code>src/Validation.re</code>, They are all\ndocumented with their <a href="http://folktale.origamitower.com/">Folktale</a> style doc strings.</p>\n<h2 id="how-do-i-install"><a href="#how-do-i-install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I install?</h2>\n<ol>\n<li>\n<p>Add the <a href="https://www.npmjs.com/package/bs-validation">bs-validation</a> package to your project.</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>yarn add bs-validation</code></pre></div>\n</li>\n<li>\n<p>Add <code>bs-validation</code> to your <code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"dependencies"</span>: [ <span class="hljs-string">"bs-validation"</span> ]\n}</code></pre></div>\n</li>\n<li>Enjoy!</li>\n</ol>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>The library is exposed as a functor which accepts modules that implement the\nfollowing type interface:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">type</span> <span class="hljs-title">Foldable</span> = </span>{\n  <span class="hljs-keyword">type</span> t(\'a);\n  <span class="hljs-keyword">let</span> concat: (t(\'a), t(\'a)) =&gt; t(\'a);\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-keyword">type</span> <span class="hljs-type">Foldable</span>  = <span class="hljs-keyword">sig</span> <span class="hljs-keyword">type</span> <span class="hljs-symbol">\'a</span> t <span class="hljs-keyword">val</span> concat : <span class="hljs-symbol">\'a</span> t -&gt; <span class="hljs-symbol">\'a</span> t -&gt; <span class="hljs-symbol">\'a</span> t <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n<p>All of the examples use an array based implementation of the <code>Foldable</code> type:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">FoldableArray</span> = </span>{\n  <span class="hljs-keyword">type</span> t(\'a) = array(\'a);\n  <span class="hljs-keyword">let</span> concat = (x, y) =&gt; <span class="hljs-type">Belt_Array</span>.concat(x, y);\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">FoldableArray</span> =\n  <span class="hljs-keyword">struct</span> <span class="hljs-keyword">type</span> <span class="hljs-symbol">\'a</span> t = <span class="hljs-symbol">\'a</span> <span class="hljs-built_in">array</span>\n         <span class="hljs-keyword">let</span> concat x y = <span class="hljs-type">Belt_Array</span>.concat x y <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n<p>You import the module into your project by calling the <code>Validation</code> functor\nwith your version of the <code>Foldable</code> type.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">V</span> = <span class="hljs-title">Validation</span>.<span class="hljs-title">Make_validation</span>(<span class="hljs-title">FoldableArray</span>);</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">V</span> = <span class="hljs-type">Validation</span>.<span class="hljs-type">Make_validation</span>(<span class="hljs-type">FoldableArray</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>Then you can use it to validate all of your things!</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> lengthError = <span class="hljs-string">"Password must have more than 6 characters."</span>;\n<span class="hljs-keyword">let</span> strengthError = <span class="hljs-string">"Password must contain a special character."</span>;\n\n<span class="hljs-keyword">let</span> isPasswordLongEnough = (password) =&gt;\n  <span class="hljs-type">String</span>.length(password) &gt; <span class="hljs-number">6</span>\n    ? <span class="hljs-type">V</span>.<span class="hljs-type">Success</span>(password)\n    : <span class="hljs-type">V</span>.<span class="hljs-type">Failure</span>([|lengthError|]);\n\n<span class="hljs-keyword">let</span> isPasswordStrongEnough = (password) =&gt; {\n  <span class="hljs-keyword">let</span> regex = [%bs.re <span class="hljs-string">"/[\\\\W]/"</span>];\n  <span class="hljs-type">Js</span>.<span class="hljs-type">Re</span>.test(password, regex)\n    ? <span class="hljs-type">V</span>.<span class="hljs-type">Success</span>(password)\n    : <span class="hljs-type">V</span>.<span class="hljs-type">Failure</span>([|strengthError|])\n};\n\n<span class="hljs-keyword">let</span> isPasswordValid = (password) =&gt; {\n  <span class="hljs-type">V</span>.<span class="hljs-type">Success</span>()\n  |&gt; <span class="hljs-type">V</span>.concat(isPasswordLongEnough(password))\n  |&gt; <span class="hljs-type">V</span>.concat(isPasswordStrongEnough(password))\n  |&gt; <span class="hljs-type">V</span>.<span class="hljs-built_in">map</span>((<span class="hljs-number">_</span>) =&gt;password)\n};\n\n\ndescribe(<span class="hljs-string">"Folketale password validation example"</span>, () =&gt; {\n  test(<span class="hljs-string">"should return the password"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> password = <span class="hljs-string">"rosesarered$andstuff"</span>;\n    <span class="hljs-keyword">switch</span> (isPasswordValid(password)) {\n    | <span class="hljs-type">Failure</span>(f) =&gt; { <span class="hljs-type">Js</span>.log(f); fail(<span class="hljs-string">"unexpected_failure"</span>) }\n    | <span class="hljs-type">Success</span>(p) =&gt; <span class="hljs-type">Expect</span>.expect(p) |&gt; <span class="hljs-type">Expect</span>.toBe(password)\n    }\n  });\n\n  test(<span class="hljs-string">"should return a single item failure"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> password = <span class="hljs-string">"rosesarered"</span>;\n    <span class="hljs-keyword">switch</span> (isPasswordValid(password)) {\n    | <span class="hljs-type">Failure</span>(f) =&gt; <span class="hljs-type">Expect</span>.expect(f) |&gt; <span class="hljs-type">Expect</span>.toBeSupersetOf([|strengthError|])\n    | <span class="hljs-type">Success</span>(<span class="hljs-number">_</span>) =&gt; fail(<span class="hljs-string">"unexpected_success"</span>)\n    }\n  });\n\n  test(<span class="hljs-string">"should return 2 items in the failure list"</span>, () =&gt; {\n    <span class="hljs-keyword">let</span> password = <span class="hljs-string">"foo"</span>;\n    <span class="hljs-keyword">switch</span> (isPasswordValid(password)) {\n    | <span class="hljs-type">Failure</span>(f) =&gt; {\n        <span class="hljs-type">Expect</span>.expect(f)\n        |&gt; <span class="hljs-type">Expect</span>.toBeSupersetOf([|lengthError, strengthError|])\n      }\n    | <span class="hljs-type">Success</span>(<span class="hljs-number">_</span>) =&gt; fail(<span class="hljs-string">"unexpected_success"</span>)\n    }\n  });\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> lengthError = <span class="hljs-string">"Password must have more than 6 characters."</span>\n<span class="hljs-keyword">let</span> strengthError = <span class="hljs-string">"Password must contain a special character."</span>\n<span class="hljs-keyword">let</span> isPasswordLongEnough password =\n  <span class="hljs-keyword">match</span> (<span class="hljs-type">String</span>.length password) &gt; <span class="hljs-number">6</span> <span class="hljs-keyword">with</span>\n  | <span class="hljs-literal">true</span>  -&gt; ((<span class="hljs-type">V</span>.<span class="hljs-type">Success</span> (password))[@explicit_arity ])\n  | <span class="hljs-literal">false</span>  -&gt; ((<span class="hljs-type">V</span>.<span class="hljs-type">Failure</span> ([|lengthError|]))[@explicit_arity ])\n<span class="hljs-keyword">let</span> isPasswordStrongEnough password =\n  <span class="hljs-keyword">let</span> regex = [%bs.re <span class="hljs-string">"/[\\\\W]/"</span>] <span class="hljs-keyword">in</span>\n  <span class="hljs-keyword">match</span> <span class="hljs-type">Js</span>.<span class="hljs-type">Re</span>.test password regex <span class="hljs-keyword">with</span>\n  | <span class="hljs-literal">true</span>  -&gt; ((<span class="hljs-type">V</span>.<span class="hljs-type">Success</span> (password))[@explicit_arity ])\n  | <span class="hljs-literal">false</span>  -&gt; ((<span class="hljs-type">V</span>.<span class="hljs-type">Failure</span> ([|strengthError|]))[@explicit_arity ])\n<span class="hljs-keyword">let</span> isPasswordValid password =\n  ((((<span class="hljs-type">V</span>.<span class="hljs-type">Success</span> (<span class="hljs-literal">()</span>))[@explicit_arity ]) |&gt;\n      (<span class="hljs-type">V</span>.concat (isPasswordLongEnough password)))\n     |&gt; (<span class="hljs-type">V</span>.concat (isPasswordStrongEnough password)))\n    |&gt; (<span class="hljs-type">V</span>.map (<span class="hljs-keyword">fun</span> _  -&gt; password))\n<span class="hljs-keyword">let</span> _ =\n  describe <span class="hljs-string">"Folketale password validation example"</span>\n    (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n       test <span class="hljs-string">"should return the password"</span>\n         (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n            <span class="hljs-keyword">let</span> password = <span class="hljs-string">"rosesarered$andstuff"</span> <span class="hljs-keyword">in</span>\n            <span class="hljs-keyword">match</span> isPasswordValid password <span class="hljs-keyword">with</span>\n            | ((<span class="hljs-type">Failure</span> (f))[@explicit_arity ]) -&gt;\n                (<span class="hljs-type">Js</span>.log f; fail <span class="hljs-string">"unexpected_failure"</span>)\n            | ((<span class="hljs-type">Success</span> (p))[@explicit_arity ]) -&gt;\n                (<span class="hljs-type">Expect</span>.expect p) |&gt; (<span class="hljs-type">Expect</span>.toBe password));\n       test <span class="hljs-string">"should return a single item failure"</span>\n         (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n            <span class="hljs-keyword">let</span> password = <span class="hljs-string">"rosesarered"</span> <span class="hljs-keyword">in</span>\n            <span class="hljs-keyword">match</span> isPasswordValid password <span class="hljs-keyword">with</span>\n            | ((<span class="hljs-type">Failure</span> (f))[@explicit_arity ]) -&gt;\n                (<span class="hljs-type">Expect</span>.expect f) |&gt;\n                  (<span class="hljs-type">Expect</span>.toBeSupersetOf [|strengthError|])\n            | <span class="hljs-type">Success</span> _ -&gt; fail <span class="hljs-string">"unexpected_success"</span>);\n       test <span class="hljs-string">"should return 2 items in the failure list"</span>\n         (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n            <span class="hljs-keyword">let</span> password = <span class="hljs-string">"foo"</span> <span class="hljs-keyword">in</span>\n            <span class="hljs-keyword">match</span> isPasswordValid password <span class="hljs-keyword">with</span>\n            | ((<span class="hljs-type">Failure</span> (f))[@explicit_arity ]) -&gt;\n                (<span class="hljs-type">Expect</span>.expect f) |&gt;\n                  (<span class="hljs-type">Expect</span>.toBeSupersetOf [|lengthError;strengthError|])\n            | <span class="hljs-type">Success</span> _ -&gt; fail <span class="hljs-string">"unexpected_success"</span>))</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/scull7/bs-validation",repositoryUrl:"https://github.com/scull7/bs-validation",npmUrl:"https://www.npmjs.com/package/bs-validation",issuesUrl:"https://github.com/scull7/bs-validation/issues",slug:"/package/bs-validation"}},pathContext:{id:"bs-validation"}}}});
//# sourceMappingURL=path---package-bs-validation-77f8d187ab05368619f0.js.map