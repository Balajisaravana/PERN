import React from "react";
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import NavHeader from "../components/NavHeader";
const Home =()=>{
    return(
        <div >
        <Header/>
        <AddRestaurant/>
        <RestaurantList/>
        </div>
    )
}

export default Home