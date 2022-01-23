import React from 'react';
import '../../Style/HeaderAndFooter/Header.scss'
//Packages
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='Header'>
           <Link to='/'><h1>e!</h1></Link> 
            <div className='loginAndAccount'>
                <a to="#" className='login com'>Login</a>
                <button className='createAcc com'>Create an account</button>
            </div>
        </div>
    );
}
