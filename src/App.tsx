import React, { ReactElement } from "react";
import { Header } from "./components/Header";
import Home from "./pages/Home";

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
