import { queue } from "../mock/data";

export default function QueueManager() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Queue</h2>
      <ul className="flex gap-5 text-center justify-center">
        {queue.map((entry) => (
          <li key={entry.id} className="p-4 border rounded">
            <h3 className="text-lg font-semibold">Patient: {entry.patient}</h3>
            <p>Status: {entry.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
