import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaturantContext } from "../utils/context";
import Resturantapi from "../api/Resturantapi";
import { Rating } from 'primereact/rating';
import StarRating from "../components/StarRating";
import CardReview from "../components/CardReview";
import AddRestaurant from "../components/AddRestaurant";
import AddReview from "../components/AddReview";
import NavHeader from "../components/NavHeader";



const RestaurantdetailPage = () => {
    const params = useParams()
    const { selectedId, setSelectedId } = useContext(RestaturantContext)
    console.log(selectedId)
    const fetchDataId = async () => {
        try {
            const response = await Resturantapi.get(`/${params.id}`)
            console.log(response)
            setSelectedId(response.data.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchDataId()
    }, [])
    return (
        <>
           <div className="flex flex-column justify-content-center align-items-center p-2">
           {
            selectedId?.restaurants && 
            <span>
            <h1> {selectedId.restaurants.name} </h1>
        </span>
           }
            { selectedId?.restaurants &&  <div> <StarRating rating={selectedId.restaurants.average_rating}></StarRating> </div>}
            <div className=" flex flex-wrap w-full justify-content-center " >
              { selectedId && <CardReview reviews={selectedId.review} ></CardReview> }  
            </div>
            <AddReview></AddReview>

        </div>
        </>
     
    )
}

export default RestaurantdetailPage