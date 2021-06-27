import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { FrontLayout, AppRouter } from "./routerUtility";
import Home from "../pages/home";
import About from "../pages/about";
import Services from "../pages/services";
import Prodact from "../pages/prodact";
import Blog from "../pages/blog";
import Contact from "../pages/contact";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AppRouter path="/" layout={FrontLayout} exact component={Home} />
          <AppRouter
            path="/about"
            layout={FrontLayout}
            exact
            component={About}
          />
          <AppRouter
            layout={FrontLayout}
            path="/services"
            exact
            component={Services}
          />
          <AppRouter
            layout={FrontLayout}
            path="/prodact"
            exact
            component={Prodact}
          />
          <AppRouter layout={FrontLayout} path="/blog" exact component={Blog} />
          <AppRouter
            layout={FrontLayout}
            path="/contact"
            exact
            component={Contact}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Router;
