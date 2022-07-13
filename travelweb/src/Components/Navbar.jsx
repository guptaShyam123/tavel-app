import React from 'react'

import './navbar.css'
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { AppBar, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"



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

const Navbar = () => {
  return (
    <>

      <StyledAppbar>
        <StyleLink>
          <h1>EXO</h1>
          <Stylepara>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>DESTINATIONS</button>
            <Link to="/tour">
              <button style={{ backgroundColor: 'transparent', border: 'none' }}>TOUR STYLES</button>
            </Link>
            <Link to="/about">
              <button style={{ backgroundColor: 'transparent', border: 'none' }}>ABOUT</button>
            </Link>
            <button to="/about" style={{ backgroundColor: 'transparent', border: 'none' }}>GROUPS</button>

            <button style={{ backgroundColor: 'transparent', border: 'none' }}>LUXE</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>ADVENTURE</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>EVENTS</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>RESPONSIBLE</button>
            <button style={{ backgroundColor: 'transparent', border: 'none' }}>BLOG</button>
            <button style={{ backgroundColor: 'transparent', border: 'none', backgroundColor: 'green' }}>ENQUIRE</button>
            <SearchIcon className='search' />
            <Link to="/agenthub">
              <button className="a" style={{ backgroundColor: 'transparent', border: 'none', backgroundColor: '', width: '120px' }}>AGENT HUB</button>
            </Link>
          </Stylepara>
          <SearchIcon />
        </StyleLink>

      </StyledAppbar>
      <div class="container">

        <img style={{ width: '100%', height: '80vh' }} src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" />
        <h1 className="centered">EXPERIENCE OUR ASIA</h1>
      </div>

    </>

  )
}

export default Navbar