import Image from "next/image";


export default function Bottom(){
    return (
        <div className="m-auto grid grid-cols-5 gap-4 bg-white leading-100 relative">
           <div className="h-[70vh] bg-[#F7F7F9] object-cover bg-no-repeat bg-bottom col-span-3"></div>
           <div className="grid place-content-center px-80 bg-white col-span-2 relative"> 
               <div className="w-[25vw] absolute top-40 right-[570px]">
                   <div className="text-[80px]">Give access to exceptional care.</div>
               <div className="py-20 text-[20px]">On the flip side.Hill is grateful that their belated diagnosis allowed them to live care-free It allowed them to have the time to indulge in adventures like bungee jumping to play college soccer, and even to study abroad</div>
               <div className="gap-4 text-[20px]">
                   <button className="border p-6 px-20 rounded-lg text-white bg-[#ea4c89]">View Detail</button>
                   <button className="p-4 px-10">Set Appointemt</button>
               </div>
               </div>
           </div>
        </div>
    )
}