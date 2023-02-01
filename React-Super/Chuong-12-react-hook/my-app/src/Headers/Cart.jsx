import React from "react";
import useUser from "../customHooks/useUser";

export default function Cart() {
  const { user } = useUser({});
  return (
    <div>
      Cart:
      {user?.name}{" "}
    </div>
  );
}
