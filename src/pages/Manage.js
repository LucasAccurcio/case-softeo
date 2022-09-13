import Navbar from '../components/NavBar';
import ListOfServices from '../components/ListOfServices';
import './Home.css';

const Manage = () => {
  return (
    <div className='main-pages-container'>
      <Navbar title="Gerenciamento" />
      <ListOfServices />
    </div>
  );
}

export default Manage;