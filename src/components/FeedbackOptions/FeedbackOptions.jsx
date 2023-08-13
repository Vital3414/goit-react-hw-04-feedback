import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeeback }) {
  return (
    <ul className={css.options}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={css.button}
              type="button"
              onClick={() => onLeaveFeeback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeeback: PropTypes.func.isRequired,
};