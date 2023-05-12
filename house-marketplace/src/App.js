import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Explore from './pages/Explore'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';

function App() {
  
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Explore/>}/>
              <Route path='/offers' element={<Offers/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/sign-in' element={<SignIn/>}/>
              <Route path='/sign-up' element={<SignUp/>}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
          </Routes>
      {/* {Navbar} */}
      </Router>
    </>
  );
}

export default App;
