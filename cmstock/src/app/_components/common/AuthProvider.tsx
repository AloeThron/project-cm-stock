"use client";

import React, { useEffect } from "react";
import { getSession } from "@/store/slices/userSlice";
import { store } from "@/store/store";

type Props = {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: Props) {
  useEffect(() => {
    store.dispatch(getSession());
  }, []);

  return <div>{children}</div>;
}
