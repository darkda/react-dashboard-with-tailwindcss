import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import MainArea from "../components/MainArea";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<MainArea />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
