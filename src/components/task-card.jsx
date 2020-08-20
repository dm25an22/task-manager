import React from "react";
import {getFormatDate, getFormatTime} from "../utils";

const TaskCard = ({task}) => { // props с task. Делаю деструктуризацию
  const {
    color, 
    description, 
    dueDate, 
    isArchive, 
    isFavourite, 
    repeatingDays
  } = task;

  return (
    <article className={`card card--${color}`}>
      <div className="card__form">
        <div className="card__inner">
          <div className="card__control">
            <button type="button" className="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" className="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              className="card__btn card__btn--favorites card__btn--disabled"
            >
              favorites
            </button>
          </div>
          <div className="card__color-bar">
            <svg className="card__color-bar-wave" width="100%" height={10}>
              <use xlinkHref="#wave" />
            </svg>
          </div>
          <div className="card__textarea-wrap">
            <p className="card__text">{description}</p>
          </div>
          <div className="card__settings">
            <div className="card__details">
              <div className="card__dates">
                <div className="card__date-deadline">
                  <p className="card__input-deadline-wrap">
                    <span className="card__date">{getFormatDate(dueDate)}</span>
                    <span className="card__time">{getFormatTime(dueDate)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
