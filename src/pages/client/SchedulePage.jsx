import { useState } from 'react';
import PanelNavigationClient from '../../components/client/PanelNavigationClient';
import Schedule from '../../components/client/Schedule';
import ModalRefForMaster from '../../components/common/Modals/ModalRefForMaster';

export default function SchedulePage() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  
  // Заглушка данных
  const appointments = [
    { id: 1, date: "2023-10-20 14:00", service: "Стрижка", master: "Мария" }
  ];

  return (
    <div>
      <PanelNavigationClient />
      <h2>Мое расписание</h2>
      <Schedule 
        appointments={appointments} 
        onSelect={setSelectedAppointment}
      />
      
      {selectedAppointment && (
        <ModalRefForMaster
          isOpen={!!selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          master={selectedAppointment.master}
        />
      )}
    </div>
  );
}