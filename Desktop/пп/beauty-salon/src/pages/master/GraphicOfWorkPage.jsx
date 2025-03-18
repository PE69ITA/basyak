import { useState } from 'react';
import PanelNavigationMaster from '../components/master/PanelNavigationMaster';
import ChooseView from '../components/master/ChooseView';
import GraphicOfWork from '../components/master/GraphicOfWork';

export default function GraphicOfWorkPage() {
  const [viewMode, setViewMode] = useState('week');

  return (
    <div>
      <PanelNavigationMaster />
      <h2>График работы</h2>
      <ChooseView onViewChange={setViewMode} />
      <GraphicOfWork viewMode={viewMode} />
    </div>
  );
}