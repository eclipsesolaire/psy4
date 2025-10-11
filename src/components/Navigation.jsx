import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
  <div className="absolute top-0 left-0 w-[100%] h-[50px] bg-white ">
    <h2></h2>
  </div>
  <nav>
      <h1>Psy</h1>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/a-propos">À propos</Link>
        <Link to="/contact">Contact</Link>
      </div>
  </nav>
  </>
);

export default Navigation; 