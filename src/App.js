import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import  Header  from "./components/Header";
import Body from "./components/Body.js";

/** components ()
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *     -RestaurantCard
 *          -img, name of res,rating,devlivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -contact
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

