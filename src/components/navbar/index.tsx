import { Link } from "react-router-dom";

import cls from "./style.module.scss";

export const NavBar = () => {
  return (
    <nav className={cls.nav}>
      <ul>
        <li>
          <Link to={"/"}>Главная</Link>
        </li>
        <li>
          <Link to={"/actions"}>Акции</Link>
        </li>
        <li>
          <Link to={"/delivery"}>Доставка</Link>
        </li>
        <li>
          <Link to={"/location"}>Адреса</Link>
        </li>
        <li>
          <Link to={"/contacts"}>Контакты</Link>
        </li>
        <li>
          <Link to={"/franchise"}>Франшиза</Link>
        </li>
      </ul>
    </nav>
  );
};
