import { Outlet } from "react-router-dom";
import { Header } from "../header";

import cls from "./style.module.scss";

function Layout() {
  return (
    <div className={cls.container}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
