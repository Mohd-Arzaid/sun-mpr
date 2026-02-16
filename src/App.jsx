import Footer from "./common/footer";
import Navbar from "./common/navbar";
import AuthorizedIndianRepresentative from "./components/authorized-indian-representative";
import BISCertification from "./components/bis-certification";
import BISCertificationFAQ from "./components/bis-certification-faq";
import BISCertificationOverview from "./components/bis-certification-overview";
import BISCertificationVideo from "./components/bis-certification-video";
import BISMarking from "./components/bis-marking";
import BISRegistrationProcedure from "./components/bis-registration-procedure";
import ClientTestimonials from "./components/client-testimonials";
import ContactUs from "./components/contact-us";
import Hero from "./components/hero";
import MPRServices from "./components/mpr-services";
import WhyProductsNeedBIS from "./components/why-products-need-bis";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BISCertification />
      <WhyProductsNeedBIS />
      <BISRegistrationProcedure />
      <BISMarking />
      <AuthorizedIndianRepresentative />
      <MPRServices />
      <ContactUs />
      <BISCertificationOverview />
      <BISCertificationFAQ />
      <BISCertificationVideo />
      <ClientTestimonials />
      <Footer/>
    </>
  );
}

export default App;
