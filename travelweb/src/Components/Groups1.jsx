import React from 'react'
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/system";
import './Footer.css'
import './Groups1.css'

const Styleimg = styled("div")(({ theme }) => ({
   ' & img':{
    height:'100px',
    width:'150px',
    marginTop:'20px'
   },

   [theme.breakpoints.down("md")]: {

    ' & img':{
        margin:'0 auto'
    }
 
     }


}))
const Stylepara = styled("div")(({ theme }) => ({
     '& h2':{
        marginTop:'20px',
        fontFamily:'Railway , sans-serif',
        color:'#444',
        letterSpacing:'1px'
     }
}))

const Stylebigp = styled("div")(({ theme }) => ({

    ' & p':{
        fontSize:'24px',
        marginTop:'30px',
        marginLeft:'120px',
        marginRight:'120px',
        display:'flex',
        fontFamily:'Railway , sans-serif',
        color:'#444',
        justifyContent:'center',
        alignItems:'center',
        fontWeight: 'bolder'
    },
    [theme.breakpoints.down("md")]:{
        ' & p':{
            margin:' 0 auto'
        }

    }

}))
const Stylebu =styled("div")(({ theme }) => ({

    display: 'flex', justifyContent: 'center', alignItems: 'center',
        
        
        marginTop:'40px',
         
       

        ' & button':{
            backgroundColor:'#ecd957',
            height:'40px',
            margin:'10px'
           
        },

        [theme.breakpoints.down("md")]: {

           display:'grid',
        ' & button':{
             
        }

    }
         
    
}))

const Styleim = styled("div")(({ theme }) => ({

    display: 'flex', justifyContent: 'center', alignItems: 'center',
    marginTop:'20px',
        
        ' & img':{
          width:'200vh',
          marginLeft:'30px'
        },

     
  [theme.breakpoints.down("md")]: {

   display:'grid',
   " & img":{
    height:'200px',
    width:'300px',
    margin:'0 auto'
   }

    }

  

}))

const Styleimh  = styled("div")(({ theme }) => ({
    marginTop:'40px',

    
    ' & h1':{
        marginLeft:'20px',
        fontSize:'50px',
        color:'black'
    },
    ' & p':{
        display:'grid',
        alignItems:'center', justifyContent: 'center',
        marginLeft:'100px',
        marginRight:'100px',
        fontSize:'20px'
    },

    [theme.breakpoints.down("md")]: {

        ' & h1':{
          fontSize:'20px'
        },
        ' & p':{
            margin:'0 auto',
            marginLeft:'50px',
            marginRight:'50px'
        }
     
         }
     
       

}))

const Stylebackg = styled("div")(({ theme }) => ({

    backgroundColor:'rgba(0,0,0,.7)',
    height:'90vh',

    marginTop:'40px',

    ' & h2':{
        padding:'10px',
        color:'white',
        fontFamily:'Railway , san-serif',
        letterSpacing:'1px'
    },
     ' & h4':{
        fontSize:'22px',
        marginLeft:'160px',
        marginRight:'160px',
        color:'white',
        fontFamily:'Railway , san-serif',
        letterSpacing:'1px',
        fontWeight:'normal'
     },

     [theme.breakpoints.down("md")]: {
          height:'750px',
        margin:'0 auto',

        ' & p':{
            margin:' 0 auto',
            alignItems: 'center'
        },
        ' & h2':{
            margin:'0 auto'
        },
        ' & h1':{
            fontSize:'20px',
            margin:'0 auto',
           
          },
          ' & h4':{
              margin:'0 auto',
              fontSize:'20px',
              marginTop:'1rem',
             marginLeft:'50px',
             marginRight:'50px'
          }

     }

}))


const Styleimgs = styled("div")(({ theme }) => ({

    ' & img':{
     marginTop:'40px',
     height:'80px',
     width:'80px'
    }
}))

const Styleimhone = styled("div")(({ theme }) => ({
         display:'flex',
        
     ' & p':{
        display:'grid'
     },
     ' & img':{

     }
        
    

}))

const Styleima = styled("div")(({ theme }) => ({

    display: 'flex', justifyContent: 'center', alignItems: 'center',
    marginTop:'20px',
        
        ' & img':{
          width:'200vh',
          marginLeft:'30px'
        },

     
  [theme.breakpoints.down("md")]: {

   display:'grid',
   " & img":{
    height:'200px',
    width:'300px',
    margin:'0 auto'
   }

    }

  

}))

const Styleimhs  = styled("div")(({ theme }) => ({
    marginTop:'40px',

    
    ' & h1':{
        marginLeft:'20px',
        fontSize:'50px',
        color:'white'
    },
    ' & h4':{
        display:'grid',
        alignItems:'center', justifyContent: 'center',
        marginLeft:'100px',
        marginRight:'100px',
        fontSize:'20px'
    },

    [theme.breakpoints.down("md")]: {

        ' & h1':{
          fontSize:'20px',
          margin:'0 auto'
        },
        ' & h4':{
            margin:'0 auto',
            fontSize:'20px'
        }
     
         }
     
       

}))


const Groups1 = () => {
  return (
    <>
<Styleimg>
<center><img src="https://rovecartsofficial.co/wp-content/uploads/2020/12/rove.png"/></center>
</Styleimg>
<Stylepara>
<center><h2>CUSTOM GROUPS</h2></center>
</Stylepara>
<Stylebigp>
<center><p>Whether you have a group of students on a budget doing a stopover in Singapore, a family reunion in Japan, a group of museum curators wanting special access to private collections in China or anything in between, </p></center>
</Stylebigp>
<Stylebu>
<center><button>TELL US ABOUT YOUR GROUP</button></center>
<center><button>TELL US ABOUT YOUR GROUP</button></center>
</Stylebu>
<Styleim>
<img src="https://images.unsplash.com/photo-1446844805183-9f5af45f89ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
<Styleimh>
<h1>EXPERIENCE</h1>

<p>With more than 25 years of experience operating group tours across Asia, there's no shortage of examples where we made dreams come true through incredible shared travel experiences.</p>
</Styleimh>
</Styleim>
<Styleimgs>
<center><img src="https://www.exotravel.com/assets/img/top-page/groups/icon-05.svg"/></center>
</Styleimgs>
<Stylebackg>
<center><h2>CASE STUDIOS</h2></center>

<center><h4>With more than 25 years of experience operating group tours across Asia, there's no shortage of examples where we made dreams come true through incredible shared travel experiences.</h4></center>
<Styleima>
<img src="https://images.unsplash.com/photo-1621311136618-65437b7ce7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
<Styleimhs>
<h1>EXPERIENCE</h1>

<h4>With more than 25 years of experience operating group tours across Asia, there's no shortage of examples where we made dreams come true through incredible shared travel experiences.</h4>
</Styleimhs>
</Styleima>
</Stylebackg>
<footer>
<div>
     <span class="logo">ROVE</span>
</div>

<div class="row">
     <div class="col-3">                
         <div class="link-cat" onclick="footerToggle(this)">
             <span class="footer-toggle"></span>
             <span class="footer-cat">Solution</span>
         </div>
         <ul class="footer-cat-links">
             <li><a href=""><span>The EXO Travel Story</span></a></li>
             <li><a href=""><span>EXO PEOPLE</span></a></li>
             <li><a href=""><span>EXO VALUES</span></a></li>
         </ul>
     </div>
     <div class="col-3">
         <div class="link-cat" onclick="footerToggle(this)">
             <span class="footer-toggle"></span>
             <span class="footer-cat">Careers</span>
         </div>
         <ul class="footer-cat-links">
             <li><a style={{}} href=""><span>Terms Of Use</span></a></li>
             <li><a href=""><span>Booking Conditions</span></a></li>
             <li><a href=""><span>ECommerce</span></a></li>
             <li><a href=""><span>Privacy Policy</span></a></li>
             <li><a href=""><span>Club</span></a></li>
         </ul>
     </div>
     <div class="col-3">
         <div class="link-cat" onclick="footerToggle(this)">
             <span class="footer-toggle"></span>
             <span class="footer-cat">Follow us</span>
         </div>
         <ul class="footer-cat-links">
             <li><a href=""><span>Facebook</span></a></li>
             <li><a href=""><span>Twitter</span></a></li>
             <li><a href=""><span>Linkdin</span></a></li>
             <li><a href=""><span>Instagram</span></a></li>
         </ul>
     </div>
     <div class="col-3" id="newsletter">
         <span>Stay Connected</span>
         <form id="subscribe">
             <input type="email" id="subscriber-email" placeholder="Enter Email Address"/>
             <input type="submit" value="Subscribe" id="btn-scribe"/>
         </form>
         
         <div class="social-links social-2">
          
         </div>

         <div id="address">
             
         </div>
         
     </div>
   
</div>
<div id="copyright">
    &copy; 2000-22 EXO TRAVEL ALL RIGHTS RESERVED
</div>
<div id="owner">
  
</div>
</footer>

    </>
  )
}

export default Groups1