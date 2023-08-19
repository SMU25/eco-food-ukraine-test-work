import React, { ReactElement } from "react";
import { smoothScrollToAnchor } from "src/utils/anchors";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App(): ReactElement {
  setTimeout(smoothScrollToAnchor, 3000);

  return (
    <div className="App bg-gray-light">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
