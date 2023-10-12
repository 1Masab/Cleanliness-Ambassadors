import {
  Header,
  Home,
  AboutUS,
  Campaigns,
  Map,
  ContactUS,
  Footer,
} from "./pages";
import { useLanguage } from "./context/LanguageContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NextCampaignForme from "./pages/Others/NextCampaignForme";
import Donate from "./pages/Others/Donate";
const App = () => {
  const { isRtl } = useLanguage();
  return (
    <div
      style={{ direction: isRtl ? "rtl" : "ltr" }}
      className="min-h-[100%] flex flex-col"
    >
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutUS />} />
            <Route path="/Campaigns" element={<Campaigns />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Contact" element={<ContactUS />} />
            <Route path="/NextCampaignFrome" element={<NextCampaignForme />} />
            <Route path="/Donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;