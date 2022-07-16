import React,{useState} from "react";
import { styled } from "@mui/system";
import axios from "axios";
import {Button} from "@mui/material"; 

const Stylelll = styled("div")(({ theme }) => ({
  marginTop: "20px",
  display: "grid",

  " & input": {
    width: "13vw",
    height: "32px",
  },

  [theme.breakpoints.down("md")]: {
    " & input": {
      width: "200px",
      margin: " 0 auto",
    },
  },
}));

const Stylello = styled("div")(({ theme }) => ({
  marginTop: "20px",
  display: "grid",
  marginLeft: "10px",

  " & input": {
    width: "13vw",
    height: "32px",
  },
  [theme.breakpoints.down("md")]: {
    " & input": {
      margin: "0 auto",
      width: "200px",
      marginLeft: "-8px",
    },
  },
}));

const Styleppt = styled("div")(({ theme }) => ({
  marginTop: "10px",
  display: "flex",
  fontSize: "15px",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    display: "grid",

    " & input": {
      width: "200px",
    },
  },
}));

const Stylefirts = styled("div")(({ theme }) => ({
  marginTop: "10px",
  display: "flex",
  fontSize: "15px",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    display: "grid",
  },
}));

const Stylesec = styled("div")(({ theme }) => ({
  marginTop: "20px",
  display: "grid",

  " & input": {
    width: "13vw",
    height: "32px",
  },

  [theme.breakpoints.down("md")]: {
    " & input": {
      width: "200px",
      margin: " 0 auto",
    },
  },
}));

const Stylethi = styled("div")(({ theme }) => ({
  marginTop: "20px",
  display: "grid",
  marginLeft: "10px",

  " & select": {
    width: "13vw",
    height: "39px",
  },
  [theme.breakpoints.down("md")]: {
    " & select": {
      margin: "0 auto",
      width: "200px",
      marginLeft: "-8px",
    },
  },
}));

const Stylepho = styled("div")(({ theme }) => ({
  marginTop: "22px",
  display: "grid",
  fontSize: "15px",
  alignItems: "center",
  justifyContent: "center",

  " & input": {
    width: "27vw",
    height: "32px",
  },

  [theme.breakpoints.down("md")]: {
    " & input": {
      width: "200px",
      margin: " 0 auto",
    },
  },
}));

const Stylesel = styled("div")(({ theme }) => ({
  marginTop: "5px",
  display: "flex",
  fontSize: "15px",
  alignItems: "center",
  justifyContent: "center",
}));

const Styleselt = styled("div")(({ theme }) => ({
  marginTop: "10px",
  display: "grid",

  " & select": {
    width: "27vw",
    height: "39px",
  },
  [theme.breakpoints.down("md")]: {
    " & select": {
      width: "200px",
      margin: " 0 auto",
    },
  },
}));

const Styleenq = styled("div")(({ theme }) => ({
  marginTop: "20px",
  display: "grid",
  fontSize: "15px",
  alignItems: "center",
  justifyContent: "center",

  " & input": {
    width: "20vw",
    height: "60px",
  },

  [theme.breakpoints.down("md")]: {
    " & input": {
      width: "200px",
      height: "30px;",
    },
  },
}));

const Stylebut = styled("div")(({ theme }) => ({
  marginTop: "40px",
}));

const Stylepop = styled("div")(({ theme }) => ({
  height: "700px",
  [theme.breakpoints.down("md")]: {
    marginTop: "-68px",
  },
}));

const Enquire2 = () => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [date, setdate] = useState("");
    const [Duration, setDuration] = useState("");
  
    const [Phoneno, setPhoneno] = useState("");
  
    const [Country, setCountry] = useState("");
  
    const [Enquires, setEnquires] = useState("");
  
    const Postdata = async (e) => {
      e.preventDefault();
      alert("Request Sent Successfullly");
    
    };

  return (
    <>
      <center>
        <form style={{
            marginTop:'20vh'
        }} onSubmit={Postdata}>
          <Stylepop>
            <Styleppt>
              <Stylelll>
                <label>Name</label>
                <input
                  required
                  name="Name"
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
              </Stylelll>
              <Stylello>
                <label>Email Adress</label>
                <input
                  required
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
              </Stylello>
            </Styleppt>
            <Stylefirts>
              <Stylesec>
                <label>Date</label>
                <input
                  required
                  onChange={(e) => setdate(e.target.value)}
                  type="date"
                />
              </Stylesec>
              <Stylethi>
                <label>Duration</label>
                <select
                  required
                  name="Duration"
                  onChange={(e) => setDuration(e.target.value)}
                  type="text"
                  id="cars"
                >
                  <option value="Less than a week">Less than a week</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="3-4 weeks">3-4 weeks</option>
                  <option value="More than a month">More than a month</option>
                </select>
              </Stylethi>
            </Stylefirts>

            <Stylepho>
              <label>Phone Number</label>
              <input
                required
                name="Phoneno"
                onChange={(e) => setPhoneno(e.target.value)}
                type="text"
              />
            </Stylepho>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                fontSize: "15px",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
            <Stylesel>
              <Styleselt>
                <label>Country</label>
                <select
                  required
                  name="Country"
                  onChange={(e) => setCountry(e.target.value)}
                  id="cars"
                >
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
              <input
                required
                name="Enquiries"
                onChange={(e) => setEnquires(e.target.value)}
                type="text"
              />
            </Styleenq>
            <Stylebut>
              <center>
                {" "}
                <Button
                  type="submit"
                  sx={{ boxShadow: 4 }}
                  style={{
                    height: "45px",
                    width: "20vw",
                    borderRadius: "10px",
                    backgroundColor: "#26a69a",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                >
                  SUBMIT ME
                </Button>
              </center>
            </Stylebut>
          </Stylepop>
        </form>
      </center>
    </>
  );
};

export default Enquire2;