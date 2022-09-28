import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';
import Profile from '../Profile/profile';

const MockMyProfileComponent = () => (
  <Provider store={store}>
    <Profile />
  </Provider>
);

describe('My profile component', () => {
  it('renders without crashing', () => {
    render(<MockMyProfileComponent />);
    const missionsHeaderText = screen.getByText(/My Missions/i);
    const rocketHeaderText = screen.getByText(/My Rockets/i);
    expect(missionsHeaderText).toBeInTheDocument();
    expect(rocketHeaderText).toBeInTheDocument();
  });
});
