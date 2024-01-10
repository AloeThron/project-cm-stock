"use client"

import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./theme";

type Props = {
  children: React.ReactNode;
};

export default function ThemeRistry({ children }: Props) {

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
