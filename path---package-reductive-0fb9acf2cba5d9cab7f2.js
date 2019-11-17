webpackJsonp([0xc86e549f8fbf],{1377:function(e,s){e.exports={data:{package:{type:"published",id:"reductive",name:"reductive",version:"2.0.1",category:"library",flags:["neglected"],platforms:["browser","node"],description:"Redux in Reason",keywords:["state management","react"],license:"MIT",updated:"2019-11-14T05:13:57.232Z",stars:318,score:.6273793157151906,quality:.8052124465188206,popularity:.10239495293673875,maintenance:.9999352806619595,readme:'<h1 id="reductive"><a href="#reductive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reductive</h1>\n<p>Reductive, like <a href="https://github.com/reactjs/redux">redux</a>, is a predictable\nstate container for <a href="https://github.com/facebook/reason">Reason</a> applications.\nIts scope goes beyond that of managing state for a single component, and\nconcerns the application as a whole.</p>\n<h2 id="use-case"><a href="#use-case" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use case</h2>\n<p>For simpler use cases, it might be sufficient with the <a href="https://reactjs.org/docs/hooks-reference.html#usereducer"><code>useReducer</code></a> hook to manage state on a component level, or combining this approach with react <a href="https://reactjs.org/docs/context.html">context</a> to allow components deeper in the tree receive updates via <code>useContext</code> hook. For more, see <a href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">you might not need redux</a>, especially so in a language which provides good enough construction blocks out of the box.</p>\n<p>The mentioned approach, however, doesn\'t allow to subscribe to only part of the global state, resulting in all subscribed components re-render any time something in the state changes (even if they are not interested in particular updates). This is a known issue and occurs since there is no bail-out mechanism inside <code>useContext</code>,\nsee <a href="https://github.com/facebook/react/issues/14110">long github thread</a> for a really deep insight.</p>\n<p>This might not be a problem for many applications, or might become a one for the others. <code>reductive</code> exposes <code>useSelector</code> hook, that makes sure only the components interested in a particular update are re-rendered, and not the rest.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Install via:</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>$ npm install --save reductive</code></pre></div>\n<p>and add it to <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-sh"><code><span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"reductive"</span>]</code></pre></div>\n<h2 id="hooks"><a href="#hooks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Hooks</h2>\n<p><code>ReasonReact</code> version 0.7.0 has added <a href="https://reasonml.github.io/reason-react/blog/2019/04/10/react-hooks">support</a> for react hooks and <code>reductive</code> now includes a set of hooks to subscribe to the store and dispatch actions. With the new hooks there is no need to use <code>Lense</code>s that wrap components, which results in simpler and cleaner code with a flat component tree. Moreover, the new hooks API is <a href="https://github.com/facebook/react/tree/master/packages/use-subscription#use-subscription">safe to use in concurrent mode</a>.</p>\n<p>The <code>Lense</code> API is still available, since there is support for the old <code>jsx</code> and reducer style components, but is marked as deprecated, since the old <code>jsx</code> syntax is also <a href="https://reasonml.github.io/reason-react/docs/en/jsx-2">deprecated</a> in the <code>reason-react</code> docs. The preferred way of using <code>reductive</code> is via the new hooks API.</p>\n<h3 id="requirements"><a href="#requirements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Requirements</h3>\n<p>The new hooks API is built on top of the existing <code>react</code> hooks. In order to use hooks in <code>ReasonReact</code>, you have to use the <a href="https://reasonml.github.io/reason-react/blog/2019/04/10/react-hooks">new jsx</a> syntax for <code>ReasonReact</code> components and <code>^5.0.4</code> or <code>^6.0.1</code> of <code>bs-platform</code>.</p>\n<p>New projects will use the latest <code>jsx</code> version by default at the <a href="https://reasonml.github.io/reason-react/docs/en/jsx#application-level">application level</a> by having <code>"react-jsx": 3</code> in <code>bsconfig.json</code>. Existing projects can be gradually converted using <code>[@bs.config {jsx: 3}]</code> to enable the new version at the <a href="https://reasonml.github.io/reason-react/docs/en/jsx#file-level">file level</a>.</p>\n<h3 id="setup-store-and-context-provider"><a href="#setup-store-and-context-provider" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup store and context provider</h3>\n<p>The new hooks API makes use of react <code>context</code> to make the store available to all nested components. You will need to create a store, implement a module with\ncontext provider and hooks, and render the provider at the top of the component tree.</p>\n<p>First, define the state and action types and reducer for your application, and create a store:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> appState = { counter: int };\n<span class="hljs-keyword">type</span> appAction =\n  | <span class="hljs-type">Increment</span>\n  | <span class="hljs-type">Decrement</span>;\n\n<span class="hljs-keyword">let</span> appReducer = (state, action) =&gt; ...;\n<span class="hljs-keyword">let</span> appStore =\n  <span class="hljs-type">Reductive</span>.<span class="hljs-type">Store</span>.create(\n    ~reducer=appReducer,\n    ~preloadedState={counter: <span class="hljs-number">0</span>},\n    (),\n  );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">937</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>Then create a customized version of the context and hooks for your application:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">AppStore</span> = </span>{\n  <span class="hljs-keyword">include</span> <span class="hljs-type">ReductiveContext</span>.<span class="hljs-type">Make</span>({\n    <span class="hljs-keyword">type</span> action = appAction;\n    <span class="hljs-keyword">type</span> state = appState;\n\n    <span class="hljs-keyword">let</span> store = appStore;\n  });\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">AppStore</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">include</span>\n      <span class="hljs-type">ReductiveContext</span>.<span class="hljs-type">Make</span>(<span class="hljs-keyword">struct</span>\n                              <span class="hljs-keyword">type</span> action = appAction\n                              <span class="hljs-keyword">type</span> state = appState\n                              <span class="hljs-keyword">let</span> store = appStore\n                            <span class="hljs-keyword">end</span>)\n  <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n<p>This will create a "typed" version of the store context and hooks with the <code>action</code> and <code>state</code> types specific to your application. If you are curious, <code>ReductiveContext.Make</code> is called a <a href="https://reasonml.github.io/docs/en/module#module-functions-functors">functor</a>, which is a module that acts as a function, and can be used to make custom versions of a module for different data structures.</p>\n<p>Finally, use the provider from <code>AppStore</code> when rendering your root component passing in the created <code>store</code>:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">ReactDOMRe</span>.renderToElementWithId(\n  &lt;<span class="hljs-type">AppStore</span>.<span class="hljs-type">Provider</span> store=appStore&gt; &lt;<span class="hljs-type">Root</span> /&gt; &lt;/<span class="hljs-type">AppStore</span>.<span class="hljs-type">Provider</span>&gt;,\n  <span class="hljs-string">"root"</span>,\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">ReactDOMRe</span>.renderToElementWithId\n    ((<span class="hljs-type">AppStore</span>.<span class="hljs-type">Provider</span>.createElement ~store:appStore\n        ~children:[((<span class="hljs-type">Root</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)\n    [@<span class="hljs-type">JSX</span> ]) <span class="hljs-string">"root"</span></code></pre>\n      </div>\n    </div>\n  \n<p>From now on you will access the hooks from your <code>AppStore</code> module, like <code>AppStore.useSelector</code> and <code>AppStore.useDispatch</code>.</p>\n<h3 id="useselector"><a href="#useselector" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>useSelector</h3>\n<p>Subscribes to changes to a selected portion of the store state, specified by a selector function. The selector function accepts the whole store state and runs whenever an action is dispatched or the component renders (for some other reason than store updates).</p>\n<p><code>useSelector</code> is built on top of the <a href="https://github.com/facebook/react/tree/master/packages/use-subscription"><code>useSubscription</code></a> hook, which is <a href="https://github.com/facebook/react/tree/master/packages/use-subscription#limitations-in-concurrent-mode">safe to use</a> in the concurrent mode.</p>\n<h4 id="selector-function"><a href="#selector-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Selector function</h4>\n<p>The selector function is required to have a <strong>stable reference</strong> in order to avoid infinite re-renders. The easiest to achieve this is to declare it outside of the component,</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">// declare selector outside of the component</span>\n<span class="hljs-keyword">let</span> userSelector = state =&gt; state.user;\n\n<span class="hljs-comment">// in the component</span>\n<span class="hljs-keyword">let</span> user = <span class="hljs-type">AppStore</span>.useSelector(selector);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>or memoize with <code>useCallback</code> if it depends on <code>props</code>, <code>state</code> or anything else accessible only inside of the component:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[@react.component]\n<span class="hljs-keyword">let</span> make = (~id) =&gt; {\n  <span class="hljs-keyword">let</span> productSelector =\n    <span class="hljs-type">React</span>.useCallback1(\n      state =&gt; state.products-&gt;<span class="hljs-type">Belt</span>.<span class="hljs-type">List</span>.keep(p =&gt; p.id === id),\n      [|id|],\n    );\n  <span class="hljs-keyword">let</span> product = <span class="hljs-type">AppStore</span>.useSelector(productSelector);\n  ...\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3021</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<h4 id="re-renders"><a href="#re-renders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Re-renders</h4>\n<p><code>useSelector</code> relies on <code>useState</code> under the hood and therefore allows to bail-out of re-render similar to how <code>useState</code> <a href="https://reactjs.org/docs/hooks-reference.html#bailing-out-of-a-state-update">works</a>, which will compare by value for primitive types, and by reference for objects.</p>\n<p>If the selector function returns an object, it won\'t cause a re-render only if the new object has the same <strong>reference</strong> as the previous one, and returning a new object every time will <strong>always</strong> cause a re-render. For example,</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> selector = state =&gt; {email: state.user.email, cart: state.shop.cart};\n\n<span class="hljs-comment">// in the component</span>\n<span class="hljs-keyword">let</span> selectedState = <span class="hljs-type">AppStore</span>.useSelector(selector);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>will cause the component to re-render every time an action is dispatched, regardless of whether <code>user</code> or <code>shop</code> have changed, since running the selector function will create a new object every time it is called. To prevent those re-renders, it is recommended to have multiple calls to <code>useSelector</code>, one per each individual field:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> emailSelector = state =&gt; state.user.email;\n<span class="hljs-keyword">let</span> cartSelector = state =&gt; cart: state.shop.cart;\n\n<span class="hljs-comment">// in the component</span>\n<span class="hljs-keyword">let</span> email = <span class="hljs-type">AppStore</span>.useSelector(emailSelector);\n<span class="hljs-keyword">let</span> cart = <span class="hljs-type">AppStore</span>.useSelector(cartSelector);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">342</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>This helps to make sure the component re-renders only when either <code>email</code> or <code>cart</code> on the store state changes.</p>\n<p>This is different from how <code>mapStateToProps</code>, if you are used to dealing with the traditional <code>redux</code> flow, since <code>mapStateToProps</code> will compare individual fields of the returned object.</p>\n<h3 id="usedispatch"><a href="#usedispatch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>useDispatch</h3>\n<p>Returns the dispatch function from the store:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> dispatch = <span class="hljs-type">AppStore</span>.useDispatch();\n...\ndispatch(<span class="hljs-type">Increment</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h3 id="usestore"><a href="#usestore" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>useStore</h3>\n<p>This hook returns a reference to the store that was passed in to the <code>&#x3C;Provider></code> component.</p>\n<p>This hook should probably not be used frequently. Prefer <code>useSelector()</code> as your primary choice. However, this may be useful for less common scenarios that do require access to the store, such as replacing reducers.</p>\n<h2 id="requirements-1"><a href="#requirements-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Requirements</h2>\n<p>A recent release of <a href="https://nodejs.org/en/">Node</a> LTS should be sufficient.</p>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>See the <code>examples</code> directory for several working examples using reductive. The\n<code>basic</code> example is console logging only. The <code>immutable</code> example may be broken\ndue to an API incompatibility. The <code>render</code> example demonstrates the\neffectiveness of the hooks, in that only the components whose state has changed\nwill be re-rendered; turn on the "highlight updates" option in React DevTools to\nsee the effect. The <code>todomvc</code> example shows the use of <code>useReducer</code> along\nwith <code>reductive</code>. While the todomvc example looks a lot like those of the <a href="http://todomvc.com/">todomvc\nproject</a>, it does not conform to the todomvc application\nspecification, instead focusing on demonstrating the usefulness of reductive.</p>\n<h3 id="running-the-examples"><a href="#running-the-examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Running the Examples</h3>\n<p>Start by cloning this repository, then get everything installed and built:</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>$ npm install\n$ npm run build\n$ npx webpack</code></pre></div>\n<p>You can then open any of the HTML files in the <code>test</code> folder within your browser.</p>\n<h2 id="comparisons-with-redux"><a href="#comparisons-with-redux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Comparisons with Redux</h2>\n<h3 id="actions"><a href="#actions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Actions</h3>\n<p>Redux <a href="http://redux.js.org/docs/basics/Actions.html">actions</a> are implemented as plain JS objects. JS objects can be a bit too flexible, and many Redux users rely on standardized shapes for their actions to make sure that middlewares and third party libraries work with them. Reason has language-level support for composing a set of data types which many functions can operate over. They are called <a href="https://reasonml.github.io/docs/en/variant.html">variants</a> and you can see how they are used <a href="https://github.com/reasonml-community/reductive/blob/master/examples/basic/simpleStore.re">here</a>.</p>\n<h3 id="action-creators"><a href="#action-creators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Action Creators</h3>\n<p>Redux <a href="http://redux.js.org/docs/basics/Actions.html#action-creators">action creators</a> are used as composable ways of generating plain JS objects that match the schema of a specific action. In Reason, the type system does a lot of this work for you, so you can reliably put action types directly in your code and know that things will Just Work™. This has an added performance advantage of shifting that function call to compile time.</p>\n<h3 id="enhancer-composition"><a href="#enhancer-composition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enhancer Composition</h3>\n<p>Much of the power of redux comes from having a unified API for writing and using middleware or enhancers. They\'re typically wired together behind the scenes in the <a href="http://redux.js.org/docs/api/applyMiddleware.html">applyMiddlewares function</a>. This function doesn\'t exist in Reductive, because Reason has language-level support for function composition with operators like <a href="https://caml.inria.fr/pub/docs/manual-ocaml/libref/Pervasives.html#6_Compositionoperators"><code>|></code> and <code>@@</code></a>. You can see some <a href="https://github.com/reasonml-community/reductive/blob/master/examples/immutable/timeTravelStore.re#L86-L87">example usage here</a> and <a href="https://github.com/reasonml-community/reductive/blob/master/src/reductive.rei#L39-L112">some of the deprecation messages</a> to get a better understanding of typical usage.</p>\n<h3 id="the-source"><a href="#the-source" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Source</h3>\n<p>The code behind Reductive is incredibly simple. The <a href="https://github.com/reasonml-community/reductive/blob/master/src/reductive.re#L1-L40">first 40 lines</a> include the entire re-implementation of <a href="https://github.com/reactjs/redux">redux</a>. The <a href="https://github.com/reasonml-community/reductive/blob/master/src/reductive.re#L42-L83">next ~40 lines</a> are a re-implementation of the <a href="https://github.com/reactjs/react-redux">react-redux</a> library (without the higher-order component connect style implementation). The code is short and relatively simple to follow.</p>\n',homepageUrl:"https://github.com/reasonml-community/reductive#readme",repositoryUrl:"https://github.com/reasonml-community/reductive",npmUrl:"https://www.npmjs.com/package/reductive",issuesUrl:"https://github.com/reasonml-community/reductive/issues",slug:"/package/reductive"}},pathContext:{id:"reductive"}}}});
//# sourceMappingURL=path---package-reductive-0fb9acf2cba5d9cab7f2.js.map