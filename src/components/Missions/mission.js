import { PropTypes } from 'prop-types';
import './mission.css';

const Mission = (props) => {
  const {
    id, name, description, reserved,
  } = props;
  return (
    <tr className="mission" id={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td className="member">{reserved ? 'Active Member' : 'NOT A MEMBER'}</td>
      <td>
        <button type="button" className="reserve-btn">
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Mission;
