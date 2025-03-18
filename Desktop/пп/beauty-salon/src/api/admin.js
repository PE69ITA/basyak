export const fetchAccounts = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve([
        { id: 1, name: "Admin", email: "admin@test.com", role: "admin" },
        { id: 2, name: "Мастер Иван", email: "master@test.com", role: "master" }
      ]), 500);
    });
  };
  
  export const createAdmin = (data) => {
    return new Promise(resolve => {
      setTimeout(() => resolve({ id: Date.now(), ...data }), 500);
    });
  };
  
  export const changeVacancyStatus = (status) => {
    return new Promise(resolve => {
      setTimeout(() => resolve({ status: "success" }), 500);
    });
  };