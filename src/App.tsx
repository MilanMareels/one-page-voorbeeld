import Header from "./components/Header";
import ServiceSection from "./components/ServiceSection";
import AboutUsSection from "./components/AboutUsSection";
import FooterSection from "./components/Footer";
import ContactFormV2 from "./components/ContactFormV2";
import ContactButton from "./components/ContactButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NavBarSection from "./components/NavBar";

export default function App() {
  return (
    <main>
      <NavBarSection />
      <Header />
      <ContactButton />
      <ServiceSection />
      <AboutUsSection />
      <ContactFormV2 />
      <ScrollToTopButton />
      <FooterSection />
    </main>
  );
}
