import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";  // named import

// not using keys (not acceptable) <<< index as key <<<< unique id (best practise)
let Body = () => {
  // Local state variable - super powerful variable
const [ListOfRestaurants, setListOfRestaurant] = useState([]);   // This is an empty array

  useEffect(() => { 
    fetchData();    // Use to fetch the data 
}, []);
// this callback function is called after the component renders (after body component renders as soon as body component render cycle is finished it will call the callback funtion that is passed into a useEffect after that it prints "useEffect is called" that is present inside the console.log )

  // console.log("body rendered");  // Body is rendered first and that useEffect is rendered
   


  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.461421&lng=78.3346205&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json); 
    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
};

  // Call fetchData()
  //       ↓
  // Make HTTP GET request to Swiggy API
  //       ↓
  // Wait (await) for response...
  //       ↓
  // Store result in `data`
  
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