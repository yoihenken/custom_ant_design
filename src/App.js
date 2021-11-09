import './App.less';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Dashboard/>}/>
              <Route path={"/login"}  element={<Login/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
