import cls from "./style.module.scss";

const categoryArr = [
  "СЕТЫ",
  "НОВИНКИ",
  "ПОКЕ",
  "РОЛЛЫ",
  "-30%",
  "АВТОРСКОЕ",
  "СУШИ",
  "WOK",
  "ДЕСЕРТЫ",
  "САЛАТЫ",
  "СУПЫ",
  "НАПИТКИ",
  "ДОПОЛНЕНИЯ",
];

export const Categories = () => {
  return (
    <div className={cls.categoriesContainer}>
      {categoryArr.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};
