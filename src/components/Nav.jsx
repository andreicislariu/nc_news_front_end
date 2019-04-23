import React from 'react';
import { Link } from '@reach/router';
import '../css/Nav.css';

const Nav = ({ topics }) => {
  return (
    <nav className="nav">
      <p>Sidebar</p>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="add-article">
        Add Article
      </Link>
      {topics.map(({ slug }) => (
        <Link className="link" to={`/topics/${slug}`}>
          {slug}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
