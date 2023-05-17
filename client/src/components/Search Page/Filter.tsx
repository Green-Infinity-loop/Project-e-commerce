import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Angilal from "./Angilal";
import Tworange from "./TwoRange";

const filter = [
  { title: "Шахмал", count: 12 },
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
      <div className="my-6 shadow-sm ">
        <div>
          <h1 className="my-2 mx-4 py-2 ">Price Filter </h1>
          <hr />
          <div className="">
            <Tworange />
          </div>

          <div className="grid grid-cols-2 gap-2 ">
            <span>
              <input type="text" />
            </span>
            <button className="bg-[#F5F5F5] hover:bg-[#010F1C] px-[21px] py-[2px] font-[400] text-[14px] hover:text-white m-auto">
              Filter
            </button>
            
          </div>
        </div>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ mt: 4 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Хэлбэр</Typography>
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
