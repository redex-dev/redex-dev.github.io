webpackJsonp([0x8dc05ae0855d],{1072:function(e,t){e.exports={data:{package:{id:"bs-react-native",score:.6141736957615397,name:"bs-react-native",version:"0.5.0",description:"[![Build Status](https://travis-ci.org/reasonml-community/bs-react-native.svg?branch=master)](https://travis-ci.org/reasonml-community/bs-react-native)",keywords:["react-native","bucklescript"],license:"MIT",updated:"2018-01-14T19:53:25.328Z",stars:213,type:"published",quality:.7098519736726542,popularity:.14634573765487116,maintenance:.9999917013729673,readme:'<h1><a href="https://github.com/bloomberg/bucklescript">BuckleScript</a> bindings for <a href="https://github.com/facebook/react-native">React Native</a></h1>\n<p><a href="https://travis-ci.org/reasonml-community/bs-react-native"><img src="https://travis-ci.org/reasonml-community/bs-react-native.svg?branch=master" alt="Build Status"></a></p>\n<h2>Getting started</h2>\n<p>Great that you want to use Reason with React Native! To get everything running are just a couple of steps.\nLet\'s assume that you already have a React Native project. Otherwise follow the React Native <a href="http://facebook.github.io/react-native/docs/getting-started.html">instructions</a> until you have your app running.</p>\n<ol>\n<li>Install <a href="https://github.com/bloomberg/bucklescript">Bucklescript</a> (the Reason -> JS compiler), <a href="https://github.com/reasonml/reason-react">Reason-React</a> and <code>bs-react-native</code>:</li>\n</ol>\n<pre><code class="language-sh"># substitute yarn with npm if you prefer\nyarn add bs-platform reason-react bs-react-native\n</code></pre>\n<ol start="2">\n<li>Create a <code>re</code> folder (there will be your Reason code)</li>\n<li>Create a <code>bsconfig.json</code> with the following content file in your project root</li>\n</ol>\n<pre><code class="language-json">{\n    "name": "my-awesome-app",\n    "reason": {\n        "react-jsx": 2\n    },\n    "bsc-flags": ["-bs-super-errors"],\n    "bs-dependencies": ["bs-react-native", "reason-react"],\n    "sources": [{\n        "dir": "re"\n    }],\n    "refmt": 3\n}\n</code></pre>\n<ol start="4">\n<li>You are nearly done, the last configuration before we get to the fun stuff. In your <code>package.json</code> add to the <code>"scripts"</code> section two scripts:</li>\n</ol>\n<pre><code class="language-json">"scripts": {\n  ...\n  "build": "bsb -make-world -clean-world",\n  "watch": "bsb -make-world -clean-world -w"\n}\n</code></pre>\n<ol start="5">\n<li>Now you can build all your (so far nonexsisting) Reason in two modes:</li>\n</ol>\n<ul>\n<li><code>yarn run build</code> performs a single build</li>\n<li><code>yarn run watch</code> enters the watch mode</li>\n</ul>\n<ol start="6">\n<li>Now we come to the fun stuff! Create a new file <code>re/app.re</code> and make it look like this:</li>\n</ol>\n<pre><code class="language-reason">open BsReactNative;\n\nlet app = () =>\n  &#x3C;View style=Style.(style([flex(1.), justifyContent(`center), alignItems(`center)]))>\n    &#x3C;Text value="Reason is awesome!" />\n  &#x3C;/View>;\n</code></pre>\n<p>and start the watcher with <code>yarn run watch</code> if you haven\'t done it yet.</p>\n<ol start="7">\n<li>We are nearly done! We now have to adopt the <code>index.ios.js</code> / <code>index.android.js</code> to look like this</li>\n</ol>\n<pre><code class="language-js">import { app } from "./lib/js/re/app.js";\nimport React from "react";\nimport {\n  AppRegistry\n} from \'react-native\';\n\nAppRegistry.registerComponent(\'MyAwesomeProject\', () => app);\n</code></pre>\n<p><strong>Note:</strong> Make sure that the first argument to <code>AppRegistry.registerComponent</code> is <strong>your</strong> correct project name.</p>\n<p>If you are using <code>react-native-scripts</code>, then you will need to modify <code>App.js</code> to be like this</p>\n<pre><code class="language-js">import { app } from "./lib/js/re/app.js";\n\nexport default app;\n</code></pre>\n<ol start="8">\n<li>\n<p>Now go to a new tab and start your app with <code>react-native run-ios</code> or <code>react-native run-android</code>.</p>\n</li>\n<li>\n<p>Great you are all set up! Check the source of <code>bs-react-native</code> to find out more about the implemented APIs and Components. If you get stuck just ask on our <a href="https://discord.gg/reasonml">Discord Server</a>! Happy Hacking!</p>\n</li>\n</ol>\n<p>Here are some more things which will be probably useful for you:</p>\n<ul>\n<li><a href="https://reasonml.github.io/reason-react/">Reason-React Documentation</a></li>\n<li><a href="http://bucklescript.github.io/bucklescript/Manual.html">Bucklescript Manual</a></li>\n</ul>\n<h2>Can I really build my React Native app with Reason?</h2>\n<p>Yes! Check out the <a href="https://github.com/FormidableLabs/seattlejsconf-app">Seattle JS Conf App</a> for a real world App written with Reason.</p>\n<h3>Disclaimer</h3>\n<p>There are some components and APIs missing. You can find an overview of the implemented components and APIs <a href="STATUS.md">here</a>. Contributions of Components and APIs are very welcome! The bindings are targeted to React Native <strong>0.46+</strong>.</p>\n<h2>Style</h2>\n<p>Since we have a proper type system we can make styles <strong>typesafe</strong>! Therefore styles are a little bit different declared than in JavaScript:</p>\n<pre><code class="language-reason">open BsReactNative;\n\n/* inline styles */\n&#x3C;View\n  style=(\n    Style.style([\n      Style.flexDirection(`column),\n      Style.backgroundColor("#6698FF"),\n      Style.marginTop(5)\n    ])\n  )\n/>;\n\n/* inline styles with a local open */\n&#x3C;View style=Style.(style([flexDirection(`column), backgroundColor("#6698FF"), marginTop(5)])) />;\n\n/* StyleSheets with a local open */\nlet styles =\n  StyleSheet.create(\n    Style.({"wrapper": style([flexDirection(`column), backgroundColor("#6698FF"), marginTop(5)])})\n  );\n\n&#x3C;View style=styles##wrapper />;\n</code></pre>\n<h2>Toubleshooting</h2>\n<h3><code>Native module cannot be null</code> with create-react-native-app</h3>\n<p>Currently BuckleScript can generate <code>import * as ReactNative from \'react-native\'</code>, which breaks\ncreate-react-native-app. To get around this you can force BuckleScript to generate CommonJS\nmodules instead of ES Modules using:</p>\n<pre><code class="language-json">/* bsconfig.json */\n{\n  /* ... */\n  "package-specs": [\n    {\n      "module": "commonjs"\n    }\n  ]\n}\n</code></pre>\n',homepageUrl:"https://github.com/reasonml-community/bs-react-native#readme",repositoryUrl:"https://github.com/reasonml-community/bs-react-native",npmUrl:"https://www.npmjs.com/package/bs-react-native",issuesUrl:"https://github.com/reasonml-community/bs-react-native/issues",slug:"packages/bs-react-native"}},pathContext:{id:"bs-react-native"}}}});
//# sourceMappingURL=path---packages-bs-react-native-33209d911d6585eaa72b.js.map