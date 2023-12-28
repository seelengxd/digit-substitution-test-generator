import React, { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompleteTest from "./components/CompleteTest";
import Form from "./components/Form";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "dark") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/:pages" element={<CompleteTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
