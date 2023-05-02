import * as React from "react";
import Box from "@mui/material/Box";

import { Grid } from "@mui/material";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import {
  FaTwitter,
  FaTelegram,
  FaSnapchatSquare,
  FaPinterest,
} from "react-icons/fa";

export function Sidebar() {
  return (
    <Box
      sx={{ width: 350, height: "100%" }}
      role="presentation"
      className=" p-4 bg-[#80cbc4]"
    >
      <div className="flex justify-center">
        <Image
          alt="profile image"
          src="http://via.placeholder.com/300x300"
          width={300}
          height={300}
          className="mb-8 rounded-full"
        />
      </div>
      <Grid container spacing={2} className="flex justify-center gap-4">
        <Grid xs={5}>
          <div className="border rounded-xl text-center p-3 bg-[#17887A]">
            id dar
          </div>
        </Grid>
        <Grid xs={5}>
          <div className="border rounded-xl text-center p-3 bg-[#17887A]">
            Nmaig dar
          </div>
        </Grid>
      </Grid>

      <ButtonLink />
      <div className="border-t-4 flex items-end my-96">
        <div className="flex justify-around">
          <FaTwitter />
          <FaTelegram />
          <FaSnapchatSquare />
          <FaPinterest />
        </div>
      </div>
    </Box>
  );
}

export default function Example() {
  const [sideBar, setSidebar] = React.useState(false);

  return (
    <>
      <button
        type="button"
        className=" p-1 text-[#181D31]  focus:outline-none focus:ring-2   focus:ring-offset-2 absolute z-10"
      >
        <span className="sr-only ">Search</span>
        <div>{sideBar && <Sidebar />}</div>
        <FaTwitter
          onClick={() => {
            setSidebar(!sideBar);
          }}
          className="h-6 w-9 text-xs"
          aria-hidden="true"
        />
      </button>
    </>
  );
}
