import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyAppointments from "./pages/MyAppointments";
import NotFoundPage from "./pages/NotFoundPage";

import BookAppointmentPage from "./pages/homepage/BookAppointmentPage";
import OnlineConsultation from "./pages/homepage/OnlineConsultation";
import GetMedicines from "./pages/homepage/GetMedicines";
import BookLabTests from "./pages/homepage/BookLabTests";
import DiscoverHospitals from "./pages/homepage/DiscoverHospitals";
import InsurancePlans from "./pages/homepage/InsurancePlans";

// import { doctors } from "./data/doctors";
// import SpecialtyDoctorsPage from "./SpecialtyDoctorsPage";

//BookAppointment
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
import BookSlotsPage from "./pages/homepage/bookAppointment/BookSlotsPage";
import PaymentPage from "./pages/homepage/bookAppointment/PaymentPage";
import ConfirmationPage from "./pages/homepage/bookAppointment/ConfirmationPage";

//OnlineConsultation
import StomachPage from "./pages/homepage/onlineConsultation/categories/StomachPage";
import AcidityPage from "./pages/homepage/onlineConsultation/categories/AcidityPage";
import BonePage from "./pages/homepage/onlineConsultation/categories/BonePage";
import PimplesPage from "./pages/homepage/onlineConsultation/categories/PimplesPage";
import StressPage from "./pages/homepage/onlineConsultation/categories/StressPage";
import FeverPage from "./pages/homepage/onlineConsultation/categories/FeverPage";
import BPPage from "./pages/homepage/onlineConsultation/categories/BPPage";
import PregnancyPage from "./pages/homepage/onlineConsultation/categories/PregnancyPage";

import BookDoctorPage2 from "./pages/homepage/onlineConsultation/BookDoctorPage";
import BookingDetailsPage2 from "./pages/homepage/onlineConsultation/BookingDetailsPage";
import BookSlotsPage2 from "./pages/homepage/onlineConsultation/BookSlotsPage";
import PaymentPage2 from "./pages/homepage/onlineConsultation/PaymentPage";
import ConfirmationPage2 from "./pages/homepage/onlineConsultation/ConfirmationPage";

//DiscoverHospitals
import BookHospitalPage from "./pages/homepage/discoverHospital/BookHospitalPage";
import BookSlotsPage3 from "./pages/homepage/discoverHospital/BookSlotsPage";
import BookingHospitalPage from "./pages/homepage/discoverHospital/BookingHospitalPage";
import HospitalPaymentPage from "./pages/homepage/discoverHospital/HospitalPaymentPage";
import HospitalConfirmationPage from "./pages/homepage/discoverHospital/HospitalConfirmationPage";

//GetMedicines
import AyurvedicPage from "./pages/homepage/getMedicines/medicinesCategories/AyurvedicPage";
import CoughPage from "./pages/homepage/getMedicines/medicinesCategories/CoughPage";
import DeaddictionPage from "./pages/homepage/getMedicines/medicinesCategories/DeaddictionPage";
import DiabeticPage from "./pages/homepage/getMedicines/medicinesCategories/DiabeticPage";
import FeverHeadachePage from "./pages/homepage/getMedicines/medicinesCategories/FeverPage";
import GasPage from "./pages/homepage/getMedicines/medicinesCategories/GasPage";
import MetabolicPage from "./pages/homepage/getMedicines/medicinesCategories/MetabolicPage";
import SkinPage from "./pages/homepage/getMedicines/medicinesCategories/SkinPage";
import VitaminPage from "./pages/homepage/getMedicines/medicinesCategories/VitaminPage";

// Any Alternate and Better Routing Structure ?

const App = () => {
  return (
    <div className="select-none">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-appointments" element={<MyAppointments />} />

          {/* Book Appointment */}

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
            path="/book-appointment/:specialty/:doctorName/:doctorId/slot/booking/payment"
            element={<PaymentPage />}
          />
          <Route
            path="/book-appointment/:specialty/:doctorName/:doctorId/slot/booking/payment/confirmation"
            element={<ConfirmationPage />}
          />

          {/* Online Consultation */}

          <Route path="/online-consultation" element={<OnlineConsultation />} />
          <Route
            path="/online-consultation/stomach-pain"
            element={<StomachPage />}
          />
          <Route
            path="/online-consultation/acidity"
            element={<AcidityPage />}
          />
          <Route
            path="/online-consultation/bone-joints"
            element={<BonePage />}
          />
          <Route
            path="/online-consultation/pimples-acne"
            element={<PimplesPage />}
          />
          <Route path="/online-consultation/stress" element={<StressPage />} />
          <Route path="/online-consultation/fever" element={<FeverPage />} />
          <Route path="/online-consultation/bp" element={<BPPage />} />
          <Route
            path="/online-consultation/pregnancy"
            element={<PregnancyPage />}
          />

          <Route
            path="/online-consultation/:specialty/:doctorName/:doctorId"
            element={<BookDoctorPage2 />}
          />
          <Route
            path="/online-consultation/:specialty/:doctorName/:doctorId/slot"
            element={<BookSlotsPage2 />}
          />
          <Route
            path="/online-consultation/:specialty/:doctorName/:doctorId/slot/booking"
            element={<BookingDetailsPage2 />}
          />
          <Route
            path="/online-consultation/:specialty/:doctorName/:doctorId/slot/booking/payment"
            element={<PaymentPage2 />}
          />
          <Route
            path="/online-consultation/:specialty/:doctorName/:doctorId/slot/booking/payment/confirmation"
            element={<ConfirmationPage2 />}
          />

          {/* discover hospitals */}

          <Route path="/discover-hospitals" element={<DiscoverHospitals />} />
          <Route
            path="/discover-hospitals/:hospitalName/:hospitalId"
            element={<BookHospitalPage />}
          />
          <Route
            path="/discover-hospitals/:hospitalName/:hospitalId/slot"
            element={<BookSlotsPage3 />}
          />
          <Route
            path="/discover-hospitals/:hospitalName/:hospitalId/slot/booking"
            element={<BookingHospitalPage />}
          />
                    <Route
            path="/discover-hospitals/:hospitalName/:hospitalId/slot/booking/payment"
            element={<HospitalPaymentPage />}
          />
                    <Route
            path="/discover-hospitals/:hospitalName/:hospitalId/slot/booking/payment/confirmation"
            element={<HospitalConfirmationPage />}
          />

          {/* Get Medicines
           */}
          <Route path="/get-medicines" element={<GetMedicines />} />
          <Route
            path="/get-medicines/Cough-Cold"
            element={<CoughPage />}
          />
          <Route
            path="/get-medicines/Gas-Digestion"
            element={<GasPage />}
          />
          <Route
            path="/get-medicines/Fever-Headache"
            element={<FeverHeadachePage />}
          />
           <Route
            path="/get-medicines/Diabetic-Care"
            element={<DiabeticPage />}
          /> 
          <Route
            path="/get-medicines/Skin-HairCare"
            element={<SkinPage />}
          />
          <Route
            path="/get-medicines/Deaddiction-Medicines"
            element={<DeaddictionPage />}
          />
          <Route
            path="/get-medicines/Ayurvedic-Medicines"
            element={<AyurvedicPage />}
          />
          <Route
            path="/get-medicines/Vitamins & Supplements"
            element={<VitaminPage />}
          />
          <Route
            path="/get-medicines/Metabolic-System"
            element={<MetabolicPage />}
          />



          {/* <Route
            path="/discover-hospitals/:hospitalName/:hospitalId"
            element={<BookHospitalPage />}
          /> */}







          <Route path="/book-lab-tests" element={<BookLabTests />} />
          <Route path="/insurance-plans" element={<InsurancePlans />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
