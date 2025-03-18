import { Link } from 'react-router-dom';

export default function PanelNavigationClient() {
  return (
    <nav style={{ 
      display: "flex",
      gap: "20px",
      padding: "10px",
      borderBottom: "1px solid #ccc",
      marginBottom: "20px"
    }}>
      <Link to="/client/schedule">Расписание</Link>
      <Link to="/client/create">Новая запись</Link>
      <Link to="/client/history">История</Link>
      <Link to="/client/profile">Профиль</Link>
    </nav>
  );
}