import { Link } from 'react-router-dom';

export default function PanelNavigationMaster() {
  return (
    <nav style={{ 
      display: 'flex',
      gap: '20px',
      padding: '10px',
      borderBottom: '1px solid #ccc',
      marginBottom: '20px'
    }}>
      <Link to="/master/schedule">Расписание</Link>
      <Link to="/master/history">История</Link>
      <Link to="/master/profile">Профиль</Link>
      <Link to="/master/tags">Теги</Link>
    </nav>
  );
}