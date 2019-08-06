webpackJsonp([96041596009105],{1417:function(s,a){s.exports={data:{package:{type:"unpublished",id:"unpublished/MargaretKrutikova/reason-react-elmish",name:"MargaretKrutikova/reason-react-elmish",version:"0.1.0",category:"library",flags:[],platforms:["browser"],description:"Elmish architecture for reason-react",keywords:["state management","react"],license:"MIT",updated:"2019-08-06T12:23:07.091Z",stars:0,score:0,quality:0,popularity:0,maintenance:0,readme:'<h1 id="reason-react-elmish"><a href="#reason-react-elmish" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>reason-react-elmish</h1>\n<p>The library attempts to implement the "model-update" part of the "model-view-update" elm architecture, leveraging React as the "view" part and implementing the missing part of state and effect management.</p>\n<p>🚧 Very much under development and as WIP as it can get 🚧</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Can be installed via:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install <span class="hljs-string">"https://github.com/MargaretKrutikova/reason-react-elmish"</span></code></pre></div>\n<p>and added to bsconfig.json:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"reason-react-elmish"</span>\n]</code></pre></div>\n<p>Peer dependencies are <code>react</code>, <code>reason-react</code> and <code>bs-platform</code>.</p>\n<h2 id="example-usage"><a href="#example-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example usage</h2>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Config</span> = </span>{\n  <span class="hljs-keyword">type</span> message =\n    | <span class="hljs-type">Click</span>\n    | <span class="hljs-type">Success</span>\n    | <span class="hljs-type">Error</span>;\n\n  <span class="hljs-keyword">type</span> model = {\n    <span class="hljs-built_in">count</span>: int,\n    result: option(bool),\n  };\n\n  <span class="hljs-keyword">let</span> makeApiCall = dispatch =&gt; {\n    <span class="hljs-keyword">let</span> test = <span class="hljs-type">Js</span>.<span class="hljs-type">Math</span>.random_int(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>);\n    <span class="hljs-keyword">if</span> (test == <span class="hljs-number">1</span>) {\n      dispatch(<span class="hljs-type">Success</span>);\n    } <span class="hljs-keyword">else</span> {\n      dispatch(<span class="hljs-type">Error</span>);\n    };\n    <span class="hljs-type">None</span>;\n  };\n\n  <span class="hljs-keyword">let</span> update = (model, message) =&gt; {\n    <span class="hljs-keyword">switch</span> (message) {\n    | <span class="hljs-type">Click</span> =&gt; ({...model, <span class="hljs-built_in">count</span>: model.<span class="hljs-built_in">count</span> + <span class="hljs-number">1</span>}, <span class="hljs-type">Some</span>(makeApiCall))\n    | <span class="hljs-type">Success</span> =&gt; ({...model, result: <span class="hljs-type">Some</span>(<span class="hljs-literal">true</span>)}, <span class="hljs-type">None</span>)\n    | <span class="hljs-type">Error</span> =&gt; ({...model, result: <span class="hljs-type">Some</span>(<span class="hljs-literal">false</span>)}, <span class="hljs-type">None</span>)\n    };\n  };\n\n  <span class="hljs-keyword">let</span> initialState = ({<span class="hljs-built_in">count</span>: <span class="hljs-number">0</span>, result: <span class="hljs-type">None</span>}, <span class="hljs-type">None</span>);\n};\n\n<span class="hljs-keyword">include</span> <span class="hljs-type">Elmish</span>.<span class="hljs-type">Make</span>({\n  <span class="hljs-keyword">type</span> model = <span class="hljs-type">Config</span>.model;\n  <span class="hljs-keyword">type</span> message = <span class="hljs-type">Config</span>.message;\n\n  <span class="hljs-keyword">let</span> update = <span class="hljs-type">Config</span>.update;\n  <span class="hljs-keyword">let</span> storeEnhancer = <span class="hljs-type">None</span>;\n  <span class="hljs-keyword">let</span> initialState = <span class="hljs-type">Config</span>.initialState;\n});</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">Config</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">type</span> message =\n      | <span class="hljs-type">Click</span>\n      | <span class="hljs-type">Success</span>\n      | <span class="hljs-type">Error</span>\n    <span class="hljs-keyword">type</span> model = {\n      count: <span class="hljs-built_in">int</span>;\n      result: <span class="hljs-built_in">bool</span> option;}\n    <span class="hljs-keyword">let</span> makeApiCall dispatch =\n      <span class="hljs-keyword">let</span> test = <span class="hljs-type">Js</span>.<span class="hljs-type">Math</span>.random_int <span class="hljs-number">0</span> <span class="hljs-number">2</span> <span class="hljs-keyword">in</span>\n      <span class="hljs-keyword">if</span> test = <span class="hljs-number">1</span> <span class="hljs-keyword">then</span> dispatch <span class="hljs-type">Success</span> <span class="hljs-keyword">else</span> dispatch <span class="hljs-type">Error</span>; <span class="hljs-type">None</span>\n    <span class="hljs-keyword">let</span> update model message =\n      <span class="hljs-keyword">match</span> message <span class="hljs-keyword">with</span>\n      | <span class="hljs-type">Click</span>  -&gt;\n          ({ model <span class="hljs-keyword">with</span> count = (model.count + <span class="hljs-number">1</span>) },\n            ((<span class="hljs-type">Some</span> (makeApiCall))[@explicit_arity ]))\n      | <span class="hljs-type">Success</span>  -&gt;\n          ({ model <span class="hljs-keyword">with</span> result = ((<span class="hljs-type">Some</span> (<span class="hljs-literal">true</span>))[@explicit_arity ]) }, <span class="hljs-type">None</span>)\n      | <span class="hljs-type">Error</span>  -&gt;\n          ({ model <span class="hljs-keyword">with</span> result = ((<span class="hljs-type">Some</span> (<span class="hljs-literal">false</span>))[@explicit_arity ]) }, <span class="hljs-type">None</span>)\n    <span class="hljs-keyword">let</span> initialState = ({ count = <span class="hljs-number">0</span>; result = <span class="hljs-type">None</span> }, <span class="hljs-type">None</span>)\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">include</span>\n  <span class="hljs-type">Elmish</span>.<span class="hljs-type">Make</span>(<span class="hljs-keyword">struct</span>\n                <span class="hljs-keyword">type</span> model = <span class="hljs-type">Config</span>.model\n                <span class="hljs-keyword">type</span> message = <span class="hljs-type">Config</span>.message\n                <span class="hljs-keyword">let</span> update = <span class="hljs-type">Config</span>.update\n                <span class="hljs-keyword">let</span> storeEnhancer = <span class="hljs-type">None</span>\n                <span class="hljs-keyword">let</span> initialState = <span class="hljs-type">Config</span>.initialState\n              <span class="hljs-keyword">end</span>)</code></pre>\n      </div>\n    </div>\n  \n<p>See example file <a href="./examples/AppStore.re"><code>./examples/AppStore.re</code></a>.</p>\n<h2 id="run-examples"><a href="#run-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Run examples</h2>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code>npm install\nnpm start\n<span class="hljs-comment"># in another tab</span>\nnpm run watch:bs</code></pre></div>\n',homepageUrl:"https://github.com/MargaretKrutikova/reason-react-elmish",repositoryUrl:"https://github.com/MargaretKrutikova/reason-react-elmish",npmUrl:null,issuesUrl:"https://github.com/MargaretKrutikova/reason-react-elmish/issues",slug:"/package/unpublished/MargaretKrutikova/reason-react-elmish"}},pathContext:{id:"unpublished/MargaretKrutikova/reason-react-elmish"}}}});
//# sourceMappingURL=path---package-unpublished-margaret-krutikova-reason-react-elmish-f762870976f3da620e32.js.map