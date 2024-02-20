import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  useEffect(() => {
    const pathname = window.location.pathname;
    const activeMatch = pathname.match(/feed|blog|profile|launchpad/);
    if (activeMatch) {
      setActiveLink(activeMatch[0]);
    }
  }, [window.location.pathname]);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark py-3">
        <div className="container">
          <Link to="/" className="navbar-brand logo">
            AlmaXperience
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleNavCollapse}
            aria-expanded={!isNavCollapsed ? true : false}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? '' : 'show'
            }`}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pt-3">
              <li className="nav-item">
                <Link
                  to="/feed"
                  className={`nav-link ${
                    activeLink === 'feed' ? 'active px-3 mx-4 nav-link text-center nav-link':'px-3 mx-4 nav-link text-center nav-link'
                  }`}
                >
                  FEED
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className={`nav-link ${
                    activeLink === 'blog' ? 'active px-3 mx-4 nav-link text-center nav-link':'px-3 mx-4 nav-link text-center nav-link'
                  }`}
                >
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/launchpad"
                  className={`nav-link ${
                    activeLink === 'launchpad' ? 'active px-3 mx-4 nav-link text-center nav-link':'px-3 mx-4 nav-link text-center nav-link'
                  }`}
                >
                  LAUNCHPAD
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className={`nav-link ${
                    activeLink === 'profile' ? 'active px-3 mx-4 nav-link text-center nav-link':'px-3 mx-4 nav-link text-center nav-link'
                  }`}
                >
                  PROFILE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
