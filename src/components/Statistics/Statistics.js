import React from 'react';
import propTypes from 'prop-types';
import s from './Statistic.module.css';

const Statistics = ({ good, neutral, bad, total, precentage }) => {
  return (
    <div>
      <p className={s.marks}>Good: {good}</p>
      <p className={s.marks}>Neutral: {neutral}</p>
      <p className={s.marks}>Bad: {bad}</p>
      <p className={s.marks}>Total: {total}</p>
      <p className={s.marks}>Positive feedback: {precentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  precentage: propTypes.number.isRequired,
};

export default Statistics;
