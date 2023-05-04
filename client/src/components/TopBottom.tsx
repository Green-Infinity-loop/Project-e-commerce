import { dividerClasses } from "@mui/material"
import Image from "next/image"
import agar from "../image/emiinsanlogo/agarfarm.png"
import azi from "../image/emiinsanlogo/azifarmlogo.png"
import hurmen from "../image/emiinsanlogo/hurmenlogo.webp"
import monos from "../image/emiinsanlogo/monoslogo.png"


export default function TopBottom(){
    return (
        <div className="m-auto grid grid-cols-5 gap-4 bg-[#F7F7F9] leading-100 ">
           <div className="grid place-content-center px-80 bg-white col-span-3 "> 
               <div className="w-[22vw]">
                   <div className="text-[80px]">Here is, Our four pharmacy branches</div>
               <div className="py-20 text-[20px]">On the flip side.Hill is grateful that their belated diagnosis allowed them to live care-free It allowed them to have the time to indulge in adventures like bungee jumping to play college soccer, and even to study abroad</div>
               <div className="gap-4 text-[20px]">
                   <button className="border p-6 px-20 rounded-lg text-white bg-[#ea4c89]">View Detail</button>
               </div>
               </div>
           </div>
           <div className="h-[70vh] object-cover bg-no-repeat col-span-2 relative">
                <div className="grid grid-cols-2 gap-4 place-content-center w-[40vh] absolute top-40 left-[-120px]">
                    <div className="h-[20vh] bg-white rounded-xl m-4 p-5 shadow-lg">
                        <Image className="mx-auto p-3" src={monos} width={120} height={40}></Image>
                        <div className="text-[20px] p-4 text-center">Монос</div>
                        <div>Хэрэглэгчээ эрхэмлэгч эрүүл мэндийн тэргүүлэх цахим худалдааны компани байна</div>
                    </div>
                    <div  className=" bg-white rounded-xl m-4 p-5 shadow-lg">
                        
                        <Image className="mx-auto p-3" src={agar} width={120} height={40}></Image>
                        <div className="text-[20px] p-4 text-center">АгарФарм</div>
                        <div>Бид анагаахын салбарын мэргэжилтнүүдтэй хамтран бүх нийтийн эрүүл мэндийн боловсрол, хэрэглээг дэлхийн жишигт хүргэнэ. </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 place-content-center w-[40vh] absolute bottom-40 left-[-230px]">
                    <div className="h-[20vh] bg-white rounded-xl m-4 p-5 shadow-lg">
                        <Image className="mx-auto p-3" src={hurmen} width={120} height={40}></Image>
                        <div className="text-[20px] p-4 text-center">ХүрмэнФарм</div> 
                        <div>Үйлчлүүлэгч таны сэтгэлд хүрсэн зөвлөгөө туслалцааг хүргэн, таны амьдралд багахан ч гэсэн гэрэл гэгээг түгээх нь бидний зарчим юм</div>
                    
                    </div>
                    <div className=" bg-white rounded-xl m-4 p-5 shadow-lg">
                        <Image className="mx-auto p-3" src={azi} width={120} height={40}></Image>
                        <div className="text-[20px] p-4 text-center">АзиФарм</div>
                        <div>Эрүүл энхийн үйлчилгээний дэвшилтэт хэв маягийг Таньд хүргэнэ</div>
                    </div>
                </div>
           </div>
        </div>
    )
}