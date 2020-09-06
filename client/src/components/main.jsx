import React from "react";
import Control from "./control";
import Filter from "./filter";
import BoardControl from "./board-control";


const Main = () => {
  return (
    <main className="main">
      <Control />
      <Filter />
      <BoardControl />
    </main>
  );
};

export default Main;
