import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyAppointments from "./pages/MyAppointments";

import BookAppointmentPage from "./pages/homepage/BookAppointmentPage";
import OnlineConsultation from "./pages/homepage/OnlineConsultation";
import GetMedicines from "./pages/homepage/GetMedicines";
import BookLabTests from "./pages/homepage/BookLabTests";
import DiscoverHospitals from "./pages/homepage/DiscoverHospitals";
import InsurancePlans from "./pages/homepage/InsurancePlans";

// import { doctors } from "./data/doctors";
// import SpecialtyDoctorsPage from "./SpecialtyDoctorsPage";

import GeneralPhysicianPage from "./pages/homepage/bookAppointment/categories/GeneralPhysicianPage";
import DentalCarePage from "./pages/homepage/bookAppointment/categories/DentalCarePage";
import SkinHairPage from "./pages/homepage/bookAppointment/categories/SkinHairPage";
import BoneJointsPage from "./pages/homepage/bookAppointment/categories/BoneJointsPage";
import WomensHealthPage from "./pages/homepage/bookAppointment/categories/WomensHealthPage";
import ChildSpecialistPage from "./pages/homepage/bookAppointment/categories/ChildSpecialistPage";
import SexualDisordersPage from "./pages/homepage/bookAppointment/categories/SexualDisordersPage";
import MentalWellnessPage from "./pages/homepage/bookAppointment/categories/MentalWellnessPage";

import BookDoctorPage from "./pages/homepage/bookAppointment/BookDoctorPage";
import BookingDetailsPage from "./pages/homepage/bookAppointment/BookingDetailsPage";
import BookingDetailsPage2 from "./pages/homepage/bookAppointment/BookingDetailsPage2";
import BookSlotsPage from "./pages/homepage/bookAppointment/BookSlotsPage";
import PaymentPage from "./pages/homepage/bookAppointment/PaymentPage";
import ConfirmationPage from "./pages/homepage/bookAppointment/ConfirmationPage";

import NotFoundPage from "./pages/NotFoundPage";

// Any Alternate and Better Routing Structure ?

const App = () => {
  return (
    <div className="select-none">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-appointments" element={<MyAppointments />} />

          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          {/* <Route path="/book-appointment/:specialty" element={<SpecialtyDoctorsPage />} /> */}
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
            path="/book-appointment/:specialty/:doctorName/:doctorId"
            element={<BookDoctorPage />}
          />
          <Route
            path="/book-appointment/:specialty/:doctorName/:doctorId/slot"
            element={<BookSlotsPage />}
          />
          <Route
            path="/book-appointment/:specialty/:doctorName/:doctorId/slot/booking"
            element={<BookingDetailsPage />}
          />
          <Route
            path="/book-appointment/:specialty/:doctorName/:doctorId/slot/booking2"
            element={<BookingDetailsPage2 />}
          />
          <Route
            path="/book-appointment/:specialty/:doctorName/:doctorId/slot/booking/payment"
            element={<PaymentPage />}
          />
          <Route
            path="/book-appointment/:specialty/:doctorName/:doctorId/slot/booking/payment/confirmation"
            element={<ConfirmationPage />}
          />

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
