import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantdetailPage from "./routes/RestaurantdetailPage";
import { RestaturantContextProvider } from "./utils/context";
import Header from "./routes/Header";



function App() {
  return (
    <RestaturantContextProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" Component={Header} ></Route>
            <Route exact path="/table" Component={Home} />
            <Route exact path="/restaurants/:id/update" Component={UpdatePage} />
            <Route exact path="/restaurants/:id/" Component={RestaurantdetailPage} />
          </Routes>
        </Router>
      </div>
    </RestaturantContextProvider>
  );
}

export default App;
