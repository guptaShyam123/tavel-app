import React, { useState } from 'react'
import { useTheme } from "@mui/material/styles";
import { styled, alpha } from "@mui/system";
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
import axios from 'axios'

import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import InputBase from '@mui/material/InputBase';
import DirectionsIcon from '@mui/icons-material/Directions';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';

import Paper from '@mui/material/Paper';



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
  width: 600,
  height: 700,

  border: '1px solid #000',


  backgroundColor: 'white',
  fontFamily: 'Lato, sans-serif',

  p: 4,



};

const styleo = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 500,

  border: '1px solid #000',


  backgroundColor: 'whitesmoke',
  fontFamily: 'Lato, sans-serif',

  p: 4,



};

const Stylelll = styled("div")(({ theme }) => ({

  marginTop: '20px', display: 'grid',

  ' & input': {
    width: '13vw', height: '32px'
  },

  [theme.breakpoints.down("md")]: {

    ' & input': {
      width: '200px',
      margin: ' 0 auto',

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



}));

const Stylefirts = styled("div")(({ theme }) => ({

  marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center',
  [theme.breakpoints.down("md")]: {
    display: 'grid',

  }

}))

const Stylesec = styled("div")(({ theme }) => ({

  marginTop: '20px', display: 'grid',

  ' & input': {
    width: '13vw', height: '32px'
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

const Stylepho = styled("div")(({ theme }) => ({

  marginTop: '22px', display: 'grid', fontSize: '15px', alignItems: 'center', justifyContent: 'center',

  ' & input': {
    width: '27vw', height: '32px'
  },

  [theme.breakpoints.down("md")]: {

    ' & input': {
      width: '200px',
      margin: ' 0 auto',

    }

  }
}))

const Stylesel = styled("div")(({ theme }) => ({


  marginTop: '5px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center'

}))

const Styleselt = styled("div")(({ theme }) => ({
  marginTop: '10px', display: 'grid',

  ' & select': {
    width: '27vw', height: '39px'
  },
  [theme.breakpoints.down("md")]: {

    ' & select': {
      width: '200px',
      margin: ' 0 auto',

    }

  }
}))

const Styleenq = styled("div")(({ theme }) => ({

  marginTop: '20px', display: 'grid', fontSize: '15px', alignItems: 'center', justifyContent: 'center',

  ' & input': {
    width: '20vw', height: '60px'
  },

  [theme.breakpoints.down("md")]: {

    ' & input': {
      width: '200px',
      height: '30px;'

    }

  }

}))

const Stylebut = styled("div")(({ theme }) => ({

  marginTop: '40px'
}))

const Stylepop = styled("div")(({ theme }) => ({

  height: '700px',
  [theme.breakpoints.down("md")]: {

    marginTop: '-68px'
  }

}))

const Styledivide = styled("div")(({ theme }) => ({

  marginTop: '50px',


}))



const Contactus = () => {

  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [date, setdate] = useState('')
  const [Duration, setDuration] = useState('')

  const [Phoneno, setPhoneno] = useState('')

  const [Country, setCountry] = useState('')

  const [Enquires, setEnquires] = useState('')

  const Postdata = async (e) => {

    e.preventDefault()
    const { data } = await axios.post("http://localhost:4000/api/v1/Contacts", {
      Name, Email, date, Duration, Phoneno, Country, Enquires
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
  const [openone, setOpenone] = React.useState(false);
  const handleOpenone = () => setOpenone(true);
  const handleCloseone = () => setOpenone(false);
  const handleOpenones = () => setOpenone(false)


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
                  <Accordion sx={{ width: '600px', cursor: 'none' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>


                      <Typography style={{ color: 'black', fontWeight: 'bolder' }} id="modal-modal-title" variant="h6" component="h2">

                        <div>
                          <form onSubmit={Postdata}>
                            <Stylepop>
                              <Styleppt>


                                <Stylelll>
                                  <label>Name</label>
                                  <input required name="Name" onChange={(e) => setName(e.target.value)} type="text" />
                                </Stylelll>
                                <Stylello>
                                  <label>Email Adress</label>
                                  <input required name='Email' onChange={(e) => setEmail(e.target.value)} type="text" />
                                </Stylello>

                              </Styleppt>
                              <Stylefirts >


                                <Stylesec >
                                  <label>Date</label>
                                  <input required onChange={(e) => setdate(e.target.value)} type="date" />
                                </Stylesec>
                                <Stylethi >
                                  <label>Duration</label>
                                  <select required name="Duration" onChange={(e) => setDuration(e.target.value)} type="text" id="cars" >
                                    <option value="Less than a week">Less than a week</option>
                                    <option value="1-2 weeks">1-2 weeks</option>
                                    <option value="3-4 weeks">3-4 weeks</option>
                                    <option value="More than a month">More than a month</option>


                                  </select>
                                </Stylethi>
                              </Stylefirts>


                              <Stylepho >
                                <label>Phone Number</label>
                                <input required name="Phoneno" onChange={(e) => setPhoneno(e.target.value)} type="text" />
                              </Stylepho>
                              <div style={{ marginTop: '10px', display: 'flex', fontSize: '15px', alignItems: 'center', justifyContent: 'center' }}>

                              </div>
                              <Stylesel>
                                <Styleselt >
                                  <label>Country</label>
                                  <select required name="Country" onChange={(e) => setCountry(e.target.value)} id="cars" >
                                    <option value="INDONASIA">INDONASIA</option>
                                    <option value="JAPAN">JAPAN</option>
                                    <option value="VITENAM">VITENAM</option>
                                    <option value="MALAYSIA">MALAYSIA</option>
                                    <option value="COLAMBIA">COLAMBIA</option>
                                    <option value="SINGAPORE">SINGAPORE</option>

                                  </select>

                                </Styleselt>

                              </Stylesel>
                              <Styleenq>
                                <label>Tell Us About Your Enquiries</label>
                                <input required name="Enquiries" onChange={(e) => setEnquires(e.target.value)} type="text" />
                              </Styleenq>
                              <Stylebut >
                                <center> <Button type="submit" sx={{ boxShadow: 4 }} style={{ height: '45px', width: '20vw', borderRadius: '10px', backgroundColor: '#26a69a', color: 'white', fontWeight: 'bolder' }}>SUBMIT ME</Button></center>

                              </Stylebut>
                            </Stylepop>
                          </form>
                        </div>



                      </Typography>

                    </AccordionDetails>
                  </Accordion>



                </Typography>



              </Box>
            </Modal>

            <SearchIcon onClick={handleOpenone} className='search' />
            <Modal
              open={openone}
              onClose={handleCloseone}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleo}>
                <center><CancelOutlinedIcon onClick={handleOpenones} style={{ color: 'black', fontSize: '45px', cursor: 'pointer' }} /></center>

                <center>
                  <Styledivide>
                    <Paper
                      component="form"
                      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: '#8bc34a' }}
                    >
                      <IconButton sx={{ p: '10px' }} aria-label="menu">

                      </IconButton>
                      <InputBase
                        sx={{ ml: 1, flex: 1, color: 'white', fontSize: '20px', fontWeight: 'bolder' }}
                        placeholder="Search Destinations"
                        inputProps={{ 'aria-label': 'search google maps' }}
                      />
                      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                      </IconButton>

                      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">

                      </IconButton>
                    </Paper>
                  </Styledivide>
                </center>

                <center><button style={{ color: 'white', boxShadow: 4, marginTop: '40px', height: '35px', width: '140px', border: 'none', backgroundColor: '#55b493', fontWeight: 'normal', fontSize: '16px' }}>Search</button></center>

              </Box>
            </Modal>
            <button className="a" style={{ backgroundColor: 'transparent', border: 'none', backgroundColor: '', width: '120px' }}>AGENT HUB</button>
          </Stylepara>
          <SearchIcon />
        </StyleLink>

      </StyledAppbar>


    </>
  )
}

export default Contactus