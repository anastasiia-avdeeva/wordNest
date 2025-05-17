import "./assets/styles/normalize.css";
import "./App.css";
import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { MainPage } from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <MainPage />
    </div>
  );
}

export default App;
