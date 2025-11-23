import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
