import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import MyAppointments from "./MyAppointments";

import BookAppointmentPage from "./BookAppointmentPage";
import OnlineConsultation from "./pages/OnlineConsultation";
import GetMedicines from "./pages/GetMedicines";
import BookLabTests from "./pages/BookLabTests";
import DiscoverHospitals from "./pages/DiscoverHospitals";
import InsurancePlans from "./pages/InsurancePlans";

import GeneralPhysicianPage from "./GeneralPhysicianPage";
import DentalCarePage from "./DentalCarePage";
import SkinHairPage from "./SkinHairPage";
import BoneJointsPage from "./BoneJointsPage";
import WomensHealthPage from "./WomensHealthPage";
import ChildSpecialistPage from "./ChildSpecialistPage";
import SexualDisordersPage from "./SexualDisordersPage";
import MentalWellnessPage from "./MentalWellnessPage";

import BookDoctorPage from "./BookDoctorPage";
import BookingDetailsPage from "./BookingDetailsPage";
// import BookingDetailsPage2 from "./BookingDetailsPage2";
import NotFoundPage from "./NotFoundPage";

const App = () => {
  return (
    <div className="select-none">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-appointments" element={<MyAppointments />} />

          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route
            path="/book-appointment/general-physician"
            element={<GeneralPhysicianPage />}
          />
          <Route
            path="/book-appointment/dental-care"
            element={<DentalCarePage />}
          />
          <Route
            path="/book-appointment/skin-hair"
            element={<SkinHairPage />}
          />
          <Route
            path="/book-appointment/bone-joints"
            element={<BoneJointsPage />}
          />
          <Route
            path="/book-appointment/womens-health"
            element={<WomensHealthPage />}
          />
          <Route
            path="/book-appointment/child-specialist"
            element={<ChildSpecialistPage />}
          />
          <Route
            path="/book-appointment/sexual-disorders"
            element={<SexualDisordersPage />}
          />
          <Route
            path="/book-appointment/mental-wellness"
            element={<MentalWellnessPage />}
          />
          <Route
            path="/book-appointment/:specialty/doctor/:doctorId"
            element={<BookDoctorPage />}
          />
          <Route
            path="/book-appointment/:specialty/doctor/:doctorId/slot/booking-details"
            element={<BookingDetailsPage />}
          />
          {/* <Route
            path="/book-appointment/:specialty/doctor/:doctorId/slot/booking-details2"
            element={<BookingDetailsPage2 />}
          /> */}

          <Route path="/online-consultation" element={<OnlineConsultation />} />
          <Route path="/get-medicines" element={<GetMedicines />} />
          <Route path="/book-lab-tests" element={<BookLabTests />} />
          <Route path="/discover-hospitals" element={<DiscoverHospitals />} />
          <Route path="/insurance-plans" element={<InsurancePlans />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
