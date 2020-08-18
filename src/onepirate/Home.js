/* eslint-disable import/order */
import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import * as React from "react";
import ProductHero from "./modules/views/ProductHero";
import ProductValues from "./modules/views/ProductValues";
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from './modules/views/AppFooter';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
