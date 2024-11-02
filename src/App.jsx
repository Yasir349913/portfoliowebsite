/*import Navbar from "./Components/Navbar";
import React from "react";
import Personalinfo from "./Components/Personalinfo";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import About from "./Components/About";
import "./App.css";
import Projects from "./Components/Projects";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/Education",
      element: <Education />,
    },
  ]);
  let explanation = [
    {
      date: "2021",
      name: "Bahria Foundation College",
      detail:
        " I completed matriculation in computer science and got 98%marks ",
    },
    {
      date: "2021_2023",
      name: "Punjab Group Of Colleges",
      detail: "I completed inter in computer science and got 87% marks",
    },
    {
      date: "2023_2027",
      name: "University Of Central Punjab",
      detail:
        "I am doing software software engineering and fully passionate to learn coding skills and other",
    },
  ];
  let skills = [
    {
      name: "Html,CSS and JavaScript",
      explain:
        "Proficient in HTML for accessible web structure, skilled in CSS for responsive design, and experienced in JavaScript for dynamic, interactive applications using frameworks like React.",
    },
    {
      name: "Bootstrap,ReactJS",
      explain:
        "Proficient in Bootstrap for quickly developing responsive, mobile-first web applications, and experienced in React for creating dynamic, component-based user interfaces.",
    },
    {
      name: "GSAP, git and github",
      explain:
        "Experienced in GSAP for creating high-performance animations in web applications, and proficient in Git and GitHub for version control and collaborative development.",
    },
  ];
  return (
    <>
      <RouterProvider router={router} />
      <div className="home">
        <Navbar></Navbar>
        <Personalinfo></Personalinfo>
      </div>

      <Contact></Contact>

      <div className="boxes">
        <Education skills={skills} education={explanation}></Education>
      </div>

      <About></About>

      <Projects></Projects>
    </>
  );
};
export default App;*/
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import About from "./Components/About";
import Projects from "./Components/Projects";
import "./App.css";

const App = () => {
  // Education data
  const explanation = [
    {
      date: "2021",
      name: "Bahria Foundation College",
      detail:
        "I completed matriculation in computer science and got 98% marks.",
    },
    {
      date: "2021_2023",
      name: "Punjab Group Of Colleges",
      detail: "I completed inter in computer science and got 87% marks.",
    },
    {
      date: "2023_2027",
      name: "University Of Central Punjab",
      detail:
        "I am doing software engineering and fully passionate about learning coding skills.",
    },
  ];

  // Skills data
  const skills = [
    {
      name: "HTML, CSS, and JavaScript",
      explain:
        "Proficient in HTML for accessible web structure, skilled in CSS for responsive design, and experienced in JavaScript",
    },
    {
      name: "Bootstrap, ReactJS",
      explain:
        "Proficient in Bootstrap for quickly developing responsive, mobile-first web applications, and experienced in React for creating dynamic, component-based user interfaces.",
    },
    {
      name: "GSAP, Git, and GitHub",
      explain:
        "Experienced in GSAP for creating high-performance animations in web applications, and proficient in Git and GitHub for version control and collaborative development.",
    },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Education"
          element={<Education skills={skills} education={explanation} />}
        />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
