import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "@/components/loaders/SuspenseLoader";

const AppWrapper = () => {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Outlet />
    </Suspense>
  );
};

export default AppWrapper;
