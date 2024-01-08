import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";

function App() {
  const revealsRef = useRef(null);
  const revealObserver = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
        if (entry.isIntersecting) {
          console.log(entry.target);
          revealObserver.current.unobserve(entry.target);
        }
      });
    };

    revealObserver.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (revealsRef.current) {
      revealsRef.current.forEach((elem) => {
        revealObserver.current.observe(elem);
      });
    }

    return () => {
      if (revealObserver.current) {
        revealsRef.current.forEach((elem) => {
          revealObserver.current.unobserve(elem);
        });
      }
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home revealsRef={revealsRef} />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
