import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants";
import { useState } from "react";

const filterData = (searchText, restaurants) => {
  return searchText.trim() === ""
    ? restaurants
    : restaurants.filter((restaurant) =>
        restaurant.data?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
};

const Body = () => {
  const [searchText, setSearchText] = useState(""); // returns array, [variable name, function to update]
  const [restaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);
  // const [btnClicked, setbtnClicked] = useState(false);
  return (
    <>
      <div className="search-container p-5 bg-purple-50 my-3">
        <input
          type="search"
          className="focus:bg-violet-200"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          //   onClick={() => {
          //     setbtnClicked(!btnClicked);
          //   }}
          onClick={() => {
            const filteredResponse = filterData(searchText, restaurants);
            setFilteredRestaurants(filteredResponse);
          }}
        >
          Search
        </button>
        {/* <h1>{btnClicked ? "True" : "False"}</h1> */}
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data?.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
