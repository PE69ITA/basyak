import { useState } from 'react';

export default function ModalChangeGraphicOfWork({ isOpen, onClose }) {
  const [schedule, setSchedule] = useState({
    start: "",
    end: ""
  });

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      zIndex: 1000
    }}>
      <h3>Изменение графика</h3>
      <div style={{ margin: "10px 0" }}>
        <label>Начало: </label>
        <input 
          type="time" 
          value={schedule.start}
          onChange={(e) => setSchedule({...schedule, start: e.target.value})}
        />
      </div>
      <div style={{ margin: "10px 0" }}>
        <label>Конец: </label>
        <input 
          type="time" 
          value={schedule.end}
          onChange={(e) => setSchedule({...schedule, end: e.target.value})}
        />
      </div>
      <button onClick={onClose}>Сохранить</button>
    </div>
  );
}