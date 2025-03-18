export default function HistoryOfScheduleMaster() {
    const history = [
      { id: 1, date: '2023-10-15', client: 'Алексей', service: 'Бритье', status: 'Завершено' },
      { id: 2, date: '2023-10-16', client: 'Ольга', service: 'Маникюр', status: 'Отменено' }
    ];
  
    return (
      <div style={{ padding: '20px' }}>
        <h3>История записей</h3>
        {history.map((record) => (
          <div
            key={record.id}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              margin: '5px 0'
            }}
          >
            <div>Дата: {record.date}</div>
            <div>Клиент: {record.client}</div>
            <div>Услуга: {record.service}</div>
            <div>Статус: {record.status}</div>
          </div>
        ))}
      </div>
    );
  }