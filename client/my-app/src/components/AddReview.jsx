import React, { useContext, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Resturantapi from "../api/Resturantapi";
import { RestaturantContext } from '../utils/context';

export default function AddReview() {
    const params = useParams()
    const [name, setname] = useState("")
    const [review, setReview] = useState("")
    const [rating, setRating] = useState("")
    const priceRangeOption = [
        { price: 1 },
        { price: 2 },
        { price: 3 },
        { price: 4 },
        { price: 5 }
    ];
    const history = useNavigate()
    const location = useLocation()
    console.log(location)
    const {selectedId,setSelectedId} = useContext(RestaturantContext)
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const result = await Resturantapi.post(`/${params.id}/addReview`,{
                name,
                review,
                rating : rating.price,
                restaurant_id : params.id

            })
            console.log(result.data.data.review)
            // setSelectedId({restaurants : selectedId.restaurants, review : selectedId.review.push(result.data.data.review)})
            history('/')
         
        }
 
        catch(err){
            console.log(err)
        }
        history(location.pathname)
    }
    console.log(selectedId)

    return (
        <div className="card flex flex-column justify-content-center">
            <div className='flex '>
                <InputText type="text" placeholder="Name" onChange={(e) => setname(e.target.value)} />
                <InputText type="text" placeholder="Review" onChange={(e) => setReview(e.target.value)} />
            </div>
            <Dropdown placeholder="Select Rating" className="w-full " value={rating} onChange={(e) => setRating(e.value)} optionLabel="price" options={priceRangeOption}></Dropdown>
           <div> <Button label="Submit"  onClick={(e)=>handleSubmit(e)}/> </div> 
        </div>
    )
}
