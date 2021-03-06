import '../../Style/HeaderAndFooter/Footer.scss'// CSS File
// Packages
import React from 'react'
import Tippy from '@tippyjs/react'; //ToolTip
// Material UI icon
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function Footer() {
  return (
  <div className='Footer'>
      <div className='icon'>
            <a href='https://www.facebook.com/anupalone18899' target='_blank'> <FacebookIcon/> </a>
            <a href='https://www.linkedin.com/in/anup-alone-312412179/' target='_blank'> <LinkedInIcon/></a>
            <a href='https://github.com/Anup-1827/Food-Ordering-Website/tree/master' target='_blank'> <GitHubIcon/></a>
            {/* <a href='https://www.facebook.com/anupalone18899'><TwitterIcon/></a> */}
      </div>
      <p>Copyright © 2021 Anup. All rights reserved</p>
  </div>
  );
}
