import "./App.css";
import { Inbox } from "./Inbox";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="main-page">
        <SideBar />
        <Inbox />
      </div>
    </div>
  );
}

export default App;
