import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('service') === null) {
      localStorage.setItem('service', JSON.stringify([]));
    }
    if (localStorage.getItem('simplifiedService') === null) {
      localStorage.setItem('simplifiedService', JSON.stringify([]));
    }
  },[])

  return (
    <div className='home-container'>
      <main>
        <h1 className='home-title'>Olá, Dra. Érica!</h1>
        <br />
        <br />
        <h3>O que gostaria de fazer?</h3>
      </main>
      <nav className='home-buttons-container'>
        <button onClick={ () => navigate('/service') }>Cadastrar serviço</button>
        <button onClick={ () => navigate('/manage') }>Gerenciar serviços</button>
        <button onClick={ () => navigate('/report') }>Gerar relatório</button>
      </nav>
    </div>
  );
}

export default Home;