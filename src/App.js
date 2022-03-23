import Home from './pages/home';
import GlobalState from "./context/GlobalState";
import { Router } from  "./Router/Router";


function App() {
  return (
    <div>
    <GlobalState>
      <Router />
    </GlobalState>
    </div>
  );
}

export default App;
