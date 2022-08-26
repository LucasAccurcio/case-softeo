import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const Navbar = (props) => {
  
  const { title } = props;

  const navigate = useNavigate();

  const btnEmpty = (
    <button className='empty-button'> </button>
  );

  return (
    <nav className='navbar-container'>
      <button className='return-button' onClick={() => { navigate('/home') }}>{`<--`}</button>
      <h4>{ title }</h4>
      { title.includes('serviço') ? <button onClick={() => { navigate('/service') }}>Cadastrar serviço</button> : btnEmpty }
    </nav>
  )
}

export default Navbar;