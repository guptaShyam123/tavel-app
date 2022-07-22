import React from 'react'
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";


const Styleim = styled("div")(({ theme }) => ({
     ' & img':{
        marginTop:'20px'
     }
}))
const Stylepa = styled("div")(({ theme }) => ({
' & p ':{
    alignItems:'center',
    justifyContent:'center',
    marginTop:'20px',
       fontSize:'25px',
       fontFamily:'Helvetica Neue'
}
}))

const Stylepara = styled("div")(({ theme }) => ({
 
    ' & p':{
        fontSize:'20px',
        marginLeft:'160px',
        marginRight:'160px'
    }
}))

const Adventures = () => {
  return (
<>
<Styleim>
<center><img src="https://www.exotravel.com/assets/img/top-page/icon-adventure-main1.png"/></center>
</Styleim>
<Stylepa>
<center><p>JOIN US FOR OUR GREATEST ADVENTURE YET</p></center>
<hr style={{width:"30vw"}}></hr>
</Stylepa>
<Stylepara>
<center><p>ROVE Adventures are all about journeying off the established trails, discovering new cultures and creating unforgettable memories through a combination of physical activity and breathtaking scenery. We've carefully crafted each of these tours to quench the thirsts of travellers looking for journeys that go far beyond ordinary and skirt the lines of their comfort zones. </p></center>
</Stylepara>
</>
  )
}

export default Adventures