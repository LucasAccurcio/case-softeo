import Router from './router/Router';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
