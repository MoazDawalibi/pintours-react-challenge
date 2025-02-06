import React from 'react';
import Search from '../Search/Search';

const NavBar: React.FC = () => {

  return (
    <div className="NavBar">
      <img src="/App/logo.png" alt="" width={100} />
      <Search/>
    </div>
  );
};

export default NavBar;