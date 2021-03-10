import CommissionersList from './components/CommissionersList'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>NBA Commissioners</h1>
      <Router>
        <CommissionersList />
      </Router>
    </div>
  );
}

export default App;