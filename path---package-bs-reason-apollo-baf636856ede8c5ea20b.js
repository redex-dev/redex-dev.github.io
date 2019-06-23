webpackJsonp([0xe6ab4e4d64da],{1249:function(s,n){s.exports={data:{package:{type:"published",id:"bs-reason-apollo",name:"bs-reason-apollo",version:"1.0.0-beta.4",category:"binding",flags:["neglected"],platforms:["browser"],description:"React Apollo bindings for BS",keywords:["data fetching","react","graphql"],license:"MIT",updated:"2019-06-05T13:47:28.221Z",stars:22,score:.41975145357283583,quality:.7027701373921202,popularity:.04788718835098496,maintenance:.5490282755210144,readme:'<h1 id="bs-reason-apollo"><a href="#bs-reason-apollo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-reason-apollo</h1>\n<p><a href="https://travis-ci.org/Astrocoders/bs-reason-apollo"><img src="https://travis-ci.org/Astrocoders/bs-reason-apollo.svg?branch=master" alt="Build Status"></a></p>\n<p>Initially inspired by <a href="https://github.com/FormidableLabs/seattlejsconf-app/blob/master/re/types/ReactApollo.re">https://github.com/FormidableLabs/seattlejsconf-app/blob/master/re/types/ReactApollo.re</a>\nBut now with a more sugared usage with function as child.</p>\n<h2 id="difference-from-reason-apollo-official"><a href="#difference-from-reason-apollo-official" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Difference from reason-apollo official</h2>\n<p>This allows you to use a React Apollo Client that you already have in JS so you can gradually change to Reason.\nSetup the same way you would do for React Apollo and just plug it in.</p>\n<h2 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h2>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add bs-reason-apollo</code></pre></div>\n<p>Update your bs-config.json</p>\n<div class="redex-codeblock"><pre class="hljs lang-js"><code>  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"reason-react"</span>, <span class="hljs-string">"bs-reform"</span>, <span class="hljs-string">"bs-reason-apollo"</span>],</code></pre></div>\n<h2 id="reactapollocreatewrapper"><a href="#reactapollocreatewrapper" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactApollo.CreateWrapper</h2>\n<p>As you have your ApolloProvider somewhere in the top of your React JS tree you are already covered there.\nSo now to use it with Apollo create a query definition module for you query:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* re/SignInQueryGql.re */</span>\nopen <span class="hljs-type">BsReasonApollo</span>;\n\n<span class="hljs-keyword">let</span> query = <span class="hljs-type">GraphQLTag</span>.gql({|\n  query <span class="hljs-type">SignInQuery</span> {\n    currentUser {\n      id\n      email\n    }\n  }\n|});\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Types</span> = </span>{\n  <span class="hljs-keyword">type</span> user = {. <span class="hljs-string">"id"</span>: string, <span class="hljs-string">"email"</span>: string};\n  <span class="hljs-keyword">type</span> error = {. <span class="hljs-string">"message"</span>: string};\n  <span class="hljs-comment">/* You must always have this data type with loading and error, it\'s what the HOC gives you */</span>\n  <span class="hljs-keyword">type</span> data = {\n    .\n    <span class="hljs-string">"loading"</span>: <span class="hljs-type">Js</span>.boolean,\n    <span class="hljs-string">"error"</span>: <span class="hljs-type">Js</span>.null_undefined(error),\n    <span class="hljs-comment">/* Our response */</span>\n    <span class="hljs-string">"currentUser"</span>: <span class="hljs-type">Js</span>.null_undefined(user)\n  };\n};\n\n<span class="hljs-keyword">type</span> data = <span class="hljs-type">Types</span>.data;\n\n<span class="hljs-comment">/* Define any Js.t variables that you query need here, if you don\'t use just declare it */</span>\n<span class="hljs-keyword">type</span> variables;\n\n<span class="hljs-keyword">type</span> response = <span class="hljs-type">Types</span>.user;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsReasonApollo</span>\n<span class="hljs-keyword">let</span> query =\n  <span class="hljs-type">GraphQLTag</span>.gql\n    {|\n  query <span class="hljs-type">SignInQuery</span> {\n    currentUser {\n      id\n      email\n    }\n  }\n|}\n<span class="hljs-keyword">module</span> <span class="hljs-type">Types</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">type</span> user = &lt; id :<span class="hljs-built_in">string</span> ;email :<span class="hljs-built_in">string</span>  &gt; <span class="hljs-type">Js</span>.t\n    <span class="hljs-keyword">type</span> error = &lt; message :<span class="hljs-built_in">string</span>  &gt; <span class="hljs-type">Js</span>.t\n    <span class="hljs-keyword">type</span> data =\n      &lt;\n        loading :<span class="hljs-type">Js</span>.boolean ;error :error <span class="hljs-type">Js</span>.null_undefined ;currentUser\n                                                               :user\n                                                                  <span class="hljs-type">Js</span>.null_undefined\n                                                                &gt;\n        <span class="hljs-type">Js</span>.t\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">type</span> data = <span class="hljs-type">Types</span>.data\n<span class="hljs-keyword">type</span> variables\n<span class="hljs-keyword">type</span> response = <span class="hljs-type">Types</span>.user</code></pre>\n      </div>\n    </div>\n  \n<p>Now in your actually component:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsReasonApollo</span>;\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">SignInQueryWrapper</span> = <span class="hljs-title">ReactApollo</span>.<span class="hljs-title">CreateWrapper</span>(<span class="hljs-title">SignInQueryGql</span>);\n\n...\n<span class="hljs-title">let</span> <span class="hljs-title">make</span> = (<span class="hljs-title">_children</span>) =&gt; </span>{\n  ...,\n  render: (_self) =&gt;\n    &lt;<span class="hljs-type">SignInQueryWrapper</span>&gt;\n    ...((~data) =&gt;\n        <span class="hljs-keyword">switch</span> (\n          <span class="hljs-type">Js</span>.to_bool(data##loading),\n          <span class="hljs-type">Js</span>.<span class="hljs-type">Null_undefined</span>.to_opt(data##error),\n          <span class="hljs-type">Js</span>.<span class="hljs-type">Null_undefined</span>.to_opt(data##currentUser)\n        ) {\n        | (<span class="hljs-literal">true</span>, <span class="hljs-number">_</span>, <span class="hljs-number">_</span>) =&gt; &lt;<span class="hljs-type">FullLoading</span> /&gt;\n        | (<span class="hljs-literal">false</span>, <span class="hljs-number">_</span>, <span class="hljs-type">Some</span>(user)) =&gt;\n          &lt;<span class="hljs-type">Welcome</span> user /&gt;\n        | (<span class="hljs-literal">false</span>, <span class="hljs-type">Some</span>(error), <span class="hljs-number">_</span>) =&gt; &lt;<span class="hljs-type">Whoops</span> name=error##message /&gt;\n        | (<span class="hljs-literal">false</span>, <span class="hljs-type">None</span>, <span class="hljs-number">_</span>) =&gt;\n          &lt;<span class="hljs-type">KeyboardAwareScrollView</span>&gt;\n            &lt;<span class="hljs-type">Wrapper</span>&gt;\n              &lt;<span class="hljs-type">Header</span>&gt;\n                &lt;<span class="hljs-type">Logo</span>\n                  source=<span class="hljs-type">Image</span>.(\n                           <span class="hljs-type">Required</span>(<span class="hljs-type">Packager</span>.require(<span class="hljs-string">"../../../src/public/img/logo-calendar.png"</span>))\n                         )\n                /&gt;\n              &lt;/<span class="hljs-type">Header</span>&gt;\n              &lt;<span class="hljs-type">ContentWrapper</span>\n                contentContainerStyle=<span class="hljs-type">Style</span>.(\n                                        style([\n                                          paddingVertical(<span class="hljs-type">Pt</span>(<span class="hljs-number">40</span>.)),\n                                          justifyContent(<span class="hljs-type">SpaceAround</span>)\n                                        ])\n                                      )&gt;\n                &lt;<span class="hljs-type">SignInForm</span> /&gt;\n              &lt;/<span class="hljs-type">ContentWrapper</span>&gt;\n            &lt;/<span class="hljs-type">Wrapper</span>&gt;\n          &lt;/<span class="hljs-type">KeyboardAwareScrollView</span>&gt;\n        }\n      )\n    &lt;/<span class="hljs-type">SignInQueryWrapper</span>&gt;\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="reactapollocreatemutationwrapper"><a href="#reactapollocreatemutationwrapper" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactApollo.CreateMutationWrapper</h2>\n<p>Define the mutation module:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* re/SignInMutationGql.re */</span>\nopen <span class="hljs-type">BsReasonApollo</span>;\n\n<span class="hljs-keyword">let</span> query = <span class="hljs-type">GraphQLTag</span>.gql({|\n  mutation <span class="hljs-type">SignInQuery</span>($input: <span class="hljs-type">SignInInput</span>!) {\n    signIn(input: $input) {\n      error\n      token\n    }\n  }\n|});\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Types</span> = </span>{\n  <span class="hljs-keyword">type</span> input = {. <span class="hljs-string">"password"</span>: string, <span class="hljs-string">"email"</span>: string};\n  <span class="hljs-keyword">type</span> signIn = {. <span class="hljs-string">"error"</span>: <span class="hljs-type">Js</span>.null_undefined(string), <span class="hljs-string">"token"</span>: <span class="hljs-type">Js</span>.null_undefined(string)};\n};\n\n<span class="hljs-comment">/* Needed for mutations, it\'ll be probably `variables` in the next release */</span>\n<span class="hljs-keyword">type</span> input = <span class="hljs-type">Types</span>.input;\n\n<span class="hljs-comment">/* Mutation response */</span>\n<span class="hljs-keyword">type</span> response = {. <span class="hljs-string">"signIn"</span>: <span class="hljs-type">Types</span>.signIn};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsReasonApollo</span>\n<span class="hljs-keyword">let</span> query =\n  <span class="hljs-type">GraphQLTag</span>.gql\n    {|\n  mutation <span class="hljs-type">SignInQuery</span>($input: <span class="hljs-type">SignInInput</span>!) {\n    signIn(input: $input) {\n      error\n      token\n    }\n  }\n|}\n<span class="hljs-keyword">module</span> <span class="hljs-type">Types</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">type</span> input = &lt; password :<span class="hljs-built_in">string</span> ;email :<span class="hljs-built_in">string</span>  &gt; <span class="hljs-type">Js</span>.t\n    <span class="hljs-keyword">type</span> signIn =\n      &lt; error :<span class="hljs-built_in">string</span> <span class="hljs-type">Js</span>.null_undefined ;token :<span class="hljs-built_in">string</span> <span class="hljs-type">Js</span>.null_undefined  &gt;\n        <span class="hljs-type">Js</span>.t\n  <span class="hljs-keyword">end</span>\n<span class="hljs-keyword">type</span> input = <span class="hljs-type">Types</span>.input\n<span class="hljs-keyword">type</span> response = &lt; signIn :<span class="hljs-type">Types</span>.signIn  &gt; <span class="hljs-type">Js</span>.t</code></pre>\n      </div>\n    </div>\n  \n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsReasonApollo</span>;\n\n<span class="hljs-comment">/* Mutation wrapper */</span>\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">SignInMutationWrapper</span> = <span class="hljs-title">ReactApollo</span>.<span class="hljs-title">CreateMutationWrapper</span>(<span class="hljs-title">SignInQueryGql</span>);\n\n/* <span class="hljs-title">https</span>://<span class="hljs-title">github</span>.<span class="hljs-title">com</span>/<span class="hljs-title">Astrocoders</span>/<span class="hljs-title">reform</span> */\n<span class="hljs-title">module</span> <span class="hljs-title">SignInForm</span> = <span class="hljs-title">ReForm</span>.<span class="hljs-title">Create</span>(<span class="hljs-title">SignInFormParams</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">convertInputToJs</span>: <span class="hljs-title">SignInFormParams</span>.<span class="hljs-title">state</span> =&gt; <span class="hljs-title">SignInMutationGql</span>.<span class="hljs-title">Types</span>.<span class="hljs-title">signInInput</span> =\n  (<span class="hljs-title">values</span>) =&gt; </span>{<span class="hljs-string">"password"</span>: values.password, <span class="hljs-string">"email"</span>: values.email};\n\n<span class="hljs-keyword">let</span> handleSubmit = (mutate, values, setSubmitting) =&gt;\n  values\n  |&gt; convertToJs\n  |&gt; mutate\n  |&gt; <span class="hljs-type">Js</span>.<span class="hljs-type">Promise</span>.(\n       then_(\n         (payload) =&gt;\n           (\n             <span class="hljs-keyword">switch</span> (<span class="hljs-type">Js</span>.<span class="hljs-type">Null_undefined</span>.to_opt(payload##signIn##error)) {\n             | <span class="hljs-type">Some</span>(error) =&gt;\n               <span class="hljs-type">Alert</span>.alert(~title=<span class="hljs-string">"Something went wrong"</span>, ~message=error, ());\n               setSubmitting(<span class="hljs-literal">false</span>)\n             | <span class="hljs-type">None</span> =&gt;\n               <span class="hljs-type">RouterActions</span>.home(~actionType=`replace);\n               <span class="hljs-keyword">let</span> <span class="hljs-number">_</span> =\n                 <span class="hljs-type">Utils</span>.<span class="hljs-type">UserSession</span>.setToken(\n                   <span class="hljs-type">Utils</span>.<span class="hljs-keyword">get</span>(<span class="hljs-type">Js</span>.<span class="hljs-type">Null_undefined</span>.to_opt(payload##signIn##token), <span class="hljs-string">""</span>)\n                 );\n               ignore()\n             }\n           )\n           |&gt; resolve\n       )\n     )\n  |&gt; ignore;\n\n<span class="hljs-comment">/* A little abstraction to make function as child composition hurt a bit less */</span>\n<span class="hljs-keyword">let</span> enhanced = (mapper) =&gt; {\n  &lt;<span class="hljs-type">SignInMutationWrapper</span>&gt;\n    ...((~mutate) =&gt; (\n      &lt;<span class="hljs-type">SignInForm</span>\n        initialValues={etc}\n         onSubmit=(\n           (values, ~setSubmitting, ~setError <span class="hljs-keyword">as</span> <span class="hljs-number">_</span>) =&gt;\n             handleSubmit(mutate, values, setSubmitting)\n         )\n      &gt;\n        ...mapper\n      &lt;/<span class="hljs-type">SignInForm</span>&gt;\n    ))\n  &lt;/<span class="hljs-type">SignInMutationWrapper</span>&gt;\n};\n\n<span class="hljs-keyword">let</span> component =</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">1575</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<p>WIP</p>\n',homepageUrl:"https://github.com/Astrocoders/bs-reason-apollo#readme",repositoryUrl:"https://github.com/Astrocoders/bs-reason-apollo",npmUrl:"https://www.npmjs.com/package/bs-reason-apollo",issuesUrl:"https://github.com/Astrocoders/bs-reason-apollo/issues",slug:"/package/bs-reason-apollo"}},pathContext:{id:"bs-reason-apollo"}}}});
//# sourceMappingURL=path---package-bs-reason-apollo-baf636856ede8c5ea20b.js.map