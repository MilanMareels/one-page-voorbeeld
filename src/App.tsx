import NavBar from "./components/nav";
import Header from "./components/Header";
import ServiceSection from "./components/ServiceSection";
import AboutUsSection from "./components/AboutUsSection";
import FooterSection from "./components/Footer";
import ContactFormV2 from "./components/ContactFormV2";
import ContactButton from "./components/ContactButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  return (
    <main>
      <NavBar />
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
