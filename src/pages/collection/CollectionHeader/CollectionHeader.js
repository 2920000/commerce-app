import React from "react";
import { Link, useParams } from "react-router-dom";
import { convertToVietnamese } from "../../../helper";
import SortOption from "./SortOption";

function CollectionHeader() {
  const { collection } = useParams();
  return (
    <>
      <div className=" text-xs mb-2 mx-4 mder:mx-10">
        <Link to="/" className="mr-2">
          Trang chủ
        </Link>
        <span className="mr-2">/</span>
        <span>{convertToVietnamese(collection)}</span>
      </div>
      <div className="block w-full text-right pr-[25px] lg:pr-[72px] mb-2 ">
        <SortOption />
      </div>
    </>
  );
}

export default CollectionHeader;
