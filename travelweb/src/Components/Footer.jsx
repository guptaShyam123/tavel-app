import React from 'react'

import './Footer.css'


const Footer = () => {
  return (
    <>
    <footer>
    <div>
         <span class="logo">ROVE</span>
    </div>

    <div class="row">
         <div class="col-3">                
             <div class="link-cat" onclick="footerToggle(this)">
                 <span class="footer-toggle"></span>
                 <span class="footer-cat">Solution</span>
             </div>
             <ul class="footer-cat-links">
                 <li><a href=""><span>The EXO Travel Story</span></a></li>
                 <li><a href=""><span>EXO PEOPLE</span></a></li>
                 <li><a href=""><span>EXO VALUES</span></a></li>
             </ul>
         </div>
         <div class="col-3">
             <div class="link-cat" onclick="footerToggle(this)">
                 <span class="footer-toggle"></span>
                 <span class="footer-cat">Careers</span>
             </div>
             <ul class="footer-cat-links">
                 <li><a style={{}} href=""><span>Terms Of Use</span></a></li>
                 <li><a href=""><span>Booking Conditions</span></a></li>
                 <li><a href=""><span>ECommerce</span></a></li>
                 <li><a href=""><span>Privacy Policy</span></a></li>
                 <li><a href=""><span>Club</span></a></li>
             </ul>
         </div>
         <div class="col-3">
             <div class="link-cat" onclick="footerToggle(this)">
                 <span class="footer-toggle"></span>
                 <span class="footer-cat">Follow us</span>
             </div>
             <ul class="footer-cat-links">
                 <li><a href=""><span>Facebook</span></a></li>
                 <li><a href=""><span>Twitter</span></a></li>
                 <li><a href=""><span>Linkdin</span></a></li>
                 <li><a href=""><span>Instagram</span></a></li>
             </ul>
         </div>
         <div class="col-3" id="newsletter">
             <span>Stay Connected</span>
             <form id="subscribe">
                 <input type="email" id="subscriber-email" placeholder="Enter Email Address"/>
                 <input type="submit" value="Subscribe" id="btn-scribe"/>
             </form>
             
             <div class="social-links social-2">
              
             </div>

             <div id="address">
                 
             </div>
             
         </div>
       
    </div>
    <div id="copyright">
        &copy; 2000-22 EXO TRAVEL ALL RIGHTS RESERVED
    </div>
    <div id="owner">
      
    </div>
 </footer>

    </>
  )
}

export default Footer