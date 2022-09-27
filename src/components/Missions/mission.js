import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import './mission.css';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Mission = (props) => {
  const {
    id, name, description, reserved,
  } = props;
  const dispatch = useDispatch();

  return (
    <tr className="mission-row">
      <th className="mission-name">{name}</th>
      <th className="mission-description">{description}</th>
      <th className="mission-status">{reserved ? (<span className="active">Active Member</span>) : (<span className="noactive">NOT A MEMBER</span>)}</th>
      <th className="mission-button">
        <button
          type="button"
          className={reserved ? 'leave-button' : 'join-button'}
          onClick={() => {
            if (reserved) {
              dispatch(leaveMission(id));
            } else {
              dispatch(joinMission(id));
            }
          }}
        >
          {reserved ? (<span className="leave">Leave Mission</span>) : (<span className="join">Join Mission</span>)}
        </button>
      </th>
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
