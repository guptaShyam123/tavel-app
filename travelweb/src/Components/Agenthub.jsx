import React, { useState } from 'react'
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { AppBar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import travel from '../Images/travel.webp'
import './Contactus.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import axios from 'axios'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import im from '../Images/osm.png'



import './Contactus.css'



const StyledAppbar = styled(AppBar)(({ theme }) => ({

  height: '10vh',
  backgroundColor: '#00e5ff',


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

const Stylebot = styled("div")(({ theme }) => ({
   marginTop:'-29px'
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 680,
  height: 600,

  border: '1px solid #000',


  backgroundColor: 'white',
  fontFamily: 'Raleway , sans-serif',

  p: 4,


};

const Contactus = () => {

  
  const [email, setEmail] = useState('')
  const [password , setPassword] = useState('')


  const postdatas = async (e) => {

    e.preventDefault()
    const {data} = await axios.post("http://localhost:4000/api/v1/logins1", {
      email, password,
    },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }

    );

    console.log(data)

  }

  
const Stylell = styled("div")(({ theme }) => ({

  marginTop: '20px', display: 'grid',

  ' & input': {
    width: '13vw', height: '32px'
  },

  [theme.breakpoints.down("md")]: {

    ' & input': {
      width: '200px',
      margin: ' 0 auto',
      height:'30px'
    }

  }
}))

const Stylello = styled("div")(({ theme }) => ({


  marginTop: '20px', display: 'grid', marginLeft: '10px',

  ' & input': {
    width: '13vw', height: '32px'
  },
  [theme.breakpoints.down("md")]: {
    ' & input': {
      margin: '0 auto',
      width: '200px',
      marginLeft: '-8px',
      height:'30px'

    },





  }

}))

const Styleppt = styled("div")(({ theme }) => ({

  marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center',


  [theme.breakpoints.down("md")]: {
    display: 'grid',

    ' & input': {
      width: '200px',

    }
  }




  }))

  
const Stylelll = styled("div")(({ theme }) => ({

  marginTop: '20px', display: 'grid',

  ' & input': {
    width: '13vw', height: '32px'
  },

  [theme.breakpoints.down("md")]: {

    ' & input': {
      width: '200px',
      margin: ' 0 auto',
      height:'30px'
    }

  }
}))


const Stylelloo = styled("div")(({ theme }) => ({

  marginTop: '20px', display: 'grid',
  marginLeft:'10px',

  ' & input': {
    width: '13vw', height: '32px'
  },

  [theme.breakpoints.down("md")]: {

    ' & input': {
      width: '200px',
      margin: ' 0 auto',
      height:'30px'
    }

  }
}))


const Stylellp = styled("div")(({ theme }) => ({

  marginTop: '20px', display: 'grid',marginLeft:'10px',

  ' & input': {
    width: '13vw', height: '32px'
  },

  [theme.breakpoints.down("md")]: {

    ' & input': {
      width: '200px',
      margin: ' 0 auto',
      height:'30px'
    }

  }
}))

const Styleppts = styled("div")(({ theme }) => ({

  marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center',
 

  ' & input': {
    width: '13vw', height: '32px'
  },

  [theme.breakpoints.down("md")]: {
    display: 'grid',

    ' & input': {
      width: '200px',

    }
  }
}))

const Styleonea = styled("div")(({ theme }) => ({

  marginTop: '20px', display: 'grid',

  ' & input': {
    width: '13vw', height: '32px'
  },

  [theme.breakpoints.down("md")]: {

    ' & input': {
      width: '200px',
      margin: ' 0 auto',
      height:'30px'
    }

  }

}))

const Styletwo = styled("div")(({ theme }) => ({

     
  marginTop: '20px', display: 'grid', marginLeft: '10px',

  ' & input': {
    width: '13vw', height: '32px'
  },
  [theme.breakpoints.down("md")]: {
    ' & input': {
      margin: '0 auto',
      width: '200px',
      marginLeft: '-8px',
      height:'30px'

    },





  }

}))

const Stylethr = styled("div")(({ theme }) => ({

     
  marginTop: '20px', display: 'grid', marginLeft: '10px',

  ' & input': {
    width: '13vw', height: '32px'
  },
  [theme.breakpoints.down("md")]: {
    ' & input': {
      margin: '0 auto',
      width: '200px',
      marginLeft: '-8px',
      height:'30px'

    },
  }


}))

const Styleone = styled("div")(({ theme }) => ({
  marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center',
 

  ' & input': {
    width: '13vw', height: '32px'
  },

  [theme.breakpoints.down("md")]: {
    display: 'grid',

    ' & input': {
      width: '200px',

    }
  }

}))


const Stylefirts = styled("div")(({ theme }) => ({

  marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center',
  [theme.breakpoints.down("md")]: {
    display: 'grid',

  }

}))

const Stylesec = styled("div")(({ theme }) => ({

  marginTop: '20px', display: 'grid',

  ' & input': {
    width: '13vw', height: '32px', marginLeft:'10px'
  },

  [theme.breakpoints.down("md")]: {

    ' & input': {
      width: '200px',
      margin: ' 0 auto',

    }

  }

}))

const Stylethi = styled("div")(({ theme }) => ({

  marginTop: '20px', display: 'grid', marginLeft: '10px',

  ' & select': {
    width: '13vw', height: '39px'
  },
  [theme.breakpoints.down("md")]: {
    ' & select': {
      margin: '0 auto',
      width: '200px',
      marginLeft: '-8px'
    }



  }


}))


     
  



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            <button  style={{ backgroundColor: 'transparent', border: 'none', backgroundColor: 'green' }}>ENQUIRE</button>
            

            <SearchIcon className='search' />
           
           
            <button onClick={handleOpen} className="a" style={{ backgroundColor: 'transparent', border: 'none', backgroundColor: '', width: '120px' }}>AGENT HUB</button>
         
            <Modal style={{height:'600px' , marginTop:'100px'}}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
        

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             
                <Accordion sx={{ boxShadow: 'none' 
              
             }}>
                
                  <div style={{}}>
                    <center><AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    > 
                      <Typography sx={{ color: '#444', fontWeight: 'bolder' , fontSize:'20px'}}>Please login to access the full Agent Hub</Typography>
                    </AccordionSummary>
                    </center>
                  </div>
                  <AccordionDetails>
                        
<Stylebot>
                    <Typography style={{ color: 'black', fontWeight: 'bolder' }} id="modal-modal-title" variant="h6" component="h2">

                    
          <form onSubmit={postdatas}>
          
                      <Styleppt >

                        <Stylell>
                          <label> Email Address </label>
                          <input  onChange={(e) => setEmail(e.target.value)}  type="email" />
                        </Stylell>
                        <Stylello >
                          <label>password</label>
                          <input  onChange={(e) => setPassword(e.target.value)}  type="password" />
                        </Stylello>
                        <div style={{ marginTop: '40px', display: 'grid', marginLeft: '10px' }}>

                          <button  type="submit" style={{  width: '13vw',  backgroundColor: '#26a69a' ,color: 'white', fontWeight: 'bolder', height:'40px' , border:'none' }}>LOGIN</button>

                        </div>

                      </Styleppt>
                      </form>
                      <center><p style={{fontSize:'20px' , color:''}}>You can register here</p></center>
                      <Styleppts >

                       
                        <Stylelll>
                          <label>Name</label>
                          <input  type="text" />
                        </Stylelll>
                        <Stylelloo>
                          <label>password</label>
                          <input  type="text" />
                        </Stylelloo>
                        <Stylellp >
                          <label>Email</label>
                          <input type="text" />
                        </Stylellp>

                      </Styleppts>
                      <Styleone >

                        <Styleonea >
                          <label>Zip/Post</label>
                          <input  type="text" />
                        </Styleonea>
                        <Styletwo >
                          <label>Company Name</label>
                          <input  type="text" />
                        </Styletwo>
                        <Stylethr >
                          <label>City</label>
                         
                           <input  type="text" />
                        </Stylethr>
                      </Styleone>
                      <Stylefirts >

                        <Stylethi >
                          <label>Country</label>
                          <select  name="cars" id="cars">
                            <option value="volvo">Asia</option>
                            <option value="saab">Japan</option>
                            <option value="mercedes">Vietnam</option>
                            <option value="audi">Indonasia</option>
                            <option value="audi">Thailand</option>
                          </select>

                        </Stylethi>

                        <Stylesec >
                          <label>Travel Agency</label>
                          <input  />

                        </Stylesec>
                      </Stylefirts>


                    

                     
                     
                      <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                          <Button variant="contained"  sx={{ boxShadow: 4, width: '20vw', backgroundColor: '#26a69a' ,color: 'white', fontWeight: 'bolder' }}>Submit</Button>
                        </div>
                      </div>

                           
                    </Typography>
                    </Stylebot>
                  </AccordionDetails>
                  
                </Accordion>
  
              </Typography>
              
              
            </Box>
          </Modal>
        
            </Stylepara>
          <SearchIcon />
        </StyleLink>

      </StyledAppbar>


    </>
  )
}

export default Contactus