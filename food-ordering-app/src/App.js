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
import Header from './Component/HeaderAndFooter/Header';
import Footer from './Component/HeaderAndFooter/Footer';
import RestaurantPage from './Component/Pages/RestaurantPage';


function App() {
 
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Breakfast' element={<BreakfastPage/>} />
          <Route path='/Lunch' element={<LunchPage />} />
          <Route path='/Snacks' element={<SnacksPage />} />
          <Route path='/Dinner' element={<DinnerPage />} />
          <Route path='/Drinks' element={<DrinksPage />} />
          <Route path='/NightLife' element={<NightLifePage />} />
          {/* Restaurnt Page */}
          <Route path='/Restaurant' element={<Restaurant/>} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

function BreakfastPage (){
  return (
    <>
      {window.scrollTo(0,0)}
      {window.location.pathname !== "/"?<Header/>:""}
      <Breakfast />
      <Footer />
    </>
  )
};

function LunchPage (){
  return (
    <>
      {window.scrollTo(0,0)}
      {window.location.pathname !== "/"?<Header/>:""}
      <Lunch />
      <Footer />
    </>
  )
};

function SnacksPage (){
  return (
    <>
      {window.scrollTo(0,0)}
      {window.location.pathname !== "/"?<Header/>:""}
      <Snacks />
      <Footer />
    </>
  )
};

function DinnerPage (){
  return (
    <>
      {window.scrollTo(0,0)}
      {window.location.pathname !== "/"?<Header/>:""}
      <Dinner />
      <Footer />
    </>
  )
};

function DrinksPage (){
  return (
    <>
      {window.scrollTo(0,0)}
      {window.location.pathname !== "/"?<Header/>:""}
      <Drinks />
      <Footer />
    </>
  )
};

function NightLifePage (){
  return (
    <>
      {window.scrollTo(0,0)}
      {window.location.pathname !== "/"?<Header/>:""}
      <NightLife />
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
