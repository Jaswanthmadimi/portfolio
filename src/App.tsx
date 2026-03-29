import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

import { LoadingProvider } from "./context/LoadingProvider";

const Home = () => (
  <LoadingProvider>
    <Suspense fallback={<div style={{ height: "100vh", backgroundColor: "#000" }}></div>}>
      <MainContainer>
        <Suspense fallback={null}>
          <CharacterModel />
        </Suspense>
      </MainContainer>
    </Suspense>
  </LoadingProvider>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ height: "100vh", backgroundColor: "#000" }}></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
