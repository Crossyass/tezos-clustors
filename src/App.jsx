import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./views/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Clustor = lazy(() => import("./views/Clustor"));

const App = () => {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/clustors/:address" element={<Clustor />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
