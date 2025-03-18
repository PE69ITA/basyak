import { useState } from 'react';

export default function ModalGiveWorkFeedback({ isOpen, onClose, appointment }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async () => {
    // Заглушка API
    await new Promise(resolve => setTimeout(resolve, 500));
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      width: "400px",
      zIndex: 1000
    }}>
      <h3>Оценка работы</h3>
      <div style={{ margin: "10px 0" }}>
        <label>Оценка:</label>
        <select 
          value={rating} 
          onChange={(e) => setRating(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          {[5, 4, 3, 2, 1].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      <div style={{ margin: "10px 0" }}>
        <label>Комментарий:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: "100%", marginTop: "5px" }}
        />
      </div>
      <button onClick={handleSubmit}>Отправить</button>
      <button onClick={onClose} style={{ marginLeft: "10px" }}>Отмена</button>
    </div>
  );
}