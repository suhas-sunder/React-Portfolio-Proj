import { React, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import ProjectOverview from "./components/pages/ProjOverview";
import About from "./components/pages/About";
 
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    const elements = [
      document.getElementsByTagName("html"),
      document.getElementsByTagName("body"),
    ];

    // Lock scroll when modal is active
    elements.forEach(
      (element) =>
        (element[0].style.overflow = `${showModal ? "auto" : "hidden"}`)
    );

    // Hide/show modal
    setShowModal(!showModal);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Home handleModal={handleModal} showModal={showModal} />}
      />
      <Route path="/About" element={<About />} />
      <Route path="/Projects">
        <Route
          path="AllTrackSystem"
          element={
            <ProjectOverview
              projName="All Track System"
              handleModal={handleModal}
              showModal={showModal}
            />
          }
        />
        <Route
          path="EMEGroupInc"
          element={
            <ProjectOverview
              projName="EME Group Inc."
              handleModal={handleModal}
              showModal={showModal}
            />
          }
        />
        <Route
          path="Portfolio"
          element={
            <ProjectOverview
              projName="React Portfolio"
              handleModal={handleModal}
              showModal={showModal}
            />
          }
        />
        <Route
          path="Capstone"
          element={
            <ProjectOverview
              projName="Capstone SPArcDS"
              handleModal={handleModal}
              showModal={showModal}
            />
          }
        />
      </Route>
      <Route path="*" element={<h2>404 Not Found!</h2>} />
    </Routes>
  );
}

export default App;
