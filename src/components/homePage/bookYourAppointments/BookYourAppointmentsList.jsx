import homepage_bookyourappointments_ortho from "../../../assets/homepage_bookyourappointments_ortho.jpg";
import homepage_bookyourappointments_dentist from "../../../assets/homepage_bookyourappointments_dentist.jpg";
import homepage_bookyourappointments_dermatologist from "../../../assets/homepage_bookyourappointments_dermatalogist.jpg";
import homepage_bookyourappointments_obstetrician from "../../../assets/homepage_bookyourappointments_obstetrician.jpg";
import homepage_bookyourappointments_cardiologist from "../../../assets/homepage_bookyourappointments_cardiologist.jpg";
import homepage_bookyourappointments_pediatrician from "../../../assets/homepage_bookyourappointments_pediatrician.jpg";
import BookYourAppointmentsCard from "./BookYourAppointmentsCard";

const bookYourAppointmentsCards = [
  {
    image: homepage_bookyourappointments_ortho,
    altText: "orthopedist",
    title: "Orthopedist",
    description: "For joint pains, sprains, arthritis & other joint issues",
    available: "231",
  },

  {
    image: homepage_bookyourappointments_dentist,
    altText: "dentist",
    title: "Dentist",
    description: "For bleeding gums, cavities, toothache & other issues",
    available: "795",
  },

  {
    image: homepage_bookyourappointments_dermatologist,
    altText: "dermatologist",
    title: "Dermatologist",
    description: "Consult for hair loss, skin infections & other issues",
    available: "183",
  },

  {
    image: homepage_bookyourappointments_obstetrician,
    altText: "obstetrician",
    title: "Obstetrician",
    description: "For delivery of baby, labor and pregnancy related issues",
    available: "92",
  },

  {
    image: homepage_bookyourappointments_cardiologist,
    altText: "cardiologist",
    title: "Cardiologist",
    description: "For open heart surgeries, stents & other heart issues.",
    available: "560",
  },

  {
    image: homepage_bookyourappointments_pediatrician,
    altText: "pediatrician",
    title: "Pediatrician",
    description: "Child specialist for cold, cough, fever & other issues",
    available: "270",
  },
];

function BookYourAppointmentsList() {
  return (
    <div className="flex justify-center flex-wrap w-full gap-[16px]">
      {bookYourAppointmentsCards.map((doctorcard, index) => (
        <BookYourAppointmentsCard
          key={index}
          image={doctorcard.image}
          altText={doctorcard.altText}
          title={doctorcard.title}
          description={doctorcard.description}
          available={doctorcard.available}
        />
      ))}
    </div>
  );
}

export default BookYourAppointmentsList;
