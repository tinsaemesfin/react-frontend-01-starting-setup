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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/places/new" exact element={<NewPlace />} />
        <Route path="*" exact element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
