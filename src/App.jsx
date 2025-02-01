import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainWrapper from "./layout/MainWrapper";
const App = () => {
  return (
    <Routes>
      <Route element={<MainWrapper />}>
        <Route index element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
