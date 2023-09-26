import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = ({ item, index }) => {
  const navigate = useNavigate();

  // category: "belt";
  // details: "Leather, metal,Imported.";
  // gender: "female";
  // image: "https://images.urbndata.com/is/image/Anthropologie/81628950_031_b14?$a15-pdp-detail-shot$&fit=constrain&fmt=webp&qlt=80&wid=640";
  // name: "B-Low The Belt Milla Square Belt";
  // price: 140;
  // rating: 3;
  // _id: "65086bede75d9da69cc716d0";
  const handleAddToCard = () => {
    let CartItem = {
      name: item.name,
      category: item.category,
      details: item.details,
      gender: item.gender,
      image: item.image,
      price: item.price,
      rating: item.rating,
    };
   
  };
  return (
    <DIV key={index}>
      <div className="product-card">
        <div>
          <img
            onClick={() => {
              navigate(`/product/${item._id}`);
            }}
            src={item.image}
            alt={item.name}
          />
        </div>
        <div>
          <h1 style={{ color: "black" }}>{item.name}</h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ color: "#455A64", fontSize: "15px", fontWeight: "500" }}
            >
              Price :
            </p>
            <p>{`${item.price}.00 ₹`}</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{ color: "#455A64", fontSize: "15px", fontWeight: "500" }}
            >
              Rating :
            </p>
            <p>
              {item.rating == 5 ? "★★★★★" : item.rating == 4 ? "★★★★" : "★★★"}
            </p>
          </div>
          {/* <p>{item.details}</p> */}
          <div className="btn-box">
            <button
              onClick={() => {
                navigate("/Buypage");
              }}
              className="add-cart-btn"
            >
              Buy
            </button>
            <button onClick={handleAddToCard} className="add-cart-btn">
              CART
            </button>
          </div>
        </div>
      </div>
    </DIV>
  );
};
export default Card;

const DIV = styled.div`
  .product-card {
    border: 0px solid green;
    padding: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  
  }
  .product-card:hover {
    padding: 0rem;
    cursor: pointer;
  }
  .btn-box {
    border: 0px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.6rem;
  }
  .btn-box:hover {
    border: 0px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.6rem;
  }
  .add-cart-btn {
    border: 0px solid blue;
    font-size: 16px;
    font-weight: 500;
    /* width:6rem; */
    text-align: center;
    border-radius: 5px;
    padding: 0.4rem 1rem;
    background-color: #00000092;
    color: #fff;
    /* background-color: #007bff; */
  }
  .add-cart-btn:hover {
    background-color: #000000e4;
    color: #fff;
    /* background-color: #0056b3; */
  }
  /* .page-btn:nth-child(2){
    width:4rem;
    font-size: 20px;
    font-weight: 500;
    text-align: center;

  } */
`;
