import { borderRadius } from "@mui/system";
import React, { useState } from "react";
import styles from "./menu.module.css";

function MenuItem({ item }: any) {
  let st = "";
  let tk = "";
  if (item.nearest === true) {
    // st = styles.nearest;
    tk = styles.circle;
  } else {
    tk = styles.default;
  }
  return (
    <div className={"p-4 m-6  border-2 rounded-xl border-lime-950 " + st + "" }>
      <div className="flex gap-4">
        <div className={"w-3 h-3 " + tk }></div>
        <h2 className={"text-lg " + styles.itemText}>{item.name}</h2>
      </div>
      <p className="text-[16px]">Хаяг: {item.address}</p>
      <div className="flex gap-4 text-[12px]">
        <p>Онгойх цаг: {item.working_hours_start}</p>
        <p>Хаах цаг:{item.working_hours_end}</p>
      </div>

        <p className="text-[12px]">Бүх өдөр онгойдог:{item.is_open_allday ? "тийм" : "үгүй"}</p>
      
    </div>
  );
}

export default MenuItem;
