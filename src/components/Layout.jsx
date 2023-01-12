import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectIsLogin } from 'redux/auth/authSelector';

function Layout() {
  const isLogin = useSelector(selectIsLogin);
  return (
    <>
      {isLogin && (
        <header>
          <nav
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
          </nav>
        </header>
      )}
      <Outlet />
    </>
  );
}

export default Layout;
