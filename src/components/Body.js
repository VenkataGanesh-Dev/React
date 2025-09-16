import Restaurantcard from "./Restaurantcard";
import resList from "../../utils/mockData";



// not using keys (not acceptable) <<< index as key <<<< unique id (best practise)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <Restaurantcard key={restaurant.info.id} resData={restaurant} />
        ))}

        {/* <Restaurantcard resData={resList[0]} /> */}
      </div>
    </div>
  );
};

export default Body;