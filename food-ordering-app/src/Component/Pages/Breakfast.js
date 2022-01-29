// Packkages
import React, { useState } from 'react'
import '../../Style/Pages/CommonItems.scss'// CSS File
// Images
import BreakfastImg from '../../Assets/Images/Breakfast.png'
// Icon
import MenuIcon from '@mui/icons-material/Menu';

export default function Breakfast() {
    const [filterTab, setFilterTab] = useState(true);
    console.log(filterTab);
    let filterContent = '';
    { filterTab ? filterContent = 'FilterContent hide' : filterContent = 'FilterContent' }
    console.log(filterContent);
    return (
        <div className='Meal'>
            <h1 className='heading'>Breakfast Places</h1>
            <div className='Content'>

                <div className='Filter'>
                    <div className='FilterBar'>
                        <h2>Filter</h2>
                        <MenuIcon onClick={() => { setFilterTab(!filterTab) }} />
                    </div>
                    <div className={filterContent}>
                        <div className='DivSelectLocation'>
                            <label className='LblLocation'>Select Location</label>
                            <select className='DrdSelectLoc'>
                                <option value='0'>Select Location </option>
                                <option value='Mumbai'>Mumbai</option>
                                <option value='Banglore'>Banglore</option>
                                <option value='Hyderabad'>Hyderabad</option>
                            </select>
                        </div>
                        <div className='DivCuisine DivCuisineAndCost'>
                            <label className='LblCuisnie LblCuisnieAndCost'>Cuisine</label>
                            <div className='RadCuisine RadCuisineAndCost'>
                                <div><input type='checkbox' name='Cuisine' id='NorthIndian' value='NorthIndian' /><label htmlFor='NorthIndian'>North Indian</label></div>
                                <div><input type='checkbox' name='Cuisine' id='SouthIndian' value='SouthIndian' /><label htmlFor='SouthIndian'>South Indian</label></div>
                                <div><input type='checkbox' name='Cuisine' id='Chinese' value='Chinese' /><label htmlFor='Chinese'>Chinese</label></div>
                                <div><input type='checkbox' name='Cuisine' id='FastFood' value='FastFood' /><label htmlFor='FastFood'>Fast Food</label></div>
                                <div><input type='checkbox' name='Cuisine' id='StreetFood' value='StreetFood' /><label htmlFor='StreetFood'>Street Food</label></div>
                            </div >
                        </div>
                        {/* Cost For two */}
                        <div className='DivCostForTwo DivCuisineAndCost'>
                            <label className='LblCostForTwo LblCuisnieAndCost'>Cost For Two</label>
                            <div className='RadCostForTwo RadCuisineAndCost'>
                                <div><input type='radio' name='CostForTwo' id='Lessthan₹500' value='Lessthan₹500' /><label htmlFor='Lessthan₹500'>Less than ₹500</label></div>
                                <div><input type='radio' name='CostForTwo' id='₹500to₹1000' value='₹500to₹1000' /><label htmlFor='₹500to₹1000'>₹500 to ₹1000</label></div>
                                <div><input type='radio' name='CostForTwo' id='₹1000to₹1500' value='₹1000to₹1500' /><label htmlFor='₹1000to₹1500'>₹1000 to ₹1500</label></div>
                                <div><input type='radio' name='CostForTwo' id='₹1500to₹2000' value='₹1500to₹2000' /><label htmlFor='₹1500to₹2000'>₹1500 to ₹2000</label></div>
                                <div><input type='radio' name='CostForTwo' id='₹2000+' value='₹2000+' /><label htmlFor='₹2000+'>₹2000+</label></div>
                            </div >
                        </div>
                        {/* Cost For two */}

                        {/* Sort */}
                        <div className='DivSort DivCuisineAndCost'>
                            <label className='LblSort LblCuisnieAndCost'>Sort</label>
                            <div className='RadSort RadCuisineAndCost'>
                                <div><input type='radio' name='Sort' id='Pricelowtohigh' value='Pricelowtohigh' /><label htmlFor='Pricelowtohigh'>Price low to high</label></div>
                                <div><input type='radio' name='Sort' id='Pricehightolow' value='Pricehightolow' /><label htmlFor='Pricehightolow'>Price high tolow</label></div>
                            </div >
                        </div>
                        {/* End of Sort */}
                    </div>
                </div>
                <div className='MenuItems'>
                    <div className='Menu'>
                        <div className='menuHeader'>
                            <div className='menuImg'>
                                <img src={BreakfastImg} />
                            </div>
                            <div className='resturantName'>
                                <h2>The Big Chilli Cakert</h2>
                                <h4>Fort</h4>
                                <p>Shop 1, Plot D, Sumruddhi Complex Chicholli</p>
                            </div>
                        </div>
                        <hr />
                        <div className='menuInfo'>
                            <div className='Cuisine'>
                                <p>CUISINES</p>
                                <p>COST FOR TWO</p>
                            </div>
                            <div className='menuNameAndProce'>
                                <p>Bakery</p>
                                <p>₹ 700</p>
                            </div>
                        </div>
                    </div>
                    <div className='Menu'>
                        <div className='menuHeader'>
                            <div className='menuImg'>
                                <img src={BreakfastImg} />
                            </div>
                            <div className='resturantName'>
                                <h2>The Big Chilli Cakert</h2>
                                <h4>Fort</h4>
                                <p>Shop 1, Plot D, Sumruddhi Complex Chicholli</p>
                            </div>
                        </div>
                        <hr />
                        <div className='menuInfo'>
                            <div className='Cuisine'>
                                <p>CUISINES</p>
                                <p>COST FOR TWO</p>
                            </div>
                            <div className='menuNameAndProce'>
                                <p>Bakery</p>
                                <p>₹ 700</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='Pagination'>
                    <div>{`<`}</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>{`>`}</div>
                </div>
            </div>
        </div>

    )
}
