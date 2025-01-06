// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="w-full bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="/" className="text-2xl font-bold">
            DoctorApp
          </a>
          <ul className="flex gap-6 text-sm sm:text-base">
            <li>
              <a href="#home" className="hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-200">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-200">
                Services
              </a>
            </li>
            <li>
            
             
              <Link href="/doctors">
                Doctors
                </Link>
              
             
            </li>
            <li>
              <a href="#appointments" className="hover:text-blue-200">
                Appointments
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100"
          >
            Login / Sign Up
          </a>
        </div>
      </nav>

      {/* Homepage Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="home"
          className="bg-blue-100 text-center py-20 px-6 flex flex-col items-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            Welcome to DoctorApp
          </h1>
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

        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-white">
          <h2 className="text-2xl font-bold text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold mb-2">General Consultation</h3>
              <p className="text-sm text-gray-600">
                Consult with our experienced general physicians.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold mb-2">Specialist Doctors</h3>
              <p className="text-sm text-gray-600">
                Get expert advice from specialists in various fields.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-bold mb-2">Diagnostics</h3>
              <p className="text-sm text-gray-600">
                Access diagnostic services with accurate results.
              </p>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className="py-20 px-6 bg-blue-50">
          <h2 className="text-2xl font-bold text-center mb-8">
            Meet Our Doctors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-0">
            <div className="text-center">
              {/* <Image
                src="/doctor1.jpg"
                alt="Doctor 1"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              /> */}
              <h3 className="font-bold">Dr. John Doe</h3>
              <p className="text-sm text-gray-600">Cardiologist</p>
            </div>
            <div className="text-center">
              {/* <Image
                src="/doctor2.jpg"
                alt="Doctor 2"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              /> */}
              <h3 className="font-bold">Dr. Jane Smith</h3>
              <p className="text-sm text-gray-600">Dermatologist</p>
            </div>
          </div>
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
