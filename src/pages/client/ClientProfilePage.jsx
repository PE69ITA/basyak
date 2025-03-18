import PanelNavigationClient from "../../components/client/PanelNavigationClient";

export default function ClientProfilePage() {
  const profile = {
    name: "Иван Иванов",
    email: "client@example.com",
    phone: "+7 900 123-45-67",
    visits: 12
  };

  return (
    <div>
      <PanelNavigationClient />
      <h2>Мой профиль</h2>
      <div style={{ 
        padding: "20px", 
        border: "1px solid #ddd", 
        marginTop: "20px",
        maxWidth: "400px"
      }}>
        <p><strong>Имя:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Телефон:</strong> {profile.phone}</p>
        <p><strong>Посещений:</strong> {profile.visits}</p>
      </div>
    </div>
  );
}