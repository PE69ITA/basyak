import { Link } from 'react-router-dom';

export default function PanelNavigationAdmin() {
  return (
    <nav style={{ 
      display: "flex",
      gap: "20px",
      padding: "10px",
      borderBottom: "1px solid #ccc"
    }}>
      <Link to="/admin/accounts">Аккаунты</Link>
      <Link to="/admin/dependents">Зависимости</Link>
      <Link to="/admin/profile">Профиль</Link>
    </nav>
  );
}