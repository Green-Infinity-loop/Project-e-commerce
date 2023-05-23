
import { useBasket } from "@/Hooks/useBasket";
import { IProduct } from "@/interfaces/product";
import { Button } from "@mui/material";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import { FC, useState } from "react";
import { toast } from "react-toastify";
import { FaMinus, FaPlus } from "react-icons/fa";
interface ProductViewProps{
    product:IProduct;
}


const ProductView: FC<ProductViewProps> = ({product}) =>{
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

  // function myFunction(){
  //   updateProductCount(1);
  //   addToBasket(data._id, quantity)
  // }

    return (
        // <Layout title={product.title}>
        <div className="max-w-4xl mx-auto my-8 h-[100vh]">
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <div className="aspect-square relative overflow-hidden border rounded">
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
            <div className="md:w-1/2 px-8">
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-700 mb-4"></p>
              <div className="flex mb-4">
                <div className="text-gray-700 mr-2">Category:</div>
                <div className="text-blue-500 font-bold">Category Name</div>
              </div>
              <div className="flex mb-4">
                <p>
                Өсөлт удааширах, жин хэт багатай, хоолны найрлага зохимжгүй байх, хоолны дуршил буурах, ой ухаан сулрах, ядарч сульдах, стресс, өвчлөлийн дараа эдгэрэлтийг түргэсэхийн тулд тус тус хэрэглэнэ
                </p>
              </div>
              <div className="flex items-center mb-8">
                <div className="text-gray-700 mr-2">Price:</div>
                <div className="text-blue-500 font-bold text-lg">
                  {product.price}₮
                </div>
              </div>
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
              <Button onClick={() =>
                  addToBasket(
                    product._id,
                    quantity,
                    product.name,
                    product.price,
                    product.image || "" 
                  )
                }>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      // </Layout>
    )
}


export const getServerSideProps = async (ctx:GetServerSidePropsContext) =>{
    console.log('server deer param', ctx.params)
    const _id = ctx.params?._id as string;
    if (!_id) {
    return {
      notFound: true,
    };
  }
    const productRequest = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${_id}`
    );
    const product:IProduct = await productRequest.data;
    console.log('product:',product)
    return{
        props:{
            product,
        },
    };
};

export default ProductView


