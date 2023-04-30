import { Routes, Route } from "react-router-dom";
import { Start } from "./pages/Start/Start";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home/Home";
import { Web } from "./pages/Web/Web";
import { Animation } from "./pages/Animation/Animation";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
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

// @emoji-mart/data @emoji-mart/react @speechly/speech-recognition-polyfill @testing-library/jest-dom @testing-library/react @testing-library/user-event annyang emoji-mart   web-speech-cognitive-services
