import './App.css';
import { getDatabase, ref, child, get } from "firebase/database";
import {database} from './firebase'



function App() {

  const dbRef = ref(database);
  get(child(dbRef, `users`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  return (
    <div>
      asdasd
    </div>
  );
}

export default App;
