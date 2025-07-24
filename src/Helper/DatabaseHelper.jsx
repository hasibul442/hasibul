import { db } from "@/lib/firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";

export async function getListDataFromDatabase(tableName) {
  const querySnapshot = await getDocs(collection(db, tableName));
  if (querySnapshot.empty) {
    console.log("No data found in the collection:", tableName);
    return [];
  }
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function deleteDataFromDatabase(tableName, id) {
  try {
    const docRef = doc(db, tableName, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting document from database:", error);
    return false;
  }
}
