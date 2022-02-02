import React, {useState} from 'react';
// Images
import BreakfastRestaurant from '../../Assets/Images/BreakfastRestaurant.png'
import '../../Style/Pages/RestaurantPage.scss'


export default function RestaurantPage() {
  const [info, setInfo] = useState(true);

  return <div className='RestaurantPage'>
    <div className='image'>
      <img src={BreakfastRestaurant}/>
    </div>
    <h2>The Big Chilli Bakery</h2>
    <div className='PalceOrder'>
      <button className='OrderBtn'>Palce Online Order</button>
    </div>

    {/* Start of Restaurants Details */}
    <div className='RestaurantDetails'>
      <div className='Heading'>
        <p className={(info?'border': '')} onClick={()=>{setInfo(true)}}>Overview</p>
        <p className={(!info?'border': '')} onClick={()=>{setInfo(false)}}>Contact</p>
      </div>
      <hr/>
      <div className={'Overview' + (info?'': ' hide')}>
        <h4>About this Place</h4>
        <p className='Cuisine'>Cuisine</p>
        <p>Brakery, Fast-Food</p>
        <p className='AvgCost'>Average Cost</p>
        <p>₹700 for Two(approx.)</p>
      </div>
      <div className={'Contact' + (info?' hide':'')}>
        <h4>Phone Number</h4>
        <p className='phoneNumber'>+9116543743</p>
        <h4>The Big Chilli Bakery</h4>
        <p className='address'>Shop 1, Plot D, Sumruddhi Complex Chicholli <br/>Mumbai, Maharashtra 400030</p>
      </div>
    </div>
    {/* End of Restaurants Details */}
  </div>;
}
