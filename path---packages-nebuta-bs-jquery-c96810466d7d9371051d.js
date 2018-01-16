webpackJsonp([0x7b48129095b3],{1095:function(e,n){e.exports={data:{package:{id:"@nebuta/bs-jquery",score:.032427894832859065,name:"@nebuta/bs-jquery",version:"0.0.2",description:"jQuery binding for BuckleScript",keywords:["jquery","ocaml","bucklescript"],license:"MIT",updated:"2018-01-02T00:25:26.343Z",stars:null,type:"published",quality:.1041236333597954,popularity:.003402299499772703,maintenance:0,readme:'<h1>BuckleScript jQuery binding</h1>\n<p>BuckleScript binding for jQuery 3.1.</p>\n<p>Still only covers a small part of jQuery, but hopefully this repo and npm package help others understand how to do FFI and make a npm package for BuckleScript.</p>\n<h2>How to use</h2>\n<h3>Compile</h3>\n<p>To compile, for example, a client-side script with <code>src/main.ml</code> as an entry point. </p>\n<pre><code class="language-shell">bsc -I src -c -bs-main src/main.ml -bs-package-include bucklescript-jquery -bs-package-name $npm_package_name -bs-package-output dist\n</code></pre>\n<h3>Bundle</h3>\n<p>To bundle with webpack:</p>\n<pre><code class="language-shell">webpack -p dist/main.js dist/bundle.js\n</code></pre>\n<p>then load <code>dist/bundle.js</code> in your HTML.</p>\n<h2>Testing</h2>\n<p>Run <code>npm run compile_test</code> then open <code>test/test.html</code>. It should show "Test success" in a browser if test is successful.</p>\n<p>Only a small fragment of testing has been added. </p>\n<h2>Copyright</h2>\n<p>Copyright 2016 by Nebuta. MIT license.</p>\n',homepageUrl:"https://github.com/nebuta/bucklescript-jquery",repositoryUrl:"https://github.com/nebuta/bucklescript-jquery",npmUrl:"https://www.npmjs.com/package/%40nebuta%2Fbs-jquery",issuesUrl:"https://github.com/nebuta/bucklescript-jquery/issues",slug:"packages/@nebuta/bs-jquery"}},pathContext:{id:"@nebuta/bs-jquery"}}}});
//# sourceMappingURL=path---packages-nebuta-bs-jquery-c96810466d7d9371051d.js.map