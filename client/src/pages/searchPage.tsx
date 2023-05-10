import Sort from "@/components/Search Page/Sort";
import Filter from "@/components/Search Page/Filter";
import SearchPageCard from "@/components/Search Page/SearchPageCard";
import Navbar from "@/components/Main Page/Navbar/Navbar";
import Footer from "@/components/Main Page/Footer/Footer";
import Search from "@/components/Search Page/Search";
import axios from "axios";
import { Select } from "@mui/material";
import { useRouter } from "next/router";
import { useQuery } from "@/Hooks/useQuery";
import { GetServerSidePropsContext } from "next";

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { query } = context;
//   const { ordering = "", limit = 24 } = query;
//   const response = await axios.get(
//     `http://localhost:8080/api/movies?limit=${limit}&ordering=${ordering}`
//   );
//   const { data } = response;
//   return {
//     props: { data },
//   };
// }

export default function searchPage() {
  // const router = useRouter();
  // const { query } = router;
  // const { addQuery } = useQuery();
  // const { ordering = "", limit = 24 } = query;
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 ">
        <div className="my-0 ">
          <div className="container">
            <div className="text-black">
              <Search />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-black">
                <Filter />
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
      </div>
      {/* <Select
        items={[
          { value: "", label: "Sort..." },
          { value: "releasedAsc", label: "Oldest" },
          { value: "releasedDesc", label: "Newest" },
          { value: "imdbRatingDesc", label: "Most popular" },
          { value: "titleAsc", label: "A-Z" },
          { value: "titleDesc", label: "Z-A" },
        ]}
        onChange={(e) => {
          addQuery({ ordering: e.target.value });
        }}
        value={ordering + ""}
        itemValue={"value"}
        itemLabel={"label"}
      /> */}
      {/* <Footer/> */}
    </>
  );
}
