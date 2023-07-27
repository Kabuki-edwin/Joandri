import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
