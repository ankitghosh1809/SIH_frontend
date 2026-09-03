// Standard shadcn/ui helper, regenerated locally since `npx shadcn add`
// can't reach its registry from this sandbox. Identical to what the CLI
// would produce, kept for standalone dev.
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
