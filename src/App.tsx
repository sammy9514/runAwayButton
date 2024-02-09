import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/mainRouter";

export const App = () => {
  return (
    <div>
      <RouterProvider router={MainRouter} />
    </div>
  );
};
