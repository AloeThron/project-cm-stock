"use client";
import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import Header from "../_components/layout/Header";
import Sidebar from "../_components/layout/Sidebar";
import { DrawerHeader } from "../_components/layout/DrawerHeader";

type Props = {
  children: React.ReactNode;
};

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

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
          <Main open={open}>
            <DrawerHeader />
            {children}
          </Main>
        </Box>
      </Box>
    </section>
  );
}
