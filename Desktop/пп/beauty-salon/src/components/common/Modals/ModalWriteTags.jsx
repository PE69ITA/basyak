import { useState } from 'react';

export default function ModalWriteTags({ isOpen, onClose }) {
  const [tag, setTag] = useState("");

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
      <h3>Добавить тег</h3>
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="Название тега"
        style={{ margin: "10px 0" }}
      />
      <button onClick={onClose}>Сохранить</button>
    </div>
  );
}