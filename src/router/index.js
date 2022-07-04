import About from "../pages/About";
import Posts from "../pages/Posts";
import PostidPage from "../pages/PostidPage";
import Login from "../pages/Login";

export const priveteRoutes = [
  { path: "/about", element: <About />, exact: true },
  { path: "/posts", element: <Posts />, exact: true },
  { path: "/posts/:id", element: <PostidPage />, exact: true },
];

export const publicRoutes = [
  { path: "/login", element: <Login />, exact: true },
];
