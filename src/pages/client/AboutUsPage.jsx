import PanelNavigationClient from '../components/client/PanelNavigationClient';
import Feedback from '../components/client/Feedback';

export default function AboutUsPage() {
  return (
    <div>
      <PanelNavigationClient />
      <h2>О нашем салоне</h2>
      <div style={{ padding: "20px", lineHeight: "1.6" }}>
        <p>Добро пожаловать в лучший салон красоты города! Мы работаем с 2010 года.</p>
        <h3>Наши преимущества:</h3>
        <ul>
          <li>Профессиональные мастера</li>
          <li>Используем только премиальные материалы</li>
          <li>Удобное онлайн-расписание</li>
        </ul>
      </div>
      <Feedback />
    </div>
  );
}