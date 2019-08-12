webpackJsonp([0xdaab94753500],{1247:function(s,a){s.exports={data:{package:{type:"published",id:"bs-react-native-modal",name:"bs-react-native-modal",version:"0.1.1",category:"binding",flags:[],platforms:["node"],description:"bucklesript bindings for react-native-modal",keywords:["react","ui","react-native"],license:"MIT",updated:"2019-08-08T00:29:50.065Z",stars:2,score:.375656469929313,quality:.35006712149004593,popularity:.02460741059836037,maintenance:.748639256493923,readme:'<h1 id="bs-react-native-modal"><a href="#bs-react-native-modal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-react-native-modal</h1>\n<p>this is a binding of <a href="https://github.com/react-native-community/react-native-modal">react-native-modal</a></p>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>see the <a href="https://github.com/broerjuang/bs-react-native-modal/blob/master/src/ReactNativeModal.rei">rei</a> for detail documentation</p>\n<div class="redex-codeblock"><pre class="hljs lang-ocaml"><code><span class="hljs-keyword">module</span> <span class="hljs-type">ModalTester</span> = {\n  <span class="hljs-keyword">open</span> <span class="hljs-type">BsReactNative</span>;\n  <span class="hljs-keyword">type</span> state = {isModalVisible: <span class="hljs-built_in">bool</span>};\n  <span class="hljs-keyword">type</span> action =\n    | <span class="hljs-type">ToggleModal</span>;\n\n  <span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.reducerComponent(<span class="hljs-string">"ModalTester"</span>);\n  <span class="hljs-keyword">let</span> make = _children =&gt; {\n    ...component,\n    initialState: <span class="hljs-literal">()</span> =&gt; {isModalVisible: <span class="hljs-literal">false</span>},\n    reducer: (action, state) =&gt;\n      switch (action) {\n      | <span class="hljs-type">ToggleModal</span> =&gt;\n        <span class="hljs-type">ReasonReact</span>.<span class="hljs-type">Update</span>({isModalVisible: !state.isModalVisible})\n      },\n    render: self =&gt;\n      &lt;<span class="hljs-type">View</span>&gt;\n        &lt;<span class="hljs-type">TouchableOpacity</span> onPress={<span class="hljs-literal">()</span> =&gt; self.send(<span class="hljs-type">ToggleModal</span>)}&gt;\n          &lt;<span class="hljs-type">Text</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"Show Modal"</span> /&gt;\n        &lt;/<span class="hljs-type">TouchableOpacity</span>&gt;\n        &lt;<span class="hljs-type">ReactNativeModal</span> isVisible={self.state.isModalVisible}&gt;\n          &lt;<span class="hljs-type">View</span>&gt;\n            &lt;<span class="hljs-type">Text</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"Hello!"</span> /&gt;\n            &lt;<span class="hljs-type">TouchableOpacity</span> onPress={<span class="hljs-literal">()</span> =&gt; self.send(<span class="hljs-type">ToggleModal</span>)}&gt;\n              &lt;<span class="hljs-type">Text</span> <span class="hljs-keyword">value</span>=<span class="hljs-string">"Hide Me"</span> /&gt;\n            &lt;/<span class="hljs-type">TouchableOpacity</span>&gt;\n          &lt;/<span class="hljs-type">View</span>&gt;\n        &lt;/<span class="hljs-type">ReactNativeModal</span>&gt;\n      &lt;/<span class="hljs-type">View</span>&gt;,\n  };\n};</code></pre></div>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>Use yarn or npm</p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>$ yarn add bs-react-native-modal</code></pre></div>\n<p>Then update your bsconfig.json</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [<span class="hljs-string">"bs-react-native-modal"</span>]\n}</code></pre></div>\n',homepageUrl:"https://github.com/broerjuang/bs-react-native-modal#readme",repositoryUrl:"https://github.com/broerjuang/bs-react-native-modal",npmUrl:"https://www.npmjs.com/package/bs-react-native-modal",issuesUrl:"https://github.com/broerjuang/bs-react-native-modal/issues",slug:"/package/bs-react-native-modal"}},pathContext:{id:"bs-react-native-modal"}}}});
//# sourceMappingURL=path---package-bs-react-native-modal-36dd45089e60d3e173a4.js.map