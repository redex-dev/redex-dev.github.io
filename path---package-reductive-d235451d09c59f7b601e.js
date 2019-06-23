webpackJsonp([0xc86e549f8fbf],{1352:function(e,t){e.exports={data:{package:{type:"published",id:"reductive",name:"reductive",version:"1.0.0",category:"library",flags:["neglected"],platforms:["browser","node"],description:"Redux in Reason",keywords:["state management","react"],license:"MIT",updated:"2019-06-05T04:36:12.399Z",stars:291,score:.621337042218312,quality:.7943986241601388,popularity:.09446160987958448,maintenance:.9998739757497593,readme:'<h1 id="reductive"><a href="#reductive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reductive</h1>\n<p>A reimplementation of <a href="https://github.com/reactjs/redux">redux</a> in <a href="https://github.com/facebook/reason">Reason</a>.</p>\n<h2 id="word-of-caution"><a href="#word-of-caution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Word of Caution</h2>\n<p><strong><a href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">You might not need this library</a></strong>, especially so in a language which provides good enough construction blocks out of the box. <strong>ReasonReact <a href="https://reasonml.github.io/reason-react/blog/2017/09/01/reducers.html">already comes with reducers</a></strong>!</p>\n<p>However, in the spirit of unifying the Reason community around an authoritative Redux implementation and to avoid churn, we\'ll polish Reductive to make it production-ready for those who do wish to use it anyway.</p>\n<h2 id="comparisons-with-redux"><a href="#comparisons-with-redux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Comparisons with Redux</h2>\n<h3 id="actions"><a href="#actions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Actions</h3>\n<p>Redux <a href="http://redux.js.org/docs/basics/Actions.html">actions</a> are implemented as plain JS objects. JS objects can be a bit too flexible, and many Redux users rely on standardized shapes for their actions to make sure that middlewares and third party libraries work with them. Reason has language-level support for composing a set of data types which many functions can operate over. They are called <a href="https://reasonml.github.io/docs/en/variant.html">variants</a> and you can see how they are used <a href="https://github.com/reasonml-community/reductive/blob/master/examples/basic/simpleStore.re">here</a>.</p>\n<h3 id="action-creators"><a href="#action-creators" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Action Creators</h3>\n<p>Redux <a href="http://redux.js.org/docs/basics/Actions.html#action-creators">action creators</a> are used as composable ways of generating plain JS objects that match the schema of a specific action. In Reason, the type system does a lot of this work for you, so you can reliably put action types directly in your code and know that things will Just Work™. This has an added performance advantage of shifting that function call to compile time.</p>\n<h3 id="enhancer-composition"><a href="#enhancer-composition" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enhancer Composition</h3>\n<p>Much of the power of redux comes from having a unified API for writing and using middleware or enhancers. They\'re typically wired together behind the scenes in the <a href="http://redux.js.org/docs/api/applyMiddleware.html">applyMiddlewares function</a>. This function doesn\'t exist in Reductive, because Reason has language-level support for function composition with operators like <a href="https://caml.inria.fr/pub/docs/manual-ocaml/libref/Pervasives.html#6_Compositionoperators"><code>|></code> and <code>@@</code></a>. You can see some <a href="https://github.com/reasonml-community/reductive/blob/master/examples/immutable/timeTravelStore.re#L86-L87">example usage here</a> and <a href="https://github.com/reasonml-community/reductive/blob/master/src/reductive.rei#L39-L112">some of the deprecation messages</a> to get a better understanding of typical usage.</p>\n<h3 id="the-source"><a href="#the-source" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Source</h3>\n<p>The code behind Reductive is incredibly simple. The <a href="https://github.com/reasonml-community/reductive/blob/master/src/reductive.re#L1-L40">first 40 lines</a> Include the entire reimplementation of <a href="https://github.com/reactjs/redux">redux</a>. The <a href="https://github.com/reasonml-community/reductive/blob/master/src/reductive.re#L42-L83">next ~40 lines</a> are a reimplementation of the <a href="https://github.com/reactjs/react-redux">react-redux</a> library (without the higher-order component connect style implementation). The code is short and relatively simple to follow.</p>\n<h2 id="alternative-to-reductive"><a href="#alternative-to-reductive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Alternative to Reductive</h2>\n<p>Hopefully, the above comparisons demonstrated that <strong>you might not need an extra-react state management technique at all</strong>; passing props down works well in <a href="https://github.com/reasonml/reason-react">Reason-React</a>, and since props are well-typed, adding/remove them takes seconds. Keep state/props management simple so that you can spend the learning budget elsewhere!</p>\n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<p>Current needs:</p>\n<ul>\n<li>Potential bug fixes</li>\n<li>Better examples usages</li>\n<li>More docs on differences from/similarities with Redux</li>\n<li>Different examples of/links to simpler state management in Reason</li>\n</ul>\n',homepageUrl:"https://github.com/reasonml-community/reductive#readme",repositoryUrl:"https://github.com/reasonml-community/reductive",npmUrl:"https://www.npmjs.com/package/reductive",issuesUrl:"https://github.com/reasonml-community/reductive/issues",slug:"/package/reductive"}},pathContext:{id:"reductive"}}}});
//# sourceMappingURL=path---package-reductive-d235451d09c59f7b601e.js.map