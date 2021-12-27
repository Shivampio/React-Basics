import React from "react";
import Persons from "./Persons";

function NameList() {
  const names = ["Shivam", "Satyam", "Manju"];

  const message = names.map((name) => <Persons person={name}/>);
  return <div>{message}</div>;
}

export default NameList;
