import React from "react";

function Layout({ children }: any) {
  return (
    <>
      <main className="w-full h-[100vh]">{children}</main>
    </>
  );
}

export default Layout;
