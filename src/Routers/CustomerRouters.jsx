import React from "react";
import Navigation from "../customer/components/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import ProductDetails from "../customer/components/Products/ProductDetails";
import Footer from "../customer/components/Footer/Footer";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import Shop from "../customer/components/ProductListing/Shop";
import OrderDetails from "../customer/components/Order/OrderDetails";

const CustomerRouters =()=> {
    return (
        <div>
            <div>
                <Navigation/>
            </div>

            <Routes>
                <Route path='/' element={<HomePage/>}> </Route>
                <Route path='/cart' element={<Cart/>}> </Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Shop/>}> </Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>

            </Routes>

            <div>
                <Footer/>
            </div>
        </div>
    )
};

export default CustomerRouters