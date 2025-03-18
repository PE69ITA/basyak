import { useState } from 'react';
import PanelNavigationClient from '../components/client/PanelNavigationClient';
import HistoryOfScheduleClient from '../components/client/HistoryOfScheduleClient';
import ModalGiveWorkFeedback from '../components/common/Modals/ModalGiveWorkFeedback';

export default function HistoryOfScheduleClientPage() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <div>
      <PanelNavigationClient />
      <h2>История записей</h2>
      <HistoryOfScheduleClient 
        onSelect={setSelectedAppointment}
      />
      
      {selectedAppointment && (
        <ModalGiveWorkFeedback
          isOpen={!!selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          appointment={selectedAppointment}
        />
      )}
    </div>
  );
}