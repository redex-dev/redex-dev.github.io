webpackJsonp([0xc9eea8353741],{1339:function(e,a){e.exports={data:{package:{type:"published",id:"@mobily/re-date",name:"@mobily/re-date",version:"0.10.0",category:"library",flags:[],platforms:["browser","node"],description:"📆 A collection of useful helpers for handling dates in Reason with the same modern API as the well-known `date-fns`.",keywords:["date/time manipulation"],license:"MIT",updated:"2020-02-02T20:25:39.215Z",stars:52,score:.6219054304606915,quality:.8429257907614139,popularity:.06565075908543426,maintenance:.988714078721044,readme:'<h1 align="center">\n  ReDate\n</h1>\n<blockquote align="center">\n  📆 A collection of useful helpers for handling dates in Reason with the same modern API as the well-known `date-fns`.\n</blockquote>\n<div align="center">\n  <img alt="ReDate" width="100%" src="assets/header.png"/>\n</div>\n<p align="center">\n  <a href="https://travis-ci.com/mobily/re-date">\n    <img src="https://img.shields.io/travis/com/mobily/re-date.svg?style=flat-square" alt="Build Status" />\n  </a>\n  <a href="https://coveralls.io/github/mobily/re-date?branch=master">\n    <img src="https://img.shields.io/coveralls/github/mobily/re-date.svg?style=flat-square" alt="Coverage" />\n  </a>\n  <a href="https://www.npmjs.com/package/@mobily/re-date">\n    <img src="https://img.shields.io/npm/v/@mobily/re-date.svg?style=flat-square" alt="npm" />\n  </a>\n  <a href="http://makeapullrequest.com">\n    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />\n  </a>\n  <a href="#contributors">\n    <img src="https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square" alt="All Contributors" />\n  </a>\n  <a href="https://github.com/mobily/re-date/blob/master/LICENSE">\n    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="GitHub license" />\n  </a>\n</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>yarn add @mobily/re-date</code></pre></div>\n<p>or with <code>npm</code></p>\n<div class="redex-codeblock"><pre class="hljs lang-shell"><code>npm install @mobily/re-date --save</code></pre></div>\n<p>Then add <code>@mobily/re-date</code> to <code>bs-dependencies</code> in your <code>bsconfig.json</code>:</p>\n<div class="redex-codeblock"><pre class="hljs lang-json"><code>{\n  <span class="hljs-string">"bs-dependencies"</span>: [\n    <span class="hljs-string">"@mobily/re-date"</span>\n  ]\n}</code></pre></div>\n<h2 id="api-reference"><a href="#api-reference" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Api Reference</h2>\n<p>If you are familiar with <code>date-fns</code>, then you already know how to use <code>ReDate</code>.</p>\n<p><strong>The list of helpers:</strong></p>\n<!-- TOC:START - Do not remove or modify this section -->\n<details>\n<summary><code>Common</code></summary>\n<ul>\n<li><a href="docs/common.md#isequal">isEqual</a></li>\n<li><a href="docs/common.md#isbefore">isBefore</a></li>\n<li><a href="docs/common.md#isafter">isAfter</a></li>\n<li><a href="docs/common.md#isfuture">isFuture</a></li>\n<li><a href="docs/common.md#ispast">isPast</a></li>\n<li><a href="docs/common.md#compareasc">compareAsc</a></li>\n<li><a href="docs/common.md#comparedesc">compareDesc</a></li>\n<li><a href="docs/common.md#maxofarray">maxOfArray</a></li>\n<li><a href="docs/common.md#maxoflist">maxOfList</a></li>\n<li><a href="docs/common.md#minofarray">minOfArray</a></li>\n<li><a href="docs/common.md#minoflist">minOfList</a></li>\n<li><a href="docs/common.md#isvalid">isValid</a></li>\n<li><a href="docs/common.md#closesttoarray">closestToArray</a></li>\n<li>\n<p><a href="docs/common.md#closesttolist">closestToList</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>Interval</code></summary>\n<ul>\n<li><a href="docs/interval.md#iswithininterval">isWithinInterval</a></li>\n<li><a href="docs/interval.md#areintervalsoverlapping">areIntervalsOverlapping</a></li>\n<li><a href="docs/interval.md#getoverlappingdaysinintervals">getOverlappingDaysInIntervals</a></li>\n<li><a href="docs/interval.md#eachdayofintervalarray">eachDayOfIntervalArray</a></li>\n<li>\n<p><a href="docs/interval.md#eachdayofintervallist">eachDayOfIntervalList</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>Second</code></summary>\n<ul>\n<li><a href="docs/second.md#addseconds">addSeconds</a></li>\n<li><a href="docs/second.md#subseconds">subSeconds</a></li>\n<li><a href="docs/second.md#differenceinseconds">differenceInSeconds</a></li>\n<li><a href="docs/second.md#startofsecond">startOfSecond</a></li>\n<li><a href="docs/second.md#endofsecond">endOfSecond</a></li>\n<li>\n<p><a href="docs/second.md#issamesecond">isSameSecond</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>Minute</code></summary>\n<ul>\n<li><a href="docs/minute.md#addminutes">addMinutes</a></li>\n<li><a href="docs/minute.md#subminutes">subMinutes</a></li>\n<li><a href="docs/minute.md#differenceinminutes">differenceInMinutes</a></li>\n<li><a href="docs/minute.md#startofminute">startOfMinute</a></li>\n<li><a href="docs/minute.md#endofminute">endOfMinute</a></li>\n<li><a href="docs/minute.md#issameminute">isSameMinute</a></li>\n<li>\n<p><a href="docs/minute.md#roundtonearestminute">roundToNearestMinute</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>Hour</code></summary>\n<ul>\n<li><a href="docs/hour.md#addhours">addHours</a></li>\n<li><a href="docs/hour.md#subhours">subHours</a></li>\n<li><a href="docs/hour.md#differenceinhours">differenceInHours</a></li>\n<li><a href="docs/hour.md#startofhour">startOfHour</a></li>\n<li><a href="docs/hour.md#endofhour">endOfHour</a></li>\n<li>\n<p><a href="docs/hour.md#issamehour">isSameHour</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>Day</code></summary>\n<ul>\n<li><a href="docs/day.md#adddays">addDays</a></li>\n<li><a href="docs/day.md#addbusinessdays">addBusinessDays</a></li>\n<li><a href="docs/day.md#subdays">subDays</a></li>\n<li><a href="docs/day.md#startofday">startOfDay</a></li>\n<li><a href="docs/day.md#endofday">endOfDay</a></li>\n<li><a href="docs/day.md#differenceincalendardays">differenceInCalendarDays</a></li>\n<li><a href="docs/day.md#differenceindays">differenceInDays</a></li>\n<li><a href="docs/day.md#differenceinbusinessdays">differenceInBusinessDays</a></li>\n<li><a href="docs/day.md#getdayofyear">getDayOfYear</a></li>\n<li><a href="docs/day.md#issameday">isSameDay</a></li>\n<li><a href="docs/day.md#istoday">isToday</a></li>\n<li><a href="docs/day.md#istomorrow">isTomorrow</a></li>\n<li>\n<p><a href="docs/day.md#isyesterday">isYesterday</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>Week</code></summary>\n<ul>\n<li><a href="docs/week.md#addweeks">addWeeks</a></li>\n<li><a href="docs/week.md#subweeks">subWeeks</a></li>\n<li><a href="docs/week.md#differenceinweeks">differenceInWeeks</a></li>\n<li><a href="docs/week.md#differenceincalendarweeks">differenceInCalendarWeeks</a></li>\n<li><a href="docs/week.md#startofweek">startOfWeek</a></li>\n<li><a href="docs/week.md#endofweek">endOfWeek</a></li>\n<li><a href="docs/week.md#issameweek">isSameWeek</a></li>\n<li><a href="docs/week.md#lastdayofweek">lastDayOfWeek</a></li>\n<li><a href="docs/week.md#getweekofmonth">getWeekOfMonth</a></li>\n<li><a href="docs/week.md#getweeksinmonth">getWeeksInMonth</a></li>\n<li>\n<p><a href="docs/week.md#getweek">getWeek</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>Week Numbering</code></summary>\n<ul>\n<li><a href="docs/week_numbering.md#getweekyear">getWeekYear</a></li>\n<li>\n<p><a href="docs/week_numbering.md#startofweekyear">startOfWeekYear</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>Weekday</code></summary>\n<ul>\n<li><a href="docs/weekday.md#issunday">isSunday</a></li>\n<li><a href="docs/weekday.md#ismonday">isMonday</a></li>\n<li><a href="docs/weekday.md#istuesday">isTuesday</a></li>\n<li><a href="docs/weekday.md#iswednesday">isWednesday</a></li>\n<li><a href="docs/weekday.md#isthursday">isThursday</a></li>\n<li><a href="docs/weekday.md#isfriday">isFriday</a></li>\n<li><a href="docs/weekday.md#issaturday">isSaturday</a></li>\n<li>\n<p><a href="docs/weekday.md#isweekend">isWeekend</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>Month</code></summary>\n<ul>\n<li><a href="docs/month.md#addmonths">addMonths</a></li>\n<li><a href="docs/month.md#submonths">subMonths</a></li>\n<li><a href="docs/month.md#differenceincalendarmonths">differenceInCalendarMonths</a></li>\n<li><a href="docs/month.md#differenceinmonths">differenceInMonths</a></li>\n<li><a href="docs/month.md#startofmonth">startOfMonth</a></li>\n<li><a href="docs/month.md#endofmonth">endOfMonth</a></li>\n<li><a href="docs/month.md#isfirstdayofmonth">isFirstDayOfMonth</a></li>\n<li><a href="docs/month.md#islastdayofmonth">isLastDayOfMonth</a></li>\n<li><a href="docs/month.md#issamemonth">isSameMonth</a></li>\n<li><a href="docs/month.md#lastdayofmonth">lastDayOfMonth</a></li>\n<li>\n<p><a href="docs/month.md#getdaysinmonth">getDaysInMonth</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>Year</code></summary>\n<ul>\n<li><a href="docs/year.md#addyears">addYears</a></li>\n<li><a href="docs/year.md#subyears">subYears</a></li>\n<li><a href="docs/year.md#startofyear">startOfYear</a></li>\n<li><a href="docs/year.md#endofyear">endOfYear</a></li>\n<li><a href="docs/year.md#issameyear">isSameYear</a></li>\n<li><a href="docs/year.md#isleapyear">isLeapYear</a></li>\n<li><a href="docs/year.md#lastmonthofyear">lastMonthOfYear</a></li>\n<li><a href="docs/year.md#lastdayofyear">lastDayOfYear</a></li>\n<li><a href="docs/year.md#getdaysinyear">getDaysInYear</a></li>\n<li><a href="docs/year.md#differenceincalendaryears">differenceInCalendarYears</a></li>\n<li>\n<p><a href="docs/year.md#differenceinyears">differenceInYears</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>ISO Week</code></summary>\n<ul>\n<li><a href="docs/iso_week.md#endofisoweek">endOfISOWeek</a></li>\n<li><a href="docs/iso_week.md#getisoweek">getISOWeek</a></li>\n<li><a href="docs/iso_week.md#issameisoweek">isSameISOWeek</a></li>\n<li><a href="docs/iso_week.md#isthisisoweek">isThisISOWeek</a></li>\n<li><a href="docs/iso_week.md#lastdayofisoweek">lastDayOfISOWeek</a></li>\n<li><a href="docs/iso_week.md#setisoweek">setISOWeek</a></li>\n<li><a href="docs/iso_week.md#startofisoweek">startOfISOWeek</a></li>\n<li>\n<p><a href="docs/iso_week.md#differenceincalendarisoweeks">differenceInCalendarISOWeeks</a></p>\n</details>\n</li>\n</ul>\n<details>\n<summary><code>ISO Year</code></summary>\n<ul>\n<li><a href="docs/iso_year.md#getisoweekyear">getISOWeekYear</a></li>\n<li>\n<p><a href="docs/iso_year.md#startofisoweekyear">startOfISOWeekYear</a></p>\n</details>\n</li>\n</ul>\n<!-- TOC:END -->\n<h2 id="status"><a href="#status" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Status</h2>\n<p>Check the current status <a href="STATUS.md">here</a>.</p>\n<h2 id="contributors"><a href="#contributors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Contributors</h2>\n<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->\n<!-- prettier-ignore-start -->\n<!-- markdownlint-disable -->\n<table>\n  <tr>\n    <td align="center"><a href="https://twitter.com/__marcin_"><img src="https://avatars1.githubusercontent.com/u/1467712?v=4" width="100px;" alt="Marcin Dziewulski"/><br /><sub><b>Marcin Dziewulski</b></sub></a><br /><a href="https://github.com/mobily/re-date/commits?author=mobily" title="Code">💻</a> <a href="https://github.com/mobily/re-date/commits?author=mobily" title="Documentation">📖</a></td>\n    <td align="center"><a href="http://radoslawkoziel.pl"><img src="https://avatars3.githubusercontent.com/u/1303365?v=4" width="100px;" alt="Radek Kozieł"/><br /><sub><b>Radek Kozieł</b></sub></a><br /><a href="https://github.com/mobily/re-date/commits?author=panr" title="Code">💻</a></td>\n    <td align="center"><a href="https://github.com/mikaello"><img src="https://avatars3.githubusercontent.com/u/2505178?v=4" width="100px;" alt="mikaello"/><br /><sub><b>mikaello</b></sub></a><br /><a href="https://github.com/mobily/re-date/commits?author=mikaello" title="Code">💻</a> <a href="https://github.com/mobily/re-date/commits?author=mikaello" title="Documentation">📖</a></td>\n  </tr>\n</table>\n<!-- markdownlint-enable -->\n<!-- prettier-ignore-end -->\n<!-- ALL-CONTRIBUTORS-LIST:END -->\n<p>This project follows the <a href="https://github.com/kentcdodds/all-contributors">all-contributors</a> specification. Contributions of any kind welcome!</p>\n<h2 id="license"><a href="#license" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>License</h2>\n<p>The MIT License.</p>\n<p>See <a href="LICENSE">LICENSE</a></p>\n',homepageUrl:"https://github.com/mobily/re-date#readme",repositoryUrl:"https://github.com/mobily/re-date",npmUrl:"https://www.npmjs.com/package/%40mobily%2Fre-date",issuesUrl:"https://github.com/mobily/re-date/issues",slug:"/package/@mobily/re-date"}},pathContext:{id:"@mobily/re-date"}}}});
//# sourceMappingURL=path---package-mobily-re-date-7db1694e718c99ea2f0e.js.map