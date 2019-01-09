webpackJsonp([0x65d013e34f2e],{1205:function(s,e){s.exports={data:{package:{type:"published",id:"bs-storybook",name:"bs-storybook",version:"0.3.0",category:"binding",flags:[],platforms:["browser"],description:"BuckleScript bindings for Storybook.js",keywords:["react","ui"],license:"MIT",updated:"2019-01-01T11:01:52.645Z",stars:12,score:.48509023793019534,quality:.4106976209858827,popularity:.05842874586190204,maintenance:.975516830236471,readme:'<h1 id="bs-storybook"><a href="#bs-storybook" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>bs-storybook</h1>\n<p>BuckleScript bindings for Storybook.js! The goal of this project is to provide bindings for the main Storybook API, as well as the official add-ons. Currently it supports:</p>\n<ul>\n<li><a href="https://github.com/storybooks/storybook/tree/master/addons/actions">actions</a></li>\n<li><a href="https://github.com/storybooks/storybook/tree/master/addons/knobs">knobs</a></li>\n<li><a href="https://storybook.js.org/addons/writing-addons/">addons API</a></li>\n</ul>\n<h2 id="getting-started"><a href="#getting-started" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Getting Started</h2>\n<p>First install this package:</p>\n<div class="redex-codeblock"><pre class="hljs lang-bash"><code>npm install bs-storybook</code></pre></div>\n<p>Next, you\'ll need to add <code>bs-storybook</code> to your <code>bsconfig.json</code> as a dependency.</p>\n<p>Then, get Storybook up and running according to <a href="https://storybook.js.org/basics/quick-start-guide/">their docs</a>. (<em>Note:</em> This library does not attempt to provide a way to configure storybook in Reason - just use the standard JS configs.)</p>\n<p>In your <code>/.storybook/config.js</code>, import your stories from wherever your compiled Reason modules end up. For example, if you\'re writing your stories inside a <code>__stories__</code> directory, and <code>bsb</code> is configured for a standard build, you might do something like:</p>\n<div class="redex-codeblock"><pre class="hljs lang-javascript"><code>const req = require.context(<span class="hljs-char">\'../lib/js\'</span>, <span class="hljs-literal">true</span>, /\\__stories__\\/.*.js$/);\nconfigure(<span class="hljs-literal">()</span> =&gt; {\n  req.keys<span class="hljs-literal">()</span>.forEach(<span class="hljs-keyword">module</span> =&gt; {\n    req(<span class="hljs-keyword">module</span>).default<span class="hljs-literal">()</span>;\n  });\n}, <span class="hljs-keyword">module</span>);</code></pre></div>\n<p>Note that in the above example, we\'re assuming the convention of each module containing a function as the <code>default</code> export. We\'ll account for that when writing our stories in the next section.</p>\n<h2 id="writing-a-story"><a href="#writing-a-story" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Writing a story</h2>\n<p>Here\'s a basic story in its entirety:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">BsStorybook</span>.<span class="hljs-type">Story</span>;\n\n<span class="hljs-keyword">let</span> _module = [%bs.raw <span class="hljs-string">"module"</span>];\n\nstoriesOf(<span class="hljs-string">"My First Reason Story"</span>, _module)\n|. addDecorator()\n|. add(<span class="hljs-string">"first chapter"</span>, () =&gt;\n     &lt;span&gt; (<span class="hljs-type">ReasonReact</span>.stringToElement(<span class="hljs-string">"Hello bs-storybook!"</span>)) &lt;/span&gt;\n   );</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">open</span> <span class="hljs-type">BsStorybook</span>.<span class="hljs-type">Story</span>\n<span class="hljs-keyword">let</span> _module = [%bs.raw <span class="hljs-string">"module"</span>]\n<span class="hljs-keyword">let</span> _ =\n  ((storiesOf <span class="hljs-string">"My First Reason Story"</span> _module) |. (addDecorator <span class="hljs-literal">()</span>)) |.\n    (add <span class="hljs-string">"first chapter"</span>\n       (<span class="hljs-keyword">fun</span> <span class="hljs-literal">()</span>  -&gt;\n          ((span\n              ~children:[<span class="hljs-type">ReasonReact</span>.stringToElement <span class="hljs-string">"Hello bs-storybook!"</span>]\n              <span class="hljs-literal">()</span>)[@<span class="hljs-type">JSX</span> ])))</code></pre>\n      </div>\n    </div>\n  \n<p>Storybook uses a reference to the <code>module</code> global provided by webpack to facilitate hot-reloading. We\'ll access that via the <code>[%bs.raw]</code> decorator.</p>\n<h2 id="the-actions-addon"><a href="#the-actions-addon" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Actions Addon</h2>\n<p>The action addon\'s API is essentially unchanged from its JS implementation:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> clickAction = <span class="hljs-type">Action</span>.action(<span class="hljs-string">"I Clicked The Button!"</span>);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> clickAction = <span class="hljs-type">Action</span>.action <span class="hljs-string">"I Clicked The Button!"</span></code></pre>\n      </div>\n    </div>\n  \n<h2 id="the-knobs-addon"><a href="#the-knobs-addon" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Knobs Addon</h2>\n<p>To use knobs, be sure to add the decorator to your story definition:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> knobsStory =\n\tcreateStory(~title=<span class="hljs-string">"Hey look, knobs!"</span>, ~decorators=[<span class="hljs-type">Knobs</span>.withKnobs], ~_module, ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> knobsStory =\n  createStory ~title:<span class="hljs-string">"Hey look, knobs!"</span> ~decorators:[<span class="hljs-type">Knobs</span>.withKnobs]\n    ~_module <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<p>Each knob type is invoked using a function with labeled arguments, and each requires passing <code>unit</code> as the final argument. They all share a <code>~label</code> argument, and a <code>~defaultValue</code> argument (where appropriate);</p>\n<h3 id="text"><a href="#text" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Text</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myText = <span class="hljs-type">Knobs</span>.text(~label=<span class="hljs-string">"What should it say?"</span>, ~defaultValue=<span class="hljs-string">"Sup?"</span>, ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> myText = <span class="hljs-type">Knobs</span>.text ~label:<span class="hljs-string">"What should it say?"</span> ~defaultValue:<span class="hljs-string">"Sup?"</span> <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="boolean"><a href="#boolean" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Boolean</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myBoolean = <span class="hljs-type">Knobs</span>.boolean(~label=<span class="hljs-string">"Should Show?"</span>, ~defaultValue=<span class="hljs-literal">true</span>, ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> myBoolean = <span class="hljs-type">Knobs</span>.boolean ~label:<span class="hljs-string">"Should Show?"</span> ~defaultValue:<span class="hljs-literal">true</span> <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<p>Note: The boolean type will call the underlying JS knob with a defaultValue of <code>false</code> if one is not provided.</p>\n<h3 id="color"><a href="#color" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Color</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> myColor = <span class="hljs-type">Knobs</span>.color(~label=<span class="hljs-string">"Color"</span>, ~defaultValue=<span class="hljs-string">"#333"</span> ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> myColor = <span class="hljs-type">Knobs</span>.color ~label:<span class="hljs-string">"Color"</span> ~defaultValue:(<span class="hljs-string">"#333"</span> <span class="hljs-literal">()</span>)</code></pre>\n      </div>\n    </div>\n  \n<h3 id="number"><a href="#number" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Number</h3>\n<p>The number type works with floats. If no <code>defaultValue</code> is provided, it will pass <code>0</code>. It also takes an optional <code>rangeConfig</code> record, which allows for specifying a <code>min</code>, <code>max</code>, and <code>step</code> so that the knob is displayed as a range slider.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> num1 = <span class="hljs-type">Knobs</span>.number(~label=<span class="hljs-string">"Number 1"</span>, ());\n<span class="hljs-keyword">let</span> num2 =\n\t<span class="hljs-type">Knobs</span>.number(\n\t\t~label=<span class="hljs-string">"Number 2"</span>,\n\t\t~rangeConfiguration={<span class="hljs-built_in">min</span>: <span class="hljs-number">0</span>., <span class="hljs-built_in">max</span>: <span class="hljs-number">10</span>., step: <span class="hljs-number">1</span>.},\n\t\t()\n\t);</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> num1 = <span class="hljs-type">Knobs</span>.number ~label:<span class="hljs-string">"Number 1"</span> <span class="hljs-literal">()</span>\n<span class="hljs-keyword">let</span> num2 =\n  <span class="hljs-type">Knobs</span>.number ~label:<span class="hljs-string">"Number 2"</span>\n    ~rangeConfiguration:{ min = <span class="hljs-number">0.</span>; max = <span class="hljs-number">10.</span>; step = <span class="hljs-number">1.</span> } <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="select"><a href="#select" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Select</h3>\n<p>To use the select knob, first define a record type that contains the shape of the options, then the actual options as a type of <code>selectConfig</code>, passing your shape as the constructor type:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">type</span> selectOptions = {\n\tone: string,\n\ttwo: string\n};\n\n<span class="hljs-keyword">let</span> options : <span class="hljs-type">Knobs</span>.selectConfig(selectOptions) = {\n\tone: <span class="hljs-string">"Hello"</span>,\n\ttwo: <span class="hljs-string">"Hi"</span>\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">type</span> selectOptions = {\n  one: <span class="hljs-built_in">string</span>;\n  two: <span class="hljs-built_in">string</span>;}\n<span class="hljs-keyword">let</span> options: selectOptions <span class="hljs-type">Knobs</span>.selectConfig = { one = <span class="hljs-string">"Hello"</span>; two = <span class="hljs-string">"Hi"</span> }</code></pre>\n      </div>\n    </div>\n  \n<p>Then define the select knob like so:</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greeting = <span class="hljs-type">Knobs</span>.select(~label=<span class="hljs-string">"Greeting"</span>, ~options, ~defaultValue=options.one, ());</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> greeting =\n  <span class="hljs-type">Knobs</span>.select ~label:<span class="hljs-string">"Greeting"</span> ~options ~defaultValue:(options.one) <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="button"><a href="#button" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Button</h3>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-type">Knobs</span>.button(\n\t~label=<span class="hljs-string">"Knob Button"</span>,\n\t~handler=<span class="hljs-type">Action</span>.action(<span class="hljs-string">"Clicked the knob button"</span>),\n\t()\n)</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-keyword">let</span> _ =\n  <span class="hljs-type">Knobs</span>.button ~label:<span class="hljs-string">"Knob Button"</span>\n    ~handler:(<span class="hljs-type">Action</span>.action <span class="hljs-string">"Clicked the knob button"</span>) <span class="hljs-literal">()</span></code></pre>\n      </div>\n    </div>\n  \n<h3 id="object"><a href="#object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Object</h3>\n<p>Not yet implemented.</p>\n<h3 id="array"><a href="#array" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Array</h3>\n<p>Not yet implemented.</p>\n',homepageUrl:"https://github.com/MyWellGiving/bs-storybook",repositoryUrl:"https://github.com/MyWellGiving/bs-storybook",npmUrl:"https://www.npmjs.com/package/bs-storybook",issuesUrl:"https://github.com/MyWellGiving/bs-storybook/issues",slug:"/package/bs-storybook"}},pathContext:{id:"bs-storybook"}}}});
//# sourceMappingURL=path---package-bs-storybook-8566e8e37bcbf9e2f6f3.js.map