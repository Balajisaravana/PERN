import React from 'react'
import { FaStar , FaStarHalfAlt  } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
 const  StarRating = ({rating}) => {
    const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<FaStarHalfAlt key={i} />);
    } else {
      stars.push(<FaRegStar key={i}/>);
    }}
  return (
 <>
 {stars}
 </>
  )
}
export default StarRating