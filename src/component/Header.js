import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './DataProvider'
function Header() {
    const [menu,setMenu]=useState(false)
    const handClickMenu= ()=>{
        setMenu(!menu)
    }
   const setStyle={
       left:menu ?0 :"100%",
       
   }
//    
   const value=useContext(DataContext)
   const [cart]= value.cart
  return (
      
    <div className="header">
         <header>
                <div className="menu" onClick={handClickMenu}>
                    <i className="fa fa-bars"></i>
                </div>
                {/* logo */}
                <div className="logo">
                    <h1><Link to='/'>Citizen</Link></h1>
                </div>
                <ul style={setStyle}>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/products' >Products</Link></li>
                    <li><Link to='/' >About</Link></li>
                    <li><Link to='/' >Contact</Link></li>
                    <li><Link to='/register' >Login/register</Link></li>
                    <li className='menu' onClick={handClickMenu}>
                        <i className="fa fa-close"></i>
                    </li>
                </ul>
                <div className='cart-icon'>
                    <span>{cart.length}</span>
                    <Link to ='cart'>
                        <i className="fa fa-shopping-cart"/>
                    </Link>
                </div>
             
            </header>
    </div>
  )
}

export default Header