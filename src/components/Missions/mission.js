import { PropTypes } from 'prop-types';

const Mission = (props) => {
  const {
    id, name, description, reserved,
  } = props;
  return (
    <div className="mission">
      <div className="mission-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <span> NOT A MEMBER</span>
      </div>
      <div className="mission-reserve">
        <button type="button" className="reserve-btn" data-id={id} data-name={name} data-description={description} data-reserved={reserved}>
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </div>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
