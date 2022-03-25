import React from 'react'
import { Link,useParams } from 'react-router-dom'
import BreakfastImg from '../../../Assets/Images/Breakfast.png'

export default function DisplayFilterItems({item, index}) {
    const {mealType} = useParams(); 
  return (
    <div key={index} className='Menu'>
                    <Link to={`/${mealType}/Restaurant/${item["id"]}`}>
                        <div className='menuHeader'>
                            <div className='menuImg'>
                                <img src={BreakfastImg} />
                            </div>
                            <div className='resturantName'>
                                <h2>{item["restaurant"]}</h2>
                                <h4>Fort</h4>
                                <p>{item.address}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='menuInfo'>
                            <div className='Cuisine'>
                                <p>Location</p>
                                <p>CUISINES</p>
                                <p>COST FOR TWO</p>
                            </div>
                            <div className='menuNameAndProce'>
                                <p>{item["location"]}</p>
                                <p>{item["cuisine"]}</p>
                                <p>{`₹${item["costforTwo"]} `}<span>approx.</span></p>
                            </div>
                        </div>
                    </Link>
                </div>
  )
}
