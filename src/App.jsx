import "./App.css";
import Dashboardview from "./components/Dashboardview";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex ">
      <div className="basis-[12%] h-[100vh] ">
        <SideBar />
      </div>
      <div className="basis-[88%]  border h-[100vh] overflow-scroll">
        <Dashboardview />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
