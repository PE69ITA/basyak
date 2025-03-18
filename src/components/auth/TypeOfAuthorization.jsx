export default function TypeOfAuthorization({ role, setRole }) {
    return (
      <div>
        <label>Роль:</label>
        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          style={{ margin: "10px 0" }}
        >
          <option value="client">Клиент</option>
          <option value="master">Мастер</option>
          <option value="admin">Админ</option>
        </select>
      </div>
    );
  }