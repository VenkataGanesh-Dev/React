import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

// not using keys (not acceptable) <<< index as key <<<< unique id (best practise)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}

        {/* <RestaurantCard resData={resList[0]} /> */}
      </div>
    </div>
  );
};

export default Body;
