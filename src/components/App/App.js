import BadSemanticPage from "../../pages/semantic/BadSemantic";
import GoodSemanticPage from "../../pages/semantic/GoodSemantic";
import BadFormPage from "../../pages/form/BadForm";
import GoodFormPage from "../../pages/form/GoodForm";
import BadImagesPage from "../../pages/images/BadImages";
import GoodImagesPage from "../../pages/images/GoodImages";
import Home from "../Home/Home";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bad-semantics" element={<BadSemanticPage />} />
      <Route path="/good-semantics" element={<GoodSemanticPage />} />
      <Route path="/bad-form" element={<BadFormPage />} />
      <Route path="/good-form" element={<GoodFormPage />} />
      <Route path="/bad-images" element={<BadImagesPage />} />
      <Route path="/good-images" element={<GoodImagesPage />} />
    </Routes>
  );
}

export default App;
