import { useState } from 'react';

export default function CreateSchedule() {
  const [service, setService] = useState("");

  return (
    <div>
      <h3>Создание записи</h3>
      <input 
        type="text" 
        value={service}
        onChange={(e) => setService(e.target.value)}
        placeholder="Услуга"
      />
    </div>
  );
}