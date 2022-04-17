import React from 'react'

function Thumb({images,setIndex}) {
  return (
    <div className='thumb'>
    {
        images.map((img,index)=>(
            <img src={img} alt='' key={index}
            onClick={()=>setIndex(index)}
            ></img>
                                            
        ))
    }
    </div>
  )
}

export default Thumb