import React, { Fragment } from "react";
import DefaultCard from "./default-card";
import EditCard from "./edit-card";

const Mode = {
  DEFAULT: `DEFAULT`,
  EDIT: `EDIT`
}

const Card = () => {
  const mode = Mode.EDIT;

  return (
    <Fragment>
      {mode === Mode.DEFAULT
        ?
      <DefaultCard />
        :
      <EditCard />}
    </Fragment>
  );
};

export default Card;