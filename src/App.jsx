import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, ModalPage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modal/:id" element={<ModalPage />} />
    </Routes>
  );
};

export default App;
