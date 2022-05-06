import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Switch,
} from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./users/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/places/new" exact element={<NewPlace />} />
          <Route path="*" exact element={<Users />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
