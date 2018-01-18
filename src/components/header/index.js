import React from 'react';
import Link from 'gatsby-link';

import './_header.scss';

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);
const Header = ({ children }) => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <h1>
              <span className="header-logo">Epad</span>
            </h1>
            <nav className="header-nav">
              <ul className="header-nav-list">
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/git/">Git</ListLink>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
