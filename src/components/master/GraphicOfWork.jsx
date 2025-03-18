export default function GraphicOfWork({ schedule }) {
    const fakeData = [
      { id: 1, date: '2023-10-20 09:00', client: 'Иван Иванов', service: 'Стрижка' },
      { id: 2, date: '2023-10-20 14:00', client: 'Мария Петрова', service: 'Окрашивание' }
    ];
  
    return (
      <div style={{ marginTop: '20px' }}>
        <h3>График работы</h3>
        {fakeData.map((item) => (
          <div 
            key={item.id}
            style={{
              padding: '10px',
              border: '1px solid #eee',
              margin: '5px 0'
            }}
          >
            <div>Дата: {item.date}</div>
            <div>Клиент: {item.client}</div>
            <div>Услуга: {item.service}</div>
          </div>
        ))}
      </div>
    );
  }