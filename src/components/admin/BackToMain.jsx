import { Link } from 'react-router-dom';

export default function BackToMain() {
  return (
    <div style={{ margin: "10px 0" }}>
      <Link to="/admin">← На главную</Link>
    </div>
  );
}