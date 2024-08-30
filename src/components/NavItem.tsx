import React from 'react';
import style from '../styles/Header.module.css';
import { ReactComponent as Close } from '../styles/images/close.svg';
import { ReactComponent as TS } from '../styles/images/typescript.svg';

interface NavItemProps {
  name: string;
  isActive: boolean;
  icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ name, isActive, icon }) => {
  return (
    <div className={`${isActive ? style.active_nav : style.inactive_nav}`}>
      <div className={style.icon}><TS /></div>
      <div>{name}</div>
      {isActive && <div className={style.icon}>&nbsp;&nbsp;<Close /></div>}
    </div>
  );
}

export default NavItem;