import React,{useState,createContext, useCallback} from 'react'

export const RestaturantContext = createContext()

export  const RestaturantContextProvider = (props) => {
    const [restaurant, setRestaturant] = useState([])
    const [selectedId, setSelectedId] = useState(null)
    
    const addRestaturantData = (restaurantUpdated) =>{
      setRestaturant([...restaurant,restaurantUpdated])
    }
    // const addReviewData = (reviewadded) => {
    //   setSelectedId({restaurants : selectedId.restaurants, reviews : selectedId.review.push(reviewadded)})
    // }


  return (
   <RestaturantContext.Provider value={{restaurant,setRestaturant, addRestaturantData,selectedId,setSelectedId }}>
    {props.children}
   </RestaturantContext.Provider>
  )
}
