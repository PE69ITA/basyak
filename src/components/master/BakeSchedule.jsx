import { useState } from 'react';

export default function BakeSchedule() {
  const [schedule, setSchedule] = useState({
    date: '',
    service: '',
    duration: '60'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Создано расписание:', schedule);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }}>
      <h3>Создать расписание</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Дата и время:</label>
          <input
            type="datetime-local"
            value={schedule.date}
            onChange={(e) => setSchedule({ ...schedule, date: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Услуга:</label>
          <input
            type="text"
            value={schedule.service}
            onChange={(e) => setSchedule({ ...schedule, service: e.target.value })}
            placeholder="Название услуги"
            required
          />
        </div>
        <div>
          <label>Длительность (мин):</label>
          <select
            value={schedule.duration}
            onChange={(e) => setSchedule({ ...schedule, duration: e.target.value })}
          >
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="90">90</option>
          </select>
        </div>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}