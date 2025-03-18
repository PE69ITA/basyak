import { useState } from 'react';

export default function FormToCreateSchedule({ onSubmit }) {
  const [date, setDate] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, service });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", border: "1px solid #eee" }}>
      <div>
        <label>Дата и время:</label>
        <input 
          type="datetime-local" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Услуга:</label>
        <select 
          value={service} 
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="">Выберите услугу</option>
          <option value="haircut">Стрижка</option>
          <option value="coloring">Окрашивание</option>
        </select>
      </div>
      <button type="submit">Записаться</button>
    </form>
  );
}