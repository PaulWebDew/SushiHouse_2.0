import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import cls from "./style.module.scss";
import clsx from "clsx";

export const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  return (
    <section className={cls.section}>
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
          <label htmlFor={"mail"}>Логин</label>
          <input
            aria-invalid={!!errors.mail}
            type="text"
            id={"mail"}
            {...register("mail", {
              required: true,
              minLength: { value: 4, message: "Не менее 4х символов" },
            })}
          />
          {errors.mail && (
            <span>{errors.mail.message?.toString() || `Укажите Логин!`}</span>
          )}
        </div>

        <button type={"submit"}>Вход</button>
      </form>
    </section>
  );
};
