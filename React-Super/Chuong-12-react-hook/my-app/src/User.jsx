import React, { useEffect, useState } from "react";

const infoUser = () => {
  return {
    name: "Alax12",
    age: 10,
    localion: "Viet Nam",
    address: {
      city: "Da Nang",
      street: "100 Hoan Kiem",
      house: {
        house1: "Nha 1",
        house2: "Nha 3",
      },
    },
  };
};

const infoUserApi = () => {
  return {
    name: "Alax",
    age: 10,
    localion: "Viet Nam",
    address: {
      city: "Da Nang",
      street: "200 Hoan Kiem",
      house: {
        house1: "Nha 1",
        house2: "Nha 3",
      },
    },
  };
};

const fetApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(infoUserApi());
    }, 4000);
  });
};

export default function User() {
  const [age, setAge] = useState(20);
  const [user, setUser] = useState(infoUser);
  const handleChangeAge = () => {
    setAge(1);
  };

  const handleChangeStreet = () => {
    setUser((prev) => {
      const address = { ...prev.address, street: "200 Tran Nhan Tong" };
      return { ...prev, address };
    });
  };

  const handleChangeHouse = () => {
    setUser((prev) => {
      const address = {
        ...prev.address,
        house: { ...prev.address.house, house1: "Nha 2" },
      };
      return { ...prev, address };
    });
  };

  useEffect(() => {
    fetApi().then((res) => {
      setUser(res);
    });
    return () => {
      console.log("clear up");
    };
  }, []);
  console.log("render");
  return (
    <div>
      User Functional Components
      <ul>
        <li className="item">Name: {user.name}</li>
        <li className="item">Age: {age}</li>
        <li className="item">Localion: {user.localion}</li>
        <li className="item">Street: {user.address.street}</li>
        <li className="item">House: {user.address.house.house1}</li>
        <li className="item">House: {user.address.house.house2}</li>
      </ul>
      <button onClick={handleChangeAge}>change Age</button>
      <button onClick={handleChangeStreet}>change Street</button>
      <button onClick={handleChangeHouse}>change House</button>
    </div>
  );
}
