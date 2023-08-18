import React, { ReactElement } from "react";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App(): ReactElement {
  return (
    <div className="App bg-gray-light">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
