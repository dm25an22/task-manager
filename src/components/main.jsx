import React from "react";
import TaskCard from "./task-card";

const Main = ({tasks}) => {
  return (
    <main className="main">
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
      <section className="main__filter filter container">
        <input
          type="radio"
          id="filter__all"
          className="filter__input visually-hidden"
          name="filter"
          defaultChecked
        />
        <label htmlFor="filter__all" className="filter__label">
          All <span className="filter__all-count">13</span>
        </label>
        <input
          type="radio"
          id="filter__overdue"
          className="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label htmlFor="filter__overdue" className="filter__label">
          Overdue <span className="filter__overdue-count">0</span>
        </label>
        <input
          type="radio"
          id="filter__today"
          className="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label htmlFor="filter__today" className="filter__label">
          Today <span className="filter__today-count">0</span>
        </label>
        <input
          type="radio"
          id="filter__favorites"
          className="filter__input visually-hidden"
          name="filter"
        />
        <label htmlFor="filter__favorites" className="filter__label">
          Favorites <span className="filter__favorites-count">1</span>
        </label>
        <input
          type="radio"
          id="filter__repeating"
          className="filter__input visually-hidden"
          name="filter"
        />
        <label htmlFor="filter__repeating" className="filter__label">
          Repeating <span className="filter__repeating-count">1</span>
        </label>
        <input
          type="radio"
          id="filter__archive"
          className="filter__input visually-hidden"
          name="filter"
        />
        <label htmlFor="filter__archive" className="filter__label">
          Archive <span className="filter__archive-count">115</span>
        </label>
      </section>
      <section className="board container">
        <div className="board__filter-list">
          <a href="#" className="board__filter" data-sort-type="default">
            SORT BY DEFAULT
          </a>
          <a href="#" className="board__filter" data-sort-type="date-up">
            SORT BY DATE up
          </a>
          <a href="#" className="board__filter" data-sort-type="date-down">
            SORT BY DATE down
          </a>
        </div>
        <div className="board__tasks">
          <TaskCard task={tasks[0]}/>
        </div>
        <button className="load-more" type="button">
          load more
        </button>
      </section>
    </main>
  );
};

export default Main;
