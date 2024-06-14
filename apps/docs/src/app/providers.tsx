"use client";

import { TooltipProvider } from "@repo/ui/src";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <TooltipProvider>{children}</TooltipProvider>;
}
