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
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/9/314c4e34-0188-4d84-b7e1-90085a8d0634_e21c30e9-8eb7-4605-bf80-275ba966f768.JPG"
      />
      <h3>Meghana Foods</h3>
      <h4>Briyani,North Indian,Asia</h4>
      <h4>4.4 Stars</h4>
      <h4>23 MIN</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <Restaurantcard resName />
        <Restaurantcard />
        
      </div>
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
