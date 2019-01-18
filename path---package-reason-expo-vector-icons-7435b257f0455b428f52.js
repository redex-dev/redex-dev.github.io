webpackJsonp([0x60034f1baace],{1260:function(e,o){e.exports={data:{package:{type:"published",id:"reason-expo-vector-icons",name:"reason-expo-vector-icons",version:"31.0.1",category:"binding",flags:[],platforms:["any"],description:"Bucklescript bindings for @expo/vector-icons, the standard way to use icons with Expo.",keywords:["react","react-native"],license:"MIT",updated:"2019-01-09T01:03:46.961Z",stars:7,score:.5104293285536623,quality:.5007823938469202,popularity:.03321269123632055,maintenance:.9959147670482116,readme:'<h1 id="reason-expovector-icons"><a href="#reason-expovector-icons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reason @expo/vector-icons</h1>\n<p>This library is the bindings for @expo/vector-icons which is a compatibility layer around @oblador/react-native-vector-icons to work with the Expo asset system. If you\'re using Javascript/Typescript, you have no need for this library -- carry on! (or maybe check out <a href="https://github.com/expo/vector-icons">@expo/vector-icons</a>).</p>\n<p>If you\'re not using Expo, then check out <a href="https://github.com/Astrocoders/bs-react-native-vector-icons">Astrocoders/bs-react-native-vector-icons</a> instead.</p>\n<h2 id="resources"><a href="#resources" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Resources</h2>\n<ul>\n<li><a href="https://expo.github.io/vector-icons/">@expo/vector-icons directory</a> - a searchable list of all included icons.\n<img src="https://raw.githubusercontent.com/expo/vector-icons/master/website-screenshot.png" alt="Screenshot of website"></li>\n<li><a href="https://docs.expo.io/">Expo documentation</a></li>\n</ul>\n<h1 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h1>\n<p>With yarn</p>\n<p><code>yarn add reason-expo-vector-icons</code></p>\n<p>With npm</p>\n<p><code>npm i reason-expo-vector-icons</code></p>\n<p>Then add it to your <code>bsconfig.json</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code>  ...\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    ...,\n    <span class="hljs-string">"reason-expo-vector-icons"</span>\n  ],\n  ...</code></pre></div>\n<h1 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h1>\n<div class="redex-codeblock"><pre class="hljs lang-reasonml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">ReasonExpoVectorIcons</span>;\n\n<span class="hljs-keyword">let</span> component = <span class="hljs-type">ReasonReact</span>.statelessComponent(<span class="hljs-string">"IconExample"</span>);\n<span class="hljs-keyword">let</span> make = (_children) =&gt; {\n  ...component,\n  render: (_self) =&gt; {\n    &lt;<span class="hljs-type">Ionicons</span> name=`md-checkmark-circle size=<span class="hljs-number">32</span> color=<span class="hljs-string">"green"</span> /&gt;\n  }\n};</code></pre></div>\n<h1 id="credits"><a href="#credits" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Credits</h1>\n<p>Thanks to <a href="https://github.com/Astrocoders/bs-react-native-vector-icons">Astrocoders/bs-react-native-vector-icons</a> for\nproviding an example of how to generate this from glyphmap files.</p>\n<p>Thanks to <a href="https://github.com/oblador/react-native-vector-icons">oblador/react-native-vector-icons</a> for the icons.</p>\n<p>Thanks to <a href="https://github.com/expo/vector-icons">@expo/vector-icons</a> for expo.</p>\n',homepageUrl:"https://github.com/lewisf/reason-expo-vector-icons",repositoryUrl:"https://github.com/lewisf/reason-expo-vector-icons",npmUrl:"https://www.npmjs.com/package/reason-expo-vector-icons",issuesUrl:"https://github.com/lewisf/reason-expo-vector-icons",slug:"/package/reason-expo-vector-icons"}},pathContext:{id:"reason-expo-vector-icons"}}}});
//# sourceMappingURL=path---package-reason-expo-vector-icons-7435b257f0455b428f52.js.map