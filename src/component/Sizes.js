import React from 'react'
import './Details.css'
function Sizes({sizes}) {
  return (
    <div className='sizes'>
        {
            sizes.map((size,index)=>(
                <button key={index}>{size}</button>
            ))
        }
</div>
  )
}

export default Sizes