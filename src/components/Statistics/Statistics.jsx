import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={css.statisticsList}>
      <li>
        <p className={css.statistics}>
          Good: <span className={css.good}>{good}</span>
        </p>
      </li>
      <li>
        <p className={css.statistics}>
          Neutral: <span className={css.neutral}>{neutral}</span>
        </p>
      </li>
      <li>
        <p className={css.statistics}>
          Bad: <span className={css.bad}>{bad}</span>
        </p>
      </li>
      <li>
        <p className={css.statistics}>
          Total: <span className={css.total}>{total()}</span>
        </p>
      </li>
      <li>
        <p className={css.statistics}>
          Positive feedback:
          <span className={css.value}> {positivePercentage()} %</span>
        </p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};