import PanelNavigationClient from '../components/client/PanelNavigationClient';
import FormToCreateSchedule from '../components/client/FormToCreateSchedule';

export default function CreateSchedulePage() {
  const handleSubmit = (data) => {
    console.log('Создана запись:', data);
  };

  return (
    <div>
      <PanelNavigationClient />
      <h2>Новая запись</h2>
      <FormToCreateSchedule onSubmit={handleSubmit} />
    </div>
  );
}