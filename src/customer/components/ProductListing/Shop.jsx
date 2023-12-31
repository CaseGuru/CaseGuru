import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";
import ShopCard from "./ShopCard";
import { Pagination } from "@mui/material";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Shop() {
  const location = useLocation();
  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const decodedQueryString = decodeURIComponent(location.search);

  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(decodedQueryString);
  const materialValue = searchParams.get("materials");
  const priceValue = searchParams.get("price");
  const discount = searchParams.get("discount");
  const sortValue = searchParams.get("sort");
  const pageNumber = searchParams.get("page") || 1;
  const stock = searchParams.get("stock");

  const handlePaginationChange=(event,value)=>{
    const searchParams = new URLSearchParams(location.search)
    searchParams.set("page",value);
    const query = searchParams.toString();
    console.log(searchParams,value)
    navigate({search:`?${query}`})
  }

  const { product } = useSelector((store) => store);

  useEffect(() => {
    const [minPrice, maxPrice] =
      priceValue === null ? [0, 10000] : priceValue.split("-").map(Number);

    const data = {
      category: param.levelTwo,
      materials: materialValue || [],
      minPrice,
      maxPrice,
      minDiscount: discount || 0,
      sort: sortValue || "price_low",
      pageNumber: pageNumber - 1,
      pageSize: 5,
      stock: stock,
    };
    dispatch(findProducts(data));
  }, [
    param.levelTwo,
    materialValue,
    priceValue,
    discount,
    sortValue,
    pageNumber,
    stock,
  ]);

  return (
    <div className="bg-white">
      <main className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            iPhone 13
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Checkout the latest release of Basic Tees, new and improved with
            four openings!
          </p>
        </div>

        {/* Product grid */}
        <div className="w-full">
          <div className="flex  flex-wrap bg-white py-5">
            {product.products &&
              product.products?.content?.map((item) => (
                <ShopCard key={item.id} product={item} />
              ))}
          </div>
        </div>

<section className="w-full px-[3.6rem]">
<div className="px-4 py-5 flex justify-center ">
<Pagination count={product.products?.totalPages} color="secondary" 
onChange={handlePaginationChange} />
</div>
</section>
      </main>
    </div>

    
  );
}
