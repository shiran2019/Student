import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Artgal from "../pages/Artgal";
import TalentPage from "../pages/Talentpage";
import TermEvaluations from "../pages/TermEvaluations";
import Appointments from "../pages/Appointments";
import Today from "./Today";
import News from "./News";
import Ourteachers from "./Ourteachers";
import Contact from "./contact";
import Profile from "./Profile";
import Paymnt from "./Paymnt";

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
