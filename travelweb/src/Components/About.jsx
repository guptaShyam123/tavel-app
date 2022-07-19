
import './about.css'
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { AppBar, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Slide, Bounce } from "react-awesome-reveal";



const StyledAppbar = styled(AppBar)(({ theme }) => ({

  height: '10vh',
  backgroundColor: '#18ffff'


}));

const StyleLink = styled("div")(({ theme }) => ({
  display: 'flex',
  marginLeft: '30px',
  marginTop: '-25px',
  ' & h1': {
    color: 'black',
    fontSize: '30px',

  }

}));

const Stylepara = styled("div")(({ theme }) => ({
  marginTop: '50px',
  marginLeft: '40vh',
  display: 'flex',
  ' & button ': {
    color: 'black',
    marginLeft: '10px',
    height: '30px',
    cursor: 'pointer',
    fontWeight: 'bolder',
  },




}))

const StyleAbout = styled("div")(({ theme }) => ({



  ' & p': {
    color: '#5e6163',
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'myFont, Raleway, sans-serif',
    fontSize: '30px',
    
  },
  ' & h2': {
    fontFamily: 'Raleway, sans-serif',
    display: 'flex', 
    color: '#5e6163',
    fontSize: '22px',
    marginLeft:'300px',
    marginRight:'300px'
  },



  [theme.breakpoints.down("md")]: {

    ' & p': {
      fontSize: '18px',
      marginTop: '20px'
    },
    ' & hr': {
      width: '30vw'
    },
    ' & h2': {
      fontSize: '18px',
      marginTop: '20px',
      fontFamily: 'Raleway , sans-serif',
      textAlign: 'center',

      justifyContent: 'center',
      margin: ' 0 auto'

    }


  }






}))


const StyleVideo = styled("div")(({ theme }) => ({

  ' & video ': {
    marginTop: '30px',
    width: "550px",
    height: '500px',
    borer: 'hidden',
    borderRadius: '10px'
  }
}))

const Stylelogo = styled("div")(({ theme }) => ({
  marginTop: '30px',
  ' & img': {
    height: '70px',
    width: '70px'
  },

  [theme.breakpoints.down("md")]: {
    marginTop: '-30px'


  }



}))

const Stylelogos = styled("div")(({ theme }) => ({
  ' & h2': {
    textAlign: 'center',
    fontFamily: 'Railway , sans-serif',
    fontWeight: 'normal',
    collor: 'medium'
  },
  '& p': {

    display: 'flex', 
    fontSize: '25px',
    fontFamily: 'Railway sans-serif',
    color: '#212121',
    marginLeft:'300px',
    marginRight:'300px'

  },
  [theme.breakpoints.down("md")]: {

    ' & p': {
      fontSize: '22px',

      textAlign: 'center',

      justifyContent: 'center',
      margin: ' 0 auto'
    }

  }


}))

const StyleImages = styled("div")(({ theme }) => ({
  marginTop: '60px',
  ' & img': {
    width: '100%'
  },

  [theme.breakpoints.down("md")]: {
    ' & img': {
      marginTop: '40px',
      textAlign: 'center',
      borderRadius: '20px',
      justifyContent: 'center',
      margin: ' 0 auto',
      height: '250px',
      width: '100%'
    },



  }




}))



const Stylelogos1 = styled("div")(({ theme }) => ({
  marginTop: '50px',
  ' & h2': {
    textAlign: 'center',
    fontFamily: 'Railway , sans-serif',
    fontWeight: 'normal',
    collor: 'medium',
  },
  '& p': {

    display: 'flex', marginLeft:'400px',marginRight:'400px',
    fontSize: '25px',
    fontFamily: 'Railway sans-serif',
    color: '#212121'
  },
  [theme.breakpoints.down("md")]: {

    ' & h2': {
      fontSize: '20px'
    },
    '& hr': {
      width: '30px'
    },
    ' & p': {

      textAlign: 'center',

      justifyContent: 'center',
      margin: ' 0 auto',
      fontSize: '20px'

    }

  }



}))

const Stylelatest = styled("div")(({ theme }) => ({
  backgroundColor: '#eeeeee',
  height: '600px',

  marginTop: '30px',

  ' & p': {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'Raleway , sans-serif',
    padding: '10px'
  },
  ' & h3': {
    textAlign: 'center', justifyContent: 'center',
   marginTop:'30px',
   fontFamily:'Railway , sans-serif',
   fontSize:'20px',
   color:'gray',
   marginLeft:'20vw',
   marginRight:'20vw',
   marginTop:'30px',
   display:'flex',

  },

  [theme.breakpoints.down("md")]: {

    borderRadius: '20px',
    height: '1310px',

    ' & p': {
      marginTop: '40px',
      fontSize: '20px',
      padding: '15px'
    },
    ' & h3': {
      fontSize: '20px',
      textAlign: 'center',
      margin: '0 auto',
      padding: '10px'
    }
  }

}))

const Styledsec = styled("div")(({ theme }) => ({

  ' & h2': {
    textAlign: 'center',
    fontFamily: 'Raleway , sans-serif',
  }

}))

const Styledescn = styled("div")(({ theme }) => ({

  ' & p': {
    textAlign: 'center',
    fontFamily: 'Raleway , sans-serif',
    fontSize: '10px'
  }

}))

const Stylevv = styled("div")(({ theme }) => ({
  marginTop: '-30px',
  ' & video': {
    width: '60%',
    height: '60%', marginTop: '70px',

  },

  [theme.breakpoints.down("md")]: {
    margin: '0 auto',

    ' & video ': {
      height: '350px',
      width: '100%',
      marginTop: '5px',
      justifyContent: 'center',
      alignItems: 'center',



    }
  }


}))

const Stylei = styled("div")(({ theme }) => ({


  ' & img': {
    width: '100%', height: '40vh', marginTop: '68px', fontStyle: 'Railway sans-serif',

  },
  [theme.breakpoints.down("md")]: {

    display: 'block',
    marginTop: '100px',


    ' img': {
      height: '300px',
      width: '100%',
      display: 'flex',



    }

  },



}))

const Stylebo = styled("div")(({ theme }) => ({

  [theme.breakpoints.down("md")]: {

    marginTop: '20px'


  }



}))

const Stylebb = styled("div")(({ theme }) => ({

  marginTop: '20px'
}))

const Stylefb = styled("div")(({ theme }) => ({

  [theme.breakpoints.down("md")]: {


    width: '200px',
    alignItems: 'center',

    margin: '0 auto',
    padding: '20px'

  }

}))

const Styleimo = styled("div")(({ theme }) => ({

  display: 'flex', justifyContent: 'space-evenly',

  
  ' & img': { 
    height: '200px',
    width: '100px'
  },
  [theme.breakpoints.down("md")]: {

       
    display: 'grid',
    ' & img': {
        margin: ' 0 auto',
        width:'100px',
        height:'200px',
        borderRadius:'0'
    }

  }
}))


const About = () => {
  return (
    <>

      <StyledAppbar>
        <StyleLink>
          <h1></h1>
          <Stylepara>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>DESTINATIONS</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>TOUR STYLES</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>ABOUT</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>GROUPS</button>
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

      <Stylei>
        <img src="https://www.exotravel.com/assets/content/pages/header-aboutus-humanlogo.jpg" />
      </Stylei>


      <StyleAbout>
        <p>ABOUT EXO TRAVEL</p>

        <hr style={{
          color: '#5e6163',
          width: '15vw'
        }}></hr>

        <h2>Inspired by the life-altering vistas, charming cultures, and vibrant cities of Asia, EXO's vision has always been to empower others to discover the same 'magic of Asia' that began our journey some two decades ago.</h2>
      </StyleAbout>



      <Stylevv>
        <center><video style={{

        }} autoPlay loop muted>
          <source src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-coast-with-motorboats-and-a-pier-seen-from-the-5363-large.mp4" type="video/mp4" />
        </video></center>
      </Stylevv>




      <Stylelogo>
        <center><img src="https://www.exotravel.com/assets/img/top-page/icon-Responsible-01.png" /></center>
      </Stylelogo>

      <Stylelogos>
        <h2> OUR JOURNEY</h2>
        <hr style={{
          color: '#5e6163',
          width: '8vw'
        }}></hr>
        <center><p>From being the first foreign-owned company to receive a tourism operating license in Vietnam (1993) to opening our 10th country in 2017, our passion for travel in Asia has driven us to become one of the region's most reputable DMCs.</p></center>
        <Stylebo>
          <center><Button style={{ backgroundColor: '#2196f3', fontWeight: 'bolder' }} variant="contained">OUR STORY</Button></center>
        </Stylebo>
      </Stylelogos>

      <StyleImages>
        <img src="https://www.exotravel.com/assets/img/top-page/pic-aboutus-1.jpg" />
      </StyleImages>
      <Stylelogos1>
        <h2> PEOPLE WITH PASSION</h2>
        <hr style={{
          color: '#5e6163',
          width: '8vw'
        }}></hr>

        <p>Simply put, we love what we do. Our team of in-destination travel experts and locals throughout Asia all have one thing in common: an insatiable appetite and passion for travel, culture and adventure, and for empowering others to discover the same.</p>
        <Stylebb style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <Button sx={{ boxShadow: 4 }} style={{ backgroundColor: '#2196f3', fontWeight: 'bolder' }} variant="contained">OUR PEOPLE</Button>

          <Button sx={{ boxShadow: 4 }} style={{ backgroundColor: '#2196f3', fontWeight: 'bolder', marginLeft: '20px' }} variant="contained">DISCUS</Button>
        </Stylebb>
      </Stylelogos1>

      <Stylelatest>
        <p>WE HAVE MANY TALENTS</p>

        <hr style={{
          color: 'green',
          width: '25vw'
        }}></hr>

        <h3>From leisure and luxury to MICE and adventure, our in-country experts span all fields of travel and have something to offer everyone. Our knowledgeable specialists are constantly creating and curating to provide clients with the best travel experiences throughout Asia.</h3>

        <Stylefb>
          <center><Button style={{ backgroundColor: '#2196f3', color: 'white', fontWeight: 'bolder' }}>Why Travel With EXO</Button></center>
        </Stylefb>
        <Styleimo>

          <Card sx={{ borderRadius: '20px ', maxWidth: 345, marginTop: '40px', boxShadow: 4 }}>
            <CardActionArea>
              <CardMedia  style={{ width: '450px' }}
                component="img"
                height="200"

                image="https://images.unsplash.com/photo-1602510796786-228e3b009d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: 'gray', fontWeight: 'bolder' }} component="div">
                  OUR DESTINATIONS
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ borderRadius: '20px ', maxWidth: 345, marginTop: '40px', boxShadow: 4 }}>
            <CardActionArea>
              <CardMedia style={{ width: '450px' }}

                component="img"
                height="200"

                image="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: 'gray', fontWeight: 'bolder' }} component="div">
                  NATURE
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>


          <Card sx={{ borderRadius: '20px ', maxWidth: 345, marginTop: '40px', boxShadow: 4 }}>
            <CardActionArea>
              <CardMedia style={{ width: '450px' }}
                component="img"
                height="200"

                image="https://images.unsplash.com/photo-1597175421632-d53ff53813a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGFkdmVudHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: 'gray', fontWeight: 'bolder' }} component="div">
                  ADVENTURES
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>

        </Styleimo>
      </Stylelatest>

    </>

  )
}

export default About