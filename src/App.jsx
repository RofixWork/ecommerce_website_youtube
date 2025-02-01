import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
