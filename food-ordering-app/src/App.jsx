//Packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
//Component
import Home from './Component/Pages/Home'
import FilterMealType from './Component/Pages/FilterMealType';
import Header from './Component/HeaderAndFooter/Header';
import Footer from './Component/HeaderAndFooter/Footer';
import RestaurantPage from './Component/Pages/RestaurantPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:mealType' element={<FilterMeal/>} />
          <Route path='/:mealType/Restaurant/:id' element={<Restaurant/>} />
        </Routes>

      </Router> 

     
          {/* <button type="submit" onClick={btnClick}>Connected?</button> */}
      
    
    </div>
  );
}

function FilterMeal (){
  return (
    <>
      {window.scrollTo(0,0)}
      {window.location.pathname !== "/"?<Header/>:""}
      <FilterMealType />
      <Footer />
    </>
  )
};


function Restaurant (){
  return (
    <>
      {window.scrollTo(0,0)}
      {window.location.pathname !== "/"?<Header/>:""}
      <RestaurantPage />
      <Footer />
    </>
  )
};

export default App;
