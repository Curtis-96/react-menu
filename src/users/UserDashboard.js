import React, { useState, useEffect } from 'react';
import { fetchUsers, search } from '../utils/data';
import robot from '../robot.svg';
import { Link } from 'react-router-dom';
import './UserDashboard.css';

const API_KEY = process.env.REACT_APP_API_KEY;

const UserDashboard = (props) => {
  const [userName, setUserName] = useState('');
  const [usersList, setUsersList] = useState([]);
  const [avatar, setAvatar] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const loadUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const users = await fetchUsers();
        if (mounted) setUsersList(users || []);
      } catch (err) {
        console.error('Failed to load users', err);
        if (mounted) setError('Failed to load users');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    loadUsers();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="users-page">
      <div className="users-header">
        <h1>Users</h1>
      </div>

      {robot && (
        <div className="robot-wrap">
          <img src={robot} alt="robot" className="robot-img" />
        </div>
      )}

      {loading && <div className="loading">Loading users…</div>}

      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search users by name"
            value={userName}
            onChange={(e) => {
              const term = e.target.value;
              setUserName(term);
              search(term, usersList).then((filtered) => {
                setUsersList(filtered);
              });
            }}
          />
        </div>
      )}

      {!loading && !error && (
        <div className="users-grid">
          {usersList.length === 0 && <div className="empty">No users found.</div>}
          {usersList.map((u, idx) => (
            <div className="user-card" key={u.login?.uuid || idx}>
              <img className="avatar" src={u.picture?.large || u.picture?.thumbnail} alt={`${u.name?.first} ${u.name?.last}`} />
              <div className="user-info">
                <div className="user-name">{u.name?.first} {u.name?.last}</div>
                <div className="user-email">{u.email}</div>
                <div className="user-location">{u.location?.city}, {u.location?.country}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
