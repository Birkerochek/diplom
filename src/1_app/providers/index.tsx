"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { getQueryClient } from "@shared/utils";
import { SessionProvider } from "next-auth/react";

const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const queryClient = getQueryClient();

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};

export default AppProviders;
