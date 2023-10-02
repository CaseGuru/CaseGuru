import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";

const OrderDetails = ()=>{
    return (
        <div>
             <div className="rounded-md shadow mx-auto p-5 sm:rounded-md ">
                <AddressCard />
            </div>

            <div className="py-20">
                <OrderTracker/>
            </div>

        </div>
    )
};

export default OrderDetails;