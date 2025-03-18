export default function HistoryOfScheduleClient() {
    const history = [
      { id: 1, date: "2023-10-15", service: "Стрижка", master: "Мария" },
      { id: 2, date: "2023-09-28", service: "Маникюр", master: "Анна" }
    ];
  
    return (
      <div style={{ marginTop: "20px" }}>
        <h3>История записей</h3>
        {history.map(record => (
          <div 
            key={record.id}
            style={{ 
              padding: "10px", 
              border: "1px solid #ddd", 
              margin: "5px 0" 
            }}
          >
            {record.date} — {record.service} ({record.master})
          </div>
        ))}
      </div>
    );
  }