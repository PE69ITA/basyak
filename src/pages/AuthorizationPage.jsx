import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeLogin } from '../api/auth';
import { useAuth } from '../contexts/AuthContext';
import TypeOfAuthorization from '../components/auth/TypeOfAuthorization';

export default function AuthorizationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fakeLogin({ email, role, password });
    
    if (response.success) {
      login({ 
        role,
        email,
        token: response.token 
      });
      navigate(`/${role}`);
    }
  };

  return (
    <div style={{ 
      maxWidth: '500px', 
      margin: '2rem auto',
      padding: '2rem',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        Вход в систему салона красоты
      </h2>
      
      <TypeOfAuthorization role={role} setRole={setRole} />

      <form onSubmit={handleSubmit}>
        <div style={{ margin: '1rem 0' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', marginTop: '0.5rem' }}
          />
        </div>

        <div style={{ margin: '1rem 0' }}>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', marginTop: '0.5rem' }}
          />
        </div>

        <button 
          type="submit"
          style={{ 
            width: '100%',
            padding: '12px',
            marginTop: '1rem'
          }}
        >
          Войти
        </button>
      </form>

      <div style={{ 
        marginTop: '1.5rem',
        textAlign: 'center',
        color: '#666' 
      }}>
        {role === 'client' && <p>Нет аккаунта ? <a href="#register">Зарегистрируйтесь</a></p>}
        {role === 'master' && <p>Хотите стать мастером? <a href="#apply">Отправьте заявку</a></p>}
        {role === 'admin' && <p>Доступ только для уполномоченных сотрудников</p>}
      </div>
    </div>
  );
}