webpackJsonp([3046832801524],{1244:function(s,n){s.exports={data:{package:{type:"published",id:"reason-apollo",name:"reason-apollo",version:"0.14.2",category:"binding",flags:[],platforms:["node"],description:"Using Apollo client 2 with Reason",keywords:["data fetching","react","graphql"],license:"MIT",updated:"2018-10-27T17:06:35.795Z",stars:369,score:.5386480010793276,quality:.42879301591747776,popularity:.17151441563134706,maintenance:.9999430023803226,readme:'<h1 id="reason-apollo"><a href="#reason-apollo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason-apollo</h1>\n<p><a href="https://badge.fury.io/js/reason-apollo"><img src="https://badge.fury.io/js/reason-apollo.svg" alt="npm version"></a>\n<a href="http://www.apollostack.com/#slack"><img src="https://img.shields.io/badge/slack-join-orange.svg" alt="Get on Slack"></a></p>\n<p>React-apollo with Reason</p>\n<h2 id="install-and-setup"><a href="#install-and-setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install and setup</h2>\n<h4 id="install"><a href="#install" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Install</h4>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add reason-apollo\n\n<span class="hljs-comment"># Add graphql_ppx</span>\nyarn add --dev graphql_ppx\n\n<span class="hljs-comment"># Add JS dependencies</span>\nyarn add react-apollo apollo-client apollo-cache-inmemory apollo-link apollo-link-context apollo-link-error apollo-link-http graphql graphql-tag apollo-link-ws apollo-upload-client subscriptions-transport-ws</code></pre></div>\n<h4 id="bsconfig"><a href="#bsconfig" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bsconfig</h4>\n<p>Add <code>reason-apollo</code> to your <code>bs-dependencies</code> and\n<code>graphql_ppx/ppx</code> to your <code>ppx_flags</code></p>\n<p><strong>bsconfig.json</strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"reason-react"</span>,\n  <span class="hljs-string">"reason-apollo"</span>\n],\n<span class="hljs-string">"ppx-flags"</span>: [\n    <span class="hljs-string">"graphql_ppx/ppx"</span>\n]</code></pre></div>\n<h4 id="send-introspection-query"><a href="#send-introspection-query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>send introspection query</h4>\n<p>This will generate a <code>graphql_schema.json</code> which will be used to safely type your GraphQL queries/mutations.</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn send-introspection-query http:<span class="hljs-comment">//my-api.example.com/api</span></code></pre></div>\n<h2 id="why-reason-apollo"><a href="#why-reason-apollo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why reason-apollo?</h2>\n<p>Watch it\'s usage in this video:  </p>\n<p><a href="https://www.youtube.com/watch?v=yMqE37LqRLA"><img src="https://i.ytimg.com/vi/yMqE37LqRLA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&#x26;rs=AOn4CLD9rxIyXtckkxmGAxRn_Uv2mDcXcQ" alt="Watch reason-apollo usage here"></a></p>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<h2 id="create-the-apollo-client"><a href="#create-the-apollo-client" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create the Apollo Client</h2>\n<p> <strong>Client.re</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Create an InMemoryCache */</span>\n<span class="hljs-keyword">let</span> inMemoryCache = <span class="hljs-type">ApolloInMemoryCache</span>.createInMemoryCache(());\n\n<span class="hljs-comment">/* Create an HTTP Link */</span>\n<span class="hljs-keyword">let</span> httpLink =\n <span class="hljs-type">ApolloLinks</span>.createHttpLink(~uri=<span class="hljs-string">"http://localhost:3010/graphql"</span>, ());\n\n<span class="hljs-keyword">let</span> instance = <span class="hljs-type">ReasonApollo</span>.createApolloClient(\n ~link=httpLink, \n ~cache=inMemoryCache, \n ()\n);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> inMemoryCache = <span class="hljs-type">ApolloInMemoryCache</span>.createInMemoryCache <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> httpLink =\n  <span class="hljs-type">ApolloLinks</span>.createHttpLink ~uri:<span class="hljs-string">"http://localhost:3010/graphql"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> instance =\n  <span class="hljs-type">ReasonApollo</span>.createApolloClient ~link:httpLink ~cache:inMemoryCache <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="apolloprovider"><a href="#apolloprovider" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ApolloProvider</h2>\n<p>  <strong><em>Index.re</em></strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>  <span class="hljs-comment">/* \n    Enhance your application with the `ReasonApollo.Provider` \n    passing it your client instance \n  */</span>\n  <span class="hljs-type">ReactDOMRe</span>.renderToElementWithId(\n    &lt;<span class="hljs-type">ReasonApollo</span>.<span class="hljs-type">Provider</span> client=<span class="hljs-type">Client</span>.instance&gt;\n        &lt;<span class="hljs-type">App</span> /&gt;\n    &lt;/<span class="hljs-type">ReasonApollo</span>.<span class="hljs-type">Provider</span>&gt;\n  , <span class="hljs-string">"index"</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">ReactDOMRe</span>.renderToElementWithId\n    ((<span class="hljs-type">ReasonApollo</span>.<span class="hljs-type">Provider</span>.createElement ~client:<span class="hljs-type">Client</span>.instance\n        ~children:[((<span class="hljs-type">App</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])\n    <span class="hljs-string">"index"</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="query"><a href="#query" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Query</h2>\n<p>  <strong>MyComponent.re</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Create a GraphQL Query by using the graphql_ppx */</span> \n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">GetPokemon</span> = [%<span class="hljs-title">graphql</span> </span>{|\n  query getPokemon($name: <span class="hljs-type">String</span>!){\n      pokemon(name: $name) {\n          name\n      }\n  }\n|}]; \n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">GetPokemonQuery</span> = <span class="hljs-title">ReasonApollo</span>.<span class="hljs-title">CreateQuery</span>(<span class="hljs-title">GetPokemon</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">make</span> = (<span class="hljs-title">_children</span>) =&gt; </span>{\n<span class="hljs-comment">/* ... */</span>,\nrender: (<span class="hljs-number">_</span>) =&gt; {\n  <span class="hljs-keyword">let</span> pokemonQuery = <span class="hljs-type">GetPokemon</span>.make(~name=<span class="hljs-string">"Pikachu"</span>, ());\n  &lt;<span class="hljs-type">GetPokemonQuery</span> variables=pokemonQuery##variables&gt;\n    ...(({result}) =&gt; {\n      <span class="hljs-keyword">switch</span> result {\n         | <span class="hljs-type">Loading</span> =&gt; &lt;div&gt; (<span class="hljs-type">ReasonReact</span>.string(<span class="hljs-string">"Loading"</span>)) &lt;/div&gt;\n         | <span class="hljs-type">Error</span>(error) =&gt; &lt;div&gt; (<span class="hljs-type">ReasonReact</span>.string(error##message)) &lt;/div&gt;\n         | <span class="hljs-type">Data</span>(response) =&gt; &lt;div&gt; (<span class="hljs-type">ReasonReact</span>.string(response##pokemon##name)) &lt;/div&gt;\n      }\n    })\n  &lt;/<span class="hljs-type">GetPokemonQuery</span>&gt;\n}\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3321</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="mutation"><a href="#mutation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutation</h2>\n<p>  <strong>MyMutation.re</strong></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">AddPokemon</span> = [%<span class="hljs-title">graphql</span> </span>{|\n  mutation addPokemon($name: <span class="hljs-type">String</span>!) {\n      addPokemon(name: $name) {\n          name\n      }\n  }\n|}];\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">AddPokemonMutation</span> = <span class="hljs-title">ReasonApollo</span>.<span class="hljs-title">CreateMutation</span>(<span class="hljs-title">AddPokemon</span>);\n\n<span class="hljs-title">let</span> <span class="hljs-title">make</span> = (<span class="hljs-title">_children</span>) =&gt; </span>{\n<span class="hljs-comment">/* ... */</span>,\nrender: (<span class="hljs-number">_</span>) =&gt; {  \n  &lt;<span class="hljs-type">AddPokemonMutation</span>&gt;\n    ...((\n      mutation <span class="hljs-comment">/* Mutation to call */</span>, \n      <span class="hljs-number">_</span> <span class="hljs-comment">/* Result of your mutation */</span>\n    ) =&gt; {\n       <span class="hljs-keyword">let</span> newPokemon = <span class="hljs-type">AddPokemon</span>.make(~name=<span class="hljs-string">"Bob"</span>, ());\n      &lt;div&gt;\n        &lt;button onClick=((_mouseEvent) =&gt; {\n            mutation(\n               ~variables=newPokemon##variables, \n               ~refetchQueries=[|<span class="hljs-string">"getAllPokemons"</span>|], \n               ()\n            ) |&gt; ignore;\n          })&gt; \n          (<span class="hljs-type">ReasonReact</span>.string(<span class="hljs-string">"Add Pokemon"</span>)) \n        &lt;/button&gt;\n      &lt;/div&gt;\n    })\n  &lt;/<span class="hljs-type">AddPokemonMutation</span>&gt;\n}\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code>unknown refmt error</code></pre>\n      </div>\n    </div>\n  \n<h2 id="apolloconsumer"><a href="#apolloconsumer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ApolloConsumer</h2>\n<p>If you simply want to have access to the ApolloClient, you can use the <code>ApolloConsumer</code></p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>&lt;<span class="hljs-type">ApolloConsumer</span>&gt;\n  ...((apolloClient) =&gt; {\n    <span class="hljs-comment">/* We have access to the client! */</span>\n  })\n&lt;/<span class="hljs-type">ApolloConsumer</span>&gt;</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  ((<span class="hljs-type">ApolloConsumer</span>.createElement\n      ~children:(<span class="hljs-keyword">fun</span> apolloClient  -&gt; <span class="hljs-keyword">object</span> (this)  <span class="hljs-keyword">end</span>) <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])</code></pre>\n      </div>\n    </div>\n  \n<h2 id="tips-and-tricks"><a href="#tips-and-tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips and Tricks</h2>\n<h3 id="use-bsrecord-on-response-object"><a href="#use-bsrecord-on-response-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use <code>@bsRecord</code> on response object</h3>\n<p>The <code>@bsRecord</code> modifier is an <a href="https://github.com/mhallin/graphql_ppx#record-conversion">extension</a> of the graphql syntax for BuckleScipt/ReasonML. It allows you to convert a reason object to a reason record and reap the benefits of pattern matching. For example, let\'s say I have a nested object of options. I would have to do something like this:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">switch</span> response##object {\n| <span class="hljs-type">Some</span>(object) =&gt; {\n  <span class="hljs-keyword">switch</span> object##nestedValue {\n  | <span class="hljs-type">Some</span>(nestedValue) =&gt; nestedValue\n  | <span class="hljs-type">None</span> =&gt; <span class="hljs-string">""</span>\n  }\n}\n| <span class="hljs-type">None</span> =&gt; <span class="hljs-string">""</span>\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">300</span>: <span class="hljs-keyword">object</span> is a reserved keyword, it cannot be used <span class="hljs-keyword">as</span> an identifier. <span class="hljs-type">Try</span> `object_\' instead</code></pre>\n      </div>\n    </div>\n  \n<p>Kind of funky, huh? Let\'s modify the response and convert it to a reason record.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> object = {\n  nestedValue: option(string)\n}\n\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">GetObject</span> = [%<span class="hljs-title">graphql</span> </span>{|\n  object @bsRecord {\n    nestedValue\n  }\n |}\n];</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">188</span>: <span class="hljs-keyword">object</span> is a reserved keyword, it cannot be used <span class="hljs-keyword">as</span> an identifier. <span class="hljs-type">Try</span> `object_\' instead</code></pre>\n      </div>\n    </div>\n  \n<p>This time we can pattern match more precisely.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">switch</span> response##object {\n| <span class="hljs-type">Some</span>({ nestedValue: <span class="hljs-type">Some</span>(value) }) =&gt; value\n| <span class="hljs-type">Some</span>({ nestedValue: <span class="hljs-type">None</span> }) =&gt; <span class="hljs-string">""</span>\n| <span class="hljs-type">None</span> =&gt; <span class="hljs-string">""</span>\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">300</span>: <span class="hljs-keyword">object</span> is a reserved keyword, it cannot be used <span class="hljs-keyword">as</span> an identifier. <span class="hljs-type">Try</span> `object_\' instead</code></pre>\n      </div>\n    </div>\n  \n<h3 id="use-an-alias-for-irregular-field-names"><a href="#use-an-alias-for-irregular-field-names" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use an alias for irregular field names</h3>\n<p>You might find yourself consuming an API with field names like <code>Field</code>. Currently, reason object field names are required to be camel case. Therefore if you have a request like this:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>{\n    <span class="hljs-type">Object</span> {\n      id\n      title\n    }\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">967</span>: syntax error, consider adding a `;<span class="hljs-char">\' before</span></code></pre>\n      </div>\n    </div>\n  \n<p>You will attempt to access the response object but it will throw an error:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>response##<span class="hljs-type">Object</span> <span class="hljs-comment">/* Does not work :( */</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ = ## response <span class="hljs-type">Object</span></code></pre>\n      </div>\n    </div>\n  \n<p>Instead, use an <code>alias</code> to modify the response:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>{\n    object: <span class="hljs-type">Object</span> {\n      id\n      title\n    }\n}</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">3321</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<p>Then you can access the object like this:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>response##object</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">571</span>: <span class="hljs-keyword">object</span> is a reserved keyword, it cannot be used <span class="hljs-keyword">as</span> an identifier. <span class="hljs-type">Try</span> `object_\' instead</code></pre>\n      </div>\n    </div>\n  \n<h3 id="generic-error-and-loading-components"><a href="#generic-error-and-loading-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generic Error and Loading components</h3>\n<p>You can create a generic error and Loading component and compose them like this example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">QueryView</span> = </span>{\n  <span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(__MODULE__);\n\n  <span class="hljs-keyword">let</span> make =\n      (\n        ~result: <span class="hljs-type">ReasonApolloTypes</span>.queryResponse(\'a),\n        ~accessData: \'a =&gt; option(\'b),\n        ~render: (\'b, \'<span class="hljs-built_in">c</span>) =&gt; <span class="hljs-type">ReasonReact</span>.reactElement,\n        ~onLoadMore: (\'b, \'unit) =&gt; unit=(<span class="hljs-number">_</span>, ()) =&gt; (),\n        _children,\n      ) =&gt; {\n    ...component,\n    render: _self =&gt;\n      <span class="hljs-keyword">switch</span> (result) {\n      | <span class="hljs-type">Error</span>(error) =&gt; &lt;<span class="hljs-type">Error</span> /&gt;\n      | <span class="hljs-type">Loading</span> =&gt; <span class="hljs-type">ReasonReact</span>.null\n      | <span class="hljs-type">Data</span>(response) =&gt;\n        <span class="hljs-keyword">switch</span> (accessData(response)) {\n        | <span class="hljs-type">Some</span>(data) =&gt; render(data, onLoadMore(data))\n        | <span class="hljs-number">_</span> =&gt; &lt;<span class="hljs-type">Error</span> error=<span class="hljs-string">""</span> /&gt;\n        }\n      },\n  };\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">QueryView</span> =\n  <span class="hljs-keyword">struct</span>\n    <span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent __MODULE__\n    <span class="hljs-keyword">let</span> make ~result:(result : <span class="hljs-symbol">\'a</span> <span class="hljs-type">ReasonApolloTypes</span>.queryResponse) \n      ~accessData:(accessData : <span class="hljs-symbol">\'a</span> -&gt; <span class="hljs-symbol">\'b</span> option) \n      ~render:(render : <span class="hljs-symbol">\'b</span> -&gt; <span class="hljs-symbol">\'c</span> -&gt; <span class="hljs-type">ReasonReact</span>.reactElement) \n      ?onLoadMore:((onLoadMore : <span class="hljs-symbol">\'b</span> -&gt; <span class="hljs-symbol">\'unit</span> -&gt; <span class="hljs-built_in">unit</span>)=\n      <span class="hljs-keyword">fun</span> _  -&gt; <span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt; <span class="hljs-literal">()</span>)  _children =\n      {\n        component <span class="hljs-keyword">with</span>\n        render =\n          (<span class="hljs-keyword">fun</span> _self  -&gt;\n             <span class="hljs-keyword">match</span> result <span class="hljs-keyword">with</span>\n             | ((<span class="hljs-type">Error</span> (error))[@explicit_arity ]) -&gt;\n                 ((<span class="hljs-type">Error</span>.createElement ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])\n             | <span class="hljs-type">Loading</span>  -&gt; <span class="hljs-type">ReasonReact</span>.null\n             | ((<span class="hljs-type">Data</span> (response))[@explicit_arity ]) -&gt;\n                 (<span class="hljs-keyword">match</span> accessData response <span class="hljs-keyword">with</span>\n                  | ((<span class="hljs-type">Some</span> (data))[@explicit_arity ]) -&gt;\n                      render data (onLoadMore data)\n                  | _ -&gt;\n                      ((<span class="hljs-type">Error</span>.createElement ~error:<span class="hljs-string">""</span> ~children:<span class="hljs-literal">[]</span> <span class="hljs-literal">()</span>)\n                      [@<span class="hljs-type">JSX</span> ])))\n      }\n  <span class="hljs-keyword">end</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="faq"><a href="#faq" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>FAQ</h2>\n<h3 id="ive-added-the-schema-file-but-my-build-fails-saying-it-couldnt-be-found"><a href="#ive-added-the-schema-file-but-my-build-fails-saying-it-couldnt-be-found" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>I\'ve added the schema file, but my build fails saying it couldn\'t be found?</h3>\n<p>In some cases, it seems like there are some differences between the provided <code>send-introspection-query</code>\nand output from tools you might be using to download the schema (such as <code>apollo-codegen</code> or <code>graphql-cli</code>).\nIf your build is failing, please make sure to try with the provided script. In your project root, run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>$ yarn send-introspection-query &lt;url&gt;</code></pre></div>\n',
homepageUrl:"https://github.com/apollographql/reason-apollo#readme",repositoryUrl:"https://github.com/apollographql/reason-apollo",npmUrl:"https://www.npmjs.com/package/reason-apollo",issuesUrl:"https://github.com/apollographql/reason-apollo/issues",slug:"/package/reason-apollo"}},pathContext:{id:"reason-apollo"}}}});
//# sourceMappingURL=path---package-reason-apollo-13cf679d74ba069e16ec.js.map