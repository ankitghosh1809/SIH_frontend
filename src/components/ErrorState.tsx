// STUB — DELETE AT STITCH TIME. Not given verbatim in the work order (only listed as
// something Agent 1 owns); shape here is the minimal one Agent 6's pages need.
interface ErrorStateProps {
  title: string;
  description?: string;
}

export function ErrorState({ title, description }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-red-200 bg-red-50 py-16 text-center">
      <p className="text-sm font-medium text-red-900">{title}</p>
      {description && <p className="mt-1 text-sm text-red-700">{description}</p>}
    </div>
  );
}
