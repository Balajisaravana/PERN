import React, { useContext, useEffect, useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { restaurants } from "../mock/data";
import Resturantapi from "../api/Resturantapi";
import axios from "axios";
import { RestaturantContext } from "../utils/context";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
const RestaurantList = () => {
    const { restaurant,setRestaturant, updateRestaturant } = useContext(RestaturantContext)
    console.log(restaurant)
    const [tableSelected, setSelectedTable] = useState('')
    const history = useNavigate()
    const fetchData = async () => {
        try {
            const res = await Resturantapi.get('/')
            setRestaturant(res.data.data.restaurants)
        } catch (err) {
            console.log(err)
        }
    }

    const actionBodyTemplate = (rowData) => {
        return <Button label="Update" size="small" onClick={()=>handleEdit(rowData.id)}/>
    }

    const actionBodyTemplateDelet = (rowData) => {
        return <Button label="Delete" severity="danger" size="small" onClick={(e)=> handleDelete(e,rowData.id)} />
    }

    const handleEdit = (id) => {
       
        history(`/restaurants/${id}/update`)
    }

    const handleDelete = async (e ,id) => {
        e.stopPropagation();
        try{
            const response = await Resturantapi.delete(`/${id}`)
            setRestaturant(restaurant.filter((restaurants)=>  restaurants.id !== id))
        }
        catch(err){
            console.log(err)
        }
    }
    const ratingBodyTemplate = (rowData) => {
        return(
            <StarRating rating={rowData.average_rating}></StarRating>
        )
       
    }
    const handleTableSelect = (e) => {
        history(`/restaurants/${e.id}`)
    }

    useEffect(() => {
        
        fetchData()

    }, [])

    return (
        <>
            <div className="card">
                {restaurant &&
                    <DataTable value={restaurant} tableStyle={{ minWidth: '60rem' }} selectionMode="single" selection={tableSelected} onSelectionChange={(e)=>handleTableSelect(e.value) }>
                        <Column field="name" header="Name"></Column>
                        <Column field="location" header="Location" ></Column>
                        <Column field="price_range" header="Price Range"></Column>
                        <Column field="rating" header="Reviews" body={ratingBodyTemplate} />
                        <Column header='Update' body={actionBodyTemplate}  />
                        <Column header='Delete' body={actionBodyTemplateDelet} />
                    </DataTable>
                }

            </div>
        </>
    )
}

export default RestaurantList