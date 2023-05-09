import React, { FC } from "react";
import "./App.css";
import Dashboard from "./Pages/dashboard/dashboard";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalLayout from "./globalComponents/globalLayout";

const App: FC = () => {
  return (
    <Router>
      <GlobalLayout>
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/setting" Component={Dashboard} />
        </Routes>
      </GlobalLayout>
    </Router>
  );
};

export default App;
