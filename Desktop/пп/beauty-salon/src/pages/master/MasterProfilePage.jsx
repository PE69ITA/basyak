import { useAuth } from '../../contexts/AuthContext';
import PanelNavigationMaster from '../../components/master/PanelNavigationMaster';
import MasterProfile from '../../components/master/MasterProfile';

export default function MasterProfilePage() {
  const { user } = useAuth();
  
  if (!user || user.role !== 'master') {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <PanelNavigationMaster />
      <h2>Профиль мастера</h2>
      <MasterProfile />
    </div>
  );
}