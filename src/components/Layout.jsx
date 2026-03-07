import { Outlet } from "react-router";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div>
        <ScrollToTop />
        <main className="flex flex-col gap-6">
            <Outlet />
        </main>
        {/* Empty space for visual spacing */}
        <div className="h-32 md:hidden" aria-hidden="true" /> 
    </div>
  );
}

export default Layout;