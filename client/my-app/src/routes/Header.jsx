import React from 'react'
import { FaBowlFood } from "react-icons/fa6";
import NavHeader from '../components/NavHeader';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const history = useNavigate()
  return (
    <div >
      <NavHeader></NavHeader>
      <div className='w-full' style={{background:'#3D4A3E'}} > 
    <div className='mx-8' style={{paddingLeft:'10rem'}}>
      <div className='flex  container-img '>
        <div className='flex flex-column justify-content-start align-items-center ml-1' style={{marginTop:"12rem"}}>
          <span>
          <h1 style={{fontFamily:'Bebas Neue', fontSize:'xxx-large'}}>
          Fine dining made accessible
          </h1>
          </span>
          <div>
          <Button label="GET IN" severity="success"  onClick={()=>history('/table')}/>

          </div>
        </div>
      </div>
    </div>
    <div></div>
      </div>
    </div>
  )
}
