import React from 'react'
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import {  Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import imgs from '../Images/ss.png' 
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Styleim = styled("div")(({ theme }) => ({

  ' & img':{
    marginTop:'30px',

    
    [theme.breakpoints.down("lg")]: {
        margin:' 0 auto',
      
              '& img': {
              }
          
            },

  }
}))

const Stylepara = styled("div")(({ theme }) => ({
  ' & h1':{
    marginTop:'30px',
    textAlign: 'center',
    letterSpacing:'1px',
    color:'#444'
  }

}))
const Styleparao  = styled("div")(({ theme }) => ({
   textAlign: 'center', justifyContent: 'center',
   marginTop:'30px',
   fontFamily:'Railway , sans-serif',
   fontSize:'25px',
   color:'gray',
   marginLeft:'20vw',
   marginRight:'20vw',
   marginTop:'30px',
   display:'flex',

}))

const Stylebutt= styled("div")(({ theme }) => ({
 

}))

const Stylei = styled("div")(({ theme }) => ({
  marginTop:'40px'
}))

const Styleimo = styled("div")(({ theme }) => ({

    display: 'flex', justifyContent: 'space-evenly',
  
  
    ' & img': { 
      height: '200px',
      width: '100px',
      
      
    },
    [theme.breakpoints.down("md")]: {
  
  
      display: 'grid',
      ' & img': {
          height:'200px',
          width:'100%'
      }
  
    },
    [theme.breakpoints.only("lg")]: {
  margin:' 0 auto',

        '& img': {
          height: '200px',
          width: '230px',
          padding: '10px',
          
          margin: '0 auto'
        }
    
      },

      [theme.breakpoints.down("lg")]: {
        margin:' 0 auto',
      
              '& img': {
                height: '200px',
                width: '230px',
                padding: '10px',
                
                margin: '0 auto'
              }
          
            },
  }))

  const Styleimg = styled("div")(({ theme }) => ({
   ' & img':{
    marginTop:'30px'
   }
  }))

  const Stylepar = styled("div")(({ theme }) => ({
      backgroundColor:'lightgray',
      height:'670px',
      width:'100%',
      

      ' & h1':{
        textAlign: 'center',
        color:'#444',
        fontFamily:"Railway , sans-serif",
        padding:'30px'
      },
      ' & p':{
        textAlign: 'center', justifyContent: 'center',
   marginTop:'30px',
   fontFamily:'Railway , sans-serif',
   fontSize:'25px',
   color:'#444',
   marginLeft:'20vw',
   marginRight:'20vw',
   marginTop:'30px',
   display:'flex',
      },

      [theme.breakpoints.down("md")]: {
  
         height:'1300px'
       
    
      }
  }))

  const Styleimgs = styled("div")(({ theme }) => ({
    display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '60px',

    ' & img':{
        height:'300px',
        width:'400px',
        boxShadow:4
    },
    [theme.breakpoints.down("md")]: {
  
  
        display: 'grid',
        ' & img': {
           padding:'10px',
           height:'200px',
           width:'100%',
           margin:' 0 auto',
           marginLeft:'-13px',
           marginRight:'13px'
        
          }
    
      },
        
      [theme.breakpoints.only("lg")]: {
        margin:' 0 auto',
      
              '& img': {
                height: '200px',
                width: '230px',
                padding: '10px',
                
                margin: '0 auto'
              }
          
            },

            [theme.breakpoints.down("lg")]: {
                margin:' 0 auto',
              
                      '& img': {
                        height: '200px',
                        width: '230px',
                        padding: '10px',
                        
                        margin: '0 auto'
                      }
                  
                                    },
  }))
  const Styleop = styled("div")(({ theme }) => ({
 marginTop:'30px'
  }))

  const Stylenew = styled("div")(({ theme }) => ({
   ' & img':{
    marginTop:'30px'
   }
  }))
  const Stylenew1 = styled("div")(({ theme }) => ({
    ' & h1':{
        textAlign:'center',
        color:'#404',
        fontFamily:'Railway , sans-serif'
        
    }
  }))

  const Stylenew2 = styled("div")(({ theme }) => ({
    textAlign: 'center', justifyContent: 'center',
   
   fontFamily:'Railway , sans-serif',
   fontSize:'25px',
   color:'gray',
   marginLeft:'20vw',
   marginRight:'20vw',
   marginTop:'10px',
   display:'flex',

  }))

  const Stylenew3 = styled("div")(({ theme }) => ({
    
    [theme.breakpoints.down("md")]: {
  
  
      
        ' & img': {
             
          display:'none'
          
        
        }
    
      },

      
      [theme.breakpoints.down("lg")]: {
        margin:' 0 auto',
      
        ' & img':{
            width:'700px'
        }
        
          
            },



  }))

  const StyleTypography = styled("div") (({ theme }) => ({

  }))

  const Stylepp = styled("div") (({ theme }) => ({

    textAlign: 'center', justifyContent: 'center',
    marginTop:'30px',
    fontFamily:'Railway , sans-serif',
    fontSize:'25px',
    color:'gray',
    marginLeft:'20vw',
    marginRight:'20vw',
    marginTop:'30px',
    display:'flex',
 


}))

const Styledesign = styled("div") (({ theme }) => ({
  
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

}))

const Styleimh = styled("div") (({ theme }) => ({
    ' & img':{
        height:'80px',
        width:'80px'
    },
    
  


}))

const Stylenewd = styled("div")(({ theme }) => ({
    color:'#444'
}))
 
const myanmar = () => {
  return (
    <>
    <Styleim>
  <center> 
  <img src="https://www.exotravel.com/assets/content/destinations/images/flag-myanmar.png" />
   </center>
    </Styleim>

    <Stylepara>
  <h1>MYANMAR TOURS</h1>

  <hr style={{
    color: '#5e6163',
    width: '16vw',
    fontSize:'700',
    fontWeight:'bolder'
  }}></hr>
    </Stylepara>
    <Styleparao>
    <p>Myanmar lends itself well to epics. Snaking sinuously down from the Chinese border to the Gulf of Thailand, its bounty of towering peaks, emerald green paddies, seemingly endless white sand beaches and deep roots in the past offer enough mystic allure to satiate the thirsts of any traveller.</p>
    </Styleparao>
    <Stylebutt>
<center><Button variant="contained" sx={{boxShadow:4 , backgroundColor:'#097dd5' , color:'white' , fontWeight:'bolder'}}>Watch Video</Button></center>
    </Stylebutt>

    <div style={{marginTop:'20px'}}>
    <Styleimo>

    <Card sx={{ borderRadius: '20px ', maxWidth: 345, marginTop: '40px', boxShadow: 4 }}>
      <CardActionArea>
        <CardMedia  style={{ width: '450px' }}
          component="img"
          height="200"
         
          image="https://images.unsplash.com/photo-1590498418987-aa4e1e0d2b94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fG15YW5tYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={{ color: 'gray', fontWeight: 'bolder' }} component="div">
        MYANMAR
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ borderRadius: '20px ', maxWidth: 345, marginTop: '40px', boxShadow: 4 }}>
      <CardActionArea>
        <CardMedia style={{ width: '450px' }}
          component="img"
          height="200"

          image="https://images.unsplash.com/photo-1587019724761-4fd2a057d975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxteWFubWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={{ color: 'gray', fontWeight: 'bolder' }} component="div">
            MYANMAR
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>


    <Card sx={{ borderRadius: '20px ', maxWidth: 345, marginTop: '40px', boxShadow: 4 }}>
      <CardActionArea>
        <CardMedia style={{ width: '450px' }}
          component="img"
          height="200"

          image="https://images.unsplash.com/photo-1605134789226-f095e700944d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHJpdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={{ color: 'gray', fontWeight: 'bolder' }} component="div">
            MYANMAR
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>

  </Styleimo>
  </div>

  <Stylei>
  <center><Button variant="contained" sx={{boxShadow:4 , backgroundColor:'#097dd5' , color:'white' , fontWeight:'bolder'}}>View More</Button></center>
  </Stylei>
  <Styleimg>
  <center><img src="https://www.exotravel.com/assets/img/top-page/icon-hotels.png" /></center>
  </Styleimg>

  <Stylepar>
  
   <h1>HOTELS</h1>
   <p>Whether you're looking for a sublime beachside resort, remote boutique getaway or anything in between, we've found the very best accomodation to suit your needs and included them in our list of preferred best Hotels in Vietnam.</p>
  
   <Styleimgs>
     <img src="https://images.unsplash.com/photo-1612258000416-4954d59f98c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQwfHxteWFubWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>

     <img src="https://images.unsplash.com/photo-1550310035-0a2dfcc82527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxteWFubWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>

     <img src="https://images.unsplash.com/photo-1605198427337-8b2059682a47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQwfHxteWFubWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
   </Styleimgs>
   <Styleop>
   <center><Button variant="contained" sx={{boxShadow:4 , backgroundColor:'#097dd5' , color:'white' , fontWeight:'bolder'}}>View More</Button></center>
   </Styleop>
   </Stylepar>
   <Stylenew>
   <center><img src="https://www.exotravel.com/assets/img/top-page/icon-weather.png"/></center>
   </Stylenew>
   <Stylenew1>
   <h1>WEATHER HERE</h1>
   </Stylenew1>
   <Stylenew2>
   <p>Vietnam's weather ranges from a familiar four-season system in the north to eternal summer in the south. Because of regional variation, there are pleasant places to visit in Vietnam throughout the year. 
   </p>
   </Stylenew2>
   <Stylenew3>
   <center><img src={imgs}/></center>
   </Stylenew3>

   <StyleTypography>

   <Styleimh>
   <center><img src="https://www.exotravel.com/assets/img/top-page/icon-all-social.svg" /></center>
   </Styleimh>
    <Stylenewd>
   <center><h2>LET'S GETS SOCIAL</h2></center>
   </Stylenewd>
   <Stylepp>
     <Typography variant='p'>For inspiring experiences, real-time updates, the latest trends or casual conversation, explore our social networks for all things travel.</Typography>
   </Stylepp>
   <Styledesign>
     <FacebookOutlinedIcon style={{ height: '50px', width: '50px', backgroundColor: 'lightgreen' }} />
     <YouTubeIcon style={{ height: '50px', width: '50px', marginLeft: '30px', backgroundColor: 'lightgreen' }} />
   </Styledesign>
 </StyleTypography>
    </>
  )
}

export default myanmar