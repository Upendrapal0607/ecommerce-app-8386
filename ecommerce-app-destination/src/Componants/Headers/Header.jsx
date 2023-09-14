import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Box, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

// import logo from "./../Images/DREAM-PARK.png"
import Mylogo from "../../Images/dream-park.png"

const Header = () => {
  const navigate = useNavigate();
  return (
    <DIV>
      <div className="nav-top-box">
        <div className="namage-1"></div>

        <div className="nav-top-box-1">
          <div className="Lunguage-Icon">
            <FontAwesomeIcon icon={faGlobe} />
            <select
              style={{
                padding: "2px",
                outline: "none",
                border: "1px solid gray",
              }}
            >
              <option>English($)</option>
              {/* <option>Hindi(H)</option> */}
              <option>French(F)</option>
              <option>Arabic(A)</option>
              <option>Russian(R)</option>
              <option>Spanish(S)</option>
            </select>
          </div>
          <div
            className="login-box"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ fontSize: "20px" }}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              {/* <div color="gray.500"> */}
                <p className="SignUp">New Register</p>
              {/* </div> */}
              <p color="gray.500" className="SignUp">
                Log In
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* first nav end */}

      {/* second nav start */}
      <div className="fixing-nav">

        <div className="second-nav-box position">

          <div className="second-nav-item search">
     <img src={Mylogo} alt="logo" />
     <p className="dream-park">DREAM PARK</p>
          </div>

          <div className="cart-symbole" style={{ display: "flex", gap: "12px",justifyContent:"center"}}>
            <InputGroup size="sm" alignItems="center">
              <Input className="search-input" placeholder="Search anthologie" pt={4} pb={4}/>
              <InputRightAddon
                padding={4}
                fontSize={20}
                cursor={"pointer"}
                children={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              />
            </InputGroup>
            <Box
              onClick={() => navigate("/")}
              className="cart-icon"
              p={6}
              fontSize={25}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </Box>
          </div>
        </div>

        {/* Second navbar End  */}

        {/* Thired nav bar start */}

        <div
          className="third-nav"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <Box className="third-nav-box" onClick={() => navigate("/")}>
            New!
          </Box>
          <Box className="third-nav-box" onClick={() => navigate("/")}>
            Top-Rared
          </Box>
          <Box className="third-nav-box" onClick={() => navigate("/")}>
            Dresses
          </Box>
          <Box className="third-nav-box" onClick={() => navigate("/")}>
            Clothing
          </Box>
          <Box className="third-nav-box" onClick={() => navigate("/")}>
            Wedding
          </Box>
          <Box className="third-nav-box">Home & Furniture</Box>
          <Box className="third-nav-box" onClick={() => navigate("/")}>
            Shoese
          </Box>
          <Box className="third-nav-box" onClick={() => navigate("/")}>
            Gift
          </Box>
          <Box className="third-nav-box" onClick={() => navigate("/")}>
            Sale
          </Box>
        </div>
      </div>
    </DIV>
  );
};

export default Header;

const DIV = styled.div`
  width: 100%;
  margin: auto;
  border: 0px solid red;
  display: flex;
  flex-direction:column;
  gap:.5rem;

  .SignUp:hover {
    cursor: pointer;
   /* background-color: #1ebd26;
   border: 2px solid #0edf29; */
  
    border: 1px solid #78909C;
    background-color: white;
    color: #78909C;
   box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

  }
  .nav-bar {
    width: 100%;
  }
  .nav-top-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5px 5px;
    background-color: #cfd8dc;
    margin: auto;
  }
  .namage-1{
    border: 0px solid red;
    
  }
  .dream-park{
    /* visibility: hidden; */
    font-size:18px;
    font-weight: 500;
/* border:2px solid green; */
padding:.5rem;
cursor: pointer;
border-radius: .8rem;
background-color: #000000a6;
color:#ffffffb5;
/* line-height: 2rem; */
letter-spacing: .5rem;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  }
  .nav-top-box-1 {
    /* width: 28%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border: 0px solid blue;
  }
  .SignUp {
    align-items: center;
    /* border: 1px solid gray; */
    padding:.3rem .6rem;
    border-radius: .6rem;
    font-weight: 500;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  }
  .Lunguage-Icon {
    /* margin-left: 200px; */
    font-size: 15px;
  }

  .fixing-nav{
    border:0px solid green;

  }
  .cart-symbole{
    border:0px solid blue;
    align-items: center;
  }
  .second-nav-box {
    width: 90%;
    margin: auto;
    display: flex;
    padding: 0px 7px;
    border: 0px solid red;
    justify-content: space-between;
  }
  .second-nav-item>img{
width: 14%;
  }

  /* .use-mobile {
    border: 1px solid #1565c0;
  } */
  /* .position{
    display: flex;
  } */

  .logo-name {
    border-top: 3px solid #4db6ac;
    border-bottom: 1px solid lightgray;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding: 10px;
    letter-spacing: 4px;
  }
  .logo-style{
    border-right: 1px solid lightgray;
    border-left: 1px solid lightgray;
    padding: 10px;
  }
  .cart-icon {
    cursor: pointer;
    padding: 0px;
  }
  .search {
    display: flex;
    align-items: center;
    padding: 0px 5px;
    gap: 10px;
    justify-content: space-between;
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
border:0px solid blue;
    width: 50%;
  }
  .search>img{
    cursor: pointer;
  }

  .third-nav {
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 100%;
    padding: 1%;
  }

  .third-nav-box {
    line-height: 100%;
    padding: 1%;
    align-items: center;
    margin: auto;
    cursor: pointer;
  }
  .size {
    /* height: 300px; */
  }
  .fixing-nav {
    position: sticky;
  }

  .Modalbox1 {
    height: 10px;
  }
 

  @media only screen and (min-width: 280px) and (max-width: 667px) {
    .nav-top-box-1 {
        width: 100%;
    }
    .namage-1{
    display: none;
  }
  .second-nav-box{
flex-direction: column;
gap: .5rem;
border-bottom: 1px solid gray;
/* text-align: center; */
  }
  
.second-nav-item>img{
width: 22%;
height:50px;
  }
  .dream-park{
    visibility: visible;
    font-size:18px;
    font-weight: 500;
/* border:2px solid green; */
padding:.5rem;
cursor: pointer;
border-radius: .8rem;
background-color: #000000a6;
letter-spacing: .3rem;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  .search{
    width: 100%;
   
  }
  .third-nav{
display:none;
border: 0px solid blue;
visibility: hidden;
height: 0px;

  }
  }

  @media only screen and (min-width: 668px) and (max-width: 920px) {
    .second-nav-item>img{
width: 20%;

  }
  }
`;
