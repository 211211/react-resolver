/* eslint no-unused-vars: 0, no-undef: 0, react/react-in-jsx-scope: 0 */

import React from "react";
import Resolver from "../../src";
import Router from "react-router";
import ES6Promise from "es6-promise";

import App from "./handlers/App";
import Home from "./handlers/Home";

const { DefaultRoute, Route } = Router;

ES6Promise.polyfill();

Router.run((
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
  </Route>
), function(Handler) {
  Resolver.render(<Handler />, document.getElementById("app"));
});
