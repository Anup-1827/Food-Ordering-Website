import React,{useState} from 'react'

import Modal from 'react-modal'

Modal.setAppElement('#root')
export default function Orders({restauranDetails}) {
    const {id, cuisine} = restauranDetails[0];
    // console.log(restauranDetails);
    const [openModal, setModal] = useState(false);
    const custumStyle = {
        content :{
            width:'30%',    
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
}

  return (
    <>
        <button className='OrderBtn' onClick={()=>setModal(true)}>Palce Online Order</button>
        <Modal isOpen={openModal} onRequestClose={()=>setModal(false)}  style={custumStyle}>
            <h1>Anup</h1>
        </Modal>
    </>
  )
}

// onRequestClose={()=>{ {!openModal}}}