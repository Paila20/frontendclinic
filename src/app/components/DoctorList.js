import { doctors } from "../mock/data";

export default function DoctorList() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Doctors</h2>
      <ul className="flex gap-5 justify-center text-center">
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
