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
          "https://cf.shopee.vn/file/a322f5a69c901e5910456eb4bf5fc83f_tn",
          "https://cf.shopee.vn/file/ed4502cd9c9564b3fb5a446740d6ac28_tn",
          "https://cf.shopee.vn/file/7fbc6fadef053d16f80f53bfd5caa1f8_tn"
         
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
          "https://cf.shopee.vn/file/90f1fa5ad69886e67f6486964bc4f235_tn",
          "https://cf.shopee.vn/file/6431c5d77acb13312ac503a158dc4cda_tn",
         
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
          "https://cf.shopee.vn/file/b5ea220fca2da482d24c360ff5fc3e05_tn",
          "https://cf.shopee.vn/file/24105392263981fde7d92d792ccf2396_tn",
         
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
          "https://cf.shopee.vn/file/5b80f67008aae5a5802305d49190e543_tn",
          "	https://cf.shopee.vn/file/e549c84ff5797b90367405f0bb5674d1_tn",
         
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
          "https://cf.shopee.vn/file/dea4b4003866c43ed3c1baadf0efbef8_tn",
          "	https://cf.shopee.vn/file/4995398716fb4f06e26ad5c0e5efd285_tn",
         
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


