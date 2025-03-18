import { useState } from 'react';

export default function ChooseView({ onViewChange }) {
  const [view, setView] = useState('day');

  const handleChange = (e) => {
    const newView = e.target.value;
    setView(newView);
    onViewChange(newView);
  };

  return (
    <div style={{ margin: '10px 0' }}>
      <label>Режим просмотра:</label>
      <select value={view} onChange={handleChange}>
        <option value="day">День</option>
        <option value="week">Неделя</option>
        <option value="month">Месяц</option>
      </select>
    </div>
  );
}