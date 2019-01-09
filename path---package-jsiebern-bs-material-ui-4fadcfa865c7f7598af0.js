webpackJsonp([0x7a013a7bb875],{1237:function(s,e){s.exports={data:{package:{type:"published",id:"@jsiebern/bs-material-ui",name:"@jsiebern/bs-material-ui",version:"1.0.0",category:"binding",flags:[],platforms:["browser"],description:"This library provides Reason bindings for material-ui.",keywords:["react","ppx","ui"],license:"MIT",updated:"2019-01-03T14:27:50.258Z",stars:57,score:.5390136743353595,quality:.5335079048675397,popularity:.08284689089623123,maintenance:.9998996887469049,readme:'<h1 id="important-version-100"><a href="#important-version-100" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Important: Version 1.0.0</h1>\n<p>I have changed the bindings version to 1.0.0 to reflect the fact that there probably won\'t be any structural / breaking changes in the future to come.</p>\n<p>The bindings now include all icons, as well as an (almost) fully typed theme support as well.</p>\n<p><strong>Please make sure to look at the <a href="https://github.com/jsiebern/bs-material-ui/blob/master/CHANGELOG.md">changelog</a> for the breaking changes!</strong></p>\n<p>I hope that I haven\'t forgotten any breaking changes in my list, please open an issue should you come across any.</p>\n<h1 id="reason-bindings-for-material-ui"><a href="#reason-bindings-for-material-ui" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason bindings for material-ui</h1>\n<p>This library provides Reason bindings for\n<a href="https://material-ui-next.com/">material-ui</a>. It\'s automatically generated by\n<a href="https://github.com/jsiebern/reason-mui-binding-generator">reason-mui-binding-generator</a>.</p>\n<h2 id="installation-for-your-reason-project"><a href="#installation-for-your-reason-project" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation (for your Reason project)</h2>\n<p>Run:</p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>yarn add @jsiebern/bs-material-ui</code></pre></div>\n<p>to add the library to your project dependencies. And add <code>@jsiebern/bs-material-ui</code> to the <code>bs-dependencies</code> node of your <code>bsconfig.json</code>.</p>\n<h2 id="installation-of-the-withstyles-code-extension-ppx"><a href="#installation-of-the-withstyles-code-extension-ppx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation of the <code>withStyles</code> code extension (ppx)</h2>\n<p>Install the package: <code>yarn add --dev @jsiebern/bs-material-ui-ppx</code>.</p>\n<p>(The PPX builds on the fly using <code>bsb-native</code>. This is a quite heavy dependency and takes a while but will ensure that the PPX runs on your system)</p>\n<p>Add the entry <code>./node_modules/@jsiebern/bs-material-ui-ppx/ppx</code> to the <code>ppx-flags</code> node of your <code>bsconfig.json</code>.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>Please see <a href="https://github.com/jsiebern/bs-material-ui/tree/master/examples">the examples folder</a>.\n(Running the example code: <code>yarn examples</code>)</p>\n<h2 id="withstyles"><a href="#withstyles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>withStyles</h2>\n<p>In material-ui, the <code>withStyles</code> <a href="https://reactjs.org/docs/higher-order-components.html">HOC</a> takes care of turning React styles into CSS via <a href="https://github.com/cssinjs/react-jss">react-jss</a>. It passes a <code>classes</code> prop onto the component with the first level keys of the style object passed on.</p>\n<p>HOC do not translate well into Reason which is why we are using a <a href="http://reactpatterns.com/#render-callback">render prop</a> to make things easier. <a href="https://www.youtube.com/watch?v=BcVAq3YFiuc">(More information on the topic).</a></p>\n<h2 id="withstyles-example-ppx-typesafe"><a href="#withstyles-example-ppx-typesafe" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>withStyles Example PPX (typesafe)</h2>\n<p><strong>Make sure you have implemented the ppx file (see installation for reference)</strong></p>\n<p><strong>Important: In order to use <code>theme => styles</code> you need to provide a <code>&#x3C;MaterialUi_ThemeProvider theme={MaterialUi_Theme.create()}></code> at the top of the tree!</strong></p>\n<p>The code extension allows you to write a typesafe styled component with ease. It follows the format <code>[%mui.withStyles "ComponentName"({ className: ReactDOMRe.Style.t })]</code>. The generated Component has a render function which passes on a <code>record</code> with the class keys. See the example below.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"Example"</span>);\n\n[%mui.withStyles\n  <span class="hljs-string">"StyledExample"</span>({\n    alignRight:\n      <span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make(~width=<span class="hljs-string">"100%"</span>, ~textAlign=<span class="hljs-string">"right"</span>, ()),\n  })\n];\n\n<span class="hljs-keyword">let</span> make = _children =&gt; {\n  ...component,\n  render: _self =&gt;\n    &lt;<span class="hljs-type">StyledExample</span>&gt;\n      ...{\n        classes =&gt;\n          &lt;div className={classes.alignRight}&gt;\n            <span class="hljs-string">"Example text - aligned to the right"</span>-&gt;<span class="hljs-type">ReasonReact</span>.string\n          &lt;/div&gt;\n      }\n    &lt;/<span class="hljs-type">StyledExample</span>&gt;,\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2902</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="withstyles-example-unsafe"><a href="#withstyles-example-unsafe" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>withStyles Example (unsafe)</h2>\n<p>You need to pass a <code>classes</code> prop of type <code>list( { name: string, styles: ReactDOMRe.Style.t } )</code> and a <code>render</code> function to the component. See the following example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"Example"</span>);\n\n<span class="hljs-keyword">let</span> make = _children =&gt; {\n  ...component,\n  render: _self =&gt;\n    &lt;<span class="hljs-type">MaterialUi</span>.<span class="hljs-type">WithStyles</span>\n      classes=[\n        {\n          name: <span class="hljs-string">"alignRight"</span>,\n          styles:\n            <span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make(~width=<span class="hljs-string">"100%"</span>, ~textAlign=<span class="hljs-string">"right"</span>, ()),\n        },\n      ]\n      render={\n        classes =&gt;\n          &lt;div className=classes##alignRight&gt;\n            <span class="hljs-string">"Example text - aligned to the right"</span>-&gt;<span class="hljs-type">ReasonReact</span>.string\n          &lt;/div&gt;\n      }\n    /&gt;,\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2902</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="colors"><a href="#colors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Colors</h2>\n<p>All Colors are accessible in Submodules of the Module <code>Colors</code>. Color keys that are a pure number begin with a <code>c</code>. <a href="https://material-ui-next.com/style/color/">(MUI Docs Reference).</a></p>\n<p>Example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>[%mui.withStyles\n  <span class="hljs-string">"ColorExample"</span>({\n    bgColor: <span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make(~backgroundColor=<span class="hljs-type">MaterialUi</span>.<span class="hljs-type">Colors</span>.<span class="hljs-type">Red</span>.c300, ())\n  })\n];</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  [%mui.withStyles\n    <span class="hljs-string">"ColorExample"</span>\n      {\n        bgColor =\n          (<span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make ~backgroundColor:<span class="hljs-type">MaterialUi</span>.<span class="hljs-type">Colors</span>.<span class="hljs-type">Red</span>.c300\n             <span class="hljs-literal">()</span>)\n      }]</code></pre>\n      </div>\n    </div>\n  \n<h2 id="overriding-with-classes"><a href="#overriding-with-classes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Overriding with classes</h2>\n<p>To take advantage of Reasons type system when overriding classes directly on components they have been converted into Variants and need to be passed as a <code>list</code> to the components <code>classes</code> prop. It is best used in combination with the <code>MaterialUi.WithStyles</code> component.</p>\n<p><a href="https://material-ui-1dab0.firebaseapp.com/customization/overrides/#overriding-with-classes">(MUI Docs Reference).</a></p>\n<p>Example:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"Example"</span>);\n\n[%mui.withStyles\n  <span class="hljs-string">"OverrideExample"</span>({\n    fontSize: <span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make(~fontSize=<span class="hljs-string">"30px"</span>, ()),\n    bgColor:\n      <span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make(\n        ~backgroundColor=<span class="hljs-type">MaterialUi</span>.<span class="hljs-type">Colors</span>.<span class="hljs-type">Red</span>.c300,\n        (),\n      ),\n  })\n];\n\n<span class="hljs-keyword">let</span> make = _children =&gt; {\n  ...component,\n  render: _self =&gt;\n    &lt;<span class="hljs-type">OverrideExample</span>&gt;\n      ...{\n        classes =&gt;\n          &lt;<span class="hljs-type">MaterialUi</span>.<span class="hljs-type">Button</span>\n            color=`<span class="hljs-type">Primary</span>\n            variant=`<span class="hljs-type">Contained</span>\n            classes=[\n              <span class="hljs-type">Root</span>(classes.fontSize),\n              <span class="hljs-type">RaisedPrimary</span>(classes.bgColor),\n            ]&gt;\n            <span class="hljs-string">"Example Button"</span>\n          &lt;/<span class="hljs-type">MaterialUi</span>.<span class="hljs-type">Button</span>&gt;\n      }\n    &lt;/<span class="hljs-type">OverrideExample</span>&gt;,\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent <span class="hljs-string">"Example"</span>\n<span class="hljs-keyword">let</span> _ =\n  [%mui.withStyles\n    <span class="hljs-string">"OverrideExample"</span>\n      {\n        fontSize = (<span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make ~fontSize:<span class="hljs-string">"30px"</span> <span class="hljs-literal">()</span>);\n        bgColor =\n          (<span class="hljs-type">ReactDOMRe</span>.<span class="hljs-type">Style</span>.make ~backgroundColor:<span class="hljs-type">MaterialUi</span>.<span class="hljs-type">Colors</span>.<span class="hljs-type">Red</span>.c300\n             <span class="hljs-literal">()</span>)\n      }]\n<span class="hljs-keyword">let</span> make _children =\n  {\n    component <span class="hljs-keyword">with</span>\n    render =\n      (<span class="hljs-keyword">fun</span> _self  -&gt;\n         ((<span class="hljs-type">OverrideExample</span>.createElement\n             ~children:(<span class="hljs-keyword">fun</span> classes  -&gt;\n                          ((<span class="hljs-type">MaterialUi</span>.<span class="hljs-type">Button</span>.createElement ~color:<span class="hljs-tag">`Primary</span>\n                              ~variant:<span class="hljs-tag">`Contained</span>\n                              ~classes:[((<span class="hljs-type">Root</span> ((classes.fontSize)))[@explicit_arity\n                                                                    ]);\n                                       ((<span class="hljs-type">RaisedPrimary</span> ((classes.bgColor)))\n                                       [@explicit_arity ])]\n                              ~children:[<span class="hljs-string">"Example Button"</span>] <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])) <span class="hljs-literal">()</span>)\n         [@<span class="hljs-type">JSX</span> ]))\n  }</code></pre>\n      </div>\n    </div>\n  \n',homepageUrl:"https://github.com/jsiebern/bs-material-ui",repositoryUrl:"https://github.com/jsiebern/bs-material-ui",npmUrl:"https://www.npmjs.com/package/%40jsiebern%2Fbs-material-ui",issuesUrl:"https://github.com/jsiebern/bs-material-ui/issues",slug:"/package/@jsiebern/bs-material-ui"}},pathContext:{id:"@jsiebern/bs-material-ui"}}}});
//# sourceMappingURL=path---package-jsiebern-bs-material-ui-4fadcfa865c7f7598af0.js.map