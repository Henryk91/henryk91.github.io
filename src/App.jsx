import React, { useState, useEffect, useRef, createContext } from "react";
import "./style.css";
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export const NavDirContext = createContext({ setDirection: () => {} });
const pageRoutes = ["/", "/about", "/projects", "/contact"];

function AnimatedRoutes({ direction }) {
  const location = useLocation();

  const variants = {
    initial: (dir) => ({
      x: dir === 1 ? "100vw" : "-100vw",
      position: "absolute",
      width: "100vw",
    }),
    animate: {
      x: 0,
      position: "relative",
      width: "100vw",
      "overflow-y": "scroll",
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    exit: (dir) => ({
      x: dir === 1 ? "-100vw" : "100vw",
      position: "absolute",
      width: "100vw",
      transition: { duration: 0.4, ease: "easeInOut" }
    })
  };

  // Helper to match path to page component
  function getPageComponent(pathname) {
    switch (pathname) {
      case "/": return <Home />;
      case "/about": return <About />;
      case "/projects": return <Projects />;
      case "/contact": return <Contact />;
      default: return <Home />;
    }
  }

  return (
    <div style={{ position: "relative", width: "100vw", overflow: "hidden" }}>
      <AnimatePresence custom={direction}>
        <motion.div
          key={location.pathname}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            height: "100%",
          }}
        >
          {getPageComponent(location.pathname)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Main({ direction, setDirection }) {
  const location = useLocation();
  const navigate = useNavigate();
  const touchStartX = useRef(null);

  // Keyboard
  useEffect(() => {
    function onKeyDown(e) {
      const idx = pageRoutes.indexOf(location.pathname);
      if (e.key === "ArrowLeft") {
        setDirection(-1);
        navigate(pageRoutes[(idx - 1 + pageRoutes.length) % pageRoutes.length]);
      }
      if (e.key === "ArrowRight") {
        setDirection(1);
        navigate(pageRoutes[(idx + 1) % pageRoutes.length]);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [location, navigate, setDirection]);

  // Touch/swipe
  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 60;
    const idx = pageRoutes.indexOf(location.pathname);
    if (dx > threshold) {
      setDirection(-1);
      navigate(pageRoutes[(idx - 1 + pageRoutes.length) % pageRoutes.length]);
    } else if (dx < -threshold) {
      setDirection(1);
      navigate(pageRoutes[(idx + 1) % pageRoutes.length]);
    }
    touchStartX.current = null;
  }

  return (
    <div
      className="animated-page-container"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <img
        className="arrow"
        id="arrowLeft"
        src="/icons/whiteLArrowIcon.png"
        alt="left-arrow-icon"
        style={{ left: "3%" }}
        onClick={() => {
          const idx = pageRoutes.indexOf(location.pathname);
          setDirection(-1);
          navigate(pageRoutes[(idx - 1 + pageRoutes.length) % pageRoutes.length]);
        }}
      />
      <img
        className="arrow"
        id="arrowRight"
        src="/icons/whiteRArrowIcon.png"
        alt="right-arrow-icon"
        style={{ right: "3%" }}
        onClick={() => {
          const idx = pageRoutes.indexOf(location.pathname);
          setDirection(1);
          navigate(pageRoutes[(idx + 1) % pageRoutes.length]);
        }}
      />
      <AnimatedRoutes direction={direction} />
    </div>
  );
}

export default function App() {
  const [direction, setDirection] = useState(1);

  return (
    <NavDirContext.Provider value={{ setDirection }}>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<Main direction={direction} setDirection={setDirection} />} />
        </Routes>
      </HashRouter>
    </NavDirContext.Provider>
  );
}
