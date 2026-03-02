import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
        <main className="flex flex-col gap-6">
            <Outlet />
        </main>
    </div>
  );
}

export default Layout;