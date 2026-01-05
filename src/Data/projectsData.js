// src/data/Project.js

const projectsData = [
  {
    id: 1,
    name: "RentWheels – Car Rental Platform",
    image: "/CarRent_Logo.png", 
    techStack: "React, Tailwind, Node.js, MongoDB, Firebase Auth",
    description:
      "A full-stack car rental platform where users can book cars, and admins/vendors can manage listings and payments.",
    liveLink: "https://car-rental-platform-fdfa3.web.app/",
    githubClient: "https://github.com/Nusrat-Islam/rentWheels-client-side.git",
    githubServer: "https://github.com/Nusrat-Islam/rentWheels-server.git",
    challenges: "Integrating Stripe payments and role-based access control.",
    improvements:
      "Add real-time booking notifications and advanced search filters.",
  },
  {
    id: 2,
    name: "Pawsy – Pet Care Services",
    image: "/Puppy, Kitten and Bird Trio.jpeg", 
    techStack: "React, Tailwind, Node.js, MongoDB, Firebase Admin, Stripe",
    description:
      "Platform to book pet care services with vendor dashboard, JWT auth, and admin management system.",
    liveLink: "https://vermillion-eclair-e9930e.netlify.app/",
    githubClient: "https://github.com/Nusrat-Islam/pet-care-firebase.git",
    // githubServer optional
    challenges: "Handling secure JWT authentication and admin/vendor role-based routing.",
    improvements: "Add booking notifications and user-friendly dashboard.",
  },
  {
    id: 3,
    name: "Ticket Bari – Online Ticket Booking Platform",
    image: "/Ticketbari_Logo.png", // public folder
    techStack: "React, Tailwind, Firebase",
    description:
      "An online ticket booking platform with responsive UI, CRUD features, and smooth user experience.",
    liveLink: "https://online-ticket-booking-ed0a4.web.app/",
    githubClient: "https://github.com/Nusrat-Islam/online_ticket_booking_client.git",
    githubServer: "https://github.com/Nusrat-Islam/online_ticket_booking_serverside.git",
    challenges: "Designing responsive layouts and integrating Firebase backend.",
    improvements: "Add user comments, search filters, and real-time booking updates.",
  },
];

export default projectsData;
