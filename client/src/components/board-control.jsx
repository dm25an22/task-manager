import React from "react";
import Sort from "./sort";
import Board from "./board";
import LoadMore from "./load-more";

const BoardControl = () => {
  return (
    <section className="board container">
      <Sort />
      <Board />
      <LoadMore />
    </section>
  );
};

export default BoardControl;
