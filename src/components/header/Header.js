import React, { useEffect, useState } from "react";
import image from "../../logo.png";
import HeaderIconRight from "./HeaderIconRight";
import {
  addLocalStorage,
  getLocalStorage,
} from "../../helper/localStoragefunction";
import Search from "../search/Search";
import NeedsClick from "../../modal/NeedsClick";
import { Link, useLocation } from "react-router-dom";
import HeaderIconLeft from "./HeaderLeft.js/HeaderIconLeft";
function Header() {
  const [search, setSearch] = useState(true);
  const [discountForm, setDiscountForm] = useState(false);

  const needsclickProps = {
    discountForm,
    setDiscountForm,
  };

  const headerContentProps = {
    search,
    setSearch,
  };
  useEffect(() => {
    const allowPopUp = getLocalStorage("discountForm");
    if (!allowPopUp) {
      setTimeout(() => {
        setDiscountForm(true);
      }, 3000);
      addLocalStorage("discountForm", true);
    }
  }, []);

  return (
    <div
      className={` relative  ${
        !search
          ? "bg-black border-t border-bt_header border-b-[1.5px] border-b-white "
          : ""
      } transition-all duration-150 shadow-md `}
    >
      <div
        className={`flex box-border max-w-[1272px]  mx-auto px-8 lg:px-2 h-[70px] lg:h-[90px] border-b border-black lg:border-0 items-center`}
      >
        <HeaderContent {...headerContentProps} />
      </div>
      {discountForm && <NeedsClick {...needsclickProps} />}
    </div>
  );
}

const HeaderContent = ({ search, setSearch, setBackgroundHeader }) => {
  const props = {
    setSearch,
    setBackgroundHeader,
  };
  if (!search) {
    return <Search {...props} />;
  }
  return (
    <>
      <HeaderIconLeft {...props} />
      <HeaderIconCenter />
      <HeaderIconRight {...props} />
    </>
  );
};

export default Header;

const HeaderIconCenter = () => {
  const param = useLocation().pathname;

  return (
    <div
      style={param === "/checkout" ? { display: "block" } : {}}
      className="flex grow justify-center  max-w-[33.33%]"
    >
      <Link to="/" className="flex items-center">
        <img
          src={image}
          alt=""
          className="w-[45px] lg:w-[50px]  cursor-pointer "
        />
        {param === "/checkout" && (
          <p className="ml-4 flex items-center border-l border-black pl-4 min-h-[30px] text-lg">
            Thanh Toán
          </p>
        )}
      </Link>
    </div>
  );
};
