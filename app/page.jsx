import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";


export default function Home() {
  return <main>
    <section>
      <Hero />
    </section>
    <section>
      <Footer />
    </section>
  </main>;
}
