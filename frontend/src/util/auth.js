export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function isTokenExist() {
  const isExist = localStorage.getItem("token") !== null;
  return isExist;
}
