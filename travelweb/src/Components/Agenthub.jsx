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
  width: 670,
  height: 700,

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
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>


              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Accordion sx={{ boxShadow: 'none', }}>
                  <div style={{}}>
                    <center><AccordionSummary 
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ color: 'black', fontWeight: 'bolder', fontFamily: 'revert-layer' ,  }}>Please login to access the full Agent Hub</Typography>
                    </AccordionSummary>
                    </center>
                  </div>
                  <AccordionDetails>
                        
<Stylebot>
                    <Typography style={{ color: 'black', fontWeight: 'bolder' }} id="modal-modal-title" variant="h6" component="h2">


          <form onSubmit={postdatas}>
                      <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                        <div style={{ marginTop: '20px', display: 'grid' }}>
                          <label>Email Address</label>
                          <input  onChange={(e) => setEmail(e.target.value)} style={{ width: '10vw', height: '32px' }} type="email" />
                        </div>
                        <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                          <label>password</label>
                          <input  onChange={(e) => setPassword(e.target.value)} style={{ width: '10vw', height: '32px', }} type="password" />
                        </div>
                        <div style={{ marginTop: '40px', display: 'grid', marginLeft: '10px' }}>

                          <button  type="submit" sx={{ boxShadow: 4, width: '13vw', borderRadius: '10px', backgroundColor: '#f44336', color: 'white', fontWeight: 'bolder' }}>LOGIN</button>

                        </div>

                      </div>
                      </form>
                      <center><p style={{fontSize:'15px'}}>You can register here</p></center>
                      <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                       
                        <div style={{ marginTop: '20px', display: 'grid' }}>
                          <label>Name</label>
                          <input style={{ width: '10vw', height: '32px' }} type="text" />
                        </div>
                        <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                          <label>password</label>
                          <input style={{ width: '10vw', height: '32px', }} type="text" />
                        </div>
                        <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                          <label>Email</label>
                          <input style={{ width: '10vw', height: '32px', }} type="text" />
                        </div>

                      </div>
                      <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                        <div style={{ marginTop: '20px', display: 'grid' }}>
                          <label>Zip/Post</label>
                          <input style={{ width: '10vw', height: '32px' }} type="text" />
                        </div>
                        <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                          <label>Company Name</label>
                          <input style={{ width: '10vw', height: '32px', }} type="text" />
                        </div>
                        <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                          <label>City</label>
                         
                           <input style={{ width: '10vw', height: '32px', }} type="text" />
                        </div>
                      </div>
                      <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                        <div style={{ marginTop: '20px', display: 'grid' }}>
                          <label>Country</label>
                          <select style={{ width: '10vw', height: '36px' }} name="cars" id="cars">
                            <option value="volvo">Asia</option>
                            <option value="saab">Japan</option>
                            <option value="mercedes">Vietnam</option>
                            <option value="audi">Indonasia</option>
                            <option value="audi">Thailand</option>
                          </select>

                        </div>

                        <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                          <label>Travel Agency</label>
                          <input style={{ width: '17vw', height: '32px', }} type="text" />

                        </div>
                      </div>


                      <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                        <div style={{ marginTop: '20px', display: 'grid' }}>
                          <label>Address</label>
                          <input style={{ width: '17vw', height: '32px' }} type="text" />
                        </div>
                        <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                          <label>State</label>
                          <input style={{ width: '10vw', height: '32px', }} type="text" />
                        </div>
                      </div>

                     
                     
                      <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                          <Button sx={{ boxShadow: 4, width: '20vw', backgroundImage: 'linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)', color: 'white', fontWeight: 'bolder' }}>Submit</Button>
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