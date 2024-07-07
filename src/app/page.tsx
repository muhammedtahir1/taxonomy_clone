import Features from "@/components/landingPage/Features";
import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import Section from "@/components/landingPage/Section";

export default function Home(){
  return(
    <div className="h-screen w-full">
      <Navbar/>
      <Hero/>
      <Features/>
      <Section/>
      <Footer/>
    </div>
  )
}