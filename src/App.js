import { Routes, Route } from "react-router-dom";
import { Start } from "./pages/Start/Start";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="start" element={<Start />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
