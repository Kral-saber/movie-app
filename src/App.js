import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Add from "./components/Add";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Watchlist />} />
          <Route exact path="/Watched" element={<Watched />} />
          <Route path="/Add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
