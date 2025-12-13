import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../../utils/mockData.js";

// not using keys (not acceptable) <<< index as key <<<< unique id (best practise)
let Body = () => {
  // Local state variable - super powerful variable
  const [ListOfRestaurants, setListOfRestaurant] = useState(resList);

  useEffect(() => {
    console.log("useEffect is called"), [];
  });

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // The resList is the reassign variable
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log(filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        {/* <RestaurantCard resData={resList[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
