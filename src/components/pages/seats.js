import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { click } from '@testing-library/user-event/dist/click';


function SeatArrangement({fun}) {

    const seatList = document.querySelectorAll(".seat-btn");

     seatList.forEach(seat=>{
        seat.addEventListener('click',()=>{
            if(click=1)
            seat.classList.add('special')
     })
 
    })
  
  return (
    <div className='seats'>
        
    <button className='seat-btn '  onClick={fun}>
       1 
    </button>
    <button className='seat-btn'  onClick={fun}>
     2
    </button>
    <button className='seat-btn'  onClick={fun}>
      3
    </button>
    <button className='seat-btn'  onClick={fun}>
     4
    </button>
    <button className='seat-btn'  onClick={fun}>
    5
    </button>
    <button className='seat-btn'  onClick={fun}>
    6
    </button>
    <button className='seat-btn'  onClick={fun}>
    7
    </button>
    <button className='seat-btn '  onClick={fun}>
     8
    </button>
    <button className='waiting' >
    9
    </button>
    <button className='seat-btn'  onClick={fun}>
    10
    </button>
        


  
    </div>
  )
}

export default SeatArrangement;