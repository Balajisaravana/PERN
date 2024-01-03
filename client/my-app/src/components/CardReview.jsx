import React, { useState } from 'react'
import StarRating from './StarRating'
import { InputTextarea } from 'primereact/inputtextarea';

export default function CardReview({ reviews }) {
  return (
    <>
      {reviews && reviews.map((data,i) => (
        <div className='flex flex-column bg-blue-900  align-items-center w-3 max-w-3 border-1 border-round border-solid h-10rem max-h-10rem m-2' key={i}> 
          <div className='flex align-items-baseline w-full m-2 justify-content-between border-bottom-1 '>
            <h2 className='my-0 mx-1 px-1'>{data.name}</h2>
            <span className='my-0 mx-1 px-1'><StarRating rating={data.rating} ></StarRating></span>
          </div>
          <div className='w-full px-1'>
            <p className='m-1' >{data.review} </p>
          </div>
        </div>
      ))

      }
    </>

  )
}
