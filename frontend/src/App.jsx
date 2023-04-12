import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { ChatPage } from "./ChatPage";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5fffa",
      100: "#c8ffc4",
      200: "#98ff92",
      300: "#5eff5a",
      400: "#3edf3a",
      500: "#1abc9c",
      600: "#137e6d",
      700: "#0d4c3d",
      800: "#05200c",
      900: "#000000",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
