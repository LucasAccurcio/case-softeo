import Router from './router/Router';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <div className='app-container'>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
