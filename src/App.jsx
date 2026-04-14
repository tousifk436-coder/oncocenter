import React from "react";
import Navbar from './components/Navbar'
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
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar/>
      <Overlay/>
      <TwoColumnSection/>
      <CardSection/>
      <AutoScrollSection/>
      <TwoColumnSectionpic/>
      <AccordionSection/>
      <ScrollCards/>
      <FormSection/>
      <TestimonialSection/>
      <ContactHero/>
      <Footer/>
    </>
  );
}