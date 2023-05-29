import { dividerClasses } from "@mui/material";
import Image from "next/image";
import agar from "../../../image/emiinsanlogo/agarfarm.png";
import azi from "../../../image/emiinsanlogo/azifarmlogo.png";
import hurmen from "../../../image/emiinsanlogo/hurmenlogo.webp";
import monos from "../../../image/emiinsanlogo/monoslogo.png";

export default function TopBottom() {
  return (
    <div className="m-auto grid grid-cols-5 gap-4 bg-[#F7F7F9] leading-100 xl:mt-40 xl:h-[70vh]">
      <div className="grid place-content-center px-80 bg-white col-span-3 ">
        <div className="w-[22vw] xl:m-auto">
          <div className="text-[60px] xl:text-[40px]">
            𝐇𝐞𝐫𝐞 𝐢𝐬, 𝐎𝐮𝐫 𝐟𝐨𝐮𝐫 𝐩𝐡𝐚𝐫𝐦𝐚𝐜𝐲 𝐛𝐫𝐚𝐧𝐜𝐡𝐞𝐬
          </div>
          <div className="py-20 text-[15px] xl:py-1">
            On the flip side.Hill is grateful that their belated diagnosis
            allowed them to live care-free It allowed them to have the time to
            indulge in adventures like bungee jumping to play college soccer,
            and even to study abroad
          </div>
          <div className="gap-4 text-[15px]">
            <button className="border p-6 px-20 rounded-lg text-white bg-[#115061] xl:px-10 xl:p-5">
              View Detail
            </button>
          </div>
        </div>
      </div>
      <div className="h-[70vh] object-cover bg-no-repeat col-span-2 mt-[70px] relative">
        <div className="grid grid-cols-2 gap-4 place-content-center w-[50vh] absolute top-20 mt-5 left-[-120px]">
          <div className="h-[20vh] text-center bg-white rounded-xl m-4 p-5 shadow-lg">
            <Image
              alt="Хэрэглэгчээ эрхэмлэгч эрүүл мэндийн"
              className="mx-auto p-3"
              src={monos}
              width={120}
              height={40}></Image>

            <div className="p-6 text-[10px]">
              Хэрэглэгчээ эрхэмлэгч эрүүл мэндийн тэргүүлэх цахим худалдааны
              компани байна
            </div>
          </div>
          <div className=" bg-white text-center rounded-xl m-4 p-5 shadow-lg">
            <Image
              alt="Хэрэглэгчээ эрхэмлэгч эрүүл мэндийн"
              className="mx-auto p-3"
              src={agar}
              width={120}
              height={40}></Image>

            <div className="p-6 text-[10px]">
              Бүх нийтийн эрүүл мэндийн боловсрол, хэрэглээг дэлхийн жишигт
              хүргэнэ.{" "}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 place-content-center w-[50vh] absolute bottom-20 mb-12 left-[-230px]">
          <div className="h-[20vh] text-center bg-white rounded-xl m-4 p-5 shadow-lg">
            <Image
              alt="Хэрэглэгчээ эрхэмлэгч эрүүл мэндийн"
              className="mx-auto p-3"
              src={hurmen}
              width={120}
              height={40}></Image>

            <div className="p-6 text-[10px]">
              Үйлчлүүлэгч таны сэтгэлд хүрсэн зөвлөгөө туслалцааг хүргэн, таны
              амьдралд багахан ч гэсэн гэрэл гэгээг түгээх нь бидний зарчим юм
            </div>
          </div>
          <div className=" bg-white text-center rounded-xl m-4 p-5 shadow-lg">
            <Image
              alt="Хэрэглэгчээ эрхэмлэгч эрүүл мэндийн"
              className="mx-auto p-3"
              src={azi}
              width={120}
              height={40}></Image>

            <div className="p-6 text-[10px]">
              Эрүүл энхийн үйлчилгээний дэвшилтэт хэв маягийг Таньд хүргэнэ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
