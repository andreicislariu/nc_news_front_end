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
        </span>
      </h1>
      <Link to="/" onClick={props.handleLogOut}>
        <button className="logout">Log Out</button>
      </Link>
    </main>
  );
};

export default Header;
