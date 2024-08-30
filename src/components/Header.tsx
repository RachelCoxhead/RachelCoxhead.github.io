import React from 'react';
import style from '../styles/Header.module.css';
import NavItem from './NavItem';

function Header() {
  return (
    <div className={style.header}>
      <NavItem name="about.ts" isActive={true} icon=""/>
      <NavItem name="projects.ts" isActive={false} icon="👨‍💻" />
      <NavItem name="games.ts" isActive={false} icon="👨‍💻" />
      <NavItem name="contact.ts" isActive={false} icon="👨‍💻" />
    </div>
  );
}

export default Header;
