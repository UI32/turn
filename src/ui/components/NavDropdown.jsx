import React, { useState } from 'react';
import cx from 'classnames';

const NavDropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="nav-dropdown" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="nav-item">{title}</span>
      <div className={cx('nav-dropdown-area is-openNO', { 'is-open': isOpen })}>
        <div className='nav-dropdown-menu'>
          <div className='nav-dropdown-menu-inner'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
