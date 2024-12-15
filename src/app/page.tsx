import Image from "next/image";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Product from "./component/product";
import Product2 from "./component/product2";
import Product3 from "./component/product3";

import Footer from "./component/footer";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Product/>
      <Product2/>
      <Product3/>
    
      <Footer/>
    </div>
  );
}
