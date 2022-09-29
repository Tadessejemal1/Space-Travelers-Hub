import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const ProfileDisplay = () => {
  const [arrJoined, setArrJoined] = useState([]);
  const myMissions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    setArrJoined(myMissions.filter((mission) => mission.reserved));
  }, [myMissions]);
  const myRockets = useSelector((state) => state.Rockets);
  const [arrJoinedRockets, setArrJoinedRockets] = useState([]);
  useEffect(() => {
    setArrJoinedRockets(myRockets.filter((rocket) => rocket.reserved));
  }, [myRockets]);
  return (
    <div className="profile-container">
      <div className="profile-missions">
        <h2>My Missions</h2>
        <ul className="profile__list">
          {
          arrJoined.length > 0
            ? arrJoined.map((mission) => <li key={mission.id} className="profile__list-item">{mission.name}</li>)
            : <p>You haven&apos;t joined any mission yet.</p>
        }
        </ul>
      </div>
      <div className="profile-rockets">
        <h2>My Rockets</h2>
        <ul className="profile__lists">
          {
          arrJoinedRockets.length > 0
            ? arrJoinedRockets.map((rocket) => <li key={rocket.id} className="profile__list-item">{rocket.rocketName}</li>)
            : <p>You haven&apos;t choose any rocket yet.</p>
        }
        </ul>
      </div>
    </div>
  );
};
export default ProfileDisplay;
