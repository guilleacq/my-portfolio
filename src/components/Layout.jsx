import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
        <main className="flex flex-col gap-6">
            <Outlet />
        </main>
        {/* Empty space for visual spacing */}
        <div className="h-32" aria-hidden="true" /> 
    </div>
  );
}

export default Layout;