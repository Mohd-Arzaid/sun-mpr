import Navbar from "./common/navbar";
import AuthorizedIndianRepresentative from "./components/authorized-indian-representative";
import BISCertification from "./components/bis-certification";
import BISCertificationOverview from "./components/bis-certification-overview";
import BISMarking from "./components/bis-marking";
import BISRegistrationProcedure from "./components/bis-registration-procedure";
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
    </>
  );
}

export default App;
