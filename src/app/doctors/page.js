import DoctorList from "../components/DoctorList";
import PatientList from "../components/PatientList";
import QueueManager from "../components/QueueManager";

export default function DoctorsPage() {
  return (
    <div>
     
      <DoctorList />
      <PatientList />
      <QueueManager />
    </div>
  );
}
