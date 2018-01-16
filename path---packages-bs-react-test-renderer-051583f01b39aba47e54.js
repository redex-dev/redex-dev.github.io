webpackJsonp([39120714797016],{1075:function(e,t){e.exports={data:{package:{id:"bs-react-test-renderer",score:.6599149398286515,name:"bs-react-test-renderer",version:"2.0.0",description:"BuckleScript bindings for react-test-renderer.",keywords:[],license:"MIT",updated:"2018-01-13T15:01:31.137Z",stars:0,type:"published",quality:.9779160421816148,popularity:.04727475200659386,maintenance:.9999827542053119,readme:'<h1>bs-react-test-renderer</h1>\n<p><a href="https://travis-ci.org/reasonml-community/bs-react-test-renderer"><img src="https://img.shields.io/travis/reasonml-community/bs-react-test-renderer.svg?style=flat-square" alt="Build Status"></a>\n<a href="https://npm.im/bs-react-test-renderer"><img src="https://img.shields.io/npm/v/bs-react-test-renderer.svg?style=flat-square" alt="npm"></a>\n<a href="https://david-dm.org/reasonml-community/bs-react-test-renderer"><img src="https://img.shields.io/david/reasonml-community/bs-react-test-renderer.svg?style=flat-square" alt="dependencies"></a>\n<a href="https://david-dm.org/reasonml-community/bs-react-test-renderer?type=dev"><img src="https://img.shields.io/david/dev/reasonml-community/bs-react-test-renderer.svg?style=flat-square" alt="devDependencies"></a></p>\n<blockquote>\n<p><a href="//github.com/BuckleScript/bucklescript">BuckleScript</a> bindings for <a href="//github.com/facebook/react/tree/master/packages/react-test-renderer">react-test-renderer</a>.</p>\n</blockquote>\n<h2>Installation</h2>\n<pre><code class="language-sh">$ yarn add --dev bs-react-test-renderer\n\n# or..\n\n$ npm install --save-dev bs-react-test-renderer\n</code></pre>\n<h2>Usage</h2>\n<h4>Add to <code>bsconfig.json</code></h4>\n<pre><code class="language-json">{\n  "bs-dev-dependencies": [\n    "bs-react-test-renderer"\n  ]\n}\n</code></pre>\n<h4>With <a href="//github.com/reasonml-community/bs-jest"><code>bs-jest</code></a></h4>\n<pre><code class="language-ocaml">/* Component_test.re */\n\nopen Jest;\n\ndescribe("Component", () => {\n  open ExpectJs;\n\n  test("renders", () => {\n    let component = ReactShallowRenderer.renderWithRenderer(&#x3C;Component />);\n\n    expect(Js.Undefined.return(component)) |> toBeDefined;\n  });\n});\n</code></pre>\n<h2>Examples</h2>\n<p>See <a href="src/__tests__"><code>src/__tests__</code></a> for some examples.</p>\n<p>For examples with Snapshot testing with <a href="//github.com/reasonml-community/bs-jest"><code>bs-jest</code></a>, see <a href="//github.com/wyze/reason-calculator"><code>reason-calculator</code></a>.</p>\n<h2>Development</h2>\n<pre><code class="language-sh">$ git clone https://github.com/reasonml-community/bs-react-test-renderer.git\n$ cd bs-react-test-renderer\n$ yarn # or `npm install`\n</code></pre>\n<h2>Build</h2>\n<pre><code class="language-sh">$ yarn build\n</code></pre>\n<h2>Test</h2>\n<pre><code class="language-sh">$ yarn test\n</code></pre>\n<h2>Change Log</h2>\n<blockquote>\n<p><a href="changelog.md">Full Change Log</a></p>\n</blockquote>\n<h3><a href="https://github.com/reasonml-community/bs-react-test-renderer/releases/tag/v2.0.0">v2.0.0</a> (2017-12-14)</h3>\n<ul>\n<li>[<a href="https://github.com/reasonml-community/bs-react-test-renderer/commit/7e7404665f"><code>7e7404665f</code></a>] - Upgrade react-test-renderer (#2) (Rolf Erik Lekang)</li>\n</ul>\n<h2>License</h2>\n<p>MIT © <a href="https://neilkistner.com">Neil Kistner</a></p>\n',homepageUrl:"https://github.com/reasonml-community/bs-react-test-renderer#readme",repositoryUrl:"https://github.com/reasonml-community/bs-react-test-renderer",npmUrl:"https://www.npmjs.com/package/bs-react-test-renderer",issuesUrl:"https://github.com/reasonml-community/bs-react-test-renderer/issues",slug:"packages/bs-react-test-renderer"}},pathContext:{id:"bs-react-test-renderer"}}}});
//# sourceMappingURL=path---packages-bs-react-test-renderer-051583f01b39aba47e54.js.map