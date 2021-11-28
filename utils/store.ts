import { writable } from "svelte/store";
import { ref, child, get } from "firebase/database";
import database from "./firebaseClient";

export const feedback = writable([]);

(async () => {
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

  feedback.set(data);
})();
