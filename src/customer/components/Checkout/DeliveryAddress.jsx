import React from "react";
import { Grid } from "@mui/material";
import {AddressCard} from "../AddressCard/AddressCard"

const DeliveryAddress = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("address");
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("streetAddress"),
      country:data.get("country"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zipCode"),
      mobile: data.get("mobile"),
    };
    console.log("address", address);
  };
  return (
    <div className="mt-[5rem] lg:px-20 ">
      <Grid container spacing={4}>
        <Grid
          xs={3.5}
          className="rounded-md  mr-5 shadow h-[35rem] sm:rounded-md overflow-y-scroll "
        >
          <div className="p-5 py-8 border-b cursor-pointer">
            <div>

            <AddressCard/>
            </div>
            <button
              type="submit"
              className=" border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm text-white  font-semibold hover:bg-orange-600 bg-[#FF5612] font-['Gilroy'] focus:outline-none "
            >
              Deliver Here
            </button>
          </div>
        </Grid>

        <Grid ml-4>
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 font-medium font-['Gilroy']">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Personal Information
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Use a permanent address where you can recieve order.
                    </p>
                  </div>

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                       required
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                       required
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                       required
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone no.
                      </label>
                      <input
                      required
                        type="text"
                        name="mobile"
                        id="mobile"
                        autoComplete="mobile"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                       required
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                       required
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        autoComplete="street-address"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                       required
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                       required
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="address-level1"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                       required
                        type="number"
                        name="zipCode"
                        id="zipCode"
                        autoComplete="postal-code"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="font-semibold hover:bg-orange-600 bg-[#FF5612] font-['Gilroy'] border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddress;
