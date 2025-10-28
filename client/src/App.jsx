import {
  NavBar,
  Footer,
  Loader,
  Services,
  Transaction,
  Welcome,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="bg-amber-900 min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>

      <div>
        <Services />
        <Transaction />
        <Footer />
      </div>
    </div>
  );
};

export default App;
