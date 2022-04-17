import React from 'react';
import './App.css';
import Products from './component/Products'
import Header from './component/Header'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Details from './component/Details'
import Test from './component/test';
import Home from './pages/Home'
import {DataProvider} from './component/DataProvider'
import Cart from './component/Cart'
import Register from './component/Register';
function App() {
    
    return (
        <DataProvider>

        <div className="App" >
            <Router>
            {/* <Header></Header> */}
               <section>

                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
              
                    <Route path="products" element={<Products/>}></Route>
                    <Route path="products/:id" element={<Details/>}></Route>
                    <Route path="cart" element={<Cart/>}></Route>
                    <Route path='register' element={<Register/>}></Route>
                </Routes>

                {/* <Routes>

                    <Route path='/test' element={<Test></Test>}></Route>
                </Routes> */}
               </section>

           
              
            </Router>
             
               
        </div>
        
        </DataProvider>

    
    )

    
}

export default App;
