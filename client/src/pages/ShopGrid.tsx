import { useQuery } from "@/Hooks/useQuery";
import { Select } from "@/ui/Select";
import { Selector } from "@/ui/Selector";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import '../styles/ShopGrid.module.css'

export default function ShopGrid() {
  const addQuery = useQuery();
  return (
    <>
      <div className="xl:container md:mx-auto">
          <div className="mb-[45px]">
            <div className="flex  justify-end">
              <div className="border">
                <Select
                  className=""
                  items={[
                    { value: "Newest", label: "Default Sorting" },
                    { value: "Low to Hight", label: "Low to Hight" },
                    { value: "High to Low", label: "High to Low" },
                    { value: "New Added", label: "New Added" },
                    { value: "On Sale", label: "On Sale Added" },
                  ]}
                  itemLabel={"label"}
                  itemValue={"value"}
                />
              </div>          
          </div>
        </div>
      </div>
    </>
  );
}
