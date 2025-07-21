import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from "./component/Menu";
import DailyUpdate from "./component/DailyUpdate";
import Calendar from "./component/Calendar";
import Login from "./component/Login";
import Profile from "./component/Profile";
import Signup from "./component/Signup";
import Updateform from "./component/Updateform";
import Health from "./component/Health";
import Homepage from "./component/Homepage";
import Exercise from "./component/Exercise";
import AboutUs from "./component/AboutUs";
import Help from "./component/Help";
import LandingPage from "./component/LandingPage";

const App=()=>{
  return <><BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/form" element={<Updateform />}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/updates" element={<DailyUpdate />}/>
      <Route path="/calendar" element={<Calendar />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/health" element={<Health/>}/>
      <Route path="/exercise" element={<Exercise/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/help" element={<Help/>}/>
    </Routes>
    </BrowserRouter>
    </>
}
export default App;