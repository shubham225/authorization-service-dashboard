import Appbar from "components/Appbar/Appbar";
import { Sidebar } from "components/Sidebar/Sidebar";
import { MainWindow } from "components/WindowUI/MainWindow";
import { Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Appbar />
        <MainWindow>
          <Outlet />
        </MainWindow>
      </div>
    </>
  );
};
