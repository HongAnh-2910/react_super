import React from "react";
import useUser from "../customHooks/useUser";

export default function Navicat() {
  const { user } = useUser({});
  return (
    <div>
      Navicat:
      {user?.name}{" "}
    </div>
  );
}
