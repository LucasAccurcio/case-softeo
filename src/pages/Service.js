import FormAddService from '../components/FormAddService';
import Navbar from '../components/NavBar';
import './Home.css';

const Service = () => {
  return (
    <div className='main-pages-container'>
      <Navbar title="Serviços" />
      <FormAddService />
    </div>
  );
}

export default Service;