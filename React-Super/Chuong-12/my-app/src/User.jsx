import React, { useEffect, useState } from "react";
import UserInfo from "./UserInfo";

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
export const UserContext = React.createContext({
  users: infoUserApi(),
  age: infoUserApi().age,
});
export default function User() {
  const [age, setAge] = useState(20);
  const [user, setUser] = useState(infoUser);
  const handleChangeAge = () => {
    setAge((prev) => prev + 1);
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
      setUser((prev) => {
        return { ...prev, address: res.address };
      });
    });
    return () => {
      console.log("clear up");
    };
  }, []);
  return (
    <div>
      <h1>User Functional Components</h1>
      <UserContext.Provider value={{ users: user, age }}>
        <UserInfo />
      </UserContext.Provider>

      <button onClick={handleChangeAge}>change Age</button>
      <button onClick={handleChangeStreet}>change Street</button>
      <button onClick={handleChangeHouse}>change House</button>
    </div>
  );
}
