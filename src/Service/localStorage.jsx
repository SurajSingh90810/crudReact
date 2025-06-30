export const getStorageData = () => {
  return JSON.parse(localStorage.getItem("Employees") || "[]");
};

export const setStorageData = (data) => {
  localStorage.setItem("Employees", JSON.stringify(data));
};