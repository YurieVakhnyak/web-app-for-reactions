import { Routes, Route } from "react-router-dom";
import { Start } from "./pages/Start/Start";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home/Home";
import { Web } from "./pages/Web/Web";
import { Animation } from "./pages/Animation/Animation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="start" element={<Start />} />
          <Route path="web" element={<Web />} />
          <Route path="animation" element={<Animation />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
