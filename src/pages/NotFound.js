import Navbar from '../components/NavBar';
import './Home.css';

function NotFound() {
  return (
    <div className='main-pages-container'>
      <Navbar title="Página não encontrada" />
      <section className="notification is-danger is-light">
        <h1 className="title">Not Found</h1>
      </section>
    </div>
  );
}

export default NotFound;
