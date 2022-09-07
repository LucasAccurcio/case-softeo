import Router from './router/Router';
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
