import SearchPageCard from "@/components/SearchPageCard";

export default function OrderPage(){
    return (
        <>
        <div className="container">
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-3">
                <div className=" col-span-2">
                    <SearchPageCard/>
                </div>
                <div className="bg-[#fbbf24]">2</div>
            </div>
        </div>
        </>
    )
}