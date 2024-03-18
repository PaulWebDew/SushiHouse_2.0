import { FC, useState } from "react";
import { SearchIcon } from "../../assets/icons/searchIcon";
import { SearchAltIcon } from "../../assets/icons/searchAlt";
import clsx from "clsx";

import cls from "./style.module.scss";
import { searchGroups } from "./type.ts";
export const Search: FC = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  return (
    <div className={cls.searchContainer}>
      <SearchIcon
        width={40}
        height={40}
        className={cls.searchIcon}
        role={"button"}
        onClick={() => setIsOpenSearch(!isOpenSearch)}
      />
      <div
        className={clsx(
          isOpenSearch
            ? cls.searchInputWrapperOpen
            : cls.searchInputWrapperClosed,
        )}
      >
        <div className={cls.searchInput}>
          <div className={cls.groupContainer}>
            {searchGroups.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className={cls.inputContainer}>
            <input type="text" placeholder={"Поиск по сайту"} />
            <button>
              <SearchAltIcon width={20} height={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
