//Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Component
import Home from './Component/Pages/Home'
import Breakfast from './Component/Pages/Breakfast';
import Lunch from './Component/Pages/Lunch';
import Snacks from './Component/Pages/Snacks';
import Dinner from './Component/Pages/Dinner';
import Drinks from './Component/Pages/Drinks';
import NightLife from './Component/Pages/NightLife';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
              <Route path='/' element={ <Home/>}/>
              <Route path='/Breakfast' element={<Breakfast/>}/>
              <Route path='/Lunch' element={<Lunch/>}/>
              <Route path='/Snacks' element={<Snacks/>}/>
              <Route path='/Dinner' element={<Dinner/>}/>
              <Route path='/Drinks' element={<Drinks/>}/>
              <Route path='/NightLife' element={<NightLife/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
