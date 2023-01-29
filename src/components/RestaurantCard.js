import { IMAGE_CDN_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="w-52 p-2 m-2 shadow-lg bg-purple-50">
      <img src={IMAGE_CDN_URL + cloudinaryImageId} />
      <h2 className='font-bold text-lg'>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
