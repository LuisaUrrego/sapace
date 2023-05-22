import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routes/AppRouter";
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <ChakraProvider>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </ChakraProvider>
);