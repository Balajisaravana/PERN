import React, {useState,useContext} from "react"
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import Resturantapi from "../api/Resturantapi";
import { RestaturantContext } from "../utils/context";

const AddRestaurant =()=>{
    const [name, setname] = useState( "")
    const [locaion, setlocation] = useState("")
    const [priceRange, setPriceRange] = useState("")
    const priceRangeOption = [
        { price: 100  },
        { price: 150  },
        { price: 200  },
        { price: 400  },
    ];
    const{restaurant,addRestaturantData} = useContext(RestaturantContext)
    const handleSubmit = async(e) => {
       e.preventDefault()
       try{
       const response =  await Resturantapi.post('/',{
            name : name,
            location : locaion,
            price_range: priceRange.price
       })
       addRestaturantData(response.data.data.restaurants)
       }
       catch(err){
        console.log(err)
       }
    }
    
    return(
        <>
       <div className="card flex justify-content-center" >
            <InputText type="text" placeholder="Name" onChange={(e)=> setname(e.target.value)} />
            <InputText type="text" placeholder="Location" onChange={(e)=> setlocation(e.target.value)} />
            <Dropdown placeholder="Select-Prices" className="w-full md:w-14rem" value={priceRange} onChange={(e)=>setPriceRange(e.value)} optionLabel="price" options={priceRangeOption}></Dropdown>
            <Button label="Submit" onClick={handleSubmit}  />
        </div>
        </>
    )

}

export default AddRestaurant