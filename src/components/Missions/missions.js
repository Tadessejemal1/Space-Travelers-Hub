// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
// import { fetchMissions } from '../../redux/missions/missions';
import Mission from './mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  // const dispatch = useDispatch();

  /* useEffect(() => {
    if (missions.length === 0) dispatch(fetchMissions());
  }); */

  return (
    <section className="missions-container">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {
          missions.map((mission) => (
            <Mission
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
            />
          ))
        }
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
