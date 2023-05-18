import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Angilal from "./Angilal";
import Tworange from "./TwoRange";
import Link from "next/link";

const filter = [
  { title: "Шахмал", count: 9 },
  { title: "Капсул", count: 12 },
  { title: "Тосон түрхлэг", count: 12 },
  { title: "Ампул", count: 12 },
  { title: "Сироп", count: 12 },
  { title: "Дусал", count: 12 },
  { title: "Нунтаг", count: 12 },
  { title: "Хөвмөл", count: 12 },
  { title: "Хүлхдэг шахмал", count: 12 },
  { title: "Нүдний дусаалга", count: 12 },
  { title: "Уусдаг нунтаг", count: 12 },
  { title: "Хүлхдэг шахмал", count: 12 },
];

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Angilal />
      <div className="my-6">
        <div>
          <h1 className="font-[500] text-[18px] text-[#010F1C] pb-[8px] mb-1">Price Filter </h1>
          <hr />
          <div className="">
            <Tworange />
          </div>

          <div className="grid grid-cols-2 gap-2 ">
            <span>
              <input type="text" />
            </span>
          </div>
        </div>
           <div>
             <h3 className="font-[500] text-[18px] pb-[12px] text-[#010F1C] border-b mb-7">Categories</h3>
             <ul className="text-[#55585B]">
              {filter.map((helber) => {
              return (
                <>
                 <Link href='#'>
                   <li className=" hover:text-[#0d6efd] mt-5 mb-5">
                    <div className="grid grid-cols-12">
                      <div className="col-span-10">
                        <label className="text-left text-[15px] font-[400] ">
                          {helber.title}
                        </label>
                      </div>
                      <span className="  w-7 border flex justify-center items-center rounded-[8px] col-span-1 text-[12px] leading-1 font-[500]">
                        {helber.count}
                      </span>
                  </div>
                  </li>
                 </Link>
                </>
              );
            })}
           </ul>
           </div>
          
        
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header">
            <Typography sx={{ width: "77%", flexShrink: 0 }}>
              Xайрцаг дахь тоо ширхэг
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {filter.map((helber) => {
              return (
                <>
                  <div className="grid grid-cols-8 border p-3 my-4 rounded-xl">
                    <div className="col-start-1 col-end-6">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />

                      <label className="text-left ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  ">
                        {helber.title}
                      </label>
                    </div>

                    <p className="col-start-7 col-end-8 text-right">
                      {helber.count}
                    </p>
                  </div>
                </>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Шахмал</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {filter.map((helber) => {
              return (
                <>
                  <div className="grid grid-cols-8 border p-3 my-4 rounded-xl">
                    <div className="col-start-1 col-end-6">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className=" col-start-1 col-end-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />

                      <label className="text-left col-start-3 col-end-6 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  ">
                        {helber.title}
                      </label>
                    </div>
                    <p className="col-start-7 col-end-8 text-right">
                      {helber.count}
                    </p>
                  </div>
                </>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header">
            <Typography sx={{ width: "77%", flexShrink: 0 }}>
              Олон улсын нэршил
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {filter.map((helber) => {
              return (
                <>
                  <div className="grid grid-cols-8 border p-3 my-4 rounded-xl">
                    <div className="col-start-1 col-end-6">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className=" col-start-1 col-end-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />

                      <label className="text-left col-start-3 col-end-6 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300  ">
                        {helber.title}
                      </label>
                    </div>
                    <p className="col-start-7 col-end-8 text-right">
                      {helber.count}
                    </p>
                  </div>
                </>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
