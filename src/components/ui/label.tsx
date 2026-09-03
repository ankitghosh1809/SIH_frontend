// STUB — DELETE AT STITCH TIME. See button.tsx for context.

import * as React from "react";

export function Label({ className = "", ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={`text-sm font-medium text-slate-700 ${className}`} {...props} />;
}
