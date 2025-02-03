import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainWrapper from "./layout/MainWrapper";
import { mainRoutes } from "./routes/MainRoutes";
const App = () => {
  return (
    <Routes>
      <Route element={<MainWrapper />}>
        {mainRoutes.map((route) => {
          return (
            <Route path={route.path} element={route.component} key={route.id} />
          );
        })}
      </Route>
    </Routes>
  );
};

export default App;
