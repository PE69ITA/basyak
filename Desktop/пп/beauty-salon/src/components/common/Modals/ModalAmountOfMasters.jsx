import { useState } from 'react';

export default function ModalAmountOfMasters({ isOpen, onClose }) {
  const [amount, setAmount] = useState(1);

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
      width: "300px",
      zIndex: 1000
    }}>
      <h3>Количество мастеров</h3>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="1"
        style={{ width: "100%", margin: "10px 0" }}
      />
      <button onClick={onClose}>Сохранить</button>
    </div>
  );
}