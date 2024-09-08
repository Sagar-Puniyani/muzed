"use client";

import { SessionProvider } from "next-auth/react";

export const Providers = ({ Children }: { Children: React.ReactNode }) => {
  return <SessionProvider>{Children}</SessionProvider>;
};


