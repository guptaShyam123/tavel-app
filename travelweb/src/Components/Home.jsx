import React from 'react'

import './home.css'
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { AppBar, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './Footer.css'




const StyledAppbar = styled(AppBar)(({ theme }) => ({

  height: '10vh',
  backgroundColor: 'transparent',


}));

const StyleLink = styled("div")(({ theme }) => ({
  display: 'flex',
  marginLeft: '30px',
  marginTop: '-25px',
  ' & h1': {
    color: 'white',
    fontSize: '50px',

  }

}));



const Stylepara = styled("div")(({ theme }) => ({
  marginTop: '50px',
  marginLeft: '40vh',
  display: 'flex',
  ' & button ': {
    color: 'white',
    marginLeft: '10px',
    height: '30px',
    cursor: 'pointer',
    fontWeight: 'bolder',
  },




}))

const StyleLiss = styled("div")(({ theme }) => ({
  height: '1000px',

  backgroundColor: '',
  ' & h2': {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bolder',
    fontFamily: 'Raleway , sans-serif'

  },
  ' & p': {
    display: 'flex', alignItems: 'center', justifyContent:'center', marginRight:'25vw',marginLeft:'25vw',  fontSize: '20px', fontFamily: 'Raleway , sans-serif', marginTop: '30px', color: 'black',
  },

  ' & img': {
    height: '250px',
    width: '350px'
  },


  [theme.breakpoints.down("md")]: {
    height: '100%',
    width: '100%',
    

    '  & p': {

      
      fontSize:'20px',
        margin:'0 auto',
      marginTop: '40px',
      marginLeft:'70px',
      marginRight:'70px',
      
    },

    ' & h2': {
      alignItems: 'center', justifyContent: 'center',
      margin: '0 auto',
      marginTop: '20px'
    }

  },

  [theme.breakpoints.only("lg")]: {
    height: '2200px',
    width: '100%',
    display: '0 auto'


  },



}))

const Imglist = styled("div")(({ theme }) => ({
  display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px',


  [theme.breakpoints.down("md")]: {
    display: 'grid',
  marginTop:'40px',
  marginLeft:'-30px',
     
    '& img': {
     margin:'0 auto',
      width: '100%',
      height: '100%',
     
      
    }

  },
  [theme.breakpoints.down("lg")]: {


    '& img': {
      height: '300px',
      width: '230px',
      padding: '10px',
      display: 'grid ',
      gridTemplateColumns: "auto auto",
      margin: '0 auto'
    }

  },


}))

const Imglists = styled("div")(({ theme }) => ({
  display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px',


  [theme.breakpoints.down("md")]: {
    display: 'grid',
    marginLeft: '-30px',


    '& img': {

      margin: '0 auto',
      padding: '20px'

    }

  },

  [theme.breakpoints.down("lg")]: {


    '& img': {
      height: '300px',
      width: '230px',
      padding: '10px',
      display: 'grid ',
      gridTemplateColumns: "auto auto",
      margin: '0 auto'
    }

  },


}))

const Styleh = styled("div")(({ theme }) => ({

  textAlign: 'center',
  fontFmaily: 'Railway , sans-serif',
  fontSize: '14px',
  color: '#5e6163',

  [theme.breakpoints.down("md")]:{

     '& h1':{
        fontSize:'20px',
        marginTop:'30px'
        
     }
  }

}))

const Stylepp = styled("div")(({ theme }) => ({
  textAlign: 'center',
 

  ' & p':{
fontSize:'22px',
textAlign: 'center', justifyContent: 'center',
color:'#444',
fontFmaily: 'Railway , sans-serif',
  },

  [theme.breakpoints.down("lg")]: {


    '& p': {
      margin: '0 auto',
      marginTop: '40px',
      alignItems: 'center',
      justifyContent: 'center',
    }

  },
 
  [theme.breakpoints.down("md")]:{
     ' & p':{
      margin:' 0 auto',
      alignItems: 'center',
      fontSize:'22px',
      marginLeft:'20px',
      marginRight:'20px',
      marginTop:'30px'
     }
  }
 
}))

const Styleinp = styled("div")(({ theme }) => ({

  ' & input': {
    height: '40px',
    width: '250px',
    color: 'black',
    border: '1px solid  black',
    fontSize: '20px'
  }

}))

const Stylevv = styled("div")(({ theme }) => ({

   top:0,
  [theme.breakpoints.down("md")]: {

    ' & video': {
      display: 'none'
    }
  }


}))


const StyleImage = styled("div")(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center'
  ,
  alignItems: 'center',

  [theme.breakpoints.down("md")]: {

    display: 'block',
    marginTop: '100px',


    ' img': {
      height: '300px',
      width: '400px',
      display: 'flex',
      margin: ' 0 auto',


    }

  },

  [theme.breakpoints.down("lg")]: {



    ' & img': {
      display: 'none'
    }
  }



}))

const StyleButton = styled("button")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#55b493",
  border: "none",
  color: "white",
  height: "5vh",
  width: '15vw',
  marginTop: '40px',

  "&:hover": {
    backgroundColor: "transparent",
    color: "#55b493",
    border: "1px solid #55b493",
    cursor: "pointer",
  },


  [theme.breakpoints.down("md")]: {

    ' & button':{
    marginTop: '80px',
    margin:'0 auto',
   fontSize:'50px'
    }
    

  }


}));
const Home = () => {
  return (
    <>

      <StyledAppbar>
        <StyleLink>
          <h1>EXO</h1>
          <Stylepara>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>DESTINATIONS</button>

            <button style={{ backgroundColor: 'transparent', border: 'none' }}>TOUR STYLES</button>

            <button style={{ backgroundColor: 'transparent', border: 'none' }}>ABOUT</button>

            <button to="/about" style={{ backgroundColor: 'transparent', border: 'none' }}>GROUPS</button>

            <button style={{ backgroundColor: 'transparent', border: 'none' }}>LUXE</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>ADVENTURE</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>EVENTS</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>RESPONSIBLE</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>BLOG</button>
            <button style={{ backgroundColor: 'transparent', border: 'none', backgroundColor: 'green' }}>ENQUIRE</button>
            <SearchIcon className='search' />

            <button className="a" style={{ backgroundColor: 'transparent', border: 'none', backgroundColor: '', width: '120px' }}>AGENT HUB</button>

          </Stylepara>
          <SearchIcon />
        </StyleLink>

      </StyledAppbar>

      <Stylevv>
        <center><video style={{


          width: '100%',
          
        }} autoPlay loop muted>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-travel-between-two-mountains-above-a-river-34164-large.mp4" type="video/mp4" />
          
        </video></center>

      </Stylevv>
      <StyleImage>
        <img src="https://images.unsplash.com/photo-1630386519709-c33c5041b948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxmb3VudGFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </StyleImage>
      <center>


        <img style={{ height: '80px', width: '80px', }} src="https://www.exotravel.com/assets/img/top-page/icon-place-we-love.svg" />
      </center>
      <StyleLiss>
        <center><h2 style={{}}>HOME TOUR</h2></center>
        <hr style={{ width: '17vw' }}></hr>
        <p>Here at ROVE, we're all travellers at heart. This is reflected in the exciting and immersive range of tours across Asia we've meticulously crafted. Here's a shortlist of tours we're especially proud of to fuel some wanderlust.</p>

            
        <Imglist >

          <img style={{ marginLeft: '30px' }}
            src="https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFsYXlzaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

          />
          <img style={{ marginLeft: '30px' }}
            src="https://media.istockphoto.com/photos/aerial-view-of-putra-mosque-with-putrajaya-city-centre-with-lake-at-picture-id1249185397?b=1&k=20&m=1249185397&s=170667a&w=0&h=KWfhkkadMqgRJBkslPCVJuEirT1yAWPIoRNga8oayRE="

          />
          <img style={{ marginLeft: '30px' }}
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRoYWlsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

          />

        </Imglist>

        <Imglists >
                            
          <img style={{ marginLeft: '30px' }}
            src="https://images.unsplash.com/photo-1516815231560-8f41ec531527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

          />
          <img style={{ marginLeft: '30px' }}
            src="https://images.unsplash.com/photo-1530660877224-1cb26c2acea5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

          />
          <img style={{ marginLeft: '30px' }}
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRoYWlsYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

          />

                
        </Imglists>

        <center><StyleButton>
          CHECK
        </StyleButton>
        </center>

        <Styleh><h1>SUBSCRIBE TO OUR HOME PAGE</h1></Styleh>
        <Stylepp>
          <p>The world of ROVE Travel is always evolving. Stay in touch and we'll keep you up to speed!</p>
        </Stylepp>

       

      </StyleLiss>

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

export default Home