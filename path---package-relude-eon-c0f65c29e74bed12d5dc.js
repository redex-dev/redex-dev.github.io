webpackJsonp([49923263179123],{1411:function(e,n){e.exports={data:{package:{type:"published",id:"relude-eon",name:"relude-eon",version:"0.3.0",category:"library",flags:[],platforms:["browser","node"],description:"A datetime tool for the ages in ReasonML",keywords:["date/time manipulation"],license:"MIT",updated:"2020-05-14T05:05:34.860Z",stars:13,score:.5137554361526755,quality:.8903716122729071,popularity:.042780504831260155,maintenance:.661916502228178,readme:'<h1 id="relude-eon"><a href="#relude-eon" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Relude Eon</h1>\n<p><a href="https://github.com/reazen/relude/actions"><img src="https://img.shields.io/github/workflow/status/reazen/relude/CI/master" alt="GitHub CI"></a>\n<a href="https://coveralls.io/github/reazen/relude-eon"><img src="https://img.shields.io/coveralls/github/reazen/relude-eon.svg" alt="test coverage"></a>\n<a href="https://www.npmjs.com/package/relude-eon"><img src="https://img.shields.io/npm/v/relude-eon.svg" alt="npm version"></a>\n<a href="https://github.com/reazen/relude-eon/blob/master/LICENSE"><img src="https://img.shields.io/github/license/reazen/relude-eon.svg" alt="license"></a></p>\n<p>Relude Eon is a ReasonML library for working with type-safe date and time values in a sane way.</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p><strong>Install via npm:</strong></p>\n<p><code>npm install --save relude-eon</code></p>\n<p><strong>Update your bsconfig.json</strong></p>\n<div class="redex-codeblock"><pre class="hljs lang-none"><code><span class="hljs-string">"bs-dependencies"</span>: [\n  <span class="hljs-string">"relude-eon"</span>\n],</code></pre></div>\n<p>Eon has <code>peerDependencies</code> on <code>relude</code> and <code>bs-abstract</code>, so make sure to <code>npm install --save relude bs-abstract</code> and add them to your <code>bsconfig.json</code>.</p>\n<h2 id="project-status"><a href="#project-status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Project Status</h2>\n<p>This just might be useful!</p>\n<h3 id="things-that-work"><a href="#things-that-work" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Things That Work</h3>\n<ul>\n<li>All of the core building blocks are there (see below)</li>\n<li>The useful types (e.g. <code>Instant</code>, <code>LocalDate</code>, <code>LocalTime</code>) all support basic date math</li>\n<li>Basic interop with <code>Js.Date</code> exists</li>\n<li>Most things have at least <em>some</em> tests</li>\n</ul>\n<h3 id="not-quite-yet"><a href="#not-quite-yet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Not Quite Yet</h3>\n<ul>\n<li>Durations (for generic date math, building ranges, etc)</li>\n<li>Weekdays</li>\n<li>String functions (parsers, formatters)</li>\n<li>Timezones (we have offsets, but currently there\'s no support for named zones, daylight savings time, etc)</li>\n</ul>\n<h3 id="currently-out-of-scope"><a href="#currently-out-of-scope" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Currently Out-Of-Scope</h3>\n<ul>\n<li>Julian Calendar (leap years are calculated based on the Gregorian calendar, no mattter how far back in time you go)</li>\n<li>Leap Seconds (<a href="https://github.com/reazen/relude-eon/issues/4">there\'s a plan</a>, but it isn\'t currently a priority)</li>\n<li>Native (we\'re currently Bucklescript-only, but that\'s mostly because of our dependencies)</li>\n</ul>\n<h2 id="core-concepts"><a href="#core-concepts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Core Concepts</h2>\n<p>Dates in Eon are built from smaller, typed building blocks. These building blocks can be combined to form more complex types that represent fundamentally different pieces of data.</p>\n<p>For example, a 3-tuple of Year, Month, Day (which we call a <code>LocalDate</code>) is different from a specific moment in time (which we call <code>Instant</code>), but they are built from some of the same underlying pieces.</p>\n<h3 id="building-blocks"><a href="#building-blocks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Building Blocks</h3>\n<p>Eon provides the following primitives for constructing different kinds of dates:</p>\n<table>\n<thead>\n<tr>\n<th>Module</th>\n<th>Purpose &#x26; Usage</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Year</td>\n<td>An integer representing a year. Currently there\'s no validation (other than being an \n<code>int</code>\n).</td>\n</tr>\n<tr>\n<td>Month</td>\n<td>A variant type that is one of the 12 named months (where each constructor is the first 3 letters of the month name in English, e.g. \n<code>Oct</code>\n).</td>\n</tr>\n<tr>\n<td>DayOfMonth</td>\n<td>A 1-based day in a given month. Technically unbounded on its own, but validation is enforced in the context of a Month (see \n<code>LocalDate</code>\n, \n<code>Instant</code>\n, etc).</td>\n</tr>\n<tr>\n<td>Hour</td>\n<td>An \n<code>int</code>\n bound to the range 0...23 (inclusive).</td>\n</tr>\n<tr>\n<td>Minute</td>\n<td>An \n<code>int</code>\n bound to the range 0...59 (inclusive).</td>\n</tr>\n<tr>\n<td>Second</td>\n<td>An \n<code>int</code>\n bound to the range 0...59 (inclusive).</td>\n</tr>\n<tr>\n<td>Millisecond</td>\n<td>An \n<code>int</code>\n bound to the range 0...999 (inclusive).</td>\n</tr>\n<tr>\n<td>OffsetMinute</td>\n<td>An \n<code>int</code>\n representing the offset from UTC, in minutes. \n<code>-480</code>\n is \n<code>-08:00</code>\n in ISO-8601, which is used by US Pacific Time (standard, not daylight savings), along with several other timezones.</td>\n</tr>\n</tbody>\n</table>\n<h3 id="useful-types"><a href="#useful-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Useful Types</h3>\n<p>The building blocks are fine, but they\'re a lot more useful when you start combining them. You\'re certainly free to make your own types, but here are some common ones we provide:</p>\n<table>\n<thead>\n<tr>\n<th>Module</th>\n<th>Purpose &#x26; Usage</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>LocalDate</td>\n<td>A 3-tuple of (year, month, day), where \n<code>day</code>\n is always validated against the combination of year and month. Feb 29 can exist in the year 2020, but not in 2019.</td>\n</tr>\n<tr>\n<td>LocalTime</td>\n<td>A 4-tuple of (hour, minute, second, millisecond). The lower bound is midnight (0, 0, 0, 0), and the upper bound is the millisecond before midnight (23, 59, 59, 999)</td>\n</tr>\n<tr>\n<td>LocalDateTime</td>\n<td>Combines a \n<code>LocalDate</code>\n with a \n<code>LocalTime</code>\n, effectively year, month, day, hour, minute, second, millisecond. Note that this does not assume any particular timezone/offset.</td>\n</tr>\n<tr>\n<td>Instant</td>\n<td>A \n<code>LocalDateTime</code>\n paired with a UTC offset in minutes. \n<em>This</em>\n is the type you want if you\'re looking to represent an exact moment in time, as JS dates do. Indeed, this type can be converted to or from JavaScript dates (though the original offset will be lost when converting to JS).</td>\n</tr>\n<tr>\n<td>InstantUTC</td>\n<td>Exactly like \n<code>Instant</code>\n, except the UTC offset is assumed to be \n<code>0</code>\n. This is slightly less powerful than a normal \n<code>Instant</code>\n, but it can be converted 1:1 with a JS date, and it can be ordered or checked for equality more easily because there aren\'t multiple ways to represent the same value.</td>\n</tr>\n</tbody>\n</table>\n<h3 id="differences-from-js-date"><a href="#differences-from-js-date" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Differences from JS Date</h3>\n<p>Cinco de Mayo happens every year on May 5. This year, it was on May 5, 2019. The Cinco de Mayo parade began at exactly 2pm Mountain Time (-360 minutes from UTC) on May 5, 2019.</p>\n<p>These statements represent different types of data, which may seem obvious, but if you\'ve used JavaScript dates in the browser, you\'ve probably run into calendar picker widgets that return a <code>Date</code> object, which suggests that the user has selected a precise <code>Instant</code>.</p>\n<p>In reality, choosing a date from a calendar should only imply Year, Month, Day. Worse, you can\'t even safely convert that <code>Date</code> object into a Year, Month, Day, without more context, because the <code>Date.getDate</code> function (which returns the day-of-month) could give different answers depending on the client\'s timezone offset.</p>\n<p>Eon solves all this by treating those pieces of data as different types, while providing functions to easily, <em>but explicitly</em>, convert between those types.</p>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p>Note that these examples may be accurate, but they may also be aspirational. For now, <a href="https://github.com/reazen/relude-eon/tree/master/test">the tests</a> are the best place to look for correct information about usage.</p>\n<h3 id="schedule-birthday-email"><a href="#schedule-birthday-email" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Schedule Birthday Email</h3>\n<p>Imagine we\'re writing a function that collects a user\'s birthdate (which they selected from a calendar widget that returned a sad Js.Date.t). We want to use this information, along with the user\'s timezone offset (an <code>int</code>) and the current timestamp as a ReludeEon.InstantUTC.t, to schedule a "happy birthday" email to be sent at 10am on the user\'s next birthday.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReludeEon</span>;\n\n<span class="hljs-comment">// Note: this function does everything from reading raw dates from JS to sending</span>\n<span class="hljs-comment">// or scheduling fake emails. This is a poorly-designed function. It does way</span>\n<span class="hljs-comment">// too much, with the goal of demonstrating several ReludeEon features.</span>\n<span class="hljs-keyword">let</span> scheduleBdayEmail =\n  (bday: <span class="hljs-type">Js</span>.<span class="hljs-type">Date</span>.t, offsetMinute: int, now: <span class="hljs-type">InstantUTC</span>.t) =&gt; {\n  <span class="hljs-comment">// First of all, having a date object (i.e. an exact moment in UTC time) that</span>\n  <span class="hljs-comment">// represents the user\'s birthday doesn\'t make much sense, so we convert it</span>\n  <span class="hljs-comment">// to a ReludeEon LocalDate value. We assume that the `Date` represents</span>\n  <span class="hljs-comment">// midnight on the chosen day _in the user\'s timezone_, but this is where the</span>\n  <span class="hljs-comment">// ambiguity of JS Dates can cause problems.</span>\n  <span class="hljs-keyword">let</span> birthday =\n    <span class="hljs-comment">// turn the Js.Date into an Instant.t in the user\'s timezone, then throw</span>\n    <span class="hljs-comment">// away hour/minute/second/milli and offset</span>\n    <span class="hljs-type">Interop</span>.<span class="hljs-type">JsDate</span>.toInstant(~offsetMinute, bday) |&gt; <span class="hljs-type">Instant</span>.getDate;\n\n  <span class="hljs-comment">// break down the "now" timestamp to the bits we care about</span>\n  <span class="hljs-keyword">let</span> today = <span class="hljs-type">InstantUTC</span>.getDate(now);\n  <span class="hljs-keyword">let</span> currentYear = <span class="hljs-type">LocalDate</span>.getYear(today);\n\n  <span class="hljs-comment">// here we alias some comparison helpers. Note that these are not the usual</span>\n  <span class="hljs-comment">// polymorphic (==) and (&gt;) functions. These are type-safe, efficient</span>\n  <span class="hljs-comment">// functions that only work with LocalDate values.</span>\n  <span class="hljs-keyword">let</span> ((==) , (&gt;)) = <span class="hljs-type">LocalDate</span>.(eq, greaterThan);\n\n  <span class="hljs-comment">// next, set the year to this year, then determine if the birthday has already</span>\n  <span class="hljs-comment">// happened this year (in which case we should schedule for next year)</span>\n  <span class="hljs-keyword">let</span> birthdayThisYear = <span class="hljs-type">LocalDate</span>.setYear(currentYear, birthday);\n\n  <span class="hljs-keyword">if</span> (birthdayThisYear == today) {\n    sendTheEmailRightNow(); <span class="hljs-comment">// it\'s not too late!</span>\n  } <span class="hljs-keyword">else</span> {\n    <span class="hljs-comment">// if the birthday already happened this year, schedule for next year</span>\n    <span class="hljs-keyword">let</span> targetDay = birthdayThisYear &gt; today\n      ? birthdayThisYear : <span class="hljs-type">LocalDate</span>.nextYear(birthdayThisYear);\n\n    <span class="hljs-comment">// make it a specific time (10am given the user\'s offset), adjusted to UTC</span>\n    <span class="hljs-comment">// and written as an ISO-8601 string for compatibility with some imaginary</span>\n    <span class="hljs-comment">// external service</span>\n    <span class="hljs-keyword">let</span> targetInstant =\n      <span class="hljs-type">Instant</span>.fromDateClamped(~hour=<span class="hljs-number">10</span>, ~offsetMinute, targetDay)\n      |&gt; <span class="hljs-type">Instant</span>.adjustToUTC\n      |&gt; <span class="hljs-type">Instant</span>.formatISO;\n\n    <span class="hljs-comment">// let\'s assume we\'re integrating with an external scheduling system that</span>\n    <span class="hljs-comment">// wants UTC times provided as ISO-8601 strings</span>\n    scheduleForLater(targetInstant);\n  };\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h3 id="filter-login-times"><a href="#filter-login-times" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Filter Login Times</h3>\n<p>Eon provides utilities that are meant to be composed with other functions from the Relude ecosystem. For example, instead of providing you with a function to sort a list of dates, we provide you with a <code>compare</code> function (and an implementation of the <code>Ord</code> module type) that allow you to use existing functions from <code>Relude.List</code>.</p>\n<p>In this example, we work with a list of login timestamps for a user (e.g. from some audit logs) and determine whether the user logged in between two specific dates.</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code>open <span class="hljs-type">ReludeEon</span>;\n\n<span class="hljs-comment">// imagine our system was known to be in a bad state from Mar 17, 2019 at</span>\n<span class="hljs-comment">// 04:00:00UTC until Mar 26, 2019 at 17:30:00UTC. We want to look at a list of</span>\n<span class="hljs-comment">// user login timestamps and determine if they logged in during that period.</span>\n<span class="hljs-keyword">let</span> loggedInAtBadTime = (loginTimes: list(<span class="hljs-type">InstantUTC</span>.t)) =&gt; {\n  <span class="hljs-keyword">let</span> badStart = <span class="hljs-type">InstantUTC</span>.makeClamped(\n    ~year=<span class="hljs-number">2019</span>,\n    ~month=<span class="hljs-type">Mar</span>,\n    ~dayOfMonth=<span class="hljs-number">17</span>,\n    ~hour=<span class="hljs-number">4</span>,\n    ()\n  );\n\n  <span class="hljs-keyword">let</span> badEnd = <span class="hljs-type">InstantUTC</span>.makeClamped(\n    ~year=<span class="hljs-number">2019</span>,\n    ~month=<span class="hljs-type">Mar</span>,\n    ~dayOfMonth=<span class="hljs-number">26</span>,\n    ~hour=<span class="hljs-number">17</span>,\n    ~minute=<span class="hljs-number">30</span>,\n    ()\n  );\n\n  <span class="hljs-comment">// do any of the user\'s login times fall between this start and end?</span>\n  <span class="hljs-type">List</span>.any(<span class="hljs-type">InstantUTC</span>.between(~<span class="hljs-built_in">min</span>=badStart, ~<span class="hljs-built_in">max</span>=badEnd), loginTimes);\n\n  <span class="hljs-comment">// or maybe we want to find (optionally) the first time they logged in after</span>\n  <span class="hljs-comment">// the issue was over</span>\n  <span class="hljs-keyword">let</span> (&gt;) = <span class="hljs-type">InstantUTC</span>.greaterThan;\n\n  loginTimes\n  |&gt; <span class="hljs-type">List</span>.<span class="hljs-built_in">filter</span>(login =&gt; login &gt; badEnd)\n  |&gt; <span class="hljs-type">List</span>.minBy(<span class="hljs-type">InstantUTC</span>.compare); <span class="hljs-comment">// or List.min((module InstantUTC.Ord))</span>\n};</code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">2553</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h3 id="date-math-build-a-range"><a href="#date-math-build-a-range" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Date Math: Build a Range</h3>\n<p>Most of the provided types (particularly the useful combination types) provide math helpers to add and subtract months, days, hours, etc. Here we use these features to build a list of the next 5 Fridays after a given date (e.g., to show options to the user in a dropdown).</p>\n\n    <div class="redex-codeblock m-tabbed">\n      <ul>\n        <li class="reason s-selected"> RE\n        <li class="ml"> ML\n      </ul>\n      <div class="codeblock reason s-selected">\n        <pre class="hljs lang-reason"><code><span class="hljs-comment">// TODO</span></code></pre>\n      </div>\n      <div class="codeblock ml">\n        <pre class="hljs lang-ml"><code><span class="hljs-number">0</span>: &lt;<span class="hljs-type">UNKNOWN</span> <span class="hljs-type">SYNTAX</span> <span class="hljs-type">ERROR</span>&gt;</code></pre>\n      </div>\n    </div>\n  \n<h2 id="contributing"><a href="#contributing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributing</h2>\n<p>If you want to contribute code, that\'d be awesome, but just <em>using</em> Eon and providing feedback about any inconsistencies in the API or anything else that isn\'t quite clear is also incredibly valuable! For more details about how you can help, (<a href="https://github.com/reazen/relude-eon/blob/master/CONTRIBUTING.md">see CONTRIBUTING</a>).</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>Released under the <a href="https://github.com/reazen/relude-eon/blob/master/LICENSE">MIT license</a>.</p>\n',homepageUrl:"https://github.com/reazen/relude-eon#readme",repositoryUrl:"https://github.com/reazen/relude-eon",npmUrl:"https://www.npmjs.com/package/relude-eon",issuesUrl:"https://github.com/reazen/relude-eon/issues",slug:"/package/relude-eon"}},pathContext:{id:"relude-eon"}}}});
//# sourceMappingURL=path---package-relude-eon-c0f65c29e74bed12d5dc.js.map