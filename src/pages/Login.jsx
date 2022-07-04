import React from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context/index";
import { useContext } from "react";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Страница для логина </h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите Логин" />
        <MyInput type="password" placeholder="Введите Пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};
export default Login;
