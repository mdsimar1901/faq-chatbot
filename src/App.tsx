import React, { useState } from "react";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./Components/Login";

function App(): JSX.Element {

 return(
  <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/landing" Component={LandingPage} />
      </Routes>
    </Router>
 )

}
export default App;
