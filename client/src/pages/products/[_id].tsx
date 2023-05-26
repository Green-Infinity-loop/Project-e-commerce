import { useBasket } from "@/Hooks/useBasket";
import { IProduct } from "@/interfaces/product";
import { Button } from "@mui/material";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
import MapboxMap from "@/components/mapBox/mapBox";
import { LocationContext } from "@/context/LocationContext";
import Layout from "../layout";
interface ProductViewProps {
  product: IProduct;
  location: IProduct;
}

const ProductView: FC<ProductViewProps> = ({ product }) => {
  const { query } = useRouter();
  const { _id } = query;
  const { currentLoc }: any = useContext(LocationContext);
  console.log("currentLoc _Id:", currentLoc);

  const [locData, setLocData] = useState([]);
  const [nearestLocation, setNearestLocation] = useState<any>([]);

  console.log("logData:", locData);

  useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/locations/findnearest?lat=${currentLoc[1]}&long=${currentLoc[0]}`
      );
      const data1 = await res.data.location.coordinates;
      setNearestLocation(data1);
      console.log("data2:", data1);
    });
  }, [currentLoc]);

  console.log("nearestLocation _id:", nearestLocation);

  const [quantity, setQuantity] = useState(1);
  const { addToBasket } = useBasket();
  const updateProductCount = (count: number) => {
    if (count < 0 && quantity === 1) {
      toast.warning("1 ээс бага бараа сагслах боломжгүй");
      return;
    }
    if (count > 0 && quantity === 10) {
      toast.warning("10 аас их бараа сагслах боломжгүй");
      return;
    }
    setQuantity(quantity + count);
  };
  // console.log("pro:", product.location[0].locationId);

  // function myFunction(){
  //   updateProductCount(1);
  //   addToBasket(data._id, quantity)
  // }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto my-8 h-[70vh] grid grid-cols-2 xl:grid-cols-2 md:grid-cols-1 max-lg:grid-cols-1 min-sm:grid-cols-1 max-sm:grid-cols-1 gap-4 container-xxl pt-[100px]">
        <div className=" md:items-center p-10">
          <div className="w-full p-10">
            <div className="aspect-square relative overflow-hidden  rounded">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              )}
            </div>
          </div>
          <div className="md:w-full px-8">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-4"></p>
            <div className="flex mb-4">
              <div className="text-gray-700 mr-2">Category:</div>
              <div className="text-blue-500 font-bold">Тархи мэдрэл</div>
            </div>
            <div className="flex mb-4">
              <p>
                Толгойн өвдөлт, мигрень, шүдний өвдөлт, мэдрүүл, булчин үений
                өвдөлт, гэмтэл түлэгдэлтийн өвдөлт зэрэг бүх төрлийн өвдөлтийн
                үед өвдөлт намдаах зорилгоор хэрэглэнэ.
              </p>
            </div>
            <div className="flex items-center mb-8">
              <div className="text-gray-700 mr-2">Price:</div>
              <div className="text-blue-500 font-bold text-lg">
                {product.price}₮
              </div>
            </div>
            <div className="flex">
              <div className="mb-8">
                <label className="text-gray-700">Quantity:</label>
                <div className="flex items-center mt-2">
                  <button
                    type="button"
                    className="text-gray-700 rounded-full py-1 px-3 border-gray-300 border hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    onClick={() => updateProductCount(-1)}
                  >
                    <FaMinus />
                  </button>
                  <input
                    type="number"
                    name="quantity"
                    value={quantity}
                    readOnly={true}
                    className="text-center text-gray-700 w-16 rounded-md px-2 py-1 mx-2 border-gray-300 border focus:outline-none focus:ring-2  focus:ring-gray-500 focus:ring-offset-2"
                  />
                  <button
                    type="button"
                    className="text-gray-700 rounded-full py-1 px-3 border-gray-300 border hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    onClick={() => updateProductCount(1)}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={() =>
                    addToBasket(
                      product._id,
                      quantity,
                      product.name,
                      product.price,
                      product.image || ""
                    )
                  }
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-[30px]">Ойролцоо байршил</span>
          <div className="overflow-x-scroll ">
            <div className="flex gap-3 border rounded-xl mb-10 w-[1000px] ">
              {product?.location &&
                Array.isArray(product.location) &&
                product?.location.map((loc: any, index: any) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setNearestLocation(loc.locationId.location.coordinates);
                      }}
                      className="grid grid-cols-2 cursor-pointer gap-4 w-[400px] my-4 p-1 border rounded-xl "
                    >
                      <div className="text-sm w-[200px]">
                        {loc.locationId.name}
                      </div>

                      <div className="flex justify-end">{loc.quantity}ш</div>
                    </div>
                  );
                })}
            </div>
          </div>
          {nearestLocation && currentLoc && (
            <MapboxMap nearestLocation={nearestLocation} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log("server deer param", ctx.params);
  const _id = ctx.params?._id as string;
  if (!_id) {
    return {
      notFound: true,
    };
  }
  const productRequest = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${_id}`
  );
  const product: IProduct = await productRequest.data;
  console.log("product:", product);
  return {
    props: {
      product,
    },
  };
};

export default ProductView;
