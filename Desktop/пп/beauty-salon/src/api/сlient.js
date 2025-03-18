export const fetchClientSchedule = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve([
        { id: 1, date: "2023-10-20 14:00", service: "Стрижка", master: "Мария" }
      ]), 500);
    });
  };
  
  export const submitFeedback = (feedback) => {
    return new Promise(resolve => {
      setTimeout(() => resolve({ status: "success" }), 500);
    });
  };