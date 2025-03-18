export default function ModalRefForMaster({ isOpen, onClose, master }) {
    const [email, setEmail] = useState('');
  
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
        width: "350px",
        zIndex: 1000
      }}>
        <h3>Рекомендовать мастера</h3>
        <p>Мастер: {master}</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email получателя"
          style={{ width: "100%", margin: "10px 0" }}
        />
        <button onClick={handleSubmit}>Отправить</button>
        <button onClick={onClose} style={{ marginLeft: "10px" }}>Закрыть</button>
      </div>
    );
  }