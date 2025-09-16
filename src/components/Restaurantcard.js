import {CON_URL} from "../../utils/constants";

const Restaurantcard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div
      className="res-card"
      // style={StyleCard} THIS IS INLINE CSS IN JSX
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={ CON_URL + cloudinaryImageId }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default Restaurantcard;
