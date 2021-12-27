import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import NewPlaces from './places/pages/NewPlaces';
import Users from './users/pages/Users';
import MainNavigation from './share/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';
import React, { useCallback, useState } from 'react';
import { AuthContext } from './share/context/Auth-context';


function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  const login = useCallback(()=>{
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(()=>{
    setIsLoggedIn(false)
  }, [])
  let routes;
  if(isLoggedIn){
 routes = (<React.Fragment>
  <Route exact path="/" element={<Users />}/>
  <Route path='/places/new' element={<NewPlaces />} />
  <Route path ='/:userId/places' element={<UserPlaces />} exact/>
  <Route path='/places/:placeId' element={<UpdatePlace />} />
  <Route path='*' element={<Users />} /> 

  </React.Fragment>
 );
}else{routes =(
<React.Fragment>
<Route exact path="/" element={<Users />}/>
<Route path ='/:userId/places' element={<UserPlaces />} exact/>
<Route exact path='/auth' element={<Auth />} />
<Route path='*' element={<Auth />} /> 
</React.Fragment>)
}
  return (
<AuthContext.Provider value={{
  isLoggedIn:isLoggedIn,
  login:login,
  logout:logout}}>
  <Router>
    <MainNavigation />
    <main>
    <Routes>
    {routes}
    </Routes>
    </main>
  </Router>
</AuthContext.Provider>
    
  );
}

export default App;
