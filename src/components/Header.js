import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <div className="item">
          <Link to="/">
            All Streams
          </Link>
        </div>
        <div className='item'>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
