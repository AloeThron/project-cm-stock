import { Box } from "@mui/material";
import React from "react";
import Header from "../_components/layout/Header";
import Sidebar from "../_components/layout/Sidebar";
import { DrawerHeader } from "../_components/layout/DrawerHeader";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <section>
      <Box sx={{ display: "flex" }}>
        <Header />
        <Sidebar />
        <Box>
          <DrawerHeader />
          {children}
        </Box>
      </Box>
    </section>
  );
}
