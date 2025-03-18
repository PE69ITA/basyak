export default function ModalChangeVacansyStatus({ isOpen, onClose }) {
  const [status, setStatus] = useState("open");

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
      <h3>Статус вакансии</h3>
      <select 
        value={status} 
        onChange={(e) => setStatus(e.target.value)}
        style={{ margin: "10px 0" }}
      >
        <option value="open">Открыта</option>
        <option value="closed">Закрыта</option>
      </select>
      <button onClick={onClose}>Сохранить</button>
    </div>
  );
}