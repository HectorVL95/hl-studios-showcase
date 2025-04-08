import { Suspense } from "react";
import ServicesPage from "../layouts/services/services-page";

const page = () => {
  return (
    <Suspense fallback={<p>...Loading Services</p>}>
      <ServicesPage />
    </Suspense>
  );
}

export default page;