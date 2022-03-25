import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
// Images
import BreakfastRestaurant from '../../Assets/Images/BreakfastRestaurant.png'
import '../../Style/Pages/RestaurantPage.scss'
// Restaurant List
import restaurantList from '../../restauranList.json'


export default function RestaurantPage(props) {
  const [info, setInfo] = useState(true);
  const {id} =useParams();

  const restauranDetails = restaurantList.filter(item=> item.id == id);
  console.log(restauranDetails);

  let location = 'Mumbai, Maharashtra 400030';
  if(restauranDetails[0]['location'].toLowerCase() === "mumbai"){
    location = 'Mumbai, Maharashtra 400030';
  }
  else if(restauranDetails[0]['location'].toLowerCase() === "delhi"){
    location = 'Delhi, Delhi 110001';
  }
  else if(restauranDetails[0]['location'].toLowerCase() === "banglore"){
    location = 'Banglore, Karnataka 560014';
  }

  return <div className='RestaurantPage'>
    <div className='image'>
      <img src={BreakfastRestaurant}/>
    </div>
    <h2>{restauranDetails[0]['restaurant']}</h2>
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
        <p>{restauranDetails[0]['cuisine']}</p>
        <p className='AvgCost'>Average Cost</p>
        <p>₹{restauranDetails[0]['costforTwo']} for Two(approx.)</p>
      </div>
      <div className={'Contact' + (info?' hide':'')}>
        <h4>Phone Number</h4>
        <p className='phoneNumber'>{restauranDetails[0]['phoneNumber']}</p>
        <h4>{restauranDetails[0]['restaurant']}</h4>
        <p className='address'>{restauranDetails[0]['address']} <br/>{location}</p>
      </div>
    </div>
    {/* End of Restaurants Details */}
  </div>;
}
