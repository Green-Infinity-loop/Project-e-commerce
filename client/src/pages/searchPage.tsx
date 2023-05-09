

import Sort from "@/components/Sort";
import Range from "@/components/Search Page/Range";
import SearchPageCard from "@/components/Search Page/SearchPageCard";
import Navbar from "@/components/Main Page/Navbar/Navbar";
import Footer from "@/components/Main Page/Footer/Footer";
import Search from "@/components/Search Page/Search";

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
              <div>
                <Sort />
                <SearchPageCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
