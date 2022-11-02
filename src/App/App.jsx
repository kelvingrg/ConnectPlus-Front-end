import React from "react";
import { Route,Routes} from  'react-router-dom'
import Auth from "../Auth/Auth";
import HomePage from "../Pages/LandingPage/HomePage/HomePage";
import { LandingPage } from "../Pages/LandingPage/LandingPage";





function App() {
  return (
<div className=  " bg-ccLight">
<Routes>
 
<Route path='/' element={<LandingPage/>}/>
<Route  path="/home" element={<HomePage/>}  />  
     {/* <Route element={Auth}>
          
          <Route    />
          <Route    />
          <Route    />      
          <Route    />
          <Route    />
          <Route    />
          <Route    />
          <Route    />
    </Route>
          */}
</Routes>
  

  </div>

  );          
}

export default App;
