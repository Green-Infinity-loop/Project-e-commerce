import { TbTruckDelivery } from "react-icons/tb";
import { FaFacebook, FaTwitter, FaPhoneAlt } from "react-icons/fa";

export default function ButtonLink() {
  return (
    <>
      <div className=" bg-black h-10 ">
        <span className=" container flex justify-between ">
          <div className=" flex p-2 text-[#767A7D]">
            <TbTruckDelivery className="text-[#FFB342] w-10  h-10 p-2  m-auto" />
            FREE Express Shipping On Orders $570+
          </div>
          <div className="text-end flex p-3 mr text-[#767A7D]">
            <FaFacebook className=" mx-1" /> <FaTwitter className=" mx-1" />
            <FaPhoneAlt className=" mx-1" />
            <p className="mx-1">7777-8888</p>
          </div>
        </span>
      </div>
    </>
  );
}
