import React, { useContext } from "react";
import { UserContext } from "./User";

function Info() {
  const { users, age } = useContext(UserContext);
  console.log(users, age);
  return (
    <>
      <li className="item">Name: {users.name}</li>
      <li className="item">Age: {age}</li>
      <li className="item">Localion: {users.localion}</li>
      <li className="item">Street: {users.address.street}</li>
      <li className="item">House: {users.address.house.house1}</li>
      <li className="item">House: {users.address.house.house2}</li>
    </>
  );
}

export default Info;
