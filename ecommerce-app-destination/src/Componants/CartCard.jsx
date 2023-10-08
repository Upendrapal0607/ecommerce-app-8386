import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
import { DeleteCartProduct, getAllCartProduct, updateCartItem } from "../Redux/CartProductReducer/Type";

const CartCard = ({ item, index }) => {
    console.log({item})
  const navigate = useNavigate();
 const dispatch=useDispatch()

  const handleAddToRemoveCard = () => {
      dispatch(DeleteCartProduct(item._id)).then(res=>{
        dispatch(getAllCartProduct())
        // console.log({deleteres:res});
      })
  };

  const handleChange=(e)=>{
console.log({value:e.target.value})
dispatch(updateCartItem(item._id,{productCount:+e.target.value})).then(res=>{
  console.log({res})
  dispatch(getAllCartProduct())
})

  }
  let amount= ((item.price*item.productCount)*80)/100
  return (
    <DIV key={index}>
      <div className="product-card">
        <div className="image-box">
          <img
            onClick={() => {
              navigate(`/product/${item._id}`);
            }}
            src={item.image}
            alt={item.name}
          />
        </div>
        <div className="product-details">
          <h1 style={{ color: "black" }}>{item.name}</h1>
          <select name="" placeholder={item.productCount}  onChange={handleChange} id="" style={{width:"50px",border:"1px solid ",alignSelf:"center",borderRadius:"4px"}}>
              {/* <option value={item.productCount}>{item.productCount}
              </option> */}
              <option value="1">1
              </option>
              <option value="2">2
              </option>
              <option value="3">3
              </option>
              <option value="4">4
              </option>
              <option value="5">5
              </option>
            </select>
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
                navigate(`/checkout/${amount}`);
              }}
              className="add-cart-btn"
            >
              Buy
            </button>
            <button onClick={handleAddToRemoveCard} className="add-cart-btn">
              REMOVE
            </button>
          </div>
        </div>
      </div>
    </DIV>
  );
};
export default CartCard;

const DIV = styled.div`
  .product-card {
    border-bottom:1px solid gray.100 ;
   /* border-top:1px solid gray.200 ; */

  display: flex;
    padding: .7rem;
    gap: 1rem;
    /* justify-content: space-between; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  
  }
  .image-box{
    width: 20%;
  }
  .product-details{
    border: 0px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 60%;
    
  }
  .image-box>img{
    width: 100%;
  }
  .product-card:hover {
    /* padding: 0rem; */
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

  @media only screen and (min-width: 280px) and (max-width:450px) {
    .product-card {
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
   .image-box{
    width: 80%;
  }
  .product-details{
    width:100%;
  }
  }

@media only screen and (min-width: 450px) and (max-width: 667px) {
   .product-card {
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
   .image-box{
    width: 60%;
  }
  .product-details{
    width:80%;
  }
   
}
/* @media only screen and (min-width: 667px) and (max-width: 920px) {
  width:100%;
  .every-card-box{
    grid-template-columns: repeat(3,1fr);
  }
} */
`;
