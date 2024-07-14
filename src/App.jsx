import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BookAppointmentPage from './BookAppointmentPage';
import OnlineConsultation from "./pages/OnlineConsultation";
import GetMedicines from "./pages/GetMedicines";
import BookLabTests from "./pages/BookLabTests";
import DiscoverHospitals from "./pages/DiscoverHospitals";
import InsurancePlans from "./pages/InsurancePlans";

import GeneralPhysicianPage from './GeneralPhysicianPage';
import DentalCarePage from './DentalCarePage';
import SkinHairPage from './SkinHairPage';
import BoneJointsPage from './BoneJointsPage';
import WomensHealthPage from './WomensHealthPage';
import ChildSpecialistPage from './ChildSpecialistPage';
import SexualDisordersPage from './SexualDisordersPage';
import MentalWellnessPage from './MentalWellnessPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/online-consultation" element={<OnlineConsultation />} />
        <Route path="/get-medicines" element={<GetMedicines />} />
        <Route path="/book-lab-tests" element={<BookLabTests />} />
        <Route path="/discover-hospitals" element={<DiscoverHospitals />} />
        <Route path="/insurance-plans" element={<InsurancePlans />} />

        <Route path="/general-physician" element={<GeneralPhysicianPage />} />
        <Route path="/dental-care" element={<DentalCarePage />} />
        <Route path="/skin-hair" element={<SkinHairPage />} />
        <Route path="/bone-joints" element={<BoneJointsPage />} />
        <Route path="/womens-health" element={<WomensHealthPage />} />
        <Route path="/child-specialist" element={<ChildSpecialistPage />} />
        <Route path="/sexual-disorders" element={<SexualDisordersPage />} />
        <Route path="/mental-wellness" element={<MentalWellnessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
