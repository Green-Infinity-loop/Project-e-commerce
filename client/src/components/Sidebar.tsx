import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Avatar, Grid, SvgIcon } from "@mui/material";
import { IoPersonOutline } from "react-icons/io5";
import Image from "next/image";

// function HomeIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }
type Anchor = "kk";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 500, height: "100%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className=" pl-10 p-4 bg-[#bef264]"
    >
      <div className="flex justify-center">
        <Image
          alt="profile image"
          src="http://via.placeholder.com/300x300"
          width={300}
          height={300}
          className="mb-6 rounded-full"
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
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["kk"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}