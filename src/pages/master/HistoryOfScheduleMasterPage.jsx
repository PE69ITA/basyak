import PanelNavigationMaster from '../components/master/PanelNavigationMaster';
import HistoryOfScheduleMaster from '../components/master/HistoryOfScheduleMaster';

export default function HistoryOfScheduleMasterPage() {
  return (
    <div>
      <PanelNavigationMaster />
      <h2>История записей</h2>
      <HistoryOfScheduleMaster />
    </div>
  );
}