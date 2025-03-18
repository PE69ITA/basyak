export default function ModalAcceptMaster({ isOpen, onClose, masterId }) {
    if (!isOpen) return null;
  
    const handleAccept = async () => {
      // Заглушка для API
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
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        zIndex: 1000
      }}>
        <h3>Принять мастера</h3>
        <p>ID мастера: {masterId}</p>
        <div style={{ marginTop: "15px" }}>
          <button onClick={handleAccept}>Подтвердить</button>
          <button onClick={onClose} style={{ marginLeft: "10px" }}>Отмена</button>
        </div>
      </div>
    );
  }