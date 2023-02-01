import React from "react";
import "./cart.scss";
import styled from "styled-components";

const Contianer = styled.div`
  width: 1500px;
  margin: 0px auto;
  color: ${(props) => (props.primay ? "black" : "red")};
`;

const ButtonSytle = styled(Button)`
  display: flex;
  justify-content: center;
  text-align: ${(props) => props.center};
`;
function Button({ className }) {
  console.log(className);
  return <button className={className + " buttons"}>Click rỏ hàng</button>;
}

function Cart() {
  return (
    <>
      <Contianer primay>Rỏ hàng</Contianer>
      <ButtonSytle center="center" />
    </>
  );
}

export default Cart;
