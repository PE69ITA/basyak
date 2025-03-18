import { useState } from 'react';
import PanelNavigationAdmin from '../../components/admin/PanelNavigationAdmin';
import ModalAcceptMaster from '../../components/common/Modals/ModalAcceptMaster';
import ModalChangeVacansyStatus from '../../components/common/Modals/ModalChangeVacansyStatus';

export default function DependentsPage() {
  const [selectedMaster, setSelectedMaster] = useState(null);
  const [isVacancyModalOpen, setIsVacancyModalOpen] = useState(false);

  // Заглушка данных
  const masters = [
    { id: 1, name: "Мария Иванова", status: "pending" }
  ];

  return (
    <div>
      <PanelNavigationAdmin />
      <h2>Управление зависимостями</h2>
      
      {/* Список мастеров для подтверждения */}
      <div style={{ marginTop: "20px" }}>
        <h3>Заявки мастеров</h3>
        {masters.map(master => (
          <div 
            key={master.id}
            style={{ 
              padding: "10px", 
              border: "1px solid #ddd", 
              margin: "5px 0" 
            }}
          >
            {master.name}
            <button 
              onClick={() => setSelectedMaster(master)}
              style={{ marginLeft: "10px" }}
            >
              Рассмотреть
            </button>
          </div>
        ))}
      </div>

      {/* Кнопка для изменения статуса вакансии */}
      <button 
        onClick={() => setIsVacancyModalOpen(true)}
        style={{ marginTop: "20px" }}
      >
        Изменить статус вакансии
      </button>

      {/* Модальные окна */}
      <ModalAcceptMaster
        isOpen={!!selectedMaster}
        onClose={() => setSelectedMaster(null)}
        masterId={selectedMaster?.id}
      />
      <ModalChangeVacansyStatus
        isOpen={isVacancyModalOpen}
        onClose={() => setIsVacancyModalOpen(false)}
      />
    </div>
  );
}