import React, { useState } from "react";
import MenuItem from "../MenuItem";

function Menus({ menus, nearestLocation }: any) {
  //   const [nearest, setNearest] = useState(false);
  return (
    <div className="h-[50vh] basis-[400px] overflow-y-scroll border my-[50px]">
      {menus.map((menu: any, idx: number) => {
        return (
          <MenuItem
            key={idx}
            item={{
              ...menu,
              nearest: nearestLocation._id === menu._id ? true : false,
            }}
          />
        );
      })}
    </div>
  );
}

export default Menus;