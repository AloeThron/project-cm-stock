"use client";
import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Header from "../_components/layout/Header";
import Sidebar from "../_components/layout/Sidebar";
import { DrawerHeader } from "../_components/layout/DrawerHeader";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <section>
      <Box sx={{ display: "flex" }}>
        <Header handleDrawerOpen={handleDrawerOpen} open={open} />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
        <Box>
            <DrawerHeader />
            {children}
        </Box>
      </Box>
    </section>
  );
}
