import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../../constants";
import { useState } from "react";

const filterData = (searchText, restaurants) => {
  return (searchText.trim() === "") ? restaurants :
   restaurants.filter((restaurant) =>
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
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard {...restaurant.data} key={restaurant.data?.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
