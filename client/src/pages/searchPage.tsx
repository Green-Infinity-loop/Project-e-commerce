import Range from "@/components/Range";
import SearchPageCard from "@/components/SearchPageCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Search from "@/components/Search";

export default function searchPage() {
  return (
    <>
      <Navbar />
      <div className="my-10">
        <div className="container">
          <div className="text-black">
            <Search />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-black">
              <Range />
            </div>
            <div className="col-span-2 text-black">
              {/* <SearchPageCard/> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
