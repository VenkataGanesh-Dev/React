import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  -Search
 *  -RestaurantContainer
 *  -RestaurantCard
 *    -img, name of res,rating,devlivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3nVmIb5Rnq8Y9iLlqa5d8T9DKa7jBXV_bSQ&s"
          alt="food logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const StyleCard = {
//  backgroundColor: "skyblue"
// };

const Restaurantcard = () => {
  return (
    <div
      className="res-card"
      // style={StyleCard} THIS IS INLINE CSS IN JSX
    >
      <h3>Meghana Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container"></div>
      <Restaurantcard />
    </div>
  );
};

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
