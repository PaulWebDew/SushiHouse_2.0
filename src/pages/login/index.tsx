import { FC, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import cls from "./style.module.scss";
import clsx from "clsx";
import { EyeClosedIcon, EyeOpenIcon, UserIcon } from "../../assets/icons";
import userImage from "../../assets/image/userImage.png";

export const LoginPage: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPasswordConfirm, setIsShowPasswordConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      mail: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  return (
    <section className={cls.section}>
      <img src={userImage} alt="user" />
      <h3>Регистрация</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor={"login"}>Логин</label>
          <input
            aria-invalid={!!errors.login}
            type="text"
            id={"login"}
            {...register("login", {
              required: true,
              minLength: { value: 4, message: "Не менее 4х символов" },
            })}
          />
          {errors.login && (
            <span>{errors.login.message?.toString() || `Укажите Логин!`}</span>
          )}
        </div>
        <div>
          <label htmlFor={"mail"}>Почта</label>
          <input
            aria-invalid={!!errors.mail}
            type="text"
            id={"mail"}
            {...register("mail", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Введите  корректный емаил ***@**.** !",
              },
            })}
          />
          {errors.mail && (
            <span>{errors.mail.message?.toString() || `Укажите Логин!`}</span>
          )}
        </div>
        <div>
          <label htmlFor={"mail"}>Пароль</label>
          <input
            aria-invalid={!!errors.password}
            type={isShowPassword ? "text" : "password"}
            id={"password"}
            {...register("password", {
              required: true,
              minLength: { value: 6, message: "Не менее 6х символов" },
              maxLength: { value: 55, message: "Не более 55 символов" },
            })}
          />
          {errors.password && (
            <span>
              {errors.password.message?.toString() || `Укажите Логин!`}
            </span>
          )}
          {isShowPassword ? (
            <EyeOpenIcon
              role={"button"}
              width={25}
              height={25}
              className={cls.eye}
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
          ) : (
            <EyeClosedIcon
              role={"button"}
              width={25}
              height={25}
              className={cls.eye}
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
          )}
        </div>
        <div>
          <label htmlFor={"mail"}>Повторите пароль</label>
          <input
            aria-invalid={!!errors.passwordConfirm}
            type={isShowPasswordConfirm ? "text" : "password"}
            id={"passwordConfirm"}
            {...register("passwordConfirm", {
              required: true,
              minLength: { value: 6, message: "Не менее 6х символов" },
              maxLength: { value: 55, message: "Не более 55 символов" },
            })}
          />
          {errors.passwordConfirm && (
            <span>
              {errors.passwordConfirm.message?.toString() ||
                `Пароли не совпадают!`}
            </span>
          )}
          {isShowPasswordConfirm ? (
            <EyeOpenIcon
              role={"button"}
              width={25}
              height={25}
              className={cls.eye}
              onClick={() => setIsShowPasswordConfirm(!isShowPasswordConfirm)}
            />
          ) : (
            <EyeClosedIcon
              role={"button"}
              width={25}
              height={25}
              className={cls.eye}
              onClick={() => setIsShowPasswordConfirm(!isShowPasswordConfirm)}
            />
          )}
        </div>

        <button type={"submit"} className={cls.button}>
          Вход
        </button>
      </form>
    </section>
  );
};
