import React from "react";
import { Route,Routes} from  'react-router-dom'
import Auth from "../Auth/Auth";
import { LandingPage } from "../Pages/LandingPage/LandingPage";





function App() {
  return (
<div className="bg-ccLight h-screen  ">
<Routes>
 
<Route path='/home' element={<LandingPage/>}/>
     {/* <Route element={Auth}>
          <Route    />      
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
