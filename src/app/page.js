import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Feature from "./component/Feature";
import Product from "./component/Product";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Feature />
    <Product />
    <Blog />
    <Footer />

    </>
    
  );
}
