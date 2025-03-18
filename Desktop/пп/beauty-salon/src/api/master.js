export const fetchMasterSchedule = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve([
        { id: 1, date: "2023-10-20 14:00", client: "Иван", service: "Окрашивание" }
      ]), 500);
    });
  };
  
  export const updateWorkGraphic = (data) => {
    return new Promise(resolve => {
      setTimeout(() => resolve({ status: "updated" }), 500);
    });
  };