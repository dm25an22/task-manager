import React from "react";

const Control = () => {
  return (
    <section className="main__control control container">
      <h1 className="control__title">TASKMANAGER</h1>
      <section className="control__btn-wrap">
        <input
          type="radio"
          name="control"
          id="control__new-task"
          className="control__input visually-hidden"
        />
        <label
          htmlFor="control__new-task"
          className="control__label control__label--new-task"
        >
          + ADD NEW TASK
        </label>
        <input
          type="radio"
          name="control"
          id="control__task"
          className="control__input visually-hidden"
          defaultChecked
        />
        <label htmlFor="control__task" className="control__label">
          TASKS
        </label>
        <input
          type="radio"
          name="control"
          id="control__statistic"
          className="control__input visually-hidden"
        />
        <label htmlFor="control__statistic" className="control__label">
          STATISTICS
        </label>
      </section>
    </section>
  );
};

export default Control;
