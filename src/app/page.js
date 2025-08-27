import Image from "next/image";
import CarCard from "./component/car-card";
import Footer from "./component/Footer";
import Header from "./component/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <CarCard/>
    <Footer/>
    </>
  );
}
