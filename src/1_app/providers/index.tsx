"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@shared/utils";

const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppProviders;
