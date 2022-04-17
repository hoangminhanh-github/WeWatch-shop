import React from 'react'
import './Details.css'

function Colors({colors}) {
    
  return (
    <div className='colors'>
        {
            colors.map((color,index)=>(
                <button key={index} style={{background:color}}></button>
            ))
        }
    </div>
  )
}

export default Colors