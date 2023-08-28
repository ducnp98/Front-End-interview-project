import React, { createContext, useContext, useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import HomePage from "./app/pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./app/pages/ProductDetail";
import Header from "./app/pages/Header";
import Footer from "./app/pages/Footer";

const theme = createTheme({
  typography: {
    fontFamily: '"Quicksand", sans-serif',
  },
});

export type GlobalContent = {
  cart: number;
  setCart: (c: number) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  cart: 0,
  setCart: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);

function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className="App">
      <MyGlobalContext.Provider value={{ cart, setCart }}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" Component={HomePage} />
              <Route path="/home" Component={HomePage} />
              <Route path="/detail/:id" Component={ProductDetail} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
        <ToastContainer />
      </MyGlobalContext.Provider>
    </div>
  );
}

export default App;
