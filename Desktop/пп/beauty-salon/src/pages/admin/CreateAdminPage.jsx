import { useState } from 'react';
import PanelNavigationAdmin from '../../components/admin/PanelNavigationAdmin';

export default function CreateAdminPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Создан администратор:', formData);
  };

  return (
    <div>
      <PanelNavigationAdmin />
      <h2>Создание администратора</h2>
      <form 
        onSubmit={handleSubmit}
        style={{ 
          padding: "20px", 
          border: "1px solid #eee", 
          marginTop: "20px" 
        }}
      >
        <div style={{ margin: "10px 0" }}>
          <label>Имя:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        <div style={{ margin: "10px 0" }}>
          <label>Пароль:</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
        </div>
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}