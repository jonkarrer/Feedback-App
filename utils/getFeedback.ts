import { ref, child, get } from "firebase/database";
import database from "../utils/firebaseClient";

export default async function getFeedback() {
  const dbRef = ref(database);
  let data = await get(child(dbRef, `productRequests/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return data;
}
