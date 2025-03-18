import { useState } from 'react';
import PanelNavigationMaster from '../components/master/PanelNavigationMaster';
import Tags from '../components/master/Tags';
import ModalWriteTags from '../components/common/Modals/ModalWriteTags';

export default function TagsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <PanelNavigationMaster />
      <h2>Управление тегами</h2>
      <button onClick={() => setIsModalOpen(true)}>
        Добавить новый тег
      </button>
      <Tags />
      
      <ModalWriteTags
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}