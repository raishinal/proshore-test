export const getToken = () => {
    const auth = localStorage.getItem("token");
    const parsedAuth = JSON.parse(auth);
    const token = !parsedAuth ? "" : parsedAuth?.access_token;
  
    return token;
  };
  