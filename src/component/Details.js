import React,{useContext,useState,useRef} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import { DataContext } from './DataProvider'
import './Details.css'
import Colors from './Colors'
import Sizes from './Sizes'
import Thumb from './Thumb'
function Details() {
    const navigate=useNavigate()
    const imgDiv=useRef()
    const {id}=useParams()

    
    // lay du lieu

    const value=useContext(DataContext)
    const addCart =value.addCart
    const [products]=value.products
    // index cho img container /setIndex tu Thumb
    const [index,setIndex]= useState(0)

    const details=products.filter((product,index)=>{
        return product._id===id
    })
    console.log(details)
    
    const handleMouseMove = (e)=>{
        const {left,top,width,height}=e.target.getBoundingClientRect()
        const x =(e.pageX - left)/width*100
        const y =(e.pageY - top)/height*100
        
        imgDiv.current.style.backgroundPosition=`${x}% ${y}%`
        imgDiv.current.style.transition=''
    }

    const handleMouseOut = (e)=>{
        imgDiv.current.style.backgroundPosition=`center`;
        imgDiv.current.style.transition= '0.2s ease-in'
        // imgDiv.current.style={
        //     backgroundPosition:`center`,
        //     transition: '0.2s ease-in'
        // }
    }
  return (
    <>
        {
            details.map((product)=>(
                <div className='details' key={product._id}>
                    <div className='img-container'
                    style={{backgroundImage:`url(${product.images[index]})`}}
                    onMouseMove={handleMouseMove}
                    ref={imgDiv}
                    onMouseLeave={handleMouseOut}
                    >
                   
                 
                    </div>
                    <div className='box-details'>
                        <h2 title={product.title}>{product.title}</h2>
                        <h3>${product.price}</h3>
                        {/* color */}
                        <Colors colors={product.colors}/>
                        {/* size button */}
                        <Sizes sizes={product.sizes}/>
                        <p>{product.description}</p>
                        <p>{product.content}</p>
                        <Thumb images={product.images} setIndex={setIndex}/>
                        <button className='cart' 
                            onClick={()=>{
                                addCart(product._id)
                                navigate('/cart')}}>
                            Add to carts
                        </button>
                     
                    </div>
                </div>
            ))
        }
       
    </>
  )
}

export default Details