// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Icon = require("../bindings/Icon.js");
var React = require("react");
var Vrroom = require("vrroom/src/Vrroom.bs.js");
var Tooltip = require("./Tooltip.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ScoreStyles = require("./ScoreStyles.js");
var TypedGlamor = require("bs-typed-glamor/src/TypedGlamor.bs.js");

function formatPercentage(number) {
  return (number * 100).toFixed() + "%";
}

function factor(name, value) {
  return React.createElement("div", {
              className: TypedGlamor.toString(ScoreStyles.factor)
            }, React.createElement("span", undefined, Vrroom.text(name)), React.createElement("span", undefined, Vrroom.text(formatPercentage(value))));
}

var component = ReasonReact.statelessComponent("Score");

function make($$package, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(/* None */0, /* None */0, Tooltip.make(React.createElement("div", {
                                  className: TypedGlamor.toString(ScoreStyles.tooltip)
                                }, factor("Quality", $$package.quality), factor("Popularity", $$package.popularity), factor("Maintenance", $$package.maintenance)), React.createElement("span", {
                                  className: TypedGlamor.toString(ScoreStyles.root)
                                }, Vrroom.text(formatPercentage($$package.score)), ReasonReact.element(/* None */0, /* None */0, Icon.Verified[/* make */0](/* Some */[ScoreStyles.icon], /* array */[])))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var Styles = 0;

exports.Styles = Styles;
exports.formatPercentage = formatPercentage;
exports.factor = factor;
exports.component = component;
exports.make = make;
/* component Not a pure module */
