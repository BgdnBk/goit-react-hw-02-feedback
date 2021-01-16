import React from 'react';
import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedBackOptions.module.css'

FeedBackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default function FeedBackOptions({options, onLeaveFeedback}) {
  const optionsMap = Object.keys(options);
  return (
    <div>
      {optionsMap.map((item, ind) => (
        <button
          key={Math.random(3)}
          name={item}
          type="button"
          onClick={onLeaveFeedback}
          className={s.button}
        >
          {["Хорошо", "Нейтрально", "Плохо"][ind]}
        </button>
      ))}
    </div>
  );
}

