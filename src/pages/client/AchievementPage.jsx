import PanelNavigationClient from '../components/client/PanelNavigationClient';
import Achievement from '../components/client/Achievement';

export default function AchievementPage() {
  return (
    <div>
      <PanelNavigationClient />
      <h2>Мои достижения</h2>
      <Achievement />
    </div>
  );
}