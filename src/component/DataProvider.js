import React from 'react'
import { useState,useEffect } from 'react'
import { createContext } from 'react'
import Products from './Products'
export const DataContext = createContext()

export const DataProvider = ({props,children})=>{
  const [products,setProducts]=useState([
    {
      "_id": "1",
      "title": "Wacth Product 01",
      "images": [
          "https://cf.shopee.vn/file/d00d347811d5c7d273b317cae5e552d8",
          "https://cf.shopee.vn/file/9b50f27460dd126c6b1bfad525583755",
          "https://cf.shopee.vn/file/2083380bc03b00ff95d4428eb47eac40",
         
          ],
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 101,
      "count":1
  },
  {
      "_id": "2",
      "title": "Wacth Product 02",
      "images": [
          "img/clock2-1.jpg",
          "img/clock2-2.jpg",
         
          ],
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 102,
      "count":1
  },
  {
      "_id": "3",
      "title": "Wacth Product 03",
      "images": [
          "img/clock3-1.jpg",
          "img/clock3-2.jpg",
         
          ],
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 103,
      "count":1
  },
  {
      "_id": "4",
      "title": "Wacth Product 04",
      "images": [
          "img/clock4-1.jpg",
          "img/clock4-1.jpg",
         
          ],
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 104,
      "count":1
  },
  {
      "_id": "5",
      "title": "Wacth Product 05",
      "images": [
          "img/clock5-1.jpg",
          "img/clock5-2.jpg",
         
          ],
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 105,
      "count":1
  },
  {
      "_id": "6",
      "title": "Wacth Product 06",
      "images": [
          "img/clock6-1.jpg",
          "img/clock6-2.jpg",
         
          ],
      "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
      "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      "colors": ["red", "black", "teal"],
      "sizes": ["XL", "L", "M", "XM", "LX"],
      "price": 106,
      "count":1
  }
  ])
  const [cart,setCart]=useState([])

  
  //   lay data khoi local storage
  useEffect(()=>{
      const dataCart=JSON.parse(localStorage.getItem('dataCart'))
      if(dataCart){
          setCart(dataCart)
        }
    },[])
    //   store to local state 
  useEffect(()=>{
    localStorage.setItem('dataCart',JSON.stringify(cart))
  },[cart])
//   tao func addCart
  const addCart = (id)=>{
        const check=cart.every(item =>{
            return item._id !==id
        })
        if (check){
            const data=products.filter(product=>{
                return product._id===id
            })
            setCart([...cart,...data])
        }
        else {
            alert('the product has been add to cart!!')
        }
  }
  const value = {
      products :[products,setProducts],
      cart:[cart,setCart],
      addCart:addCart
  }

  


 
  return (
    <div>
        <DataContext.Provider value={value}>
            {children}
         
        </DataContext.Provider>
    </div>
  )
}


