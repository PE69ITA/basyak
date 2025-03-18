export default function MasterProfile() {
    const profile = {
      name: 'Мария Иванова',
      email: 'master@example.com',
      specialization: 'Парикмахер',
      rating: '4.8'
    };
  
    return (
      <div style={{ padding: '20px', border: '1px solid #eee' }}>
        <h2>Профиль мастера</h2>
        <div>
          <p>Имя: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Специализация: {profile.specialization}</p>
          <p>Рейтинг: {profile.rating}/5</p>
        </div>
      </div>
    );
  }