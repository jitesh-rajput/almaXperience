import ApplicationRoutes from "./Route/ApplicationRoutes";  
import { app } from "./Firebase/Config";
function App() {
  console.log(app);
  return (
    <div className="App">
      <ApplicationRoutes/>
    </div>
  );
}

export default App;