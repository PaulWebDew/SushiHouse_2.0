import { NavBar } from "../navbar";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets/icons/logoIcon.tsx";

import { UserIcon } from "../../assets/icons/userIcon";
import { CartIcon } from "../../assets/icons/cartIcon";

import cls from "./style.module.scss";
import { Search } from "../search";
import { Categories } from "../categiries";

export const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.navContainer}>
        <Link to={"/"}>
          <LogoIcon className={cls.logo_icon} />
        </Link>
        <Link to={"tel:/+375336570090"} className={cls.phone}>
          +375(33) 657-00-90
        </Link>
        <NavBar />
        <div className={cls.loginButton}>
          <UserIcon width={20} height={20} />
          <span>Вход</span>
        </div>
        <div className={cls.basketButton}>
          <Link to={"/basket"}>
            <CartIcon width={30} height={30} />
            <span>4/2500p</span>
          </Link>
        </div>
      </div>
      <Search />
      <Categories />
    </header>
  );
};
