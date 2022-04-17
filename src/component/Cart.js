import React,{useContext,useState,useRef,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { DataContext } from './DataProvider'
import Colors from './Colors'
import Sizes from './Sizes'
import {Link } from 'react-router-dom'
import './Cart.css'
function Cart() {
  const imgDiv=useRef()

  const value=useContext(DataContext)

  const [cart,setCart]=value.cart

  const [total,setTotal]=useState(0)

  useEffect(()=>{
    const getTotal=()=>{
      const res =cart.reduce((prev,item)=>{
          return prev +(item.price * item.count)
      },0)
      setTotal(res)
    }
    getTotal()
  },[cart])

  if (cart.length==0){
    return <h2 style ={{textAlign: 'center',fontSize:'5rem'}}>Cart empty</h2>
  }
  // ham tang giam so luong san pham

  const reduction= id =>{
    cart.forEach(item =>{
      if(item._id===id){
        item.count===1? item.count=1:item.count-=1
      }
    })
    setCart([...cart])
  }

  const increase= id =>{
    cart.forEach(item =>{
      if(item._id===id){
        item.count+=1
      }
    })
    setCart([...cart])
  }

  const deletaItem =(id)=>{
    if(window.confirm("Are you sure you want to delete")){
      cart.forEach((item,index)=>{
        if(item._id===id){
          cart.splice(item[index],1)
        }
      })
      setCart([...cart])
    }
  }
  return (
    <>
        {
            cart.map((product)=>(
                <div className='details cart' key={product._id}>
                    <div className='img-container'
                    style={{backgroundImage:`url(${product.images[0]})`}}
                   
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

                        <div className='amount'>
                            <button onClick={()=>reduction(product._id)}>-</button>
                            <span>{product.count}</span>
                            <button onClick={()=>increase(product._id)}>+</button>

                        </div>
                        <div className='delete' onClick={()=>deletaItem(product._id)}>
                           X
                        </div>
                     
                    </div>
                </div>
            ))
        }
       <div className='total'>
         <Link to='/payment'>Payment</Link>
         <h3>Total :${total}</h3>
       </div>
    </>
  )
}

export default Cart