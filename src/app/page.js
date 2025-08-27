import Image from "next/image";
import CarCard from "./component/car-card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <CarCard/>
    <Footer/>
    </>
  );
}
