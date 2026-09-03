agent-6-admin
import * as React from "react";

import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-neutral-100", className)} {...props} />;
}
// Generated-via-CLI convention, hand-written here — see button.tsx for why.

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
main
