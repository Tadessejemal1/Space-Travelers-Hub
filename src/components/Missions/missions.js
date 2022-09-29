import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from './mission';
import { fetchMissions } from '../../redux/missions/missions';
import './missions.css';

const Missions = () => {
  const missionList = useSelector((state) => state.missionsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (missionList.length === 0) dispatch(fetchMissions());
  });

  return (
    <section className="missions-container">
      <table className="table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody className="missions">
          {
            missionList.map((mission) => (
              <Mission
                key={mission.id}
                id={mission.id}
                name={mission.name}
                description={mission.description}
                reserved={mission.reserved}
              />
            ))
          }
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
