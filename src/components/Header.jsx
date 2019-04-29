import React from 'react';
import { Link } from '@reach/router';
import '../css/App.css';

const Header = props => {
  return (
    <main className="header">
      <h1>
        {/* <Link></Link> */}
        <span role="img" aria-label="Newspaper" aria-labelledby="newspaper">
          📰 NC News
          <Link to="/" onClick={props.handleLogOut}>
            <button className="loginLogout">Log Out</button>
          </Link>
        </span>
      </h1>
    </main>
  );
};

export default Header;
