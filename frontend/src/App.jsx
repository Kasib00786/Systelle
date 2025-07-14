import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./component/Navbar";
import Menu from "./component/Menu";
import DailyUpdate from "./component/DailyUpdate";
import Calendar from "./component/Calendar";
import Login from "./component/Login";
import Profile from "./component/Profile";

const App=()=>{
  return <><BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Navbar />}/>
      <Route path="/updates" element={<DailyUpdate />}/>
      <Route path="/calendar" element={<Calendar />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </BrowserRouter>
    </>
}
export default App;