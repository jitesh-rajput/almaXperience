import ApplicationRoutes from "./Route/ApplicationRoutes";  
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase/Config";

const app=initializeApp(firebaseConfig)
console.log("Connected .......!")
console.log(app)

function App() {
  return (
    <div className="App">
      <ApplicationRoutes/>
    </div>
  );
}

export default App;