// import React from 'react';
// // import { doctors } from './data/doctor';
// import { doctors } from '../../../../../../../../data/doctors';
// // import Doctor from './Doctor';

// const AppointmentConfirmation = ({ appointmentId, doctorId, appointmentTime }) => {
//     const doctor = doctors.find(doc => doc.id === doctorId);
  
//     return (
//       <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center text-green-500">
//             <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//             </svg>
//             <span className="text-xl font-medium">Appointment Confirmed</span>
//           </div>
//         </div>
//         <div className="text-gray-700 mb-6">
//           <p>Your Appointment ID is <strong>{appointmentId}</strong>. We have also sent the details of your appointment on your registered phone number.</p>
//         </div>
//         <div className="bg-gray-100 p-4 rounded-lg mb-4">
//           <div className="flex items-center mb-4">
//             <svg className="w-6 h-6 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-6 7h.01M12 12v6m0 0H8m4 0h4"></path>
//             </svg>
//             <span className="text-gray-600">{appointmentTime}</span>
//           </div>
//           <div className="flex items-center mb-4">
//             <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full mr-4" />
//             <div>
//               <p className="text-gray-700 font-medium">{doctor.name}</p>
//               <p className="text-gray-500">{doctor.specialty}</p>
//             </div>
//           </div>
//           <div className="flex items-center">
//             <svg className="w-6 h-6 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//             </svg>
//             <span className="text-gray-600">{doctor.map}</span>
//           </div>
//           <img src={mapImage} alt="Map" className="w-full mt-4 rounded-lg" />
//         </div>
//         <div className="flex justify-between">
//           <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded-lg">Cancel</button>
//           <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Reschedule</button>
//         </div>
//       </div>
//     );
//   };
  
//   export default AppointmentConfirmation;