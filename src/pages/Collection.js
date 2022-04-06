import React from "react";
import { Link } from "react-router-dom";
import GridProducts from "../components/GridProduct/GridProducts";
import { useParams } from "react-router-dom";
import convertToVietnamese from "../helper/convertToVietnamese";
import SortOption from "../components/GridProduct/SortOption";
import IndexFilter from "../components/filterProduct/IndexFilter";
function Collection() {
  const { collection } = useParams();

  return (
    <>
      <div className="pt-10 ">
        <div className=" text-xs mb-2 mx-4 mder:mx-10">
          <Link to="/" className="mr-2">
            Trang chủ
          </Link>
          <span className="mr-2">/</span>
          <span>{convertToVietnamese(collection)}</span>
        </div>
        <div className="block w-full text-right pr-[20px] lg:pr-[72px] mb-2 ">
          <SortOption />
        </div>
      </div>
      <div className="flex pb-10 mx-4 mder:mx-10">
        <IndexFilter />
        <GridProducts />
      </div>
    </>
  );
}

export default Collection;
