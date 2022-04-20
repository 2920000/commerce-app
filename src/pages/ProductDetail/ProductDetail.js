import { useGetProductDetailQuery } from "../../services/detailProductApi";
import { Link, useParams } from "react-router-dom";
import ProductDetailSkeleton from "../../components/skeleton/ProductDetailSkeleton";
import ProductRatings from "./ProductRatings";
import LeftProductDetail from "./LeftProductDetail";
import RightProductDetail from "./RightProductDetail";

function ProductDetail() {
  const { slug } = useParams();
  const { data, isLoading } = useGetProductDetailQuery(slug);
  window.scrollTo(0, 0);
  
  if (isLoading || !data) {
    return <ProductDetailSkeleton />;
  }

  return (
    <div className="max-w-[1450px] px-2 lg:px-10 m-auto pt-[20px]">
      <p className="text-xs mb-5 ">
        <Link to="/">Trang chủ</Link>
        <span className="mx-2">
          <span className="mr-2">/</span>Tất cả <span className="ml-2">/</span>
        </span>
        {data.title}
      </p>
      <div className="flex flex-col lg:flex-row relative  ">
        <LeftProductDetail productDetail={data} />
        <RightProductDetail productDetail={data} />
      </div>
      <ProductRatings />
    </div>
  );
}

export default ProductDetail;
