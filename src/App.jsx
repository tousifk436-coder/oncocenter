// // // // import React from "react";
// // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // import Navbar from './components/Navbar'
// // // // import Overlay from "./Overlay";
// // // // import TwoColumnSection from "./components/TwoColumnSection";
// // // // import CardSection from "./components/CardSection";
// // // // import AutoScrollSection from "./components/AutoScrollSection";
// // // // import TwoColumnSectionpic from "./components/TwoColumnSectionpic";
// // // // import AccordionSection from "./components/AccordionSection";
// // // // import ScrollCards from "./components/ScrollCards";
// // // // import FormSection from "./FormSection";
// // // // import TestimonialSection from "./TestimonialSection";
// // // // import ContactHero from "./components/ContactHero";
// // // // import Footer from "./components/Footer";
// // // // import About from "./pages/About";

// // // // export default function App() {
// // // //   return (
// // // //     <>
// // // //       <Navbar/>
// // // //       <Overlay/>
// // // //       <TwoColumnSection/>
// // // //       <CardSection/>
// // // //       <AutoScrollSection/>
// // // //       <TwoColumnSectionpic/>
// // // //       <AccordionSection/>
// // // //       <ScrollCards/>
// // // //       <FormSection/>
// // // //       <TestimonialSection/>
// // // //       <ContactHero/>
// // // //       <Footer/>
// // // //     </>
// // // //   );
// // // // }



// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // import Navbar from "./components/Navbar";
// // // import Footer from "./components/Footer";

// // // // Home Page Sections
// // // import Overlay from "./Overlay";
// // // import TwoColumnSection from "./components/TwoColumnSection";
// // // import CardSection from "./components/CardSection";
// // // import AutoScrollSection from "./components/AutoScrollSection";
// // // import TwoColumnSectionpic from "./components/TwoColumnSectionpic";
// // // import AccordionSection from "./components/AccordionSection";
// // // import ScrollCards from "./components/ScrollCards";
// // // import FormSection from "./FormSection";
// // // import TestimonialSection from "./TestimonialSection";
// // // import ContactHero from "./components/ContactHero";

// // // // Pages

// // // import Services from "../pages/Services";
// // // import Appointment from "../pages/Appointment";
// // // import Team from "../pages/Team";
// // // import About from "../pages/About";

// // // // 🔹 Create Home Page Component
// // // const Home = () => {
// // //   return (
// // //     <>
// // //       <Overlay />
// // //       <TwoColumnSection />
// // //       <CardSection />
// // //       <AutoScrollSection />
// // //       <TwoColumnSectionpic />
// // //       <AccordionSection />
// // //       <ScrollCards />
// // //       <FormSection />
// // //       <TestimonialSection />
// // //       <ContactHero />
// // //     </>
// // //   );
// // // };

// // // // // 🔹 Temporary Pages (you can replace later)
// // // // const Team = () => <h1 className="text-center mt-20 text-3xl">Team Page</h1>;
// // // // const Services = () => <h1 className="text-center mt-20 text-3xl">Services Page</h1>;
// // // // const Appointment = () => <h1 className="text-center mt-20 text-3xl">Appointment Page</h1>;

// // // export default function App() {
// // //   return (
// // //     <Router>
// // //       {/* Navbar always visible */}
// // //       <Navbar />

// // //       {/* Routes */}
// // //       <Routes>
// // //         <Route path="/" element={<Home />} />
// // //         <Route path="/about" element={<About />} />
// // //         <Route path="/team" element={<Team />} />
// // //         <Route path="/services" element={<Services />} />
// // //         <Route path="/appointment" element={<Appointment />} />
// // //       </Routes>

// // //       {/* Footer always visible */}
// // //       <Footer />
// // //     </Router>
// // //   );
// // // }

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";
// // import ScrollToTop from "./components/ScrollToTop";

// // // Home Sections
// // import Overlay from "./Overlay";
// // import TwoColumnSection from "./components/TwoColumnSection";
// // import CardSection from "./components/CardSection";
// // import AutoScrollSection from "./components/AutoScrollSection";
// // import TwoColumnSectionpic from "./components/TwoColumnSectionpic";
// // import AccordionSection from "./components/AccordionSection";
// // import ScrollCards from "./components/ScrollCards";
// // import FormSection from "./FormSection";
// // import TestimonialSection from "./TestimonialSection";
// // // import ContactHero from "./components/ContactHero";

// // // Pages
// // import About from "../pages/About";
// // import Team from "../pages/Team";
// // import Services from "../pages/Services";
// // import Appointment from "../pages/Appointment";

// // // 🔹 Home Page Component
// // const Home = () => {
// //   return (
// //     <>
// //       <Overlay />
// //       <TwoColumnSection />
// //       <CardSection />
// //       <AutoScrollSection />
// //       <TwoColumnSectionpic />
// //       <AccordionSection />
// //       <ScrollCards />
// //       <FormSection />
// //       <TestimonialSection />
      
// //     </>
// //   );
// // };

// // export default function App() {
// //   return (
// //     <Router>
// //       {/* ✅ Fix scroll issue */}
// //       <ScrollToTop />

// //       {/* ✅ Navbar (always visible) */}
// //       <Navbar />

// //       {/* ✅ Page Routing */}
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/team" element={<Team />} />
// //         <Route path="/services" element={<Services />} />
// //         <Route path="/appointment" element={<Appointment />} />
// //       </Routes>

// //       {/* ✅ Footer (always visible) */}
// //       <Footer />
// //     </Router>
// //   );
// // }




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";

// // Home Sections
// import Overlay from "./Overlay";
// import TwoColumnSection from "./components/TwoColumnSection";
// import CardSection from "./components/CardSection";
// import AutoScrollSection from "./components/AutoScrollSection";
// import TwoColumnSectionpic from "./components/TwoColumnSectionpic";
// import AccordionSection from "./components/AccordionSection";
// import ScrollCards from "./components/ScrollCards";
// import FormSection from "./FormSection";
// import TestimonialSection from "./TestimonialSection";
// import ContactHero from "./components/ContactHero";

// // Main Pages
// import About from "../pages/About";
// import Team from "../pages/Team";
// import Services from "../pages/Services";
// import Appointment from "../pages/Appointment";
// import CommonPage from "../pages/CommonPage";

// // 🔹 Home Page Component
// const Home = () => {
//   return (
//     <>
//       <Overlay />
//       <TwoColumnSection />
//       <CardSection />
//       <AutoScrollSection />
//       <TwoColumnSectionpic />
//       <AccordionSection />
//       <ScrollCards />
//       <FormSection />
//       <TestimonialSection />
//       <ContactHero />
//     </>
//   );
// };

// export default function App() {
//   return (
//     <Router>
//       {/* ✅ Fix scroll issue */}
//       <ScrollToTop />

//       {/* ✅ Navbar always visible */}
//       <Navbar />

//       {/* ✅ Routes */}
//       <Routes>
//         {/* Main Pages */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/appointment" element={<Appointment />} />

//         {/* Dropdown Pages */}
//         <Route path="/updates" element={<CommonPage />} />
//         <Route path="/news" element={<CommonPage />} />
//         <Route path="/surgical" element={<CommonPage />} />
//         <Route path="/medical" element={<CommonPage />} />
//         <Route path="/critical" element={<CommonPage />} />
//         <Route path="/pain" element={<CommonPage />} />
//         <Route path="/cancer-speciality" element={<CommonPage />} />
//         <Route path="/general-service" element={<CommonPage />} />
//         <Route path="/seminars" element={<CommonPage />} />
//         <Route path="/events" element={<CommonPage />} />
//         <Route path="/awareness" element={<CommonPage />} />
//         <Route path="/activities" element={<CommonPage />} />
//         <Route path="/career" element={<CommonPage />} />
//       </Routes>

//       {/* ✅ Footer always visible */}
//       <Footer />
//     </Router>
//   );
// }

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Home Sections
import Overlay from "./Overlay";
import TwoColumnSection from "./components/TwoColumnSection";
import CardSection from "./components/CardSection";
import AutoScrollSection from "./components/AutoScrollSection";
import TwoColumnSectionpic from "./components/TwoColumnSectionpic";
import AccordionSection from "./components/AccordionSection";
import ScrollCards from "./components/ScrollCards";
import FormSection from "./FormSection";
import TestimonialSection from "./TestimonialSection";
import ContactHero from "./components/ContactHero";

// Pages
import About from "../pages/About";
import Team from "../pages/Team";
import Services from "../pages/Services";
import Appointment from "../pages/Appointment";
import CommonPage from "../pages/CommonPage";


// 🔹 Home Page Component
const Home = () => {
  return (
    <>
      <Overlay />
      <TwoColumnSection />
      <CardSection />
      <AutoScrollSection />
      <TwoColumnSectionpic />
      <AccordionSection />
      <ScrollCards />
      <FormSection />
      <TestimonialSection />
      <ContactHero />
    </>
  );
};


// 🔥 Force Home on Reload
const ForceHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return null;
};


export default function App() {
  return (
    <Router>
      {/* Scroll Fix */}
      <ScrollToTop />

      {/* 🔥 Force Home */}
      <ForceHome />

      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />

        {/* Dropdown Pages */}
        <Route path="/updates" element={<CommonPage />} />
        <Route path="/news" element={<CommonPage />} />
        <Route path="/surgical" element={<CommonPage />} />
        <Route path="/medical" element={<CommonPage />} />
        <Route path="/critical" element={<CommonPage />} />
        <Route path="/pain" element={<CommonPage />} />
        <Route path="/cancer-speciality" element={<CommonPage />} />
        <Route path="/general-service" element={<CommonPage />} />
        <Route path="/seminars" element={<CommonPage />} />
        <Route path="/events" element={<CommonPage />} />
        <Route path="/awareness" element={<CommonPage />} />
        <Route path="/activities" element={<CommonPage />} />
        <Route path="/career" element={<CommonPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}