import { patients } from "../mock/data";

export default function PatientList() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Patients</h2>
      <ul className="flex gap-5 justify-center">
        {patients.map((patient) => (
          <li key={patient.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">{patient.name}</h3>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Condition: {patient.condition}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
