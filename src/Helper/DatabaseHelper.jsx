import axios from 'axios';

export async function getListDataFromDatabase(tableName) {
  try {
    const response = await axios.get(`/api/v1/${tableName}`);
    if (response.data.success) {
      return response.data.data;
    }
    console.log("No data found in the collection:", tableName);
    return [];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function deleteDataFromDatabase(tableName, id) {
  try {
    const response = await axios.delete(`/api/v1/${tableName}?id=${id}`);
    return response.data.success;
  } catch (error) {
    console.error("Error deleting document from database:", error);
    return false;
  }
}
