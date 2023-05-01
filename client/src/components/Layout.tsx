import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

export default function Layout() {
  const { collapseSidebar } = useProSidebar();
  const [hide, setHide] = useState(false);
  const openHandler = () => {
    setHide(true);
  };

  const closeHandler = () => {
    setHide(false);
  };

  if (hide) {
    return (
      <>
        <main>
          <button onClick={closeHandler}>hide</button>
        </main>
        <div style={{ display: "flex", height: "10%" }}>
          <Sidebar>
            <Menu>
              <MenuItem> Documentation</MenuItem>
              <MenuItem> Calendar</MenuItem>
              <MenuItem> E-commerce</MenuItem>
            </Menu>
          </Sidebar>
        </div>
        ;
      </>
    );
  }
  return (
    <>
      <button onClick={openHandler}>hide</button>
    </>
  );
}
