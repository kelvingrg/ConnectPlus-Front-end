import { parse } from "postcss";
import React, { useEffect } from "react";
import { json, Route,Routes} from  'react-router-dom'
import Auth from "../Auth/Auth";import Page404 from "../Pages/404Page/Page404";
import HomePage from "../Pages/HomePage/HomePage";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import Profile from "../Pages/Profile/Profile";
import Authorisation from "./Authorisation";






function App() {

  return (

<Routes>
<Route path='/page404' element={<Page404/>}/>
<Route path='/' element={<LandingPage/>}/>
     <Route element={<Authorisation/>}>
          
<Route  path="/home" element={<HomePage/>}  />  
<Route  path="/profile" element={<Profile/>}  />  
         
    </Route>
         
</Routes>
  



  );          
}

export default App;
