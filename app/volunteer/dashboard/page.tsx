import { Suspense } from "react";

import { VolunteerDashboard } from "@pages/VolunteerPage/Dashboard/VolunteerDashboard";

export default function Page() {
  return (
    <div>
      <Suspense fallback={null}>
        <VolunteerDashboard />
      </Suspense>
    </div>
  );
}
