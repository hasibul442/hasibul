import axios from 'axios';
import Swal from 'sweetalert2';

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
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });

  if (result.isConfirmed) {
    try {
      const response = await axios.delete(`/api/v1/${tableName}?id=${id}`);
      if (response.data.success) {
        Swal.fire(
          'Deleted!',
          'Your record has been deleted.',
          'success'
        ).then(() => {
          window.location.reload();
        });
      }
      return response.data.success;
    } catch (error) {
      console.error("Error deleting document from database:", error);
      Swal.fire(
        'Error!',
        'Failed to delete the record.',
        'error'
      );
      return false;
    }
  }
  return false;
}
