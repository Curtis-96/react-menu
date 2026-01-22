import { BrowserRouter as Router, Route, Routes, Link, useNavigate, withRouter, NavLink, Switch, Outlet } from 'react-router-dom';
import UserDashboard from './users/UserDashboard';
import Videos from './videos/Videos';
import AppHeader from './AppHeader';
import MapContainer from './map/MapContainer';
import './App.css';

const App = () => {

  const Home = () => {
    return(
      <div className='app-container'>
      </div>
    );
  };

  const Sidebar = () => {
    return (
      <div className="sidebar">
        <Link to='/map' className="sidebar-link">
          <p>Map</p>
        </Link>
        <Link to='/users' className="sidebar-link">
          <p>Users</p>
        </Link>
      </div>
    );
  };

  const AppContainer = () => {
    return (
      <div className="App">
        <AppHeader title="Restaurateur.io" />
        <main className="app-content">
          <Sidebar />
          <Outlet />
        </main>
      </div>
    );
  };

  return (
    
      <Routes>
        <Route element={<AppContainer />} >
          <Route path='/' element={<Home />} />
          <Route path='/map' element={<MapContainer />} />
          <Route path='/users' element={<UserDashboard />} />
          <Route path='/videos' element={<Videos />} />
        </Route>
      </Routes>
  );
};

export default App;
