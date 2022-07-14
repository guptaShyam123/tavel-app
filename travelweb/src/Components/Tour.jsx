import React, { useState } from 'react'

import './Tour.css'
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import { AppBar, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import ShareIcon from '@mui/icons-material/Share';
import { data } from './data'
import { dataone } from './data'
import { datasec } from './data'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';



console.log(data)

const StyledAppbar = styled(AppBar)(({ theme }) => ({

  height: '10vh',
  backgroundColor: '#00b2ca',


}));

const StyleLink = styled("div")(({ theme }) => ({
  display: 'flex',
  marginLeft: '30px',
  marginTop: '-25px',
  ' & h1': {
    color: 'black',
    fontSize: '50px',

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

const StyleParagra = styled("div")(({ theme }) => ({

  '& h2': {
    fontSize: '30px',
    fontWeight: 'normal',
    color: '#444',
    textAlign: 'center',
    fontFamily: 'Raleway , sans-serif',

    [theme.breakpoints.down("md")]: {

      fontSize: '17px'

    }




  }

}))

const StylePar = styled("div")(({ theme }) => ({


  display: 'flex', margin: '10px', marginLeft: '10vw', fontSize: '20px', marginTop: '20px',

  [theme.breakpoints.down("md")]: {
    margin: '0 auto',

    ' & p': {
      margin: '0 auto',
      fontSize: '19px'
    }

  }




}))

const StylIm = styled("div")(({ theme }) => ({

  ' & img': {
    height: '60px',
    width: '60px',
    marginTop: '-30px'

  }

}))

const StyleLis = styled("div")(({ theme }) => ({

  marginLeft: '20px', display: 'flex', backgroundColor: '#80b157', height: '35px', width: '180px', borderRadius: '2px 2px', border: '1px solid #80b157',

  ' & p': {
    marginLeft: '10px', marginTop: '9px', color: 'gray'
  },

  [theme.breakpoints.down("md")]: {

    display: 'grid',
    display: 'none',
    ' & div': {
      width: '200px'
    }

  }

}))

const Stylesec = styled("div")(({ theme }) => ({

  marginLeft: '20px', display: 'flex', backgroundColor: '#80b157', height: '35px', width: '180px', borderRadius: '2px 2px', border: '1px solid #80b157',

  ' & p': {
    marginLeft: '5px', marginTop: '9px', color: 'white'
  },

  [theme.breakpoints.down("md")]: {

    display: 'grid',
    display: 'none',
    ' & div': {
      width: '200px'
    }

  }

}))

const Styledesi = styled("div")(({ theme }) => ({

  ' & p': {
    marginTop: '10px'
  },

  [theme.breakpoints.down("md")]: {

    display: 'grid',
    display: 'none',
    ' & div': {
      width: '200px'
    }
  }
}))

const Stylede = styled("div")(({ theme }) => ({
  ' & p': {
    marginTop: '10px'
  }
}))

const Stylee = styled("div")(({ theme }) => ({
  ' & p': {
    marginTop: '10px',

  }
}))

const Styleview = styled("div")(({ theme }) => ({
  ' & p': {
    marginTop: '10px',


  }

}))

const SelectOption = styled("div")(({ theme }) => ({

  ' & select': {
    height: '30px',
    width: '45px',
    marginTop: '5px'
  }
}))

const Selectpage = styled("div")(({ theme }) => ({

  ' & p': {
    marginTop: '10px'
  }
}))

const Selectthi = styled("div")(({ theme }) => ({
  ' & select': {
    marginTop: '10px'
  }

}))

const SelectCard = styled("div")(({ theme }) => ({

  marginTop: '30px'

}))

const Stylediv = styled("div")(({ theme }) => ({
  width: '120px', backgroundColor: '#80b157', marginLeft: '20px', height: '37px', display: 'flex', borderRadius: '2px 2px',

  '  & p ': {
    color: 'black', marginLeft: '10px', marginTop: '10px'
  },

  [theme.breakpoints.down("md")]: {

    ' & div ': {
      height: '40px',
      width: '40px'
    }
  }
}))



const SelectCardsa = styled("div")(({ theme }) => ({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '50px',


  [theme.breakpoints.down("md")]: {
    marginRight: '60px',

    display: 'grid',
    ' & Card ': {
      height: '100px',
      width: '100px',
      padding: '10px',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '-60px'
    }
  }

}))

const StyleCardsec = styled("div")(({ theme }) => ({

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30px',


  [theme.breakpoints.down("md")]: {
    marginRight: '60px',

    display: 'grid',
    ' & Card ': {
      height: '100px',
      width: '100px',
      padding: '10px',

      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '-60px'
    }
  }

}))


const StyleTypography = styled("div")(({ theme }) => ({
  marginTop: '50px',
  height: '250px',
  ' & img': {
    height: '60px',
    width: '60px',
    marginTop: '-20px'
  },
  backgroundColor: '#dbdbdb',



  ' & h2': {
    fontFamily: 'Raleway , sans-serif',
    color: '#444',

  },

  [theme.breakpoints.down("md")]: {

    width: '100%',
    height: '350px',


    marginTop: '50px',

    ' & h2': {
      margin: '0 auto'
    }

  }


}))

const Stylepp = styled("div")(({ theme }) => ({

  display: 'flex', marginLeft: '15vw', fontSize: '22px', marginTop: '20px', color: 'black', fontFamily: 'Railway sans-serif',

  [theme.breakpoints.down("md")]: {


    marginTop: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '40px'
  }


}))

const Stylesss = styled("div")(({ theme }) => ({


  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30px',


  [theme.breakpoints.down("md")]: {
    marginRight: '60px',

    display: 'grid',
    ' & Card ': {
      height: '100px',
      width: '100px',
      padding: '10px'
    }
  }

}))

const Stylesearch = styled("div")(({ theme }) => ({

  ' & input': {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20vw',
    height: '40px',
    letterSpacing: '1px',

    fontWeight: 'normal',
    fontFamily: 'Railway sans-serif',
    fontSize: '20px',
    border: '0px',
    marginTop: '40px',
    backgroundColor: '',
    color: 'black',
    textAlign: 'center',


  }

}))

const Stylevv = styled("div")(({ theme }) => ({

  ' & video': {
    width: '100%'
  },

  [theme.breakpoints.down("md")]: {

    ' & video': {
      display: 'none'
    }
  }


}))

const Styledesign = styled("div")(({ theme }) => ({

  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',


}))



const Tour = () => {

  const [query, setQuery] = useState('')

  return (
    <>


      <StyledAppbar>

        <StyleLink>
          <h1>EXO</h1>
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


      <Stylevv>
        <center><video style={{


          width: '100%',
          height: '300px', marginTop: '100px'
        }} autoPlay loop muted>
          <source src="https://www.exotravel.com/assets/img/video/Website_Background_%283%29_%285%29.mp4" type="video/mp4" />

        </video></center>

      </Stylevv>

      <StylIm>
        <center><img src="https://www.exotravel.com/assets/img/top-page/icon-search-catalogue.png" /></center>
      </StylIm>
      <StyleParagra>

        <h2>ICONIC PLACES, HIDDEN SPACES</h2>

        <hr style={{
          color: '#5e6163',
          width: '25vw'
        }}></hr>


      </StyleParagra>


      <Stylesearch>
        <center><input onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search Your Destinations' /></center>
      </Stylesearch>




      <SelectCardsa>
        {data.filter(datas => datas.name.toLocaleLowerCase().includes(query)).map((datas) => (


          <>

            <Card sx={{ maxWidth: 345, boxShadow: 'none', marginLeft: '80px' }}>
              <CardMedia

                component="img"
                height="140"
                img src={datas.img}
                alt="green iguana"

              />
              <CardContent>
                <p gutterBottom variant="h5" component="div">
                  18 DAYS / 17 NIGHTS

                </p>
                <hr></hr>
                <p style={{ fontWeight: 'normal', fontSize: '20px' }}>{datas.name}</p>
              </CardContent>
              <CardActions>
                <Button style={{ backgroundColor: '#bdbfbf', color: 'white', width: '120px' }}>VIEW TOUR</Button>


                <Stylediv>
                  <ShareIcon style={{ fontSize: '25px', marginTop: '5px' }} />
                  <p  >
                    SHARE
                  </p>

                </Stylediv>

              </CardActions>
            </Card>

          </>

        ))}
      </SelectCardsa>








      <Stylesss>

        {dataone.filter(datas => datas.name.toLocaleLowerCase().includes(query)).map((datas) => (

          <>

            <Card sx={{ maxWidth: 345, boxShadow: 'none', marginLeft: '80px' }}>
              <CardMedia

                component="img"
                height="140"
                img src={datas.img}
                alt="green iguana" />
              <CardContent>
                <p gutterBottom variant="h5" component="div">
                  18 DAYS / 17 NIGHTS

                </p>
                <hr></hr>
                <p style={{ fontWeight: 'normal', fontSize: '20px' }}>{datas.name}</p>
              </CardContent>
              <CardActions>
                <Button style={{ backgroundColor: '#bdbfbf', color: 'white', width: '120px' }}>VIEW TOUR</Button>


                <Stylediv>
                  <ShareIcon style={{ fontSize: '25px', marginTop: '5px' }} />
                  <p  >
                    SHARE
                  </p>

                </Stylediv>

              </CardActions>
            </Card>
          </>
        ))}

      </Stylesss>

      <StyleCardsec>
        {datasec.filter(datas => datas.name.toLocaleLowerCase().includes(query)).map((datas) => (

          <>

            <Card sx={{ maxWidth: 345, boxShadow: 'none', marginLeft: '80px' }}>
              <CardMedia

                component="img"
                height="140"
                img src={datas.img}
                alt="green iguana" />
              <CardContent>
                <p gutterBottom variant="h5" component="div">
                  18 DAYS / 17 NIGHTS

                </p>
                <hr></hr>
                <p style={{ fontWeight: 'normal', fontSize: '20px' }}>{datas.name}</p>
              </CardContent>
              <CardActions>
                <Button style={{ backgroundColor: '#bdbfbf', color: 'white', width: '120px' }}>VIEW TOUR</Button>


                <Stylediv>
                  <ShareIcon style={{ fontSize: '25px', marginTop: '5px' }} />
                  <p  >
                    SHARE
                  </p>

                </Stylediv>

              </CardActions>
            </Card>
          </>
        ))}

      </StyleCardsec>


      <StyleTypography>

        <center><img src="https://www.exotravel.com/assets/img/top-page/icon-all-social.svg" /></center>

        <center><h2>LET'S GETS SOCIAL</h2></center>
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

export default Tour