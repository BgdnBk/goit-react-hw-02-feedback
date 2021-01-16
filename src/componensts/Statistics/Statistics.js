import React from 'react';
import Notification from '../Notification/Notification'
import s from "../Statistics/Statistics.module.css";
export default function Statistics({good, neutral, bad, total, positivePercentage,}) {
  return (
    <div>
      {good || neutral || bad !== 0 ? (
        <ul>
          <li>
            <span className={good}>Хорошо</span>: {good}
          </li>
          <li>
            <span className={neutral}>Нейтрально</span>: {neutral}
          </li>
          <li>
            <span className={bad}>Плохо</span>: {bad}
          </li>
          <li className={s.total}> Общее количество отзывов: {total} </li>
          <li className={s.positivePercentage}>
            Хороших Отзывов: {positivePercentage}%{" "}
          </li>
        </ul>
      ) : (
        <Notification message="Отзывы отсутствуют" />
      )}
    </div>
  );
}
