import React from 'react'
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { AppBar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import './Ecomm.css'









const StyledAppbar = styled(AppBar)(({ theme }) => ({


  height: '22vh',
  backgroundColor: 'white',
  borderBottom:'1px solid white',
  borderTop:'3px solid red',
  color:'black',

 
  [theme.breakpoints.down("md")]:{
    margin:'0 auto',
    
    ' & AppBar':{
    
    }
  }


}));

const StyleLink = styled("div")(({ theme }) => ({
  display: 'flex',
  marginLeft: '30px',
  marginTop: '-25px',
  LetterSpacing:'1px',
   
  ' & h1': {
    color: 'black',
    fontSize: '25px',
    marginTop:'50px',
    fontFamily:'Roboto',
    fontWeight:'bolder'
    

  },

  

  

}));

const Stylepara = styled("div")(({ theme }) => ({
    marginTop: '50px',
    marginLeft: '140vh',
    display: 'flex',
    ' & button ': {
      color: 'white',
      marginLeft: '15px',
      height: '30px',
      cursor: 'pointer',
      fontWeight: 'bolder',
      fontSize:'20px',
      fontFamily:'Roboto',
    },
  
  
  
  
  }))

 
 

    const Styleimg = styled("div")(({ theme }) => ({

        ' & img':{
            minWidth:'100%',
            height:'750px',
            position:'relative',
            textAlign:'center',
            background:'cover',
          
        },
        [theme.breakpoints.down("md")]:{
          
          ' & img':{
          width:'100%',
          height:'400px',
          margin:' 0 auto'

        }
        }
    }))


    const Stylepers = styled("div")(({ theme }) => ({
          marginLeft:'10px',
          marginTop:'2px'
    }))

    const Stylebag = styled("div")(({ theme }) => ({
        marginLeft:'10px',
        marginTop:'2px'
    }))
  
  

  const Stylemenu = styled("div") (({ theme }) => ({
    color:'white' , marginTop:'20px',
    marginLeft:'30px',
    cursor:'pointer'
  }))

  const Stylecen = styled("div")(({ theme }) => ({
    position: 'absolute',
  top: '50%' ,
   left: '50%',
  transform: 'translate(-50%, -50%)',
  color:'white'
  }))

  const Stylenewd = styled("div")(({ theme }) => ({
       marginTop:'8px',
       display:'flex',
       fontFamily:'Roboto', marginLeft:'20px',
       display:'flex',


       ' & p':{
        display:'flex',
        marginLeft:'20px',
        fontSize:'16px',
        fontWeight:'bolder',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',

       }
  }))

  const Styleic = styled("div")(({ theme }) => ({
    marginTop:'14px',
    marginLeft:'10px'
  }))

  const Stylemenus = styled("div")(({ theme }) => ({
         display:'flex',
         width:'480px',
         height:'200px',
         borderRadius:'20px'
  }))

  const Stylemenus1 = styled("div")(({ theme }) => ({
    display:'flex',
    width:'480px',
    height:'200px',
    borderRadius:'20px'
}))

const Styledev = styled("div")(({ theme }) => ({
      marginTop:'40px',
    
      
      
      
}))


const Styledevs = styled("div")(({ theme }) => ({ 

   marginTop:'30px',
   display:'flex',
   alignItems: 'center',
   justifyContent: 'center',
   textAlign: 'center',
   color: 'white',
   
    

   ' & img':{
    height:'500px',
    width:'550px',
    borderRadius:'20px',
    marginLeft:'80px',
    marginRight:'80px'
    
   },

   ' & button':{
    position: 'absolute',
  top: '165%',
  left: '27%',
  right:'29%',
  transform: 'translate(-50%, -50%)',
  height:'40px',
  border:'1px solid black',
  width:'90px',
  fontFamily:'Roboto',
  color:'black',
  fontWeight:'bolder',

   },
    ' button:hover':{
      backgroundColor:'black',
      color:'white',
    },

     [theme.breakpoints.down("md")]:{
        display:'grid',
        width:'100%',
        ' & img':{
          height:'200px',
          width:'250px',
          padding:'20px'
        },
         ' & button':{
          display:'none'
         }
     }
}))

const Styledevb = styled("div")(({ theme }) => ({
      textAlign: 'center',
      color:'white',
      justifyContent: 'center',
   textAlign: 'center',

      ' & button':{
        position: 'absolute',
      top: '165%',
      left: '32%',
      transform: 'translate(-50%, -50%)',
      height:'40px',
      border:'1px solid black',
      backgroundColor:'white',
      width:'90px',
      marginLeft:'85vh'
      },
      ' & img':{
        height:'500px',
        width:'550px',
        borderRadius:'20px',
        marginLeft:'80px',
        marginRight:'80px'
       },

       [theme.breakpoints.down("md")]:{
        display:'grid',
        width:'100%',
        
        ' & img':{
          height:'200px',
          width:'250px',
          padding:'20px'
        }
     }
}))

const StylebigImage = styled("div")(({ theme }) => ({
    marginTop:'70px',
    textAlign: 'center',
    color:'white',
    ' & img':{
    width:'1000px',
    height:'650px'
    },

    ' & button':{
      position: 'absolute',
      top: '260%',
      left: '50%',
      right:'29%',
      transform: 'translate(-50%, -50%)',
      height:'40px',
      border:'1px solid black',
      width:'150px',
      fontFamily:'Roboto',
      color:'black',
      fontWeight:'bolder',
      fontSize:'17px',
      cursor:'pointer'
    },

    ' button:hover':{
      backgroundColor:'transparent',
      color:'white'
    },

    [theme.breakpoints.down("md")]:{
      ' & img':{
        height:'300px',
        width:'100%',
        margin:' 0 auto'

      },

      ' & button':{
        marginTop:'-330px'
      }
    }
}))

const StylebidImages = styled("div") (({ theme }) => ({
     marginTop:'60px',
      display:'flex',
      alignItems: 'center', justifyContent: 'center',
     ' & img':{
      height:'500px',
      width:'550px',
      borderRadius:'20px',
      marginLeft:'80px',
      marginRight:'80px'
     },

     ' & button':{
      position: 'absolute',
      top: '338%',
      left: '9%',
      transform: 'translate(-50%, -50%)',
      height:'40px',
      border:'1px solid black',
      backgroundColor:'white',
      width:'90px',
      marginLeft:'85vh'
     },
           
     [theme.breakpoints.down("md")]:{
      ' & button':{
           alignItems: 'center', justifyContent: 'center',
             marginLeft:'50px',
             display:'none'
      },
      ' & img':{
        width:'250%',
        height:'200px'
      }
     }
    
}))

const StyleImages1 = styled("div") (({ theme }) => ({
   ' & img':{
    height:'500px',
    width:'550px',
    borderRadius:'20px',
    marginLeft:'80px',
    marginRight:'80px'
   }
}))

const Ecom = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEls, setAnchorEls] = React.useState(null);
  const opens = Boolean(anchorEls);
  const handleClicks = (event) => {
    setAnchorEls(event.currentTarget);
  };
  const handleCloses = () => {
    setAnchorEls(null);
  };

  const [anchorEls1, setAnchorEls1] = React.useState(null);
  const opens1 = Boolean(anchorEls1);
  const handleClicks1 = (event) => {
    setAnchorEls1(event.currentTarget);
  };
  const handleCloses1 = () => {
    setAnchorEls1(null);
  };
  const [anchorEls2, setAnchorEls2] = React.useState(null);
  const opens2 = Boolean(anchorEls2);
  const handleClicks2 = (event) => {
    setAnchorEls2(event.currentTarget);
  };
  const handleCloses2 = () => {
    setAnchorEls2(null);
  };



  return (
    <>
    
    <Styleimg>
    
    <img src="https://wallpapercave.com/wp/wp2700496.jpg"/>
   
  

  
    </Styleimg>
    
    <div>
    
    </div>
    <StyledAppbar>
    <StyleLink>
      <h1>MASTER&DYNAMIC</h1>
      <Stylepara>
        <button onClick={handleClick}
        style={{ backgroundColor: 'transparent', border: 'none' }}>USA</button>
        <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem style={{color:'black' , fontWeight:'bolder'}} onClick={handleClose}>USA & CANEDA</MenuItem>
        <MenuItem style={{color:'black' , fontWeight:'bolder'}} onClick={handleClose}>EUROPE</MenuItem>
        <MenuItem style={{color:'black' , fontWeight:'bolder'}} onClick={handleClose}>UK</MenuItem>
        <MenuItem style={{color:'black' , fontWeight:'bolder'}} onClick={handleClose}>JAPAN</MenuItem>
      </Menu>
          
        <SearchIcon className='search' />
        <Stylepers>
        <PersonIcon/>
        </Stylepers>
        <Stylebag>
 <ShoppingBagIcon/>
        </Stylebag>
      </Stylepara>
      <SearchIcon />
    </StyleLink>
       <hr style={{color:'gray' , width:'100vw' , marginTop:'10px'}}></hr>
      <Stylenewd>
      <Styleic>
      <MenuIcon/>
      </Styleic>
      <p onClick={handleClicks} >EARPHONES</p>
      <Menu 
      id="fade-menu"
      MenuListProps={{
        'aria-labelledby': '',
        
      }}
      anchorEl={anchorEls}
      open={opens}
      onClose={handleCloses}
      
    >
      <Stylemenus>
      <MenuItem  style={{backgroundColor:'white'}} onClick={handleCloses}>
      <img style={{width:'200px' , height:'150px' , backgroundColor:'white' ,borderRadius:'10px' }} src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
      </MenuItem>
      <MenuItem style={{}} onClick={handleCloses}>
      <img style={{width:'200px' , height:'150px' , backgroundColor:'white' ,borderRadius:'10px' }} src="https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWFycGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      </MenuItem>
      <MenuItem style={{color:'black' , fontWeight:'bolder'}} onClick={handleCloses}></MenuItem>
      <MenuItem style={{color:'black' , fontWeight:'bolder'}} onClick={handleCloses}></MenuItem>
    </Stylemenus>
      </Menu>
      <p onClick={handleClicks1}>HEADPHONES</p>
      <Menu 
      id="fade-menu"
      MenuListProps={{
        'aria-labelledby': '',
        
      }}
      anchorEl={anchorEls1}
      open={opens1}
      onClose={handleCloses1}
      
    >
      <Stylemenus1>
      <MenuItem  style={{backgroundColor:'white'}} onClick={handleCloses1}>
      <img style={{width:'200px' , height:'150px' , backgroundColor:'white' ,borderRadius:'10px' }} src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGVhcnBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
      </MenuItem>
      <MenuItem style={{}} onClick={handleCloses1}>
      <img style={{width:'200px' , height:'150px' , backgroundColor:'white' ,borderRadius:'10px' }} src="https://images.unsplash.com/photo-1630080644615-0b157f1574ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGVhcnBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
      </MenuItem>
      <MenuItem style={{color:'black' , fontWeight:'bolder'}} onClick={handleCloses1}></MenuItem>
      <MenuItem style={{color:'black' , fontWeight:'bolder'}} onClick={handleCloses1}></MenuItem>
    </Stylemenus1>
      </Menu>
      <p onClick={handleClicks2}>ACCESSORIES</p>
      <Menu 
      id="fade-menu"
      MenuListProps={{
        'aria-labelledby': '',
        
      }}
      anchorEl={anchorEls2}
      open={opens2}
      onClose={handleCloses2}
      
    >
      <Stylemenus>
      <MenuItem  style={{backgroundColor:'white'}} onClick={handleCloses2}>
      <img style={{width:'200px' , height:'150px' , backgroundColor:'white' ,borderRadius:'10px' }} src="https://images.unsplash.com/photo-1566793474285-2decf0fc182a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
      </MenuItem>
      <MenuItem style={{}} onClick={handleCloses2}>
      <img style={{width:'200px' , height:'150px' , backgroundColor:'white' ,borderRadius:'10px' }} src="https://images.unsplash.com/photo-1618052442385-ecaa3ad0b1e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ4fHxjaGFyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
      </MenuItem>
      <MenuItem style={{color:'black' , fontWeight:'bolder'}} onClick={handleCloses2}></MenuItem>
      <MenuItem style={{color:'black' , fontWeight:'bolder'}} onClick={handleCloses2}></MenuItem>
    </Stylemenus>
      </Menu>
      <p>COLLABORATIONS</p>
      <p>GIFT CARDS </p>
      <p>BLOGS</p>
      </Stylenewd>
  </StyledAppbar>


    <Styledevs>


      <img src="https://cdn.shopify.com/s/files/1/0404/1101/files/MH40-W-Section_V2_800x600.progressive.jpg?v=1652290501);"/>
       <button>CHECKOUT</button>
       <Styledevb>
       <img src="https://cdn.shopify.com/s/files/1/0404/1101/files/MW50__Section_1800x2000.progressive.jpg?v=1652290518"/>
        <button>CHECKOUT</button>
        </Styledevb>
        </Styledevs>
           
        <StylebigImage>
<center><img src="https://cdn.shopify.com/s/files/1/0404/1101/files/MG20-Section_V3_1800x2000.progressive.jpg?v=1652290481"/></center>
<button >CLASSIC IMAGE</button>       
</StylebigImage>
          
<StylebidImages>
  <img src="https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?t=st=1658473833~exp=1658474433~hmac=fa1d5be20c1f9865f32178d7bc625156b7713102a4965abdb517bc2539184971&w=740"/>
<button>CHECKOUT</button>
<StyleImages1>
<img src="https://img.freepik.com/premium-photo/black-wireless-headphone-isolated-beautiful-pastel-color_47469-462.jpg?w=740"/>
</StyleImages1>
  </StylebidImages>
        
        
    </>
  )
}

export default Ecom