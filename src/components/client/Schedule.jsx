export default function Schedule({ appointments }) {
    return (
      <div>
        {appointments.map(appointment => (
          <div 
            key={appointment.id}
            style={{ 
              padding: "10px", 
              border: "1px solid #ddd", 
              margin: "10px 0" 
            }}
          >
            <div>Дата: {appointment.date}</div>
            <div>Услуга: {appointment.service}</div>
            <div>Мастер: {appointment.master}</div>
          </div>
        ))}
      </div>
    );
  }