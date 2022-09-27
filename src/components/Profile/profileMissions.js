import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './profile.css';

const ProfileMission = () => {
  const [arrJoined, setArrJoined] = useState([]);
  const myMissions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    setArrJoined(myMissions.filter((mission) => mission.reserved));
  }, [myMissions]);

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
    </div>
  );
};

export default ProfileMission;
