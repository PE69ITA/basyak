export default function ModalClientWants({ isOpen, onClose, request }) {
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
        <h3>Запрос клиента</h3>
        <p>Услуга: {request.service}</p>
        <p>Дата: {request.date}</p>
        <div style={{ marginTop: "15px" }}>
          <button onClick={onClose}>Принять</button>
          <button onClick={onClose} style={{ marginLeft: "10px" }}>Отклонить</button>
        </div>
      </div>
    );
  }