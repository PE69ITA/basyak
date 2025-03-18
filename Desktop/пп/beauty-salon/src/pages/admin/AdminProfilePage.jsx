import PanelNavigationAdmin from '../../components/admin/PanelNavigationAdmin';

export default function AdminProfilePage() {
  const adminData = {
    name: "Администратор Системы",
    email: "admin@beauty-salon.com",
    role: "Главный администратор"
  };

  return (
    <div>
      <PanelNavigationAdmin />
      <h2>Профиль администратора</h2>
      <div style={{ 
        padding: "20px", 
        border: "1px solid #ddd", 
        marginTop: "20px" 
      }}>
        <p><strong>Имя:</strong> {adminData.name}</p>
        <p><strong>Email:</strong> {adminData.email}</p>
        <p><strong>Роль:</strong> {adminData.role}</p>
      </div>
    </div>
  );
}