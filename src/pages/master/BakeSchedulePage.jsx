import { useState } from 'react';
import PanelNavigationMaster from '../../components/master/PanelNavigationMaster';
import BakeSchedule from '../../components/master/BakeSchedule';
import ModalClientWants from '../../components/common/Modals/ModalClientWants';

export default function BakeSchedulePage() {
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Заглушка запроса
  const fakeRequest = {
    id: 1,
    client: "Иван Иванов",
    service: "Стрижка",
    date: "2023-10-21 14:00"
  };

  return (
    <div>
      <PanelNavigationMaster />
      <h2>Формирование расписания</h2>
      <BakeSchedule />
      
      <button 
        onClick={() => setSelectedRequest(fakeRequest)}
        style={{ marginTop: "20px" }}
      >
        Показать пример запроса
      </button>

      <ModalClientWants
        isOpen={!!selectedRequest}
        onClose={() => setSelectedRequest(null)}
        request={selectedRequest}
      />
    </div>
  );
}