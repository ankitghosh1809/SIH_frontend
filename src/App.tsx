import { ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Temporary smoke-test screen: confirms Tailwind v4 + shadcn/ui + Radix +
// lucide-react are wired up correctly. Replaced for real in Task 9.
function App() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="size-5 text-primary" />
            Scaffold smoke test
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Badge>Task 1 in progress</Badge>
          <Button>Primary button</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
