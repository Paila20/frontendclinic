import Link from "next/link";
import { doctors } from "../mock/data";

export default function DoctorList() {
  return (
    <div className="">
        <nav className=" py-4 w-full bg-blue-600 text-white shadow-md flex justify-around">  
            <h2 className="text-2xl font-bold mb-4 text-center">Doctors</h2>
            <Link href="/">   <button className="bg-orange-500 px-5 py-2">Home</button></Link>
        </nav>
    
      <ul className="flex gap-5 justify-center text-center py-5">
        {doctors.map((doctor) => (
          <li key={doctor.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <p>Specialization: {doctor.specialization}</p>
            <p>Location: {doctor.location}</p>
            <p>Availability: {doctor.availability}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
