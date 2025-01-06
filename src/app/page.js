
// import Link from "next/link";
// export default function Page() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navigation Bar */}
//       <nav className="w-full bg-blue-600 text-white py-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center px-6">
//           <a href="/" className="text-2xl font-bold">
//             DoctorApp
//           </a>
//           <ul className="flex gap-6 text-sm sm:text-base">
//             <li>
//               <a href="#home" className="hover:text-blue-200">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="hover:text-blue-200">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#services" className="hover:text-blue-200">
//                 Services
//               </a>
//             </li>
//             <li>
            
             
//               <Link href="/doctors">
//                 Doctors
//                 </Link>
              
             
//             </li>
//             <li>
//               <a href="#appointments" className="hover:text-blue-200">
//                 Appointments
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="hover:text-blue-200">
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <a
//             href="/login"
//             className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100"
//           >
//             Login / Sign Up
//           </a>
//         </div>
//       </nav>

//       {/* Homepage Content */}
//       <main className="flex-grow">
//         {/* Hero Section */}
//         <section
//           id="home"
//           className="bg-blue-100 text-center py-20 px-6 flex flex-col items-center"
//         >
//           <h1 className="text-4xl font-bold mb-4">
//             Welcome to DoctorApp
//           </h1>
//           <p className="text-lg text-gray-700 mb-6">
//             Book appointments with trusted doctors near you.
//           </p>
//           <a
//             href="#appointments"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//           >
//             Book an Appointment
//           </a>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="py-20 px-6 bg-white">
//           <h2 className="text-2xl font-bold text-center mb-8">
//             Our Services
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
//               <h3 className="text-lg font-bold mb-2">General Consultation</h3>
//               <p className="text-sm text-gray-600">
//                 Consult with our experienced general physicians.
//               </p>
//             </div>
//             <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
//               <h3 className="text-lg font-bold mb-2">Specialist Doctors</h3>
//               <p className="text-sm text-gray-600">
//                 Get expert advice from specialists in various fields.
//               </p>
//             </div>
//             <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
//               <h3 className="text-lg font-bold mb-2">Diagnostics</h3>
//               <p className="text-sm text-gray-600">
//                 Access diagnostic services with accurate results.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Doctors Section */}
//         <section id="doctors" className="py-20 px-6 bg-blue-50">
//           <h2 className="text-2xl font-bold text-center mb-8">
//             Meet Our Doctors
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2  gap-0">
//             <div className="text-center">
//               {/* <Image
//                 src="/doctor1.jpg"
//                 alt="Doctor 1"
//                 width={120}
//                 height={120}
//                 className="rounded-full mx-auto mb-4"
//               /> */}
//               <h3 className="font-bold">Dr. John Doe</h3>
//               <p className="text-sm text-gray-600">Cardiologist</p>
//             </div>
//             <div className="text-center">
//               {/* <Image
//                 src="/doctor2.jpg"
//                 alt="Doctor 2"
//                 width={120}
//                 height={120}
//                 className="rounded-full mx-auto mb-4"
//               /> */}
//               <h3 className="font-bold">Dr. Jane Smith</h3>
//               <p className="text-sm text-gray-600">Dermatologist</p>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-blue-600 text-white py-6">
//         <div className="container mx-auto text-center">
//           <p>© 2025 DoctorApp. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client"
import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="/" className="text-2xl font-bold">
            DoctorApp
          </a>

          {/* Hamburger Menu Button */}
          <button
            className="sm:hidden block text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <ul
            className={`sm:flex gap-6 text-sm sm:text-base ${
              isMenuOpen ? "block" : "hidden"
            } sm:block absolute sm:static top-12 left-0 bg-blue-600 w-full sm:w-auto sm:bg-transparent sm:space-y-0 space-y-4 py-4 sm:py-0`}
          >
            <li>
              <a href="#home" className="block px-6 sm:px-0 hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block px-6 sm:px-0 hover:text-blue-200">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="block px-6 sm:px-0 hover:text-blue-200">
                Services
              </a>
            </li>
            <li>
              <Link href="/doctors" className="block px-6 sm:px-0 hover:text-blue-200">
                Doctors
              </Link>
            </li>
            <li>
              <a
                href="#appointments"
                className="block px-6 sm:px-0 hover:text-blue-200"
              >
                Appointments
              </a>
            </li>
            <li>
              <a href="#contact" className="block px-6 sm:px-0 hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>

          <a
            href="/login"
            className="hidden sm:block bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100"
          >
            Login / Sign Up
          </a>
        </div>

        {/* Login/Sign Up button for mobile */}
        {isMenuOpen && (
          <div className="block sm:hidden text-center mt-4">
            <a
              href="/login"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100"
            >
              Login / Sign Up
            </a>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="home"
          className="bg-blue-100 text-center py-20 px-6 flex flex-col items-center"
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to DoctorApp</h1>
          <p className="text-lg text-gray-700 mb-6">
            Book appointments with trusted doctors near you.
          </p>
          <a
            href="#appointments"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Book an Appointment
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2025 DoctorApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
