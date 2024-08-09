const hospitals = [
  {
    id: 1,
    name: "Apollo General Hospital",
    address:
      "21, Rajiv Nagar, Near MG Road, Sector 5, Green Park, Delhi, India - 110016",
    image:
      "https://i.pinimg.com/originals/eb/35/91/eb3591c54fb651f20d157ed7099c4576.jpg",
    rating: 4,
    tags: ["24/7 Open", "Diagnostic", "Within 5 Km"],
    timings: "10:00 AM - 1:00 PM",
    phoneNumber: "9823123456",
    distance: "3.5 Km",
    coordinates: [28.6139, 77.2090], // Random coordinates for Delhi
  },
  {
    id: 2,
    name: "Sunrise Multispeciality Hospital",
    address:
      "7/8, Palm Avenue, Near Victoria Memorial, Kolkata, West Bengal, India",
    image:
      "https://th.bing.com/th/id/OIP.aPoVtYJqbcxLJQzM5u074QHaEK?rs=1&pid=ImgDetMain",
    rating: 3.5,
    tags: ["24/7 Open", "Endocrinology Test"],
    timings: "9:00 AM - 6:00 PM",
    phoneNumber: "9876543210",
    distance: "15.2 Km",
    coordinates: [22.5726, 88.3639], // Random coordinates for Kolkata
  },
  {
    id: 3,
    name: "Lotus Valley Medical Center",
    address:
      "14, Park Street, Near Cubbon Park, Koramangala, Bengaluru, Karnataka, India",
    image:
      "https://th.bing.com/th/id/R.7ae5d4f04bc9c37ef6feb458a502370a?rik=wWGMvXSXEVBmOw&riu=http%3a%2f%2fwww.uab.edu%2fnews%2fmedia%2fk2%2fitems%2fcache%2fc51d7f6aa3ce025124d8f0af24d7cb4b_XL.jpg&ehk=XKJCE%2bZis2%2fFl4FmiLadLXsgJxjlGCYYTjmOu1ltwG0%3d&risl=&pid=ImgRaw&r=0",
    rating: 4.5,
    tags: ["Diagnostic", "Within 5 Km"],
    timings: "8:00 AM - 8:00 PM",
    phoneNumber: "9865234789",
    distance: "10.8 Km",
    coordinates: [12.9716, 77.5946], // Random coordinates for Bengaluru
  },
  {
    id: 4,
    name: "Greenfield Hospital & Research Center",
    address:
      "5, MG Road, Shivaji Nagar, Near Pune University, Pune, Maharashtra, India",
    image:
      "https://th.bing.com/th/id/OIP.wBmL1ynY00mu1cSM-l4eJwHaEU?w=1536&h=896&rs=1&pid=ImgDetMain",
    rating: 3,
    tags: ["24/7 Open", "Within 5 Km"],
    timings: "9:00 AM - 9:00 PM",
    phoneNumber: "9768543210",
    distance: "6.3 Km",
    coordinates: [18.5204, 73.8567], // Random coordinates for Pune
  },
  {
    id: 5,
    name: "City Life Care Hospital",
    address:
      "12, Mount Road, T Nagar, Near Anna Salai, Chennai, Tamil Nadu, India - 600017",
    image:
      "https://th.bing.com/th/id/OIP.Xhe2f-IJfxIm9OaPl5SYHAAAAA?w=400&h=298&rs=1&pid=ImgDetMain",
    rating: 5,
    tags: ["Diagnostic", "Endocrinology Test"],
    timings: "7:00 AM - 10:00 PM",
    phoneNumber: "9123456789",
    distance: "8.4 Km",
    coordinates: [13.0827, 80.2707], // Random coordinates for Chennai
  },
  {
    id: 6,
    name: "Blue Orchid Clinic",
    address:
      "34, Residency Road, Andheri West, Near Infinity Mall, Mumbai, Maharashtra, India",
    image:
      "https://www.nortonrosefulbright.com/-/media/images/nrf/nrfweb/knowledge/publications/texas-hospital-district-emerges-from-bankruptcy-hero.jpg?h=1080&la=en&w=1920&revision=7d12e392-bab7-4032-9fcb-2ce8d4559719&hash=CBD06C69ACF6E76EEC8751EBD9BE6364A6392A82",
    rating: 4,
    tags: ["24/7 Open", "Diagnostic"],
    timings: "8:00 AM - 8:00 PM",
    phoneNumber: "9932145678",
    distance: "5.7 Km",
    coordinates: [19.0760, 72.8777], // Random coordinates for Mumbai
  },
  {
    id: 7,
    name: "Silver Crest Hospital",
    address:
      "9, Church Road, Jubilee Hills, Near Hi-Tech City, Hyderabad, Telangana, India",
    image:
      "https://th.bing.com/th/id/OIP.wkVtpbBx9PoxD_FurBOUYwHaFG?rs=1&pid=ImgDetMain",
    rating: 3.5,
    tags: ["Endocrinology Test", "Within 5 Km"],
    timings: "9:00 AM - 7:00 PM",
    phoneNumber: "9876512345",
    distance: "4.2 Km",
    coordinates: [17.3850, 78.4867], // Random coordinates for Hyderabad
  },
  {
    id: 8,
    name: "Riverdale Health Institute",
    address:
      "45, Maple Avenue, Marine Drive, Near Kochi Beach, Kochi, Kerala, India",
    image:
      "https://th.bing.com/th/id/OIP.y4BPz6K71ytPoTLbmfDWRgHaE7?w=1250&h=833&rs=1&pid=ImgDetMain",
    rating: 4.5,
    tags: ["24/7 Open", "Diagnostic"],
    timings: "8:00 AM - 6:00 PM",
    phoneNumber: "9823567890",
    distance: "7.9 Km",
    coordinates: [9.9312, 76.2673], // Random coordinates for Kochi
  },
  {
    id: 9,
    name: "Mountain View Medical Center",
    address:
      "27, Hilltop Road, Mall Road, Near Ridge, Shimla, Himachal Pradesh, India",
    image:
      "https://th.bing.com/th/id/OIP.rLRjIzPtZg4ZMiHe0AB_uQAAAA?rs=1&pid=ImgDetMain",
    rating: 4,
    tags: ["24/7 Open", "Endocrinology Test"],
    timings: "9:00 AM - 8:00 PM",
    phoneNumber: "9932147890",
    distance: "12.6 Km",
    coordinates: [31.1048, 77.1736], // Random coordinates for Shimla
  },
  {
    id: 10,
    name: "Harmony Health Clinic",
    address:
      "56, Lakeview Road, Malviya Nagar, Near Jagatpura, Jaipur, Rajasthan, India - 302017",
    image:
      "https://th.bing.com/th/id/OIP.wBmL1ynY00mu1cSM-l4eJwHaEU?w=1536&h=896&rs=1&pid=ImgDetMain",
    rating: 5,
    tags: ["Diagnostic", "Within 5 Km"],
    timings: "8:00 AM - 9:00 PM",
    phoneNumber: "9812345678",
    distance: "9.1 Km",
    coordinates: [26.9124, 75.7873], // Random coordinates for Jaipur
  },
];

export default hospitals;
