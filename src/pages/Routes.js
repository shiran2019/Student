import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Artgal from "./Main pages/ArtGallery/Artgal";
import TalentPage from "./Main pages/Tallents/Talentpage";
import TermEvaluations from "./Main pages/TermEvaluation/TermEvaluations";
import Appointments from "./Main pages/Appointments/Appointments";
import Today from "./Main pages/Today/Today";
import News from "./Main pages/About/News";
import Ourteachers from "./Main pages/About/Ourteachers";
import Contact from "./Main pages/About/contact";
import Profile from "../pages/Main pages/Profile/Profile";
import Paymnt from "./Main pages/Profile/Paymnt";

export default function Paths() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Profile />}></Route>
            <Route path="/art-gallery" element={<Artgal />}></Route>
            <Route path="/talent-page" element={<TalentPage />}></Route>
            <Route path="/today" element={<Today />}></Route>
            <Route
              path="/term-evaluations"
              element={<TermEvaluations />}
            ></Route>
            <Route path="/appointments" element={<Appointments />}></Route>

            <Route path="/news" element={<News />}></Route>
            <Route path="/our-teachers" element={<Ourteachers />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/payments" element={<Paymnt />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}
