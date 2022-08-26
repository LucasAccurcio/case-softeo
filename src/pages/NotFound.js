import React from 'react';
import Navbar from '../components/NavBar';

function NotFound() {
  return (
    <>
      <Navbar title="Página não encontrada" />
      <section className="notification is-danger is-light">
        <h1 className="title">Not Found</h1>
      </section>
    </>
  );
}

export default NotFound;
