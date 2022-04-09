import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios';
import '../../../Style/Pages/Orders/Orders.scss'
import Modal from 'react-modal';
import reducer from './Reducer';
import itemList from './ItemList.json';



Modal.setAppElement('#root');

const initalState = itemList;

export default function Orders({ restauranDetails }) {
  const { id, restaurant, cuisine } = restauranDetails[0];
  const [openModal, setModal] = useState(false);
  const [openAddressModal, setOpenAddressModal] = useState(false);  
  const [widthX, setWidthX] = useState("50%");
  const [state, dispatch] = useReducer(reducer, initalState);
  const totalPrice = state.reduce((total, item) => total += item.price * item.count, 0)
  let details = [];
  const custumStyle = {
    content: {
      width: widthX,
      height: "80vh",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    }
  }

  const checkTotal = () => {
    const errorMsg = document.getElementById('errorMsg');
    if (totalPrice == 0) {
      errorMsg.classList.remove('hide')
    } else {
      errorMsg.classList.add('hide')
      setModal(false);
      setOpenAddressModal(true);
    }
  }


  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 400) {
        setWidthX('90%')
      }
      else if (window.innerWidth < 770) {
        setWidthX('75%')
      }
      else if (window.innerWidth < 1000) {
        setWidthX('60%')
      }
      else {
        setWidthX('600px')

      }
    })
  })

  const payNow = async()=>{
    details =[];
    const nameandAddress = document.querySelectorAll('#nameAndAddress input');
    nameandAddress.forEach((item)=>{
      let obj = {}
      obj[item.name] = item.value;
       details.push(obj)
    })
    details.push({"amount": totalPrice});
    console.log(details);
  
    const res = await loadRazorPay();
  
    if(!res){
      alert('Razorpay could not be loaded')
      return
    }
    
    //Start: Passing UserDetails in the Backend
    let data 
    axios.post('/v1/payment',details)
    .then(res=>
      {
        // res.data();
        console.log(res.data);

        const address = `${details.filter(item => (Object.keys(item).toString().toLowerCase() == 'address1'))[0].address1} ${details.filter(item => (Object.keys(item).toString().toLowerCase() == 'address2'))[0].address2} ${details.filter(item => (Object.keys(item).toString().toLowerCase() == 'landmark'))[0].landmark}`
  
        var options = {
          "key": "rzp_test_pvV1PmItteOH6K", // Enter the Key ID generated from the Dashboard
          "amount": (details.filter(item => (Object.keys(item).toString().toLowerCase() == 'amount'))[0].amount *100).toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          "currency": res.data.currency,
          "name": "FOOD APP",
          "description": "Test Transaction",
          "image": "https://example.com/your_logo",
          "order_id": res.data.id,
          "handler": function (response){
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature)
          },
          "prefill": {
              "name": details.filter(item => (Object.keys(item).toString().toLowerCase() == 'fullname'))[0].fname,
              "email": details.filter(item => (Object.keys(item).toString().toLowerCase() == 'email'))[0].email,
              "contact": details.filter(item => (Object.keys(item).toString().toLowerCase() == 'mobilenum'))[0].mobileNum.toString()
          },
          "notes": {
              "address": address
          },
          "theme": {
              "color": "#ce0505"
          }
      
        };
    
        var rzp1 = new window.Razorpay(options);
        rzp1.open();

      })
     .catch(err=> 
      {
        console.log(err);
        alert("User Details could not be fetched")
    })
    
    //End: Passing UserDetails in the Backend
      
  }

  return (
    <>
      <button className='OrderBtn' onClick={() => setModal(true)}>Place Online Order</button>
      <Modal isOpen={openModal} onRequestClose={() => setModal(false)} style={custumStyle}>
        <div className="orderModal">
          <h2 className='heading'>{restaurant}</h2>
          <div className="items">
            {
              state.map((item, index) => {
                return (
                  <div key={index} className="item">
                    <div className="itemInfo">
                      <div className='greenDot'><div className='dot'></div></div>
                      <h4>{item.itemName}</h4>
                      <h4>₹{item.price}</h4>
                      <p>{item.itemInfo}</p>
                    </div>
                    <div className="quantity">
                      <div className="image"></div>
                      <div className='btn'>
                        <button className='minus' onClick={(e) => { e.preventDefault(); dispatch({ type: "decrement", payload: item.id }) }}>-</button>{item.count}<button className='green' onClick={() => { dispatch({ type: "increment", payload: item.id }) }}>+</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="totalBar">
            <div className="total">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
              <h6 id='errorMsg' className='errMsg hide'>Please Select Item</h6>
            </div>
            <div className="PayNow">
              <button className='btnPayNow' onClick={() => checkTotal()}>Next</button>
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={openAddressModal} onRequestClose={() => setOpenAddressModal(false)} style={custumStyle}>
        <div id="nameAndAddress" className="addressModal">
          <h2>Name and Address Details</h2>
          <div className='name'>
            <label htmlFor='fname'>Full Name <span style={{color:'#ce0505'}}>*</span></label>
            <input id='fullname'  type="text" name='fullname' placeholder='First Name' required />
          </div>
          <div className='mobileNumber'>
            <label htmlFor='number'>Mobile Number<span style={{color:'#ce0505'}}>*</span></label>
            <input id='number' type="number" maxLength='10' name='mobileNum' placeholder='Mobile Number' required />
          </div>
          <div className='email'>
            <label htmlFor='email'>Email <span style={{color:'#ce0505'}}>*</span></label>
            <input id='email' value="anup@gmail.com" type="email" name='email' placeholder='Email' required />
          </div>
          <div className='addressLine1'>
            <label htmlFor='addressLine1'>Address <span style={{color:'#ce0505'}}>*</span></label>
            <input id='addressLine1' value="add1" type="text" name='address1' placeholder='Address Line 1' required />
            <input id='addressLine2' value="add2" type="text" name='address2' placeholder='Address Line 2'/>
            <input id='landmark' value="landmark" type="text" name='landmark' placeholder='Landmark'/>
            <input id='pincode' value="442401" type="number" name='pincode' placeholder='Pincode' required/>
          </div>
         < button type='submit' className='btn' onClick={()=> payNow()}>PAY NOW</button>
        </div>
      </Modal>

    </>
  )
}

//Start of Payment Integration

function loadRazorPay(){
  return new Promise((res)=>{
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    
    script.onload= ()=>{
      res(true);
    }
    script.onerror = ()=>{
      res(false)
    }
    document.body.appendChild(script);
  })

}

//End of Payment Integration

