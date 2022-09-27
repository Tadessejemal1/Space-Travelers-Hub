import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Missions from './components/Missions/missions';
import Rockets from './components/Rockets/rockets';
import Profile from './components/Profile/profile';
import NavBar from './components/NavBar';
import store from './redux/configureStore';
import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
