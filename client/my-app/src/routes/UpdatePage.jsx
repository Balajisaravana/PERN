import React, { useContext, useEffect, useState } from "react"
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import Resturantapi from "../api/Resturantapi";
import { useNavigate } from "react-router-dom";

const UpdatePage = () => {
    const params = useParams()
    const [name, setName] = useState('');
    const [location, setlocation] = useState('');
    const [price, setPrice] = useState('');
    const history = useNavigate()
    const fetchDataId = async () => {
        try {
            const response = await Resturantapi.get(`/${params.id}`)
            console.log(response)
            setName(response.data.data.restaurants.name)
            setlocation(response.data.data.restaurants.location)
            setPrice(response.data.data.restaurants.price_range)
        }
        catch (err) {
            console.log(err)
        }

    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await Resturantapi.put(`/${params.id}`,{
                name,
                location,
                price_range : price
            })
            console.log(response)
        }
        catch (err){
            console.log(err)
        }
        history('/')

    }

    useEffect(() => {
        fetchDataId()
    }, [])
    return (
        <div className=" flex m-7 flex-column  justify-content-center ">
            <h1 className="text-center">Update Resturant</h1>
            <div className="flex-auto w-full">
            <label htmlFor="username" className="font-bold block mb-2" >Name</label>
                <InputText id="username" className="w-10" value={name} onChange={(e) => setName(e.target.value)} />
                
            </div>
            <div className="flex-auto">
                <label htmlFor="username" className="font-bold block mb-2">Location</label>
                <InputText id="username" className="w-10" value={location} onChange={(e) => setlocation(e.target.value)} />
            </div>
            <div className="flex-auto">
                <label htmlFor="username" className="font-bold block mb-2">Price Range</label>
                <InputText id="username" className="w-10" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="flex align-items-center justify-content-center " >
            <Button label="Submit" type="submit" icon="pi pi-check" className="  mt-3  " onClick={(e)=>handleSubmit(e)} />

            </div>
        </div>
    )
}

export default UpdatePage