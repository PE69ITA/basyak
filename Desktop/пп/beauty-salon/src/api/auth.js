export const fakeLogin = ({ role }) => {
    return new Promise(resolve => {
      setTimeout(() => resolve({
        success: true,
        token: "fake-jwt-token",
        role: role
      }), 1000);
    });
  };