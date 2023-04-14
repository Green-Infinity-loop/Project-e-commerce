import { useQuery } from "@/components/Hooks/useQuery";
import { Select } from "@/ui/Select";
import { Selector } from "@/ui/Selector";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { query } = context;
//   const { ordering = "", limit = 25, search = "" } = query;
//   const response = await axios.get(
//     `http://localhost:7070/api/movies?limit=${limit}&ordering=${ordering}&search=${search}`
//   );
//   const { data } = response;
//   return {
//     props: { data },
//   };
// }

export default function ShopGrid() {
  const addQuery = useQuery();
  return (
    <>
      <div className="xl:container md:mx-auto">
        <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4 ...">
          <div className="">
            <h1 className="text-blue-600/100 text-xl border-b-4 py-4">
              GATEGORIES
            </h1>

            <Selector
              className={"divide-y divide-dashed"}
              items={[
                { value: "Clothes", label: "Clothes" },
                { value: "Men", label: "Clothes" },
                { value: "Shoes", label: "Shoes" },
                { value: "Sunglasses", label: "Sunglasses" },
                { value: "Women", label: "Women" },
              ]}
              onchange={(e) => {
                addQuery({ ordering: e.target.value });
              }}
              // value={ordering + ""}
              itemLabel={"label"}
              itemValue={"value"}
            />
            <h1 className="text-blue-600/100 text-xl border-b-4 py-4">
              PRODUCT PRICE
            </h1>

            <Selector
              className=""
              items={[
                { value: "L", label: "L" },
                { value: "M", label: "M" },
                { value: "S", label: "Shoes" },
                { value: "XL", label: "Sunglasses" },
                { value: "XLL", label: "Women" },
              ]}
              onchange={(e) => {
                addQuery({ ordering: e.target.value });
              }}
              // value={ordering + ""}
              itemLabel={"label"}
              itemValue={"value"}
            />
            <h1 className="text-blue-600/100 text-xl border-b-4 py-4">COLOR</h1>
            <Selector
              className=""
              items={[
                { value: "Black", label: "Clothes" },
                { value: "White", label: "Clothes" },
                { value: "Orange", label: "Shoes" },
                { value: "BLue", label: "Sunglasses" },
                { value: "Yellow", label: "Women" },
              ]}
              onchange={(e) => {
                addQuery({ ordering: e.target.value });
              }}
              // value={ordering + ""}
              itemLabel={"label"}
              itemValue={"value"}
            />
          </div>
          <div className="col-span-3 px-3">
            <div className="flex text-center justify-between">
              <div>Viev as:</div>
              <div>
                sort by:
                <Select
                  items={[
                    { value: "Newest", label: "Newest" },
                    { value: "Oldest", label: "12" },
                    { value: "24", label: "24" },
                    { value: "48", label: "48" },
                  ]}
                  itemLabel={"label"}
                  itemValue={"value"}
                />
              </div>
              <div>
                show:
                <Select
                  items={[
                    { value: "6", label: "6" },
                    { value: "12", label: "12" },
                    { value: "24", label: "24" },
                    { value: "48", label: "48" },
                  ]}
                  itemLabel={"label"}
                  itemValue={"value"}
                />
              </div>
              <div>
                <div className="flex items-center justify-between border-t border-gray-200 bg-white sm:px-1">
                  <div className="flex flex-1 justify-between sm:hidden">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Next
                    </a>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                      >
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          <span className="sr-only">Previous</span>
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>

                        <a
                          href="#"
                          aria-current="page"
                          className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          1
                        </a>
                        <a
                          href="#"
                          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                          2
                        </a>
                        <a
                          href="#"
                          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                          3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                          ...
                        </span>

                        <span className="sr-only">Next</span>
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}