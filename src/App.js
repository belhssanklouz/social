import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import NewPlaces from './places/pages/NewPlaces';
import Users from './users/pages/Users';
import MainNavigation from './share/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';


function App() {
  return (<Router>
    <MainNavigation />
    <main>
    <Routes>
    <Route exact path="/" element={<Users />}/>
    <Route path ='/:userId/places' element={<UserPlaces />} exact/>
    <Route path='/places/new' element={<NewPlaces />} />
    <Route path='/places/:placeId' element={<UpdatePlace />} />
    <Route path='*' element={<Users />} /> 
    </Routes>
    </main>
  </Router>
    
  );
}

export default App;
