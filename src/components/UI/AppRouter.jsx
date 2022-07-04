import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, priveteRoutes } from "../../router/index";
import { AuthContext } from "../../context/index";
import Loader from "./Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth);

  if (isLoading) {
    return <Loader />;
  }
  return isAuth ? (
    <Routes>
      {priveteRoutes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return <Route key={route.path} {...route} />;
      })}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
export default AppRouter;
