// Standard shadcn/ui component, regenerated locally (see button.tsx header).
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-[var(--radius)] bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
