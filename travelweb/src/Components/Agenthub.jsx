import React from 'react'
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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 670,
  height: 685,

  border: '1px solid #000',


  backgroundColor: 'white',
  fontFamily: 'Raleway , sans-serif',

  p: 4,


};

const Contactus = () => {

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
            <button onClick={handleOpen} style={{ backgroundColor: 'transparent', border: 'none', backgroundColor: 'green' }}>ENQUIRE</button>
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
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography style={{ color: 'black', fontWeight: 'bolder', fontFamily: 'revert-layer' }}>Please login to access the full Agent Hub</Typography>
                      </AccordionSummary>
                    </div>
                    <AccordionDetails>
                      <Typography style={{ color: 'black', fontWeight: 'bolder' }} id="modal-modal-title" variant="h6" component="h2">




                        <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                          <div style={{ marginTop: '20px', display: 'grid' }}>
                            <label>Email Address</label>
                            <input style={{ width: '13vw', height: '32px' }} type="text" />
                          </div>
                          <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                            <label>password</label>
                            <input style={{ width: '13vw', height: '32px', }} type="text" />
                          </div>
                          <div style={{ marginTop: '40px', display: 'grid', marginLeft: '10px' }}>

                            <Button sx={{ boxShadow: 4, width: '13vw', borderRadius: '10px', backgroundColor: '#f44336', color: 'white', fontWeight: 'bolder' }}>LOGIN</Button>

                          </div>

                        </div>

                        <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                          <div style={{ marginTop: '20px', display: 'grid' }}>
                            <label>Name</label>
                            <input style={{ width: '13vw', height: '32px' }} type="text" />
                          </div>
                          <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                            <label>Last Name</label>
                            <input style={{ width: '13vw', height: '32px', }} type="text" />
                          </div>
                          <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                            <label>Fullname</label>
                            <input style={{ width: '13vw', height: '32px', }} type="text" />
                          </div>

                        </div>
                        <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                          <div style={{ marginTop: '20px', display: 'grid' }}>
                            <label>Zip/Post</label>
                            <input style={{ width: '13vw', height: '32px' }} type="text" />
                          </div>
                          <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                            <label>Company Name</label>
                            <input style={{ width: '13vw', height: '32px', }} type="text" />
                          </div>
                          <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                            <label>City</label>
                            <select style={{ width: '13vw', height: '36px' }} name="cars" id="cars">
                              <option value="volvo">Rajasthan</option>
                              <option value="saab">Saab</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Audi</option>
                            </select>
                          </div>
                        </div>
                        <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                          <div style={{ marginTop: '20px', display: 'grid' }}>
                            <label>Travel Network</label>
                            <select style={{ width: '13vw', height: '36px' }} name="cars" id="cars">
                              <option value="volvo">Asia</option>
                              <option value="saab">Saab</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Audi</option>
                            </select>

                          </div>

                          <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                            <label>Travel Agency</label>
                            <input style={{ width: '19vw', height: '32px', }} type="text" />

                          </div>
                        </div>


                        <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                          <div style={{ marginTop: '20px', display: 'grid' }}>
                            <label>Address</label>
                            <input style={{ width: '20vw', height: '32px' }} type="text" />
                          </div>
                          <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                            <label>State/Province</label>
                            <input style={{ width: '13vw', height: '32px', }} type="text" />
                          </div>
                        </div>

                        <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                          <div style={{ marginTop: '20px', display: 'grid' }}>
                            <label>Telephone</label>
                            <input style={{ width: '13vw', height: '32px' }} type="text" />
                          </div>
                          <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                            <label></label>Company Website
                            <input style={{ width: '20vw', height: '32px', }} type="text" />
                          </div>
                        </div>
                        <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                            <label>Telephone No.</label>
                            <input style={{ width: '20vw', height: '32px', }} type="text" />
                          </div>
                        </div>
                        <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ marginTop: '20px', display: 'grid', marginLeft: '10px' }}>
                            <Button sx={{ boxShadow: 4, width: '20vw', backgroundImage: 'linear-gradient(160deg, rgb(0, 147, 233) 0%, rgb(128, 208, 199) 100%)', color: 'white', fontWeight: 'bolder' }}>Submit</Button>
                          </div>
                        </div>


                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                </Typography>
              </Box>
            </Modal>

            <SearchIcon className='search' />
            <button onClick={handleOpen} className="a" style={{ backgroundColor: 'transparent', border: 'none', backgroundColor: '', width: '120px' }}>AGENT HUB</button>
          </Stylepara>
          <SearchIcon />
        </StyleLink>

      </StyledAppbar>


    </>
  )
}

export default Contactus