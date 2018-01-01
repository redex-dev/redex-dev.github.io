webpackJsonp([0x8099ec3b7a83],{1072:function(e,n){e.exports={data:{package:{id:"rationale",score:.578473322655882,name:"rationale",version:"0.1.3",description:"Rationale is a collection of helper utility functions that are absent in the OCaml/ReasonML standard library.",keywords:["lodash","ramda","bucklescript","monad"],license:"MIT",updated:"2017-12-22T17:38:28.649Z",stars:32,type:"published",quality:.7010853538795627,popularity:.055483351630177584,maintenance:.9963672669184318,readme:'<h1>Rationale</h1>\n<p>Rationale is inspired by <a href="http://ramdajs.com/">RamdaJS</a>. It is a collection of helper utility functions that are absent in the OCaml/ReasonML standard library.</p>\n<p>Note that not all of Ramda was ported over, as many of Ramda\'s utilities are making up for deficits in Javascript, which Reason doesn\'t have. Furthermore, many of the functions that operate on objects, simply don\'t make sense in Reason.</p>\n<h2>Features</h2>\n<h3>Exception-free List operations</h3>\n<p>In the OCaml/ReasonML standard library, many of the common List operations throw exceptions if there\'s a problem. Rationale\'s utilities do not throw exceptions, and instead return <code>options</code>.</p>\n<ul>\n<li>head</li>\n<li>tail</li>\n<li>init</li>\n<li>last</li>\n<li>nth</li>\n<li>etc</li>\n</ul>\n<h3>Monadic Options and Js.Results</h3>\n<p>Rationale includes monadic and functor operations ala Haskell for the <code>option</code> and <code>Js.Result</code> types.</p>\n<pre><code class="language-Reason">open Rationale.Option.Infix;\nopen Rationale.Function;\n\nRList.init(a)\n  >>= ((x) => RList.last(a) &#x3C;$> f &#x3C;$> flip(RList.append, x))\n  &#x3C;$> RList.concat(b)\n  |> Option.default(xs);\n</code></pre>\n<h3>Support for Point-free style</h3>\n<p>Rationale has <code>compose</code> and <code>pipe</code> functions, as well as supporting infix operators: <code>&#x3C;||</code> and <code>||></code> respectively.</p>\n<h3>Infix Lens composition</h3>\n<p>Rationale also allows for fluid lens composition via infix operators: <code>-&#x3C;&#x3C;</code> and <code>>>-</code>.</p>\n<pre><code class="language-Reason">Lens.view(aLens >>- bLens >>- optional(0), { a: { b: Some(3) } });\n</code></pre>\n<h3>Function signatures for composition</h3>\n<p>Like in Ramda, functions always keep their data at the end making piping and composing a breeze:</p>\n<pre><code class="language-Reason">list\n  |> take(9)\n  |> drop(3)\n  |> splitAt(4);\n</code></pre>\n<h2>Usage</h2>\n<h3>Using Optional Returns in RList and Dict</h3>\n<p>Returning <code>option(\'a)</code> from functions is generally preferred to throwing an exception.\nIt protects you from runtime errors, and forces you to deal with potential errors at\ncompile time. However, if you\'re not used to doing it, things can get a little\nconfusing.</p>\n<p>Pattern matching for errors all the time would be extremely cumbersome. Fortunately,\nwe provide a host of useful methods to working with optional returns. Hopefully,\nthis doc will show you that you don\'t need to use excessive pattern matching to\nwork with optional returns.</p>\n<h4>Default</h4>\n<p>The most straight forward way to get out of an <code>option</code> is by calling <code>default</code>.</p>\n<pre><code class="language-Reason">Option.default(0, Some(1)); /* 1 */\n\nOption.default(0, None); /* 0 */\n</code></pre>\n<h4>Monads</h4>\n<p>Calling <code>default</code> will definitely get you out of the <code>option</code>, but what if you want\nto do some things to it first? What if you need other funtions that also return <code>option</code>?</p>\n<p>the Option module includes monadic operations for <code>option</code>, so you can take a <em>railway oriented</em>\napproach to working with them.</p>\n<p>First, let\'s check if the last item of a list is equal to a certain value:</p>\n<pre><code class="language-Reason">let lastEquals = (a, xs) => Option.fmap(Util.eq(a), RList.last(xs)) |> Option.default(false);\n\nlastEquals(3, [1,2,3]); /* true */\nlastEquals(3, [4,5,6]); /* false */\nlastEquals(3, []); /* false */\n\n/* Or, with infix operators */\nopen Option.Infix;\n\nlet lastEquals = (a, xs) => RList.last(xs) &#x3C;$> Util.eq(a) |> Option.default(false);\n</code></pre>\n<p>Here we used <code>fmap</code> and its infix variation <code>&#x3C;$></code> to apply a function to the value <em>inside</em> the option.\nNote that, <code>Util.eq</code> returns a <code>bool</code> not an <code>option</code>. So what if the next function also returns an\n<code>option</code>? Well you\'d get nested options, which doesn\'t really help anyone. So, instead, we would\nuse <code>bind</code>.</p>\n<p>Now let\'s replace the last item of one list with the last item of another. Note that both <code>last</code> and\n<code>init</code> return <code>option</code>:</p>\n<pre><code class="language-Reason">let swapLast = (xs, ys) =>\n  Option.(bind(RList.last(xs), ((x) => fmap(RList.append(x), RList.init(ys)))) |> default(ys));\n\nswapLast([1,2,3], [4,5,6]); /* [4,5,3] */\nswapLast([], [4,5,6]); /* [4,5,6] */\n\n/* Or, with infix operators */\nopen Option.Infix;\n\nlet swapLast = (xs, ys) =>\n  RList.last(xs) >>= ((x) => RList.init(ys) &#x3C;$> RList.append(x)) |> Option.default(ys);\n</code></pre>\n<p>Here we used <code>bind</code> and its infix variation <code>>>=</code> to apply a function that also returned an <code>option</code>.</p>\n<h4>Applicatives</h4>\n<p>Let\'s try checking if the last elements of two lists are equal. We could accomplish this using <code>bind</code>,\nbut that can be a little awkward.</p>\n<pre><code class="language-Reason">let lastEqual = (xs, ys) =>\n  Option.(apply(apply(Some(Util.eq), RList.last(xs), RList.last(ys))) |> default(false));\n\nlastEqual([1,2,3], [4,5,3]); /* true */\nlastEqual([1,2,3], [4,5,6]); /* false */\nlastEqual([], [4,5,6]); /* false */\nlastEqual([1,2,3], []); /* false */\n\n/* Or, with infix operators */\nopen Option.Infix;\n\nlet lastEqual = (xs, ys) =>\n  Some(Util.eq) &#x3C;*> RList.last(xs) &#x3C;*> RList.last(ys) |> Option.default(false);\n</code></pre>\n<h3>Translating JS Idioms</h3>\n<h4>Or chains</h4>\n<p>Take the following example in Javascript:</p>\n<pre><code class="language-Javascript">let x = a || b || c || d;\n</code></pre>\n<p>We can\'t translate that directly to Reason, because there is no <code>null</code> or <code>undefined</code> in Reason.\nThe closest approximation would be <code>option</code>, in which we can string together <code>Some</code> and <code>None</code>\nto get the first one that is <code>Some</code>.</p>\n<p>There is a helper function called <code>firstSome</code> and its infix variation <code>|?</code> that do exactly this.</p>\n<pre><code class="language-Reason">/* a, b, and c are all options, but d is not */\nlet x = a |? b |? c |> default(d);\n</code></pre>\n<h2>Reference</h2>\n<h3>Infix Operators</h3>\n<ul>\n<li><code>>>=</code>: Monadic Bind</li>\n<li><code>&#x3C;$></code>: Functor Fmap</li>\n<li><code>&#x3C;*></code>: Applicative Apply</li>\n<li><code>&#x3C;||</code>: Point-free Function Compose</li>\n<li><code>||></code>: Point-free Function Pipe</li>\n<li><code>-&#x3C;&#x3C;</code>: Lens Compose</li>\n<li><code>>>-</code>: Lens Pipe</li>\n<li><code>|?</code>: Optional Or</li>\n</ul>\n',homepageUrl:"https://github.com/jonlaing/rationale#readme",repositoryUrl:"https://github.com/jonlaing/rationale",npmUrl:"https://www.npmjs.com/package/rationale",issuesUrl:"https://github.com/jonlaing/rationale/issues",slug:"packages/rationale"}},pathContext:{id:"rationale"}}}});
//# sourceMappingURL=path---packages-rationale-8d5b5cc09a90adb8c958.js.map