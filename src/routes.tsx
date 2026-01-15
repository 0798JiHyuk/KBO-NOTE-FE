import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import App from "./App";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true, // '/' 경로일 때 기본으로 보여줄 자식
          element: <HomePage />,
        },
        // 다른 페이지도 여기에 추가 가능
        // { path: 'about', element: <AboutPage /> }
      ],
    },
  ]);

  return routes;
};

export default Router;
